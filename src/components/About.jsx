import React from 'react';
import { motion } from 'framer-motion';
import { revealVariants, aboutViewport, buttonViewport, hoverButtonProps } from '../animations/framerAnimations';
import { aboutData, aboutIcons } from '../data/aboutData';

const About = () => {
  return (
    <section id="about" className="w-full px-6 py-36 select-none overflow-hidden bg-[#ffffff]">
      <div className="flex flex-col w-full max-w-3xl mx-auto gap-8 md:gap-12">
        <motion.h1 
        variants={revealVariants}
        initial="hidden"
        whileInView="visible"
        viewport={aboutViewport}
        className='text-4xl md:text-5xl font-chillax tracking-tighter text-stone-900 leading-none text-center'>
          About Me
        </motion.h1>

        <motion.div 
        variants={revealVariants}
        initial="hidden"
        whileInView="visible"
        viewport={aboutViewport}
        className='flex w-full justify-center'>        
          <div className="p-1 w-48 h-48 md:w-48 md:h-48 rounded-full bg-stone-200 border border-stone-300 select-none">
              <img src={aboutData.profileImage} alt="Profile" className="w-full h-full object-cover rounded-full"/>            
          </div>
        </motion.div>
                
        <motion.div variants={revealVariants} initial="hidden" whileInView="visible"viewport={aboutViewport}
        className='flex flex-col gap-6 font-synonym tracking-tight text-sm text-neutral-500 leading-relaxed text-justify italic'>
          <p>{aboutData.body}</p>
          <p>{aboutData.conclusion}</p>
        </motion.div>

        <motion.div 
          variants={revealVariants}
          initial="hidden"
          whileInView="visible"
          viewport={buttonViewport}
          className="flex flex-row justify-center gap-2 md:gap-6 font-chillax font-bold tracking-tighter text-sm text-neutral-500">
          <motion.a 
            href="#resume" 
            title="View Resume" 
            {...hoverButtonProps}
            className="flex gap-1.5 items-center group border px-6 py-3 rounded-xl border-stone-300 hover:text-stone-500 hover:bg-stone-50 transition-colors duration-200">
            <aboutIcons.resume className="text-md text-stone-900 group-hover:text-[#209b3e] transition-colors duration-200" />
          </motion.a>

          <motion.a 
            href="https://github.com/eimcharles" 
            target="_blank" 
            rel="noreferrer" 
            title="GitHub Profile"
            {...hoverButtonProps}
            className="flex gap-1.5 items-center group border px-6 py-3 rounded-xl border-stone-300 bg-[#ffffff] transition-colors duration-200">
            <aboutIcons.github className="text-md group-hover:text-[#F05032] transition-colors duration-200" />
          </motion.a>

          <motion.a 
            href="https://www.linkedin.com/in/charles-eimer" 
            target="_blank" 
            rel="noreferrer" 
            title="LinkedIn Profile"
            {...hoverButtonProps}
            className="flex gap-1.5 items-center group border px-6 py-3 rounded-xl border-stone-300 bg-[#ffffff] hover:text-stone-500 hover:bg-stone-50 transition-colors duration-200">
            <aboutIcons.linkedIn className="text-md text-stone-500 group-hover:text-[#0077B5] transition-colors duration-200" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default About;