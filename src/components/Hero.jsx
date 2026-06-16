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
    <section id="home" className="relative flex flex-col justify-center items-center p-4 md:p-8 min-h-screen bg-neutral-900 w-full overflow-hidden select-none">
      <div className="flex flex-col justify-center items-center w-full max-w-7xl mx-auto text-center"> 
        
        {/* Main Header */}
        <div className="flex flex-col items-center gap-6 my-6 w-full"> 
          <h1 className="font-kola text-5xl md:text-6xl lg:text-7xl text-neutral-400 tracking-widest transition-all duration-500 ease-in-out">
            Hi, I'm Charles
          </h1>

          {/* Subheader */}
          <div className="w-full max-w-2xl text-center flex justify-center items-center overflow-hidden min-h-10 
                          transition-all duration-500 ease-in-out">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                exit={{ opacity: 0 }}
                transition={{ duration: SENTENCE_FADE_OUT_DELAY, ease: "easeInOut"}}
                className="flex flex-wrap justify-center items-center gap-2.5">
                <div className="flex flex-wrap justify-center items-center relative">
                  {heroData[index].split("").map((letter, i) => (
                      <motion.span
                        key={`${index}-${i}`}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: i * CHARACTER_DELAY, duration: 0.25 , ease: "easeInOut"}}
                        className="relative inline-block font-chillax text-md md:text-xl lg:text-2xl text-[#2a805b] tracking-wide whitespace-pre">
                        {letter}
                      </motion.span>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* CV and Social Links */}
        <div className="flex flex-row items-center gap-6 md:gap-8">
          <a href="#resume" className="text-neutral-400 hover:text-neutral-200 hover:-translate-y-0.5 hover:scale-105 transition-all duration-500 ease-out" title="View Resume">
            <FiFileText className="text-2xl"/>
          </a>
                              
          <a href="https://github.com/eimcharles" target="_blank" rel="noreferrer" className="text-neutral-400 hover:text-neutral-200 hover:-translate-y-0.5 hover:scale-105 transition-all duration-500 ease-out" title="GitHub Profile">
            <FaGithub className="text-2xl"/>
          </a>
          
          <a href="https://www.linkedin.com/in/charles-eimer" target="_blank" rel="noreferrer" className="text-neutral-400 hover:text-neutral-200 hover:-translate-y-0.5 hover:scale-105 transition-all duration-500 ease-out" title="LinkedIn Profile">
            <FaLinkedinIn className="text-2xl"/>
          </a>
        </div>
      </div>

      {/* Scroll Call-to-Action Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce"> 
        <FiChevronDown className="text-2xl text-neutral-400"/>
      </div>
    </section>    
  );
};

export default Hero;