import React from 'react';
import { Outlet } from 'react-router-dom';
import PostLoginNavbar from '../navigation/PostLoginNavbar';

const PostLoginLayout: React.FC = () => {
  return (
    <div className="min-h-screen">
      <PostLoginNavbar />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default PostLoginLayout;