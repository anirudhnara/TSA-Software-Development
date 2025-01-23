import Link from 'next/link';
import Header from "./components/Header";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <Header />
      
      <main className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-800 mb-6">
            Sustainable Farming Made <span className="text-green-600">Smart</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Make data-driven decisions for your farm with real-time insights on crop health, market trends, and sustainability metrics.
          </p>
          <Link
            href="/login"
            className="bg-green-600 text-white px-8 py-3 rounded-lg text-lg hover:bg-green-700 transition-colors inline-block"
          >
            Get Started
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {[
            {
              title: 'Smart Crop Planning',
              description: 'Get personalized recommendations based on your location, climate, and market demand.',
              icon: '🌱'
            },
            {
              title: 'Real-time Monitoring',
              description: 'Track crop health, weather conditions, and sustainability metrics in real-time.',
              icon: '📊'
            },
            {
              title: 'Market Intelligence',
              description: 'Stay ahead with market trends and pricing insights for your crops.',
              icon: '📈'
            }
          ].map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Why Choose CropSmart?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { stat: '30%', label: 'Average Water Savings' },
              { stat: '25%', label: 'Increased Crop Yield' },
              { stat: '40%', label: 'Better Resource Usage' },
              { stat: '2000+', label: 'Active Farmers' }
            ].map((item, index) => (
              <div key={index} className="text-center p-4 border-r last:border-0">
                <div className="text-4xl font-bold text-green-600 mb-2">{item.stat}</div>
                <div className="text-gray-600">{item.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-green-600 text-white rounded-2xl p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Farm?</h2>
          <p className="text-xl mb-8">Join thousands of farmers already using CropSmart to improve their yields and sustainability.</p>
          <Link
            href="/login"
            className="bg-white text-green-600 px-8 py-3 rounded-lg text-lg hover:bg-green-50 transition-colors inline-block"
          >
            Start Now
          </Link>
        </div>
      </main>

      <footer className="bg-gray-50 py-12 mt-16">
        <div className="container mx-auto px-4 text-center text-gray-600">
          <p>© 2025 CropSmart. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}