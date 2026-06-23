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
    <section id="home" className="flex flex-col justify-center items-center px-12 md:px-24 min-h-screen bg-[#fafaf9] select-none">      

     <div className='flex flex-col lg:flex-row items-start lg:items-center gap-2 w-full max-w-6xl mx-auto'>
      <div className="flex flex-col justify-center">
        <div className="flex flex-col shrink-0">
          <p className="text-md font-satoshi text-stone-400 font-black py-1 md:py-2 ">Hey I'm</p>
          <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter text-stone-900 uppercase">
              Charles
          </h1>
        </div>



        <div className="w-full flex justify-start py-2">
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
                  className="inline-block text-stone-400 font-satoshi text-md whitespace-pre">
                  {letter}
                </motion.span>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>  

      <div className="flex flex-row lg:flex-col justify-center items-center gap-6 shrink-0 lg:px-4">
          <a href="#resume" className="text-stone-950 hover:text-stone-500 transition-colors duration-300" title="View Resume">
            <FiFileText className="text-xl text-stone-400 hover:text-stone-950 transition-all duration-300 hover:translate-x-1"/>
          </a>
                              
          <a href="https://github.com/eimcharles" target="_blank" rel="noreferrer" className="text-stone-950 hover:text-stone-500 transition-colors duration-300" title="GitHub Profile">
            <FaGithub className="text-xl text-stone-400 hover:text-stone-950 transition-all duration-300 hover:translate-x-1"/>
          </a>
          
          <a href="https://www.linkedin.com/in/charles-eimer" target="_blank" rel="noreferrer" className="text-stone-950 hover:text-stone-500 transition-colors duration-300" title="LinkedIn Profile">
            <FaLinkedinIn className="text-xl text-stone-400 hover:text-stone-950 transition-all duration-300 hover:translate-x-1"/>
          </a>
      </div>   

      <div className="absolute bottom-12 left-1/2 flex flex-col items-center gap-2 animate-bounce"> 
        <FiChevronDown className="text-xl text-stone-400 hover:text-stone-950 transition-colors duration-300"/>
      </div>
     </div>   
    </section>    
  );
};

export default Hero;