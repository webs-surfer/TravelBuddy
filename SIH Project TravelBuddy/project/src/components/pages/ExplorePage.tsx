import React, { useState } from 'react';
import { MapPin, Star, Clock, Phone, Navigation, Filter, Camera, Utensils, Building2, Mountain, Coffee } from 'lucide-react';

const ExplorePage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedPlace, setSelectedPlace] = useState(null);

  const categories = [
    { id: 'all', name: 'All', icon: MapPin, color: 'from-blue-400 to-blue-500' },
    { id: 'hotels', name: 'Hotels', icon: Building2, color: 'from-purple-400 to-purple-500' },
    { id: 'restaurants', name: 'Restaurants', icon: Utensils, color: 'from-orange-400 to-red-400' },
    { id: 'attractions', name: 'Attractions', icon: Mountain, color: 'from-green-400 to-emerald-500' },
    { id: 'cafes', name: 'Cafes', icon: Coffee, color: 'from-yellow-400 to-orange-400' }
  ];

  // Mock data for Manali, Himachal Pradesh
  const places = [
    // Hotels
    {
      id: 1,
      name: 'The Himalayan',
      category: 'hotels',
      rating: 4.8,
      distance: '0.5 km',
      price: '₹8,500/night',
      image: 'https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Luxury resort with mountain views and spa facilities',
      phone: '+91 1902 252 222',
      address: 'Circuit House Road, Manali',
      amenities: ['Spa', 'Restaurant', 'WiFi', 'Parking', 'Room Service']
    },
    {
      id: 2,
      name: 'Snow Valley Resorts',
      category: 'hotels',
      rating: 4.5,
      distance: '1.2 km',
      price: '₹4,200/night',
      image: 'https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Cozy mountain resort perfect for families',
      phone: '+91 1902 253 333',
      address: 'Log Huts Area, Manali',
      amenities: ['Restaurant', 'WiFi', 'Parking', 'Garden']
    },
    {
      id: 3,
      name: 'Apple Country Resort',
      category: 'hotels',
      rating: 4.3,
      distance: '2.1 km',
      price: '₹3,800/night',
      image: 'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Traditional Himachali architecture with modern amenities',
      phone: '+91 1902 254 444',
      address: 'Prini Village, Manali',
      amenities: ['Restaurant', 'WiFi', 'Parking', 'Bonfire']
    },

    // Restaurants
    {
      id: 4,
      name: 'Johnson\'s Cafe',
      category: 'restaurants',
      rating: 4.6,
      distance: '0.3 km',
      price: '₹800 for two',
      image: 'https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Famous for trout fish and continental cuisine',
      phone: '+91 1902 252 555',
      address: 'Circuit House Road, Manali',
      cuisine: ['Continental', 'Indian', 'Chinese']
    },
    {
      id: 5,
      name: 'Cafe 1947',
      category: 'restaurants',
      rating: 4.4,
      distance: '0.8 km',
      price: '₹600 for two',
      image: 'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Riverside cafe with live music and great ambiance',
      phone: '+91 1902 253 666',
      address: 'Old Manali, Near Manu Temple',
      cuisine: ['Italian', 'Israeli', 'Indian']
    },
    {
      id: 6,
      name: 'The Lazy Dog Lounge',
      category: 'restaurants',
      rating: 4.5,
      distance: '1.0 km',
      price: '₹700 for two',
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Multi-cuisine restaurant with valley views',
      phone: '+91 1902 254 777',
      address: 'Old Manali Road',
      cuisine: ['Multi-cuisine', 'Bar', 'Live Music']
    },

    // Attractions
    {
      id: 7,
      name: 'Rohtang Pass',
      category: 'attractions',
      rating: 4.7,
      distance: '51 km',
      price: 'Free',
      image: 'https://images.pexels.com/photos/1271619/pexels-photo-1271619.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'High mountain pass with stunning snow-capped views',
      phone: 'N/A',
      address: 'Rohtang Pass, Manali-Leh Highway',
      activities: ['Photography', 'Snow Activities', 'Sightseeing']
    },
    {
      id: 8,
      name: 'Solang Valley',
      category: 'attractions',
      rating: 4.5,
      distance: '13 km',
      price: '₹500 entry',
      image: 'https://images.pexels.com/photos/1366919/pexels-photo-1366919.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Adventure sports hub with paragliding and skiing',
      phone: '+91 1902 255 888',
      address: 'Solang Valley, Manali',
      activities: ['Paragliding', 'Skiing', 'Zorbing', 'Cable Car']
    },
    {
      id: 9,
      name: 'Hadimba Temple',
      category: 'attractions',
      rating: 4.4,
      distance: '2.5 km',
      price: 'Free',
      image: 'https://images.pexels.com/photos/1509534/pexels-photo-1509534.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Ancient wooden temple dedicated to Hadimba Devi',
      phone: 'N/A',
      address: 'Dhungri Van Vihar, Manali',
      activities: ['Prayer', 'Photography', 'Nature Walk']
    },

    // Cafes
    {
      id: 10,
      name: 'Drifters\' Cafe',
      category: 'cafes',
      rating: 4.3,
      distance: '0.7 km',
      price: '₹400 for two',
      image: 'https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Cozy cafe with mountain views and great coffee',
      phone: '+91 1902 256 999',
      address: 'Mall Road, Manali',
      specialties: ['Coffee', 'Pancakes', 'Sandwiches']
    },
    {
      id: 11,
      name: 'Evergreen Cafe',
      category: 'cafes',
      rating: 4.2,
      distance: '1.1 km',
      price: '₹350 for two',
      image: 'https://images.pexels.com/photos/1833586/pexels-photo-1833586.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Garden cafe with organic food and peaceful ambiance',
      phone: '+91 1902 257 000',
      address: 'Old Manali, Manali',
      specialties: ['Organic Food', 'Fresh Juices', 'Herbal Tea']
    },
    {
      id: 12,
      name: 'Shiva Garden Cafe',
      category: 'cafes',
      rating: 4.4,
      distance: '0.9 km',
      price: '₹450 for two',
      image: 'https://images.pexels.com/photos/1833586/pexels-photo-1833586.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Popular hangout spot with live music and good vibes',
      phone: '+91 1902 258 111',
      address: 'Old Manali Road',
      specialties: ['Live Music', 'Israeli Food', 'Hookah']
    }
  ];

  const filteredPlaces = activeCategory === 'all' 
    ? places 
    : places.filter(place => place.category === activeCategory);

  const PlaceCard = ({ place }) => (
    <div 
      className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer overflow-hidden"
      onClick={() => setSelectedPlace(place)}
    >
      <div className="relative">
        <img
          src={place.image}
          alt={place.name}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-4 right-4 bg-white rounded-full px-3 py-1 flex items-center space-x-1">
          <Star className="w-4 h-4 text-yellow-400 fill-current" />
          <span className="text-sm font-medium">{place.rating}</span>
        </div>
        {place.category === 'attractions' && (
          <div className="absolute top-4 left-4 bg-green-500 text-white px-2 py-1 rounded-full text-xs font-medium">
            Attraction
          </div>
        )}
      </div>
      
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-1">{place.name}</h3>
            <p className="text-gray-600 text-sm">{place.description}</p>
          </div>
        </div>
        
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center text-gray-600 text-sm">
            <Navigation className="w-4 h-4 mr-1" />
            <span>{place.distance}</span>
          </div>
          <div className="text-lg font-bold text-gray-900">{place.price}</div>
        </div>
        
        <div className="flex flex-wrap gap-2">
          {place.amenities && place.amenities.slice(0, 3).map((amenity, idx) => (
            <span key={idx} className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">
              {amenity}
            </span>
          ))}
          {place.cuisine && place.cuisine.slice(0, 3).map((cuisine, idx) => (
            <span key={idx} className="px-2 py-1 bg-orange-100 text-orange-700 rounded-full text-xs font-medium">
              {cuisine}
            </span>
          ))}
          {place.activities && place.activities.slice(0, 3).map((activity, idx) => (
            <span key={idx} className="px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">
              {activity}
            </span>
          ))}
          {place.specialties && place.specialties.slice(0, 3).map((specialty, idx) => (
            <span key={idx} className="px-2 py-1 bg-yellow-100 text-yellow-700 rounded-full text-xs font-medium">
              {specialty}
            </span>
          ))}
        </div>
      </div>
    </div>
  );

  const PlaceModal = ({ place, onClose }) => (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm" onClick={onClose} />
      <div className="relative bg-white rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="relative">
          <img
            src={place.image}
            alt={place.name}
            className="w-full h-64 object-cover rounded-t-3xl"
          />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-shadow"
          >
            <span className="text-gray-600 text-xl">×</span>
          </button>
          <div className="absolute bottom-4 left-4 bg-white rounded-full px-4 py-2 flex items-center space-x-2">
            <Star className="w-5 h-5 text-yellow-400 fill-current" />
            <span className="font-semibold">{place.rating}</span>
          </div>
        </div>
        
        <div className="p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">{place.name}</h2>
          <p className="text-gray-600 mb-4">{place.description}</p>
          
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="flex items-center space-x-2">
              <Navigation className="w-5 h-5 text-gray-400" />
              <span className="text-gray-700">{place.distance} away</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-2xl font-bold text-gray-900">{place.price}</span>
            </div>
            {place.phone !== 'N/A' && (
              <div className="flex items-center space-x-2">
                <Phone className="w-5 h-5 text-gray-400" />
                <span className="text-gray-700">{place.phone}</span>
              </div>
            )}
            <div className="flex items-center space-x-2">
              <MapPin className="w-5 h-5 text-gray-400" />
              <span className="text-gray-700">{place.address}</span>
            </div>
          </div>
          
          {place.amenities && (
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Amenities</h3>
              <div className="flex flex-wrap gap-2">
                {place.amenities.map((amenity, idx) => (
                  <span key={idx} className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                    {amenity}
                  </span>
                ))}
              </div>
            </div>
          )}
          
          {place.cuisine && (
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Cuisine</h3>
              <div className="flex flex-wrap gap-2">
                {place.cuisine.map((cuisine, idx) => (
                  <span key={idx} className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm font-medium">
                    {cuisine}
                  </span>
                ))}
              </div>
            </div>
          )}
          
          {place.activities && (
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Activities</h3>
              <div className="flex flex-wrap gap-2">
                {place.activities.map((activity, idx) => (
                  <span key={idx} className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                    {activity}
                  </span>
                ))}
              </div>
            </div>
          )}
          
          {place.specialties && (
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Specialties</h3>
              <div className="flex flex-wrap gap-2">
                {place.specialties.map((specialty, idx) => (
                  <span key={idx} className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-sm font-medium">
                    {specialty}
                  </span>
                ))}
              </div>
            </div>
          )}
          
          <div className="flex space-x-4">
            <button className="flex-1 bg-gradient-to-r from-sky-400 to-blue-500 text-white py-3 px-6 rounded-xl font-semibold hover:from-sky-500 hover:to-blue-600 transition-all duration-200 transform hover:scale-105">
              Get Directions
            </button>
            {place.phone !== 'N/A' && (
              <button className="flex-1 bg-green-500 text-white py-3 px-6 rounded-xl font-semibold hover:bg-green-600 transition-all duration-200 transform hover:scale-105">
                Call Now
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-teal-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Explore <span className="text-sky-600">Manali</span> 🏔️
          </h1>
          <p className="text-gray-600 flex items-center justify-center space-x-2">
            <MapPin className="w-5 h-5 text-sky-600" />
            <span>Manali, Himachal Pradesh, India</span>
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-2xl font-medium transition-all duration-200 transform hover:scale-105 ${
                  activeCategory === category.id
                    ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                    : 'bg-white text-gray-700 hover:bg-gray-50 shadow-md'
                }`}
              >
                <Icon className="w-5 h-5" />
                <span>{category.name}</span>
              </button>
            );
          })}
        </div>

        {/* Results Count */}
        <div className="flex items-center justify-between mb-6">
          <p className="text-gray-600">
            Found <span className="font-semibold text-gray-900">{filteredPlaces.length}</span> places
            {activeCategory !== 'all' && (
              <span> in <span className="font-semibold text-sky-600 capitalize">{activeCategory}</span></span>
            )}
          </p>
          <button className="flex items-center space-x-2 bg-white hover:bg-gray-50 px-4 py-2 rounded-xl shadow-md transition-colors">
            <Filter className="w-4 h-4" />
            <span>More Filters</span>
          </button>
        </div>

        {/* Places Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPlaces.map((place, index) => (
            <div
              key={place.id}
              className="animate-in slide-in-from-bottom duration-500"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <PlaceCard place={place} />
            </div>
          ))}
        </div>

        {/* Place Detail Modal */}
        {selectedPlace && (
          <PlaceModal 
            place={selectedPlace} 
            onClose={() => setSelectedPlace(null)} 
          />
        )}

        {/* Location Info */}
        <div className="mt-16 bg-gradient-to-r from-sky-50 to-blue-50 rounded-3xl p-8 border border-sky-100">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">About Manali</h2>
            <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Manali is a high-altitude Himalayan resort town in India's northern Himachal Pradesh state. 
              It has a reputation as a backpacking center and honeymoon destination. Set on the Beas River, 
              it's a gateway for skiing in the Solang Valley and trekking in Parvati Valley. It's also a 
              jumping-off point for paragliding, rafting and mountaineering in the Pir Panjal mountains.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <div className="bg-white rounded-xl px-4 py-2 shadow-md">
                <span className="text-sm text-gray-600">Altitude:</span>
                <span className="ml-2 font-semibold text-gray-900">2,050m</span>
              </div>
              <div className="bg-white rounded-xl px-4 py-2 shadow-md">
                <span className="text-sm text-gray-600">Best Time:</span>
                <span className="ml-2 font-semibold text-gray-900">Mar-Jun, Oct-Feb</span>
              </div>
              <div className="bg-white rounded-xl px-4 py-2 shadow-md">
                <span className="text-sm text-gray-600">Temperature:</span>
                <span className="ml-2 font-semibold text-gray-900">15°C - 25°C</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExplorePage;