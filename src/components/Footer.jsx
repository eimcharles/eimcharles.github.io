import React from 'react';
import { footerIcons } from '../data/footerData';

const Footer = () => {

  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full py-16 bg-linear-to-b from-[#ffffff] via-[#ccd1ce] to-[#677b71] px-6 select-none">
      <div className="flex flex-col lg:flex-row justify-between items-center max-w-6xl mx-auto gap-4 w-full">        
        <p className="flex justify-center items-center gap-1.5 font-chillax font-black text-xs lg:text-sm text-neutral-900">
        Designed and <footerIcons.code className="text-[#209b3e]"/> with 
        <footerIcons.heart className="fill-[#d40f78] text-[#e11515]"/>
        </p>
        <p className="flex justify-center items-center gap-1 font-chillax font-black text-xs lg:text-sm text-neutral-900">          
          <footerIcons.copyright className="text-md"/> {currentYear} Charles Eimer
        </p>  
      </div>
    </footer>
  );
};

export default Footer;