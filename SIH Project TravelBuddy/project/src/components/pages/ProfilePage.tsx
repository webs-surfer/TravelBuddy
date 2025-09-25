import React, { useState } from 'react';
import { User, Edit2, Save, X, Bell, Shield, Trash2, Eye, EyeOff } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';

const ProfilePage: React.FC = () => {
  const { user, updateProfile, logout } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  
  const [formData, setFormData] = useState({
    name: user?.name || '',
    email: user?.email || '',
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });

  const [preferences, setPreferences] = useState({
    budget: user?.preferences?.budget || 'mid',
    food: user?.preferences?.food || 'non-veg',
    tripStyle: user?.preferences?.tripStyle || 'cultural',
    travelFrequency: user?.preferences?.travelFrequency || 'regular'
  });

  const [notifications, setNotifications] = useState({
    emailUpdates: true,
    pushNotifications: true,
    tripReminders: true,
    priceAlerts: false
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handlePreferenceChange = (key: string, value: string) => {
    setPreferences(prev => ({ ...prev, [key]: value }));
  };

  const handleNotificationChange = (key: string, value: boolean) => {
    setNotifications(prev => ({ ...prev, [key]: value }));
  };

  const handleSave = () => {
    // Update profile
    updateProfile({
      name: formData.name,
      email: formData.email,
      preferences
    });
    setIsEditing(false);
    // Show success message
    alert('Profile updated successfully! ✅');
  };

  const handleDeleteAccount = () => {
    // In a real app, this would call an API to delete the account
    alert('Account deletion process initiated. You will receive a confirmation email.');
    setShowDeleteConfirm(false);
    logout();
  };

  const preferenceOptions = {
    budget: [
      { value: 'low', label: 'Budget-Friendly ($)', desc: 'Under $100/day' },
      { value: 'mid', label: 'Mid-Range ($$)', desc: '$100-300/day' },
      { value: 'luxury', label: 'Luxury ($$$)', desc: '$300+/day' }
    ],
    food: [
      { value: 'veg', label: 'Vegetarian', desc: 'Plant-based meals' },
      { value: 'non-veg', label: 'Non-Vegetarian', desc: 'All types of food' },
      { value: 'vegan', label: 'Vegan', desc: 'Strictly plant-based' }
    ],
    tripStyle: [
      { value: 'adventure', label: 'Adventure', desc: 'Thrilling activities' },
      { value: 'relaxing', label: 'Relaxing', desc: 'Peaceful experiences' },
      { value: 'cultural', label: 'Cultural', desc: 'Museums & history' },
      { value: 'family', label: 'Family-Friendly', desc: 'All-age activities' }
    ],
    travelFrequency: [
      { value: 'occasional', label: 'Occasional', desc: '1-2 trips per year' },
      { value: 'regular', label: 'Regular', desc: '3-6 trips per year' },
      { value: 'explorer', label: 'Explorer', desc: '7+ trips per year' }
    ]
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-teal-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Your <span className="text-sky-600">Profile</span> 👤
          </h1>
          <p className="text-gray-600">
            Manage your account settings and travel preferences
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Profile Info */}
          <div className="lg:col-span-2 space-y-6">
            {/* Account Information */}
            <div className="bg-white rounded-3xl shadow-xl p-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Account Information</h2>
                <button
                  onClick={() => setIsEditing(!isEditing)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-xl transition-colors ${
                    isEditing
                      ? 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      : 'bg-gradient-to-r from-sky-400 to-blue-500 text-white hover:from-sky-500 hover:to-blue-600'
                  }`}
                >
                  {isEditing ? <X className="w-4 h-4" /> : <Edit2 className="w-4 h-4" />}
                  <span>{isEditing ? 'Cancel' : 'Edit'}</span>
                </button>
              </div>

              <div className="space-y-6">
                <div className="flex items-center space-x-6 mb-8">
                  <div className="w-20 h-20 bg-gradient-to-r from-sky-400 to-blue-500 rounded-full flex items-center justify-center">
                    <User className="w-10 h-10 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">{user?.name}</h3>
                    <p className="text-gray-600">{user?.email}</p>
                    <p className="text-sm text-sky-600 font-medium">Premium Member</p>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      disabled={!isEditing}
                      className={`w-full px-4 py-3 border rounded-xl transition-colors ${
                        isEditing
                          ? 'border-gray-300 focus:ring-2 focus:ring-sky-500 focus:border-transparent'
                          : 'border-gray-200 bg-gray-50'
                      }`}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      disabled={!isEditing}
                      className={`w-full px-4 py-3 border rounded-xl transition-colors ${
                        isEditing
                          ? 'border-gray-300 focus:ring-2 focus:ring-sky-500 focus:border-transparent'
                          : 'border-gray-200 bg-gray-50'
                      }`}
                    />
                  </div>
                </div>

                {isEditing && (
                  <>
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Current Password</label>
                        <div className="relative">
                          <input
                            type={showPassword ? 'text' : 'password'}
                            name="currentPassword"
                            value={formData.currentPassword}
                            onChange={handleInputChange}
                            placeholder="Enter current password"
                            className="w-full px-4 py-3 pr-10 border border-gray-300 rounded-xl focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                          />
                          <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
                          >
                            {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                          </button>
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">New Password</label>
                        <input
                          type="password"
                          name="newPassword"
                          value={formData.newPassword}
                          onChange={handleInputChange}
                          placeholder="Enter new password"
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                        />
                      </div>
                    </div>

                    <div className="flex justify-end">
                      <button
                        onClick={handleSave}
                        className="bg-gradient-to-r from-green-400 to-green-500 text-white px-6 py-3 rounded-xl hover:from-green-500 hover:to-green-600 transition-all duration-200 transform hover:scale-105 flex items-center space-x-2"
                      >
                        <Save className="w-4 h-4" />
                        <span>Save Changes</span>
                      </button>
                    </div>
                  </>
                )}
              </div>
            </div>

            {/* Travel Preferences */}
            <div className="bg-white rounded-3xl shadow-xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Travel Preferences</h2>
              
              <div className="space-y-6">
                {Object.entries(preferenceOptions).map(([key, options]) => (
                  <div key={key}>
                    <label className="block text-sm font-medium text-gray-700 mb-3 capitalize">
                      {key === 'tripStyle' ? 'Trip Style' : key === 'travelFrequency' ? 'Travel Frequency' : key}
                    </label>
                    <div className="grid sm:grid-cols-3 gap-3">
                      {options.map((option) => (
                        <button
                          key={option.value}
                          onClick={() => handlePreferenceChange(key, option.value)}
                          className={`p-4 border-2 rounded-xl text-left transition-all duration-200 transform hover:scale-105 ${
                            preferences[key as keyof typeof preferences] === option.value
                              ? 'border-sky-400 bg-sky-50'
                              : 'border-gray-200 hover:border-gray-300'
                          }`}
                        >
                          <div className="font-medium text-gray-900">{option.label}</div>
                          <div className="text-sm text-gray-600">{option.desc}</div>
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Notification Settings */}
            <div className="bg-white rounded-3xl shadow-xl p-6">
              <div className="flex items-center space-x-2 mb-6">
                <Bell className="w-5 h-5 text-sky-600" />
                <h3 className="text-lg font-bold text-gray-900">Notifications</h3>
              </div>
              
              <div className="space-y-4">
                {Object.entries(notifications).map(([key, value]) => (
                  <div key={key} className="flex items-center justify-between">
                    <div>
                      <div className="font-medium text-gray-900 text-sm">
                        {key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                      </div>
                    </div>
                    <button
                      onClick={() => handleNotificationChange(key, !value)}
                      className={`w-12 h-6 rounded-full transition-colors duration-200 ${
                        value ? 'bg-sky-500' : 'bg-gray-300'
                      }`}
                    >
                      <div className={`w-5 h-5 bg-white rounded-full transition-transform duration-200 ${
                        value ? 'translate-x-6' : 'translate-x-0.5'
                      }`} />
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Account Security */}
            <div className="bg-white rounded-3xl shadow-xl p-6">
              <div className="flex items-center space-x-2 mb-6">
                <Shield className="w-5 h-5 text-green-600" />
                <h3 className="text-lg font-bold text-gray-900">Account Security</h3>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-green-50 rounded-xl">
                  <span className="text-sm font-medium text-green-700">Two-Factor Authentication</span>
                  <span className="text-xs bg-green-200 text-green-800 px-2 py-1 rounded-full">Active</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                  <span className="text-sm font-medium text-gray-700">Last Login</span>
                  <span className="text-xs text-gray-600">2 hours ago</span>
                </div>
              </div>
            </div>

            {/* Danger Zone */}
            <div className="bg-white rounded-3xl shadow-xl p-6 border-2 border-red-100">
              <div className="flex items-center space-x-2 mb-4">
                <Trash2 className="w-5 h-5 text-red-600" />
                <h3 className="text-lg font-bold text-red-900">Danger Zone</h3>
              </div>
              
              <p className="text-sm text-gray-600 mb-4">
                Once you delete your account, there is no going back. Please be certain.
              </p>
              
              <button
                onClick={() => setShowDeleteConfirm(true)}
                className="w-full bg-red-50 text-red-700 border-2 border-red-200 px-4 py-3 rounded-xl hover:bg-red-100 transition-colors font-medium"
              >
                Delete Account
              </button>
            </div>
          </div>
        </div>

        {/* Delete Confirmation Modal */}
        {showDeleteConfirm && (
          <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div className="absolute inset-0 bg-black bg-opacity-50" onClick={() => setShowDeleteConfirm(false)} />
            <div className="relative bg-white rounded-3xl shadow-2xl max-w-md w-full mx-4 p-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Trash2 className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Delete Account?</h3>
                <p className="text-gray-600 mb-8">
                  This action cannot be undone. All your trip history, preferences, and data will be permanently deleted.
                </p>
                <div className="flex space-x-4">
                  <button
                    onClick={() => setShowDeleteConfirm(false)}
                    className="flex-1 bg-gray-100 text-gray-700 px-6 py-3 rounded-xl hover:bg-gray-200 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleDeleteAccount}
                    className="flex-1 bg-red-600 text-white px-6 py-3 rounded-xl hover:bg-red-700 transition-colors"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfilePage;