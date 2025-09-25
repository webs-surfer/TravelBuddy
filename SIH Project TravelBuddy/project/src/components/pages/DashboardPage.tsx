import React from 'react';
import { TrendingUp, DollarSign, MapPin, Calendar, Download, PieChart, BarChart3 } from 'lucide-react';

const DashboardPage: React.FC = () => {
  // Mock data - in a real app, this would come from your backend
  const trips = [
    {
      id: 1,
      destination: 'Tokyo, Japan',
      dates: 'Mar 15-22, 2024',
      totalCost: 2850,
      categories: {
        flights: 1200,
        hotels: 800,
        food: 450,
        activities: 300,
        transport: 100
      },
      image: 'https://images.pexels.com/photos/161251/senso-ji-temple-asakusa-tokyo-japan-161251.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    {
      id: 2,
      destination: 'Barcelona, Spain',
      dates: 'Jan 8-15, 2024',
      totalCost: 1950,
      categories: {
        flights: 650,
        hotels: 560,
        food: 380,
        activities: 250,
        transport: 110
      },
      image: 'https://images.pexels.com/photos/1388030/pexels-photo-1388030.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    {
      id: 3,
      destination: 'Bali, Indonesia',
      dates: 'Nov 12-20, 2023',
      totalCost: 1750,
      categories: {
        flights: 800,
        hotels: 400,
        food: 200,
        activities: 280,
        transport: 70
      },
      image: 'https://images.pexels.com/photos/2166553/pexels-photo-2166553.jpeg?auto=compress&cs=tinysrgb&w=300'
    }
  ];

  const totalSpent = trips.reduce((sum, trip) => sum + trip.totalCost, 0);
  const averageTripCost = totalSpent / trips.length;

  const categoryTotals = trips.reduce((acc, trip) => {
    Object.entries(trip.categories).forEach(([category, amount]) => {
      acc[category] = (acc[category] || 0) + amount;
    });
    return acc;
  }, {} as Record<string, number>);

  const categoryColors = {
    flights: 'bg-sky-500',
    hotels: 'bg-purple-500',
    food: 'bg-orange-500',
    activities: 'bg-green-500',
    transport: 'bg-yellow-500'
  };

  const exportData = () => {
    // In a real app, this would generate and download a CSV/PDF
    alert('Trip data would be exported here! 📊');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-teal-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Your Travel <span className="text-sky-600">Dashboard</span> 📊
          </h1>
          <p className="text-gray-600">
            Track your adventures and spending patterns to plan better trips
          </p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-sky-400 to-blue-500 rounded-xl flex items-center justify-center">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <TrendingUp className="w-5 h-5 text-green-500" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-1">{trips.length}</h3>
            <p className="text-gray-600">Total Trips</p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-emerald-500 rounded-xl flex items-center justify-center">
                <DollarSign className="w-6 h-6 text-white" />
              </div>
              <TrendingUp className="w-5 h-5 text-green-500" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-1">${totalSpent.toLocaleString()}</h3>
            <p className="text-gray-600">Total Spent</p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-orange-400 to-red-400 rounded-xl flex items-center justify-center">
                <BarChart3 className="w-6 h-6 text-white" />
              </div>
              <Calendar className="w-5 h-5 text-gray-400" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-1">${Math.round(averageTripCost).toLocaleString()}</h3>
            <p className="text-gray-600">Avg per Trip</p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-400 rounded-xl flex items-center justify-center">
                <PieChart className="w-6 h-6 text-white" />
              </div>
              <button
                onClick={exportData}
                className="p-1 hover:bg-gray-100 rounded-lg transition-colors"
                title="Export Data"
              >
                <Download className="w-5 h-5 text-gray-400" />
              </button>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-1">Analytics</h3>
            <p className="text-gray-600">Export Ready</p>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Trip History */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-3xl shadow-xl p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Recent Trips</h2>
                <button
                  onClick={exportData}
                  className="flex items-center space-x-2 bg-gradient-to-r from-sky-400 to-blue-500 text-white px-4 py-2 rounded-xl hover:from-sky-500 hover:to-blue-600 transition-all duration-200 transform hover:scale-105"
                >
                  <Download className="w-4 h-4" />
                  <span>Export</span>
                </button>
              </div>

              <div className="space-y-6">
                {trips.map((trip, index) => (
                  <div
                    key={trip.id}
                    className="border border-gray-100 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="flex items-start space-x-4">
                      <img
                        src={trip.image}
                        alt={trip.destination}
                        className="w-16 h-16 object-cover rounded-xl"
                      />
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <h3 className="text-lg font-semibold text-gray-900">{trip.destination}</h3>
                            <p className="text-gray-600">{trip.dates}</p>
                          </div>
                          <div className="text-right">
                            <p className="text-2xl font-bold text-gray-900">${trip.totalCost.toLocaleString()}</p>
                            <p className="text-sm text-gray-600">Total Cost</p>
                          </div>
                        </div>

                        {/* Cost Breakdown */}
                        <div className="space-y-2">
                          {Object.entries(trip.categories).map(([category, amount]) => (
                            <div key={category} className="flex items-center justify-between text-sm">
                              <div className="flex items-center space-x-2">
                                <div className={`w-3 h-3 rounded-full ${categoryColors[category as keyof typeof categoryColors]}`} />
                                <span className="text-gray-700 capitalize">{category}</span>
                              </div>
                              <span className="font-medium text-gray-900">${amount}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Spending Analysis */}
          <div className="space-y-6">
            {/* Category Breakdown */}
            <div className="bg-white rounded-3xl shadow-xl p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Spending by Category</h2>
              
              <div className="space-y-4">
                {Object.entries(categoryTotals)
                  .sort(([,a], [,b]) => b - a)
                  .map(([category, amount]) => {
                    const percentage = (amount / totalSpent) * 100;
                    return (
                      <div key={category}>
                        <div className="flex justify-between text-sm mb-2">
                          <span className="text-gray-700 capitalize">{category}</span>
                          <span className="font-semibold text-gray-900">${amount}</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-3">
                          <div 
                            className={`h-3 rounded-full ${categoryColors[category as keyof typeof categoryColors]} transition-all duration-1000 ease-out`}
                            style={{ width: `${percentage}%` }}
                          />
                        </div>
                        <div className="text-xs text-gray-500 mt-1">{percentage.toFixed(1)}% of total</div>
                      </div>
                    );
                  })}
              </div>
            </div>

            {/* Travel Insights */}
            <div className="bg-gradient-to-br from-sky-50 to-blue-50 rounded-3xl p-6 border border-sky-100">
              <h2 className="text-xl font-bold text-gray-900 mb-4">💡 Travel Insights</h2>
              
              <div className="space-y-3">
                <div className="bg-white rounded-xl p-4">
                  <p className="text-sm text-gray-700">
                    <span className="font-semibold text-sky-600">Top Expense:</span> Flights make up {((categoryTotals.flights / totalSpent) * 100).toFixed(0)}% of your travel budget
                  </p>
                </div>
                
                <div className="bg-white rounded-xl p-4">
                  <p className="text-sm text-gray-700">
                    <span className="font-semibold text-orange-600">Savings Tip:</span> You spend ${Math.round(categoryTotals.food / trips.length)} on food per trip on average
                  </p>
                </div>
                
                <div className="bg-white rounded-xl p-4">
                  <p className="text-sm text-gray-700">
                    <span className="font-semibold text-green-600">Budget Goal:</span> Aim for ${Math.round(averageTripCost * 0.9)} per trip to save 10%
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;