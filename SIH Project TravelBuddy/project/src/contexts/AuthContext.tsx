import React, { createContext, useContext, useState, ReactNode } from 'react';

interface User {
  id: string;
  email: string;
  name: string;
  preferences?: {
    budget: string;
    food: string;
    tripStyle: string;
    travelFrequency: string;
  };
}

interface AuthContextType {
  user: User | null;
  showAuthModal: boolean;
  hasCompletedOnboarding: boolean;
  login: (email: string, password: string) => Promise<void>;
  signup: (email: string, password: string, name: string) => Promise<void>;
  guestLogin: () => void;
  logout: () => void;
  openAuthModal: () => void;
  closeAuthModal: () => void;
  completeOnboarding: (preferences: any) => void;
  updateProfile: (data: Partial<User>) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [hasCompletedOnboarding, setHasCompletedOnboarding] = useState(false);

  const login = async (email: string, password: string) => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const userData = {
      id: '1',
      email,
      name: email.split('@')[0],
    };
    
    setUser(userData);
    setShowAuthModal(false);
    setHasCompletedOnboarding(false);
  };

  const signup = async (email: string, password: string, name: string) => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const userData = {
      id: '1',
      email,
      name,
    };
    
    setUser(userData);
    setShowAuthModal(false);
    setHasCompletedOnboarding(false);
  };

  const guestLogin = () => {
    const guestData = {
      id: 'guest',
      email: 'guest@travelai.com',
      name: 'Judges',
      preferences: {
        budget: 'mid',
        food: 'non-veg',
        tripStyle: 'cultural',
        travelFrequency: 'regular'
      }
    };
    
    setUser(guestData);
    setHasCompletedOnboarding(true);
  };
  const logout = () => {
    setUser(null);
    setHasCompletedOnboarding(false);
  };

  const openAuthModal = () => setShowAuthModal(true);
  const closeAuthModal = () => setShowAuthModal(false);

  const completeOnboarding = (preferences: any) => {
    if (user) {
      setUser({ ...user, preferences });
      setHasCompletedOnboarding(true);
    }
  };

  const updateProfile = (data: Partial<User>) => {
    if (user) {
      setUser({ ...user, ...data });
    }
  };

  return (
    <AuthContext.Provider value={{
      user,
      showAuthModal,
      hasCompletedOnboarding,
      login,
      signup,
      guestLogin,
      logout,
      openAuthModal,
      closeAuthModal,
      completeOnboarding,
      updateProfile,
    }}>
      {children}
    </AuthContext.Provider>
  );
};