import React from 'react';
import { footerIcons } from '../data/footerData';

const Footer = () => {

  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full py-16 bg-[#ffffff] px-6 select-none">
      <div className="flex flex-col justify-between items-center max-w-6xl mx-auto gap-4 w-full">        
        <p className="flex justify-center items-center gap-1.5 font-chillax font-black text-xs lg:text-sm text-neutral-900">
        Designed and <footerIcons.code className="text-[#209b3e]"/> with 
        <footerIcons.heart className="fill-[#d40f78] text-[#e11515]"/>
        </p>
        <p className="flex justify-center items-center gap-1 font-chillax font-black text-xs lg:text-sm text-neutral-900">          
          <footerIcons.copyright className="text-md"/> {currentYear} Charles Eimer. All rights reserved.
        </p>  
      </div>
    </footer>
  );
};

export default Footer;