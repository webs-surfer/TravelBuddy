import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Plane, MessageCircle, BarChart3, Star, User, LogOut, ChevronDown, Settings, MapPin } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';

const PostLoginNavbar: React.FC = () => {
  const { user, logout } = useAuth();
  const location = useLocation();
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = React.useState(false);

  const navItems = [
    { name: 'Home', path: '/', icon: MessageCircle },
    { name: 'Dashboard', path: '/dashboard', icon: BarChart3 },
    { name: 'Features', path: '/features', icon: Star },
    { name: 'Explore', path: '/explore', icon: MapPin },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-white/95 backdrop-blur-sm shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2 group">
              <div className="w-8 h-8 bg-gradient-to-r from-sky-400 to-blue-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                <Plane className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-800 group-hover:text-sky-600 transition-colors">TravelAI</span>
            </Link>
          </div>

          <div className="flex items-center space-x-6">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`flex items-center space-x-1 px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                    isActive(item.path)
                      ? 'text-sky-600 bg-sky-50'
                      : 'text-gray-700 hover:text-sky-600 hover:bg-gray-50'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span className="hidden md:block">{item.name}</span>
                </Link>
              );
            })}

            {/* Profile Dropdown */}
            <div className="relative pl-6 border-l border-gray-200">
              <button
                onClick={() => setIsProfileDropdownOpen(!isProfileDropdownOpen)}
                className="flex items-center space-x-2 p-1 rounded-full hover:bg-gray-50 transition-colors"
              >
                <div className="w-8 h-8 bg-gradient-to-r from-sky-400 to-blue-500 rounded-full flex items-center justify-center">
                  <User className="w-4 h-4 text-white" />
                </div>
                <span className="text-sm font-medium text-gray-700 hidden md:block">
                  {user?.name}
                </span>
                <ChevronDown className={`w-4 h-4 text-gray-500 transition-transform duration-200 ${
                  isProfileDropdownOpen ? 'rotate-180' : ''
                }`} />
              </button>

              {/* Dropdown Menu */}
              {isProfileDropdownOpen && (
                <div className="absolute right-0 mt-2 w-64 bg-white rounded-2xl shadow-xl border border-gray-100 py-2 z-50 animate-in slide-in-from-top-2 duration-200">
                  <div className="px-4 py-3 border-b border-gray-100">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-sky-400 to-blue-500 rounded-full flex items-center justify-center">
                        <User className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">{user?.name}</p>
                        <p className="text-sm text-gray-600">{user?.email}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="py-2">
                    <Link
                      to="/profile"
                      onClick={() => setIsProfileDropdownOpen(false)}
                      className="flex items-center space-x-3 px-4 py-3 text-gray-700 hover:bg-gray-50 transition-colors"
                    >
                      <Settings className="w-4 h-4" />
                      <div>
                        <p className="font-medium">Account Settings</p>
                        <p className="text-xs text-gray-500">Manage your profile and preferences</p>
                      </div>
                    </Link>
                    
                    <button
                      onClick={() => {
                        logout();
                        setIsProfileDropdownOpen(false);
                      }}
                      className="w-full flex items-center space-x-3 px-4 py-3 text-red-600 hover:bg-red-50 transition-colors"
                    >
                      <LogOut className="w-4 h-4" />
                      <div className="text-left">
                        <p className="font-medium">Sign Out</p>
                        <p className="text-xs text-red-500">Log out of your account</p>
                      </div>
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        
        {/* Backdrop for dropdown */}
        {isProfileDropdownOpen && (
          <div 
            className="fixed inset-0 z-40" 
            onClick={() => setIsProfileDropdownOpen(false)}
          />
        )}
      </div>
    </nav>
  );
};

export default PostLoginNavbar;