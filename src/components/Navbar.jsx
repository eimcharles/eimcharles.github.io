import React from 'react';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { navigationItems } from '../data/navbarData';

const Navbar = () => {
  const [activeTab, setActiveTab] = useState('#home');

  return (
    <nav className="fixed top-4 left-0 right-0 z-50 px-4 w-full select-none">
      <div className="flex flex-row justify-center items-center px-2.5 py-2 
                      sm:px-1.5 sm:py-2 gap-1 sm:gap-3 max-w-fit mx-auto
                      font-chillax backdrop-blur-sm bg-[#ffffff]/30 rounded-2xl">
                        
      {navigationItems.map((item) => {
        const isActive = activeTab === item.href;
        return (
          <a 
            key={item.linkName} 
            href={item.href} 
            onClick={() => setActiveTab(item.href)}
            className="relative px-2 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm tracking-wide text-stone-900 
                       rounded-full transition-colors duration-200">
              {isActive && (
                <motion.span 
                  layoutId="activeTab" 
                  className="absolute inset-0 rounded-xl z-0 black backdrop-blur-xl bg-[#667a70]/20"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              <span className="relative z-10 tracking-tight">{item.linkName}</span>
          </a>
        ); 
      })}
      </div>
    </nav>
  );
};

export default Navbar;