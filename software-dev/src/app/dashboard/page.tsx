'use client';

import { useEffect, useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useRouter } from 'next/navigation';

// Mock data for demonstration
const mockCrops = [
  { id: 1, name: 'Corn', status: 'Growing', health: 85, waterNeed: 'Medium', planted: '2025-01-01', harvest: '2025-06-15' },
  { id: 2, name: 'Soybeans', status: 'Planted', health: 92, waterNeed: 'Low', planted: '2025-01-15', harvest: '2025-07-01' },
  { id: 3, name: 'Wheat', status: 'Ready for Harvest', health: 78, waterNeed: 'High', planted: '2024-12-01', harvest: '2025-05-15' },
];

const mockWeather = {
  temperature: '24°C',
  humidity: '65%',
  forecast: 'Sunny',
  nextRain: '3 days',
  wind: '12 km/h',
  soil: { moisture: '42%', ph: '6.8' }
};

const mockMarketPrices = [
  { crop: 'Corn', price: '$175.50/ton', trend: 'up', change: '+2.3%' },
  { crop: 'Wheat', price: '$210.75/ton', trend: 'down', change: '-1.1%' },
  { crop: 'Soybeans', price: '$452.25/ton', trend: 'up', change: '+3.7%' },
  { crop: 'Rice', price: '$389.00/ton', trend: 'stable', change: '+0.2%' }
];

const recommendedCrops = [
  { name: 'Tomatoes', confidence: 92, reason: 'Optimal soil conditions & high market demand' },
  { name: 'Sweet Corn', confidence: 88, reason: 'Perfect planting season & good price trends' },
  { name: 'Potatoes', confidence: 85, reason: 'Suitable climate & low competition in region' }
];

