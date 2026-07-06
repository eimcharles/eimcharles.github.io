import React from 'react';
import { aboutData, aboutIcons } from '../data/aboutData';

const About = () => {
  return (
    <section id="about" className="w-full px-6 py-36 select-none overflow-hidden bg-[#ffffff]">
      <div className="flex flex-col w-full max-w-3xl mx-auto gap-8 md:gap-12">
        <h1 className='text-4xl md:text-5xl font-black font-satoshi tracking-tighter text-stone-900 leading-none text-center'>
          About Me
        </h1>

        <div className='flex w-full justify-center'>        
          <div className="p-1 w-48 h-48 md:w-48 md:h-48 rounded-full bg-stone-200 border border-stone-300 select-none">
              <img src={aboutData.profileImage} alt="Profile" className="w-full h-full object-cover rounded-full"/>            
          </div>
        </div>
                
        <div className='flex flex-col gap-6 font-satoshi text-sm text-neutral-500 leading-relaxed text-justify italic'>
          <p>{aboutData.body}</p>
          <p>{aboutData.conclusion}</p>
        </div>

        <div className="flex flex-row justify-between lg:justify-center gap-2 font-chillax text-sm text-neutral-500">
          <a href="#resume" title="View Resume" 
          className="flex gap-1.5 items-center group border px-5 py-2 rounded-2xl border-stone-300 bg-[#ffffff]
                   hover:bg-stone-50 transition-all duration-300 hover:scale-[0.97]"> Resume
            <aboutIcons.resume className="text-md text-[#209b3e] group-hover:text-stone-500 transition-colors duration-300"/>
          </a>
          <a href="https://github.com/eimcharles" target="_blank" rel="noreferrer" title="GitHub Profile"
          className="flex gap-1.5 items-center group border px-5 py-2 rounded-2xl border-stone-300 bg-[#ffffff] 
                   hover:bg-stone-50 transition-all duration-300 hover:scale-[0.97]"> Github
            <aboutIcons.github className="text-md text-[#F05032] group-hover:text-stone-500 transition-colors duration-300"/>
          </a>
          <a href="https://www.linkedin.com/in/charles-eimer" target="_blank" rel="noreferrer" title="LinkedIn Profile"
           className="flex gap-1.5 items-center group border px-5 py-2 rounded-2xl border-stone-300 bg-[#ffffff] 
                    hover:bg-stone-50 transition-all duration-300 hover:scale-[0.97]">LinkedIn
            <aboutIcons.linkedIn className="text-md text-[#0077B5] group-hover:text-stone-500 transition-colors duration-300"/>
          </a>
        </div> 
      </div>
    </section>
  );
};

export default About;