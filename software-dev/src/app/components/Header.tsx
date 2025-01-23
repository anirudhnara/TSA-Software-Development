'use client';

import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import Link from 'next/link';

const Header = () => {
  const { isAuthenticated, user, logout } = useAuth();

  return (
    <div className="bg-gradient-to-r from-green-600 to-green-400 p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-white font-bold text-3xl hover:text-green-100 transition-colors">
          🌱 CropSmart
        </Link>
        <div className="flex items-center space-x-4">
          {isAuthenticated ? (
            <>
              <span className="text-white">Welcome, {user}!</span>
              <button
                onClick={logout}
                className="bg-white text-green-600 px-4 py-2 rounded-lg hover:bg-green-100 transition-all"
              >
                Logout
              </button>
            </>
          ) : (
            <Link
              href="/login"
              className="bg-white text-green-600 px-4 py-2 rounded-lg hover:bg-green-100 transition-all"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;