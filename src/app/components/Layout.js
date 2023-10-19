import React, { useState } from 'react';
import Drawer from './Drawer'; 

function Layout({ children }) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <div className="font-sans bg-gray-100">
      <div className="min-h-screen flex">
        
        <Drawer isOpen={isDrawerOpen} onClose={toggleDrawer} />

        <div className="flex-grow">
          
          {children}
        </div>
      </div>
    </div>
  );
}

export default Layout;