import React from 'react';
import { motion } from 'framer-motion';
import { toolkitData } from '../data/toolkitData';
import { revealVariants, toolkitViewport, hoverSlideRightProps } from '../animations/framerAnimations';

const Toolkit = () => {
  return (
    <section id="toolkit" className="w-full px-6 py-36 select-none bg-[#ffffff]">
      <div className="flex flex-col w-full max-w-3xl mx-auto gap-8 md:gap-12">
        <motion.h2 
        variants={revealVariants} 
        initial="hidden" 
        whileInView="visible" 
        viewport={toolkitViewport}
        className="text-4xl md:text-5xl font-chillax tracking-tighter text-stone-900 leading-none text-center">
          My Toolkit
        </motion.h2>   

        <div className="flex flex-col w-full gap-6 md:gap-10">
          {toolkitData.map((item) => {
            return (
              <motion.div key={item.title} 
              variants={revealVariants}
              initial="hidden"
              whileInView="visible"
              viewport={toolkitViewport}
              {...hoverSlideRightProps}
              className="group flex flex-col md:grid md:grid-cols-8 w-full">
                <div className="flex md:col-span-2 py-2">
                  <h3 className="font-chillax font-bold tracking-tighter text-lg md:text-base text-stone-900 group-hover:text-stone-500 transition-colors duration-300">{item.title}</h3>
                </div>

                <div className="md:col-span-5 flex flex-row flex-wrap gap-x-8 w-full">
                  {item.languages.map((language) => {
                    const Icon = language.icon;
                    return (
                      <div key={language.name} className="flex items-center gap-2 py-2">
                        <div className={`text-xl ${language.color}`}>
                          <Icon/>
                        </div>
                        <p className="font-synonym tracking-tight text-sm text-stone-900 leading-relaxed">{language.name}</p>
                      </div>
                    );
                  })} 
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Toolkit;