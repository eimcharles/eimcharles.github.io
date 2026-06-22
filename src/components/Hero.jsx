import React, { useEffect, useState } from 'react'; 
import { motion, AnimatePresence } from 'framer-motion';
import { heroData } from '../data/heroData';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa6';
import { FiFileText, FiChevronDown } from "react-icons/fi";

const Hero = () => {
  const [index, setIndex] = useState(0);
  const CHARACTER_DELAY = 0.050;
  const SENTENCE_FADE_OUT_DELAY = 0.25;    
  const SUBHEADING_ELEMENT_DELAY = 3500;     

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((prev) => (prev + 1) % heroData.length);
    }, SUBHEADING_ELEMENT_DELAY);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <section id="home" className="relative flex flex-col justify-center items-center p-6 md:p-12 lg:p-16 min-h-screen bg-[#fafaf9] w-full select-none overflow-hidden text-stone-950">      

     <div className='flex flex-col lg:flex-col justify-between items-start lg:items-center gap-2 w-full max-w-6xl mx-auto'>      
      <div className="flex flex-col justify-center w-full">
        <div className="flex flex-col shrink-0">
          <p className="text-md md:text-md font-chillax text-stone-400 font-black mb-1 md:mb-3">Hey I'm</p>
          <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter text-stone-900 uppercase">
              Charles
          </h1>
        </div>

        <div className="w-full flex justify-start mt-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              exit={{ opacity: 0 }}
              transition={{ duration: SENTENCE_FADE_OUT_DELAY, ease: "easeInOut" }}
              className="flex flex-wrap justify-start items-center">
              {heroData[index].split("").map((letter, i) => (
                <motion.span
                  key={`${index}-${i}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: i * CHARACTER_DELAY, duration: 0.25, ease: "easeInOut" }}
                  className="inline-block text-stone-400 font-chillax text-md whitespace-pre">
                  {letter}
                </motion.span>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>  

      <div className="flex flex-row lg:flex-col justify-start items-center lg:justify-center gap-6 shrink-0 w-full lg:w-auto border-t lg:border-t-0 lg:border-l border-stone-200 pt-4 lg:pt-0 lg:pl-6 h-full min-h-0 lg:min-h-30">
          <a href="#resume" className="text-stone-950 hover:text-stone-500 transition-colors duration-300" title="View Resume">
            <FiFileText className="text-xl"/>
          </a>
                              
          <a href="https://github.com/eimcharles" target="_blank" rel="noreferrer" className="text-stone-950 hover:text-stone-500 transition-colors duration-300" title="GitHub Profile">
            <FaGithub className="text-xl"/>
          </a>
          
          <a href="https://www.linkedin.com/in/charles-eimer" target="_blank" rel="noreferrer" className="text-stone-950 hover:text-stone-500 transition-colors duration-300" title="LinkedIn Profile">
            <FaLinkedinIn className="text-xl"/>
          </a>
      </div>   

      <div className="absolute bottom-24 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce"> 
        <FiChevronDown className="text-2xl text-neutral-400"/>
      </div>
     </div>   
    </section>    
  );
};

export default Hero;