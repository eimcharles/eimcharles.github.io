import React from 'react';
import { navigationItems } from '../data/navbarData';

const Navbar = () => {
  return (
    <nav className="fixed flex justify-center items-center top-0 left-0 right-0 z-50 p-4 w-full select-none">
      <div className="flex flex-row justify-center items-center px-4 py-3 sm:py-4 gap-4 sm:gap-6 md:gap-8 w-full max-w-xl
                      font-satoshi backdrop-blur-md rounded-2xl shadow-sm bg-white/20">
                        
      {navigationItems.map((item) => (
        <a key={item.linkName} href={item.href} 
           className="relative text-sm transition-colors duration-300 text-stone-950 group">
          <span className="tracking-wide">{item.linkName}</span>
          <span className="absolute inset-x-0 bottom-0 h-[1.5px] w-0 bg-stone-950 transition-all duration-300 ease-out group-hover:w-full" />
        </a>
      ))}
      </div>
    </nav>
  );
};

export default Navbar;