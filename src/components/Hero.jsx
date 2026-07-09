import React, { useEffect, useState } from 'react'; 
import { motion, AnimatePresence } from 'framer-motion';
import { heroData, heroIcons} from '../data/heroData';

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

      <div className="group flex justify-center gap-2 w-full md:max-w-xl py-2 text-4xl md:text-6xl font-chillax tracking-tighter text-stone-900">
        <h1>Hey, I'm Charles.</h1>
      </div>
      
      <div className="w-full justify-center md:justify-start md:max-w-xl flex md:py-2 md:px-19">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              exit={{ opacity: 0 }}
              transition={{ duration: SENTENCE_FADE_OUT_DELAY, ease: "easeInOut" }}
              className="tracking-tight">
              {heroData[index].split("").map((letter, i) => (
                <motion.span
                  key={`${index}-${i}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: i * CHARACTER_DELAY, duration: 0.25, ease: "easeInOut" }}
                  className="inline-block text-stone-500 font-synonym tracking-tighter text-base whitespace-break-spaces">
                  {letter}
                </motion.span>
              ))}
            </motion.div>
          </AnimatePresence>
      </div>  
      
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce z-10">
        <a href="#about" aria-label="Scroll to About" className="flex flex-col items-center gap-1">
          <heroIcons.arrow className="text-2xl sm:text-3xl text-stone-900 transition-colors duration-300"/>
        </a>
      </div>
    </section>    
  );
};

export default Hero;