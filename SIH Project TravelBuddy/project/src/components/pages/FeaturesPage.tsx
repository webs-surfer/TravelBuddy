import React, { useState } from 'react';
import { Building2, Utensils, Car, MapPin, Filter, Star, DollarSign, Clock, Navigation } from 'lucide-react';

const FeaturesPage: React.FC = () => {
  const [activeFeature, setActiveFeature] = useState('hotels');

  const features = [
    {
      id: 'hotels',
      name: 'Hotel Comparison',
      icon: Building2,
      color: 'from-purple-400 to-purple-500',
      description: 'Compare prices, ratings, and amenities across multiple booking platforms'
    },
    {
      id: 'restaurants',
      name: 'Restaurant Finder',
      icon: Utensils,
      color: 'from-orange-400 to-red-400',
      description: 'Discover local cuisine with filters for dietary preferences and ratings'
    },
    {
      id: 'transport',
      name: 'Cab Comparison',
      icon: Car,
      color: 'from-green-400 to-emerald-500',
      description: 'Real-time availability and fare estimates from Uber, Ola, and local services'
    },
    {
      id: 'attractions',
      name: 'Nearby Attractions',
      icon: MapPin,
      color: 'from-blue-400 to-blue-500',
      description: 'Explore events, landmarks, and hidden gems with personalized filters'
    }
  ];

  // Mock data for demonstrations
  const mockData = {
    hotels: [
      {
        name: 'Grand Plaza Hotel',
        rating: 4.5,
        price: 150,
        originalPrice: 180,
        platform: 'Booking.com',
        image: 'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=300',
        amenities: ['WiFi', 'Pool', 'Gym', 'Parking']
      },
      {
        name: 'City Center Inn',
        rating: 4.2,
        price: 125,
        originalPrice: 125,
        platform: 'Expedia',
        image: 'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=300',
        amenities: ['WiFi', 'Breakfast', 'AC']
      },
      {
        name: 'Luxury Suites',
        rating: 4.8,
        price: 220,
        originalPrice: 260,
        platform: 'Hotels.com',
        image: 'https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=300',
        amenities: ['WiFi', 'Spa', 'Room Service', 'Balcony']
      }
    ],
    restaurants: [
      {
        name: 'Spice Garden',
        rating: 4.6,
        cuisine: 'Indian',
        priceRange: '$$',
        distance: '0.3 miles',
        image: 'https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=300',
        dietary: ['Vegetarian', 'Vegan Options']
      },
      {
        name: 'Ocean Breeze Café',
        rating: 4.4,
        cuisine: 'Mediterranean',
        priceRange: '$$$',
        distance: '0.5 miles',
        image: 'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=300',
        dietary: ['Gluten-Free']
      },
      {
        name: 'Street Food Market',
        rating: 4.3,
        cuisine: 'Local',
        priceRange: '$',
        distance: '0.2 miles',
        image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=300',
        dietary: ['Various Options']
      }
    ],
    transport: [
      {
        service: 'Uber',
        type: 'UberX',
        price: 12,
        waitTime: '3 min',
        capacity: '4 passengers'
      },
      {
        service: 'Ola',
        type: 'Prime',
        price: 10,
        waitTime: '5 min',
        capacity: '4 passengers'
      },
      {
        service: 'Local Taxi',
        type: 'Standard',
        price: 15,
        waitTime: '8 min',
        capacity: '4 passengers'
      }
    ],
    attractions: [
      {
        name: 'Historic Art Museum',
        rating: 4.7,
        category: 'Museum',
        distance: '1.2 miles',
        price: 15,
        image: 'https://images.pexels.com/photos/1509534/pexels-photo-1509534.jpeg?auto=compress&cs=tinysrgb&w=300',
        hours: '9:00 AM - 6:00 PM'
      },
      {
        name: 'Central Park',
        rating: 4.5,
        category: 'Park',
        distance: '0.8 miles',
        price: 0,
        image: 'https://images.pexels.com/photos/40465/pexels-photo-40465.jpeg?auto=compress&cs=tinysrgb&w=300',
        hours: '24 hours'
      },
      {
        name: 'Live Music Festival',
        rating: 4.8,
        category: 'Event',
        distance: '2.1 miles',
        price: 45,
        image: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=300',
        hours: '7:00 PM - 11:00 PM'
      }
    ]
  };

  const renderContent = () => {
    switch (activeFeature) {
      case 'hotels':
        return (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-2xl font-bold text-gray-900">Hotel Comparison</h3>
              <div className="flex items-center space-x-4">
                <select className="px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent">
                  <option>Sort by Price</option>
                  <option>Sort by Rating</option>
                  <option>Sort by Distance</option>
                </select>
                <button className="flex items-center space-x-2 bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-xl transition-colors">
                  <Filter className="w-4 h-4" />
                  <span>Filters</span>
                </button>
              </div>
            </div>

            <div className="grid gap-6">
              {mockData.hotels.map((hotel, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6">
                  <div className="flex items-start space-x-4">
                    <img
                      src={hotel.image}
                      alt={hotel.name}
                      className="w-24 h-24 object-cover rounded-xl"
                    />
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h4 className="text-lg font-semibold text-gray-900">{hotel.name}</h4>
                          <div className="flex items-center space-x-2 mb-2">
                            <div className="flex items-center">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  className={`w-4 h-4 ${i < Math.floor(hotel.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                                />
                              ))}
                              <span className="ml-1 text-sm text-gray-600">{hotel.rating}</span>
                            </div>
                            <span className="text-sm text-purple-600 font-medium">{hotel.platform}</span>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="flex items-center space-x-2">
                            {hotel.originalPrice !== hotel.price && (
                              <span className="text-sm text-gray-500 line-through">${hotel.originalPrice}</span>
                            )}
                            <span className="text-2xl font-bold text-gray-900">${hotel.price}</span>
                          </div>
                          <p className="text-sm text-gray-600">per night</p>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {hotel.amenities.map((amenity, idx) => (
                          <span key={idx} className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-medium">
                            {amenity}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'restaurants':
        return (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-2xl font-bold text-gray-900">Restaurant Finder</h3>
              <div className="flex items-center space-x-4">
                <select className="px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent">
                  <option>All Cuisines</option>
                  <option>Indian</option>
                  <option>Mediterranean</option>
                  <option>Local</option>
                </select>
                <select className="px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent">
                  <option>All Prices</option>
                  <option>$ (Budget)</option>
                  <option>$$ (Moderate)</option>
                  <option>$$$ (Expensive)</option>
                </select>
              </div>
            </div>

            <div className="grid gap-6">
              {mockData.restaurants.map((restaurant, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6">
                  <div className="flex items-start space-x-4">
                    <img
                      src={restaurant.image}
                      alt={restaurant.name}
                      className="w-24 h-24 object-cover rounded-xl"
                    />
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h4 className="text-lg font-semibold text-gray-900">{restaurant.name}</h4>
                          <div className="flex items-center space-x-4 mb-2">
                            <div className="flex items-center">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  className={`w-4 h-4 ${i < Math.floor(restaurant.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                                />
                              ))}
                              <span className="ml-1 text-sm text-gray-600">{restaurant.rating}</span>
                            </div>
                            <span className="text-sm text-gray-600">{restaurant.cuisine}</span>
                            <span className="text-sm font-medium text-orange-600">{restaurant.priceRange}</span>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="flex items-center text-gray-600 mb-1">
                            <Navigation className="w-4 h-4 mr-1" />
                            <span className="text-sm">{restaurant.distance}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {restaurant.dietary.map((diet, idx) => (
                          <span key={idx} className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-xs font-medium">
                            {diet}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'transport':
        return (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-2xl font-bold text-gray-900">Ride Comparison</h3>
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <MapPin className="w-4 h-4" />
                  <span>From: Current Location</span>
                </div>
                <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-xl transition-colors">
                  Set Destination
                </button>
              </div>
            </div>

            <div className="grid gap-4">
              {mockData.transport.map((ride, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-emerald-500 rounded-xl flex items-center justify-center">
                        <Car className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900">{ride.service}</h4>
                        <p className="text-gray-600">{ride.type} • {ride.capacity}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-gray-900 mb-1">${ride.price}</div>
                      <div className="flex items-center text-sm text-gray-600">
                        <Clock className="w-4 h-4 mr-1" />
                        <span>{ride.waitTime}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'attractions':
        return (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-2xl font-bold text-gray-900">Nearby Attractions</h3>
              <div className="flex items-center space-x-4">
                <select className="px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                  <option>All Categories</option>
                  <option>Museums</option>
                  <option>Parks</option>
                  <option>Events</option>
                  <option>Restaurants</option>
                </select>
                <select className="px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                  <option>Within 5 miles</option>
                  <option>Within 1 mile</option>
                  <option>Within 10 miles</option>
                </select>
              </div>
            </div>

            <div className="grid gap-6">
              {mockData.attractions.map((attraction, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6">
                  <div className="flex items-start space-x-4">
                    <img
                      src={attraction.image}
                      alt={attraction.name}
                      className="w-24 h-24 object-cover rounded-xl"
                    />
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h4 className="text-lg font-semibold text-gray-900">{attraction.name}</h4>
                          <div className="flex items-center space-x-4 mb-2">
                            <div className="flex items-center">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  className={`w-4 h-4 ${i < Math.floor(attraction.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                                />
                              ))}
                              <span className="ml-1 text-sm text-gray-600">{attraction.rating}</span>
                            </div>
                            <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">
                              {attraction.category}
                            </span>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-lg font-bold text-gray-900 mb-1">
                            {attraction.price === 0 ? 'Free' : `$${attraction.price}`}
                          </div>
                          <div className="flex items-center text-sm text-gray-600 mb-1">
                            <Navigation className="w-4 h-4 mr-1" />
                            <span>{attraction.distance}</span>
                          </div>
                          <div className="flex items-center text-sm text-gray-600">
                            <Clock className="w-4 h-4 mr-1" />
                            <span>{attraction.hours}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-teal-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Powerful <span className="text-sky-600">Travel Features</span> 🚀
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to plan, book, and enjoy amazing trips - all in one intelligent platform
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Feature Navigation */}
          <div className="lg:w-1/4">
            <div className="bg-white rounded-3xl shadow-xl p-6 sticky top-8">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Features</h2>
              <nav className="space-y-2">
                {features.map((feature) => {
                  const Icon = feature.icon;
                  return (
                    <button
                      key={feature.id}
                      onClick={() => setActiveFeature(feature.id)}
                      className={`w-full flex items-center space-x-3 p-4 rounded-2xl transition-all duration-200 transform hover:scale-105 ${
                        activeFeature === feature.id
                          ? `bg-gradient-to-r ${feature.color} text-white shadow-lg`
                          : 'text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                      <div className="text-left flex-1">
                        <div className="font-medium">{feature.name}</div>
                        <div className={`text-sm ${activeFeature === feature.id ? 'text-white/80' : 'text-gray-500'}`}>
                          {feature.description}
                        </div>
                      </div>
                    </button>
                  );
                })}
              </nav>
            </div>
          </div>

          {/* Feature Content */}
          <div className="lg:w-3/4">
            <div className="bg-white rounded-3xl shadow-xl p-8">
              {renderContent()}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 bg-gradient-to-r from-sky-500 to-blue-600 rounded-3xl p-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Experience These Features? 🌟
          </h2>
          <p className="text-xl text-sky-100 mb-8 max-w-2xl mx-auto">
            Start using our AI-powered travel assistant and discover how easy trip planning can be.
          </p>
          <button className="bg-white text-sky-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 shadow-xl">
            Explore More Features
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeaturesPage;