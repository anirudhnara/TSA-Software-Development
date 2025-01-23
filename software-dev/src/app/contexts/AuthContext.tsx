import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface AuthContextType {
  isAuthenticated: boolean;
  user: string | null;
  login: (username: string, password: string) => Promise<void>;
  signup: (username: string, password: string, name: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<string | null>(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsAuthenticated(true);
      setUser(localStorage.getItem('username'));
    }
  }, []);

  const login = async (username: string, password: string) => {
    try {
      const response = await fetch('http://localhost:8080/sign_in', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password } ),
      });

      if (!response.ok) throw new Error('Login failed');

      const token = await response.text();
      localStorage.setItem('token', token);
      localStorage.setItem('username', username);
      setIsAuthenticated(true);
      setUser(username);
    } catch (error) {
      console.error('Login error:', error);
      throw error;
    }
  };

  const signup = async (username: string, password: string, name: string) => {
    try {
      const response = await fetch('http://localhost:8080/sign_up', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          credentials: { username, password },
          name,
        }),
      });

      if (!response.ok) throw new Error('Signup failed');

      const token = await response.text();
      localStorage.setItem('token', token);
      localStorage.setItem('username', username);
      setIsAuthenticated(true);
      setUser(username);
    } catch (error) {
      console.error('Signup error:', error);
      throw error;
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    setIsAuthenticated(false);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within an AuthProvider');
  return context;
}