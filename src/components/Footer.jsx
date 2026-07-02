import React from 'react';
import { footerIcons } from '../data/footerData';

const Footer = () => {

  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full py-16 bg-stone-300/20 rounded-2xl px-6 select-none font-satoshi font-black text-stone-900 text-xs lg:text-sm">
      <p className="flex justify-center items-center gap-1">          
        <footerIcons.copyright className="text-md"/> {currentYear} Charles Eimer - All rights reserved.
        </p>  
    </footer>
  );
};

export default Footer;