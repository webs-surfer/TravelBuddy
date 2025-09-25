import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import PreLoginLayout from './components/layouts/PreLoginLayout';
import PostLoginLayout from './components/layouts/PostLoginLayout';
import HomePage from './components/pages/HomePage';
import AboutPage from './components/pages/AboutPage';
import MembershipPage from './components/pages/MembershipPage';
import ContactPage from './components/pages/ContactPage';
import AuthModal from './components/auth/AuthModal';
import PreferencesPage from './components/pages/PreferencesPage';
import AIChatPage from './components/pages/AIChatPage';
import DashboardPage from './components/pages/DashboardPage';
import ExplorePage from './components/pages/ExplorePage';
import FeaturesPage from './components/pages/FeaturesPage';
import ProfilePage from './components/pages/ProfilePage';

const AppRoutes: React.FC = () => {
  const { user, showAuthModal, hasCompletedOnboarding } = useAuth();

  return (
    <>
      <Routes>
        {!user ? (
          // Pre-login routes
          <Route path="/" element={<PreLoginLayout />}>
            <Route index element={<HomePage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="membership" element={<MembershipPage />} />
            <Route path="contact" element={<ContactPage />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Route>
        ) : !hasCompletedOnboarding ? (
          // Onboarding route
          <>
            <Route path="/preferences" element={<PreferencesPage />} />
            <Route path="*" element={<Navigate to="/preferences" />} />
          </>
        ) : (
          // Post-login routes
          <Route path="/" element={<PostLoginLayout />}>
            <Route index element={<AIChatPage />} />
            <Route path="dashboard" element={<DashboardPage />} />
            <Route path="explore" element={<ExplorePage />} />
            <Route path="features" element={<FeaturesPage />} />
            <Route path="profile" element={<ProfilePage />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Route>
        )}
      </Routes>
      
      {showAuthModal && <AuthModal />}
    </>
  );
};

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-teal-50">
          <AppRoutes />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;