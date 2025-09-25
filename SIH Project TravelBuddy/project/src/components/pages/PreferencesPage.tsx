import React, { useState } from 'react';
import { ChevronRight, DollarSign, Utensils, MapPin, Calendar } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';

const PreferencesPage: React.FC = () => {
  const { completeOnboarding } = useAuth();
  const [currentStep, setCurrentStep] = useState(0);
  const [preferences, setPreferences] = useState({
    budget: '',
    food: '',
    tripStyle: '',
    travelFrequency: ''
  });

  const questions = [
    {
      id: 'budget',
      title: 'What\'s your typical travel budget?',
      subtitle: 'This helps us recommend options within your price range',
      icon: DollarSign,
      options: [
        { value: 'low', label: 'Budget-Friendly', desc: 'Under $100/day', color: 'from-green-400 to-green-500' },
        { value: 'mid', label: 'Mid-Range', desc: '$100-300/day', color: 'from-yellow-400 to-orange-400' },
        { value: 'luxury', label: 'Luxury', desc: '$300+/day', color: 'from-purple-400 to-purple-500' }
      ]
    },
    {
      id: 'food',
      title: 'What are your food preferences?',
      subtitle: 'We\'ll recommend restaurants and local cuisines accordingly',
      icon: Utensils,
      options: [
        { value: 'veg', label: 'Vegetarian', desc: 'Plant-based meals only', color: 'from-green-400 to-green-500' },
        { value: 'non-veg', label: 'Non-Vegetarian', desc: 'All types of food', color: 'from-red-400 to-red-500' },
        { value: 'vegan', label: 'Vegan', desc: 'Strictly plant-based', color: 'from-emerald-400 to-emerald-500' }
      ]
    },
    {
      id: 'tripStyle',
      title: 'What\'s your preferred trip style?',
      subtitle: 'This helps us curate experiences that match your vibe',
      icon: MapPin,
      options: [
        { value: 'adventure', label: 'Adventure', desc: 'Thrilling activities & outdoor fun', color: 'from-orange-400 to-red-400' },
        { value: 'relaxing', label: 'Relaxing', desc: 'Peaceful & rejuvenating experiences', color: 'from-blue-400 to-blue-500' },
        { value: 'cultural', label: 'Cultural', desc: 'Museums, history & local traditions', color: 'from-purple-400 to-pink-400' },
        { value: 'family', label: 'Family-Friendly', desc: 'Activities suitable for all ages', color: 'from-yellow-400 to-orange-400' }
      ]
    },
    {
      id: 'travelFrequency',
      title: 'How often do you travel?',
      subtitle: 'This helps us understand your travel experience level',
      icon: Calendar,
      options: [
        { value: 'occasional', label: 'Occasional', desc: '1-2 trips per year', color: 'from-gray-400 to-gray-500' },
        { value: 'regular', label: 'Regular', desc: '3-6 trips per year', color: 'from-blue-400 to-blue-500' },
        { value: 'explorer', label: 'Explorer', desc: '7+ trips per year', color: 'from-green-400 to-emerald-500' }
      ]
    }
  ];

  const handleOptionSelect = (questionId: string, value: string) => {
    setPreferences(prev => ({
      ...prev,
      [questionId]: value
    }));
  };

  const handleNext = () => {
    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      completeOnboarding(preferences);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const currentQuestion = questions[currentStep];
  const Icon = currentQuestion.icon;
  const selectedValue = preferences[currentQuestion.id as keyof typeof preferences];
  const progress = ((currentStep + 1) / questions.length) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-blue-50 to-orange-50 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between text-sm text-gray-600 mb-2">
            <span>Step {currentStep + 1} of {questions.length}</span>
            <span>{Math.round(progress)}% Complete</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-gradient-to-r from-sky-400 to-blue-500 h-2 rounded-full transition-all duration-500 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Question Card */}
        <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-12 transform animate-in slide-in-from-right duration-500">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-r from-sky-400 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Icon className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              {currentQuestion.title}
            </h1>
            <p className="text-lg text-gray-600 max-w-xl mx-auto">
              {currentQuestion.subtitle}
            </p>
          </div>

          {/* Options */}
          <div className="space-y-4 mb-8">
            {currentQuestion.options.map((option, index) => (
              <button
                key={option.value}
                onClick={() => handleOptionSelect(currentQuestion.id, option.value)}
                className={`w-full p-6 rounded-2xl border-2 transition-all duration-300 transform hover:scale-105 hover:shadow-lg ${
                  selectedValue === option.value
                    ? 'border-sky-400 bg-sky-50 shadow-lg scale-105'
                    : 'border-gray-200 hover:border-gray-300 bg-white'
                }`}
                style={{
                  animationDelay: `${index * 100}ms`
                }}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className={`w-4 h-4 rounded-full border-2 ${
                      selectedValue === option.value
                        ? 'border-sky-400 bg-sky-400'
                        : 'border-gray-300'
                    }`} />
                    <div className="text-left">
                      <h3 className="text-lg font-semibold text-gray-900">
                        {option.label}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        {option.desc}
                      </p>
                    </div>
                  </div>
                  <div className={`w-8 h-8 bg-gradient-to-r ${option.color} rounded-lg opacity-${selectedValue === option.value ? '100' : '60'}`} />
                </div>
              </button>
            ))}
          </div>

          {/* Navigation */}
          <div className="flex justify-between">
            <button
              onClick={handlePrevious}
              disabled={currentStep === 0}
              className="px-6 py-3 text-gray-600 font-medium hover:text-gray-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Previous
            </button>
            
            <button
              onClick={handleNext}
              disabled={!selectedValue}
              className="bg-gradient-to-r from-sky-400 to-blue-500 text-white px-8 py-3 rounded-full font-semibold hover:from-sky-500 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center space-x-2"
            >
              <span>{currentStep === questions.length - 1 ? 'Complete Setup' : 'Next'}</span>
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Welcome Message */}
        <div className="text-center mt-8">
          <p className="text-gray-600">
            🌍 Welcome to TravelAI! Let's personalize your experience in just a few steps.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PreferencesPage;