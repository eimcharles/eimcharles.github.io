import React from 'react';
import { useState } from 'react';
import { motion } from 'framer-motion'
import { navigationItems } from '../data/navbarData';

const Navbar = () => {

  const [activeTab, setActiveTab] = useState('#home');

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center items-center p-4 md:p-6 sm:w-full select-none">
      <div className="flex flex-row justify-center items-center px-4 py-4 gap-6 md:gap-8 w-full max-w-[80%] md:max-w-2xl 
                      font-chillax text-sm md:text-base 
                      rounded-full border border-neutral-800/60 bg-neutral-900 
                      backdrop-blur-md shadow-[0_20px_40px_rgba(0,0,0,0.4)] 
                      transition-all duration-500 ease-in-out">
                        
      {navigationItems.map((item) => {
        const Icon = item.icon;
        const isActive = activeTab === item.href;

        return (
          <a 
          key={item.linkName} 
          href={item.href} 
          onClick={() => setActiveTab(item.href)}
          className="relative flex items-center gap-2 px-4 py-2 rounded-full 
                    text-sm font-medium transition-colors duration-300 outline-none z-10
                    text-neutral-200/70 hover:text-neutral-100">

          {isActive && (
              <motion.span
                layoutId="activeTab"
                className="absolute inset-0 bg-neutral-800/50 rounded-full -z-10 border border-neutral-700/30"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}

          <span className="block text-xl md:text-lg transition-all duration-500"><Icon/></span>
          <span className="hidden md:inline text-sm transition-all duration-500 tracking-wide">{item.linkName}</span>
          </a>
        ); 
      })}

      </div>
    </nav>
  );
};

export default Navbar;