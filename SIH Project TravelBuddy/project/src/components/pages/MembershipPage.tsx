import React from 'react';
import { Check, Star, Zap, Crown } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';

const MembershipPage: React.FC = () => {
  const { openAuthModal } = useAuth();

  const plans = [
    {
      name: 'Free Explorer',
      price: '$0',
      period: 'forever',
      icon: Star,
      color: 'from-gray-400 to-gray-500',
      features: [
        'Basic AI chat assistance',
        'Simple itinerary suggestions',
        '5 searches per day',
        'Basic weather information',
        'Community support'
      ],
      limitations: [
        'Limited to 5 daily searches',
        'No offline access',
        'Basic customer support'
      ]
    },
    {
      name: 'Premium Traveler',
      price: '$19.99',
      period: 'per month',
      icon: Zap,
      color: 'from-sky-400 to-blue-500',
      features: [
        'Unlimited AI conversations',
        'Personalized itineraries',
        'Real-time travel alerts',
        'Advanced weather forecasts',
        'Hotel & restaurant recommendations',
        'Budget tracking & analytics',
        'Offline access',
        'Priority customer support',
        'Trip expense export',
        'SOS emergency assistance'
      ],
      popular: true
    },
    {
      name: 'Luxury Explorer',
      price: '$49.99',
      period: 'per month',
      icon: Crown,
      color: 'from-orange-400 to-orange-500',
      features: [
        'Everything in Premium',
        'Concierge-level AI assistance',
        'VIP travel recommendations',
        'Exclusive luxury partnerships',
        'Personal travel consultant',
        'Custom trip planning',
        '24/7 dedicated support',
        'Group trip coordination',
        'Advanced analytics dashboard',
        'White-glove customer service'
      ]
    }
  ];

  return (
    <div className="min-h-screen py-20">
      {/* Hero Section */}
      <section className="mb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Choose Your <span className="text-sky-600">Adventure</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Select the perfect plan for your travel style. Upgrade or downgrade anytime as your journey evolves.
          </p>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => {
            const Icon = plan.icon;
            return (
              <div
                key={index}
                className={`relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 ${
                  plan.popular ? 'ring-4 ring-sky-400 ring-opacity-50' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-sky-400 to-blue-500 text-white px-6 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="p-8">
                  <div className="text-center mb-8">
                    <div className={`w-16 h-16 bg-gradient-to-r ${plan.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                      <span className="text-gray-600 ml-1">/{plan.period}</span>
                    </div>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <Check className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {plan.limitations && (
                    <div className="mb-8">
                      <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">Limitations</h4>
                      <ul className="space-y-2">
                        {plan.limitations.map((limitation, limitIndex) => (
                          <li key={limitIndex} className="text-sm text-gray-500 flex items-start">
                            <span className="mr-2">•</span>
                            {limitation}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <button
                    onClick={openAuthModal}
                    className={`w-full py-4 px-6 rounded-2xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-sky-400 to-blue-500 text-white hover:from-sky-500 hover:to-blue-600 shadow-lg'
                        : index === 0
                        ? 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        : 'bg-gradient-to-r from-orange-400 to-orange-500 text-white hover:from-orange-500 hover:to-orange-600 shadow-lg'
                    }`}
                  >
                    {index === 0 ? 'Get Started Free' : 'Start Free Trial'}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="mt-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-600">Everything you need to know about our membership plans.</p>
        </div>

        <div className="space-y-6">
          {[
            {
              question: 'Can I switch between plans?',
              answer: 'Yes! You can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle.'
            },
            {
              question: 'Is there a free trial for premium plans?',
              answer: 'Yes, we offer a 14-day free trial for both Premium and Luxury plans. No credit card required to start.'
            },
            {
              question: 'What happens to my data if I cancel?',
              answer: 'Your travel history and preferences are safely stored and will be restored if you resubscribe within 90 days.'
            },
            {
              question: 'Do you offer student discounts?',
              answer: 'Yes! Students get 50% off Premium and Luxury plans. Contact support with your student ID for verification.'
            }
          ].map((faq, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{faq.question}</h3>
              <p className="text-gray-600">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="mt-20 bg-gradient-to-r from-sky-500 to-blue-600 rounded-3xl mx-4 sm:mx-6 lg:mx-8 py-16">
        <div className="text-center px-8">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Elevate Your Travel Experience?
          </h2>
          <p className="text-xl text-sky-100 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied travelers and start planning your next adventure with AI.
          </p>
          <button
            onClick={openAuthModal}
            className="bg-white text-sky-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 shadow-xl"
          >
            Start Your Free Trial
          </button>
        </div>
      </section>
    </div>
  );
};

export default MembershipPage;