import React from 'react';
import { footerIcons } from '../data/footerData';

const Footer = () => {

  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full py-16 bg-[#fffffff] rounded-2xl px-6 select-none font-satoshi font-black text-stone-900 text-xs lg:text-sm">
      <div className='flex flex-col justify-center md:justify-around gap-4'>
        <p className="flex justify-center items-center gap-1.5 font-satoshi text-sm">
          Designed and <footerIcons.code className="text-[#209b3e]"/> with <footerIcons.heart className="fill-[#d40f78] text-[#e11515]"/>
        </p>   
        <p className="flex justify-center items-center gap-1 text-sm">          
          <footerIcons.copyright className="text-md"/> {currentYear} Charles Eimer - All rights reserved.
        </p> 
      </div>    
    </footer>
  );
};

export default Footer;
