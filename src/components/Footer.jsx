import React from 'react';
import { footerIcons } from '../data/footerData';
import { heroData, heroIcons} from '../data/heroData';


const Footer = () => {

  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full py-16 bg-stone-300/20 rounded-2xl px-6 select-none font-satoshi font-black text-stone-900 text-xs lg:text-sm">
      <div className="flex flex-col justify-between items-center max-w-6xl mx-auto gap-4 w-full "> 
        <p className="flex justify-center items-center gap-1.5 ">
        Designed and <footerIcons.code className="text-[#209b3e]"/> with 
        <footerIcons.heart className="fill-[#d40f78] text-[#e11515]"/>
        </p>
        <p className="flex justify-center items-center gap-1">          
          <footerIcons.copyright className="text-md"/> {currentYear} Charles Eimer - All rights reserved.
        </p>  
      </div>
    </footer>
  );
};

export default Footer;