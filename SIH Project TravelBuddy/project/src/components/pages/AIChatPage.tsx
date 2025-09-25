import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';

interface Message {
  id: string;
  content: string;
  isBot: boolean;
  timestamp: Date;
  choices?: string[];
}

const AIChatPage: React.FC = () => {
  const { user } = useAuth();
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: `Hey ${user?.name || 'traveler'}! 👋 I'm your AI travel buddy, ready to help you plan amazing adventures! ✈️🌍 What can I help you with today?`,
      isBot: true,
      timestamp: new Date(),
      choices: ["🗺️ Plan itinerary", "🍴 Find restaurants", "🏨 Compare hotels", "✈️ Get flight options"]
    }
  ]);

  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [currentChoices, setCurrentChoices] = useState<string[]>(messages[0].choices || []);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = (message?: string) => {
    const messageToSend = message || inputMessage.trim();
    if (!messageToSend) return;

    const newMessage: Message = {
      id: Date.now().toString(),
      content: messageToSend,
      isBot: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, newMessage]);
    setInputMessage('');
    setIsTyping(true);

    setTimeout(() => {
      const { text, choices } = generateAIResponse(messageToSend);
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: text,
        choices,
        isBot: true,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, aiMessage]);
      setCurrentChoices(choices || []);
      setIsTyping(false);
    }, 1200 + Math.random() * 800);
  };

  const generateAIResponse = (userMessage: string): { text: string; choices?: string[] } => {
    const lowerMessage = userMessage.toLowerCase();

    if (/(hello|hi|hey|yo|what's up|how are you)/i.test(lowerMessage)) {
      return {
        text: `👋 Hi ${user?.name || 'traveler'}! I can help you plan trips, find hotels, flights, food, and activities.`,
        choices: ["🗺️ Plan itinerary", "🍴 Find restaurants", "🏨 Compare hotels", "✈️ Get flight options"]
      };
    }

    if (/(itinerary|plan|trip|tour|schedule)/i.test(lowerMessage)) {
      return {
        text: "Start by picking a destination, choosing travel dates, and setting your budget to create a complete trip plan.",
        choices: ["📍 Choose destination", "📅 Select travel dates", "💰 Set budget", "🧭 Get trip suggestions"]
      };
    }

    if (/(flight|plane|ticket|airline)/i.test(lowerMessage)) {
      return {
        text: "I can find flights based on your location, dates, and budget.",
        choices: ["🔍 Search cheapest flights", "🛫 Show direct flights", "🌍 Multi-city trip planner", "⏰ Flexible date search"]
      };
    }

    if (/(hotel|stay|room|resort|accommodation|bnb)/i.test(lowerMessage)) {
      return {
        text: "There are plenty of stay options: luxury hotels, budget hostels, or unique stays like treehouses and igloos.",
        choices: ["⭐ Top-rated hotels", "💸 Budget stays", "🏝️ Beach resorts", "🛖 Unique stays"]
      };
    }

    if (/(food|restaurant|eat|dine|cafe|drink)/i.test(lowerMessage)) {
      return {
        text: "I can suggest local restaurants, street food spots, and coffee shops near your destination.",
        choices: ["🏆 Top-rated restaurants", "🍜 Street food hotspots", "🥘 Local cuisine", "☕ Cute coffee spots"]
      };
    }

    if (/(cab|taxi|transport|metro|bus|train|uber)/i.test(lowerMessage)) {
      return {
        text: "You can take taxis, rideshares, or public transport depending on your budget and convenience.",
        choices: ["🚕 Find nearest taxi service", "🚆 Show train routes", "🚌 Local bus schedules", "🚗 Car rental options"]
      };
    }

    if (/(things to do|activity|fun|adventure|explore|experience)/i.test(lowerMessage)) {
      return {
        text: "I can help you find sightseeing spots, adventure sports, cultural tours, or hidden gems.",
        choices: ["🎢 Adventure activities", "🏛️ Historical sites", "🎭 Local events", "🌌 Hidden gems nearby"]
      };
    }

    if (/(budget|currency|cost|price|money|exchange)/i.test(lowerMessage)) {
      return {
        text: "I can estimate trip costs, find cheap seasons, and convert currencies for you.",
        choices: ["💵 Estimate total trip cost", "💱 Currency converter", "📉 Find cheapest season", "🧾 Track expenses"]
      };
    }

    if (/(visa|passport|safety|rules|travel docs)/i.test(lowerMessage)) {
      return {
        text: "I can guide you on visa requirements, customs rules, travel insurance, and safety tips.",
        choices: ["📑 Visa requirements", "🛃 Customs rules", "🛟 Travel insurance info", "🚨 Safety tips"]
      };
    }

    if (/(weather|temperature|climate|rain|hot|cold)/i.test(lowerMessage)) {
      return {
        text: "I can provide current weather, 7-day forecast, and the best season to visit your destination.",
        choices: ["☀️ Current weather", "📅 7-day forecast", "🏖️ Best season to visit", "🌧️ Rainy season alerts"]
      };
    }

    if (/(sim card|internet|wifi|data|network)/i.test(lowerMessage)) {
      return {
        text: "I can suggest local SIM cards, WiFi spots, or co-working cafes to stay connected while traveling.",
        choices: ["📶 Best local SIM cards", "📡 Free WiFi spots", "💻 Co-working cafes", "🔋 Portable hotspot rentals"]
      };
    }

    return {
      text: "I can help with planning trips, flights, hotels, food, activities, and more!",
      choices: ["🗺️ Plan itinerary", "🍴 Find restaurants", "🏨 Compare hotels", "🎉 Show local events", "🌦️ Check weather"]
    };
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-teal-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Chat with Your <span className="text-sky-600">AI Travel Buddy</span> 🤖
          </h1>
          <p className="text-gray-600">
            Ask me anything about travel planning, and I'll provide helpful answers and suggestions!
          </p>
        </div>

        {/* Chat Container */}
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
          {/* Messages */}
          <div className="h-96 lg:h-[500px] overflow-y-auto p-6 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.isBot ? 'justify-start' : 'justify-end'} animate-in slide-in-from-${message.isBot ? 'left' : 'right'} duration-500`}
              >
                <div className={`flex items-start space-x-2 max-w-xs lg:max-w-md ${message.isBot ? 'flex-row' : 'flex-row-reverse space-x-reverse'}`}>
                  {message.isBot && (
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-sky-400 to-blue-500 text-white flex items-center justify-center flex-shrink-0">
                      <Bot className="w-4 h-4" />
                    </div>
                  )}

                  <div
                    className={`px-4 py-3 rounded-2xl ${
                      message.isBot
                        ? 'bg-gray-100 text-gray-800 rounded-bl-sm'
                        : 'bg-gradient-to-r from-sky-400 to-blue-500 text-white rounded-br-sm'
                    }`}
                  >
                    <p className="text-sm leading-relaxed whitespace-pre-wrap">{message.content}</p>
                    <p className="text-xs mt-2 text-gray-500">
                      {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex justify-start animate-in slide-in-from-left duration-300">
                <div className="flex items-start space-x-2">
                  <div className="w-8 h-8 bg-gradient-to-r from-sky-400 to-blue-500 rounded-full flex items-center justify-center">
                    <Bot className="w-4 h-4 text-white" />
                  </div>
                  <div className="bg-gray-100 px-4 py-3 rounded-2xl rounded-bl-sm">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Choices above input */}
          {currentChoices.length > 0 && (
            <div className="px-6 py-2 border-t border-gray-100 flex flex-wrap gap-3 bg-gray-50">
              {currentChoices.map((choice, idx) => (
                <button
                  key={idx}
                  className="px-4 py-2 rounded-xl border border-gray-300 shadow-sm bg-white hover:bg-gray-50 text-sm text-gray-700"
                  onClick={() => setInputMessage(choice)}
                >
                  {choice}
                </button>
              ))}
            </div>
          )}

          {/* Input */}
          <div className="border-t border-gray-100 p-6">
            <div className="flex space-x-4">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask me anything about your travel plans... ✈️"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all duration-200"
                disabled={isTyping}
              />
              <button
                onClick={() => handleSendMessage()}
                disabled={!inputMessage.trim() || isTyping}
                className="bg-gradient-to-r from-sky-400 to-blue-500 text-white p-3 rounded-2xl hover:from-sky-500 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 transition-all duration-200 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIChatPage;
