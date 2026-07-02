import React, { useEffect, useState } from 'react'; 
import { motion, AnimatePresence } from 'framer-motion';
import { heroData, heroIcons} from '../data/heroData';
import { FiMessageSquare } from 'react-icons/fi';


const Hero = () => {
  const [index, setIndex] = useState(0);
  const CHARACTER_DELAY = 0.040;
  const SENTENCE_FADE_OUT_DELAY = 0.25;    
  const SUBHEADING_ELEMENT_DELAY = 3500;     

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((prev) => (prev + 1) % heroData.length);
    }, SUBHEADING_ELEMENT_DELAY);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <section id="home" className="relative flex flex-col justify-center items-center px-6 sm:px-12 md:px-24 min-h-screen 
                        bg-linear-to-b from-[#667a70] via-[#ffffff] to-[#ffffff] select-none overflow-hidden">
      <div className="flex flex-col items-center w-full mx-auto">
        <h1 className="flex flex-wrap sm:flex-nowrap justify-center 
                       items-baseline gap-x-3 text-3xl 
                       sm:text-5xl md:text-5xl 
                       font-chillax text-stone-900">Hey, I'm Charles
          <heroIcons.binary className="text-3xl md:text-2xl hover:text-stone-600 text-stone-900 transition-all duration-500 hover:rotate-360"/>
        </h1>

        <div className="w-full flex justify-center items-center md:py-4 py-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              exit={{ opacity: 0 }}
              transition={{ duration: SENTENCE_FADE_OUT_DELAY, ease: "easeInOut" }}
              className="flex flex-wrap justify-center items-center tracking-tight">
              {heroData[index].split("").map((letter, i) => (
                <motion.span
                  key={`${index}-${i}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: i * CHARACTER_DELAY, duration: 0.25, ease: "easeInOut" }}
                  className="inline-block text-stone-600 font-satoshi font-black sm:text-xl md:text-base text-md whitespace-pre">
                  {letter}
                </motion.span>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex flex-row justify-center items-center gap-8">
          <a href="#resume" title="View Resume">
            <heroIcons.resume className="text-xl sm:text-3xl md:text-xl text-stone-950 hover:text-stone-500 transition-all duration-300 hover:translate-x-1" />
          </a>
                              
          <a href="https://github.com/eimcharles" target="_blank" rel="noreferrer" title="GitHub Profile">
            <heroIcons.github className="text-xl sm:text-3xl md:text-xl text-stone-950 hover:text-stone-500 transition-all duration-300 hover:translate-x-1" />
          </a>
          
          <a href="https://www.linkedin.com/in/charles-eimer" target="_blank" rel="noreferrer" title="LinkedIn Profile">
            <heroIcons.linkedIn className="text-xl sm:text-3xl md:text-xl text-stone-950 hover:text-stone-500 transition-all duration-300 hover:translate-x-1" />
          </a>
        </div>  
      </div>   
      
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce z-10">
        <a href="#about" aria-label="Scroll to About" className="flex flex-col items-center gap-1">
          <span className="font-chillax text-sm text-stone-950 select-none">Explore</span>
          <heroIcons.arrow className="text-2xl sm:text-3xl text-stone-950 transition-colors duration-300 cursor-pointer"/>
        </a>
      </div>
    </section>    
  );
};

export default Hero;