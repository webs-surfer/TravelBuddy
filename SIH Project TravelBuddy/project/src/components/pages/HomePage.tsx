import React from 'react';
import { MapPin, Compass, Shield, DollarSign, ArrowRight } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';

const HomePage: React.FC = () => {
  const { openAuthModal, guestLogin } = useAuth();

  const features = [
    {
      icon: Compass,
      title: 'Personalized Itineraries',
      description: 'AI-crafted travel plans tailored to your preferences and budget'
    },
    {
      icon: MapPin,
      title: 'Real-time Suggestions',
      description: 'Weather and location-based recommendations as you travel'
    },
    {
      icon: Shield,
      title: 'Safety-First SOS',
      description: 'Emergency assistance and safety alerts wherever you go'
    },
    {
      icon: DollarSign,
      title: 'Budget Tracking',
      description: 'Smart expense monitoring to keep your travels on budget'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-sky-100 via-blue-50 to-orange-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Your AI Travel Buddy
                  <span className="block text-sky-600">Plan Smarter,</span>
                  <span className="block text-orange-500">Travel Better</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
                  Personalized itineraries, real-time weather/location-based suggestions, 
                  safety-first SOS, and budget tracking - all powered by AI.
                </p>
              </div>
              
              <button
                onClick={openAuthModal}
                className="group bg-gradient-to-r from-orange-400 to-orange-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-orange-500 hover:to-orange-600 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl flex items-center space-x-2"
              >
                <span>Get Started</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button
                onClick={guestLogin}
                className="bg-white text-orange-500 border-2 border-orange-400 px-8 py-4 rounded-full text-lg font-semibold hover:bg-orange-50 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Guest Login (Judges)
              </button>
            </div>

            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-sky-200 via-blue-200 to-orange-200 rounded-3xl shadow-2xl flex items-center justify-center overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/1371360/pexels-photo-1371360.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Travel destination"
                  className="w-full h-full object-cover rounded-3xl"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-orange-400 rounded-full opacity-70"></div>
              <div className="absolute -top-6 -right-6 w-16 h-16 bg-sky-400 rounded-full opacity-70"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold text-gray-900">Why Choose TravelAI?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the future of travel planning with our AI-powered features designed to make every journey memorable.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="group bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-sky-400 to-blue-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-200">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-sky-500 to-blue-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Travel Experience?
          </h2>
          <p className="text-xl text-sky-100 mb-8 max-w-2xl mx-auto">
            Join thousands of travelers who've discovered the power of AI-assisted travel planning.
          </p>
          <button
            onClick={openAuthModal}
            className="bg-white text-sky-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 shadow-xl"
          >
            Start Your Journey Today
          </button>
        </div>
      </section>
    </div>
  );
};

export default HomePage;