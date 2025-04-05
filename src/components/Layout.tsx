import React, { ReactNode } from 'react';
import Navbar from './navbar/Navbar';
import Footer from './Footer';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  
  return (
    <div 
    className={`w-full flex flex-col items-center justify-between min-h-screen overflow-hidden`}
    >
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