export default function Dashboard() {
  const { isAuthenticated } = useAuth();
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('overview');

  useEffect(() => {
    if (!isAuthenticated) {
      router.push('/login');
    }
  }, [isAuthenticated, router]);

  const renderOverview = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <div className="bg-white p-6 rounded-xl shadow-md">
        <h3 className="text-xl font-semibold mb-4">Weather Conditions</h3>
        <div className="space-y-2">
          <p>Temperature: {mockWeather.temperature}</p>
          <p>Humidity: {mockWeather.humidity}</p>
          <p>Forecast: {mockWeather.forecast}</p>
          <p>Next Rain: {mockWeather.nextRain}</p>
          <p>Wind Speed: {mockWeather.wind}</p>
          <div className="mt-4 pt-4 border-t">
            <p>Soil Moisture: {mockWeather.soil.moisture}</p>
            <p>Soil pH: {mockWeather.soil.ph}</p>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-md">
        <h3 className="text-xl font-semibold mb-4">Active Crops</h3>
        <div className="space-y-4">
          {mockCrops.map(crop => (
            <div key={crop.id} className="border-b pb-2">
              <div className="flex justify-between items-center">
                <span className="font-medium">{crop.name}</span>
                <span className={`px-2 py-1 rounded text-sm ${
                  crop.status === 'Growing' ? 'bg-green-100 text-green-800' :
                  crop.status === 'Planted' ? 'bg-blue-100 text-blue-800' :
                  'bg-yellow-100 text-yellow-800'
                }`}>{crop.status}</span>
              </div>
              <div className="text-sm text-gray-600 mt-1">Health: {crop.health}%</div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-md">
        <h3 className="text-xl font-semibold mb-4">Sustainability Score</h3>
        <div className="relative pt-1">
          <div className="flex mb-2 items-center justify-between">
            <div>
              <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-green-600 bg-green-200">
                Good
              </span>
            </div>
            <div className="text-right">
              <span className="text-xs font-semibold inline-block text-green-600">
                78%
              </span>
            </div>
          </div>
          <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-green-200">
            <div style={{ width: "78%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-500"></div>
          </div>
          <div className="space-y-2 mt-4">
            <p className="text-sm">Water Usage: 🌊 Efficient</p>
            <p className="text-sm">Soil Health: 🌱 Excellent</p>
            <p className="text-sm">Biodiversity: 🦋 Good</p>
            <p className="text-sm">Carbon Footprint: 🌿 Low Impact</p>
          </div>
        </div>
      </div>
    </div>
  );

  const renderCrops = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-xl shadow-md p-6">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-semibold">Crop Management</h3>
          <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors">
            Add New Crop
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead>
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Crop</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Health</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Water Need</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Planted</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Expected Harvest</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {mockCrops.map((crop) => (
                <tr key={crop.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">{crop.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 rounded text-sm ${
                      crop.status === 'Growing' ? 'bg-green-100 text-green-800' :
                      crop.status === 'Planted' ? 'bg-blue-100 text-blue-800' :
                      'bg-yellow-100 text-yellow-800'
                    }`}>{crop.status}</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">{crop.health}%</td>
                  <td className="px-6 py-4 whitespace-nowrap">{crop.waterNeed}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{crop.planted}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{crop.harvest}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  const renderAnalytics = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-md p-6">
          <h3 className="text-xl font-semibold mb-4">Resource Usage Trends</h3>
          <div className="space-y-4">
            <div className="relative pt-1">
              <div className="flex mb-2 items-center justify-between">
                <span className="text-sm font-semibold">Water Consumption</span>
                <span className="text-sm font-semibold text-green-600">-12% vs Last Month</span>
              </div>
              <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-blue-200">
                <div style={{ width: "65%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"></div>
              </div>
            </div>
            <div className="relative pt-1">
              <div className="flex mb-2 items-center justify-between">
                <span className="text-sm font-semibold">Energy Usage</span>
                <span className="text-sm font-semibold text-green-600">-8% vs Last Month</span>
              </div>
              <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-yellow-200">
                <div style={{ width: "45%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-yellow-500"></div>
              </div>
            </div>
            <div className="relative pt-1">
              <div className="flex mb-2 items-center justify-between">
                <span className="text-sm font-semibold">Fertilizer Usage</span>
                <span className="text-sm font-semibold text-green-600">-15% vs Last Month</span>
              </div>
              <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-green-200">
                <div style={{ width: "55%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-500"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6">
          <h3 className="text-xl font-semibold mb-4">Yield Predictions</h3>
          <div className="space-y-4">
            {mockCrops.map(crop => (
              <div key={crop.id} className="border-b pb-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium">{crop.name}</span>
                  <span className="text-green-600 font-medium">+{Math.floor(Math.random() * 20 + 10)}% Expected</span>
                </div>
                <div className="text-sm text-gray-600">Expected harvest: {crop.harvest}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const renderMarket = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-xl shadow-md p-6">
        <h3 className="text-xl font-semibold mb-6">Market Prices</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {mockMarketPrices.map((item, index) => (
            <div key={index} className="border rounded-lg p-4">
              <div className="text-lg font-semibold mb-2">{item.crop}</div>
              <div className="text-2xl font-bold mb-2">{item.price}</div>
              <div className={`text-sm ${
                item.trend === 'up' ? 'text-green-600' :
                item.trend === 'down' ? 'text-red-600' :
                'text-gray-600'
              }`}>
                {item.change} {item.trend === 'up' ? '↑' : item.trend === 'down' ? '↓' : '→'}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-md p-6">
        <h3 className="text-xl font-semibold mb-6">Recommended Crops</h3>
        <div className="space-y-4">
          {recommendedCrops.map((crop, index) => (
            <div key={index} className="border-b pb-4">
              <div className="flex justify-between items-center mb-2">
                <span className="font-medium text-lg">{crop.name}</span>
                <span className="text-green-600 font-medium">
                  {crop.confidence}% Match
                </span>
              </div>
              <p className="text-gray-600">{crop.reason}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-800">Farm Dashboard</h1>
          <p className="text-gray-600 mt-2">Monitor your farm's performance and sustainability</p>
        </div>

        <div className="mb-6">
          <nav className="flex space-x-4">
            {['overview', 'crops', 'analytics', 'market'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-lg ${
                  activeTab === tab
                    ? 'bg-green-600 text-white'
                    : 'text-gray-600 hover:bg-green-100'
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </nav>
        </div>

        {activeTab === 'overview' && renderOverview()}
        {activeTab === 'crops' && renderCrops()}
        {activeTab === 'analytics' && renderAnalytics()}
        {activeTab === 'market' && renderMarket()}
      </div>
    </div>
  );
}