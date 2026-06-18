import React from 'react';
import Img from '../assets/profile/Img.webp';
import { aboutData } from '../data/aboutData';
import { FiUser, FiMapPin, FiGlobe } from "react-icons/fi";

const About = () => {
  return (
    <section id="about" className="w-full bg-neutral-900 px-6 py-16 md:py-24 select-none">
      <div className="flex flex-col md:flex-row w-full max-w-5xl mx-auto gap-12 items-center md:items-start">
        
        <div className='flex flex-col w-full md:w-2/3 gap-6 order-2 md:order-1'>
          <div className='flex flex-col gap-6 text-neutral-200'>
            <div className='flex flex-row gap-4 items-center justify-start'>
              <FiUser className='text-[#2a805b] text-3xl'/>
              <h1 className='text-3xl font-chillax font-medium'>{aboutData.sectionHeader}</h1>
            </div>
            <p className='text-neutral-400 font-satoshi text-md leading-relaxed text-justify'>{aboutData.introduction}</p>
            <p className='text-neutral-400 font-satoshi text-md leading-relaxed text-justify'>{aboutData.body}</p>
            <p className='text-neutral-400 font-satoshi text-md leading-relaxed text-justify'>{aboutData.conclusion}</p>
          </div>

          <div className='flex flex-col gap-4 font-chillax text-sm text-neutral-200 pt-4 md:pt-0'>
            <div className="flex items-center gap-3 justify-start">
              <FiGlobe className="text-[#2a805b] shrink-0" />
              <p>{aboutData.languages}</p>
            </div>
            <div className="flex items-center gap-3 justify-start">
              <FiMapPin className="text-[#2a805b] shrink-0" />
              <p>{aboutData.location}</p>
            </div> 
          </div>
        </div> 

        {/* Image */}
        <div className='flex justify-center items-center w-full md:w-1/3 order-1 md:order-2 p-2'>        
          <div className="p-2 w-48 h-60 md:w-64 md:h-80 rounded-full bg-neutral-800/50 border border-neutral-400 select-none">
            <div className="w-full h-full rounded-full overflow-hidden flex items-center justify-center">
              <img src={Img} alt="Im Im" className="w-full h-full object-cover"/>
            </div>
          </div>
        </div>
      </div>

      {/* Border Line */}
      <div className='w-1/4 mx-auto border-b border-neutral-700/60 pt-16 md:pt-24'></div> 
    </section>
  );
};

export default About;