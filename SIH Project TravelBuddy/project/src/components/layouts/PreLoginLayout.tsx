import React from 'react';
import { Outlet } from 'react-router-dom';
import PreLoginNavbar from '../navigation/PreLoginNavbar';

const PreLoginLayout: React.FC = () => {
  return (
    <div className="min-h-screen">
      <PreLoginNavbar />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default PreLoginLayout;