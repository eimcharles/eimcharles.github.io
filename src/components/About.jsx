import React from 'react';
import { aboutData, aboutIcons } from '../data/aboutData';

const About = () => {
  return (
    <section id="about" className="w-full px-6 py-16 md:py-24 select-none overflow-hidden bg-[#ffffff]">
      <div className="flex flex-col w-full max-w-3xl mx-auto gap-12 items-center">

        <h1 className='text-3xl md:text-5xl font-black font-satoshi tracking-tighter text-stone-900 leading-none text-center'>
          About Me
        </h1>

        <div className='flex justify-center items-center w-full'>        
          <div className="p-1 w-48 h-48 md:w-48 md:h-48 rounded-full bg-stone-200 border border-stone-300 select-none">
            <div className="w-full h-full rounded-full overflow-hidden flex items-center justify-center">
              <img src={aboutData.profileImage} alt="Profile" className="w-full h-full object-cover"/>
            </div>
          </div>
        </div>
                
        <div className='flex flex-col justify-center gap-6 font-satoshi text-xs lg:text-sm text-neutral-500 
                        leading-relaxed max-w-full text-justify italic'>
          <p>{aboutData.body}</p>
          <p>{aboutData.conclusion}</p>
        </div>

        <div className="flex flex-row justify-center items-center gap-2 font-satoshi text-xs lg:text-sm text-stone-900">
          <a href="#resume" title="View Resume" 
          className="flex items-center group border px-5 py-2 rounded-2xl border-stone-300 bg-[#ffffff] hover:bg-stone-50 
                     transition-all duration-300 hover:scale-[0.97]">
            <aboutIcons.resume className="text-xl sm:text-3xl md:text-xl text-[#209b3e] group-hover:text-stone-500 transition-colors duration-300"/>
          </a>            
          <a href="https://github.com/eimcharles" target="_blank" rel="noreferrer" title="GitHub Profile"
          className="flex items-center group border px-5 py-2 rounded-2xl border-stone-300 bg-[#ffffff] hover:bg-stone-50 
                     transition-all duration-300 hover:scale-[0.97]">
            <aboutIcons.github className="text-xl sm:text-3xl md:text-xl text-[#F05032] group-hover:text-stone-500 transition-colors duration-300"/>
          </a>
          <a href="https://www.linkedin.com/in/charles-eimer" target="_blank" rel="noreferrer" title="LinkedIn Profile"
           className="flex items-center group border px-5 py-2 rounded-2xl border-stone-300 bg-[#ffffff] 
                    hover:bg-stone-50 transition-all duration-300 hover:scale-[0.97]">
            <aboutIcons.linkedIn className="text-xl sm:text-3xl md:text-xl text-[#0077B5] group-hover:text-stone-500 transition-colors duration-300
            hover:scale-[0.97]"/>
          </a>
        </div> 

      </div>
    </section>
  );
};

export default About;