import React from 'react';
import { motion } from 'framer-motion';
import { backgroundData, backgroundIcons } from '../data/backgroundData';
import { cascadeVariants,  slideVariants, backgroundViewport } from '../animations/framerAnimations';

const Background = () => {
  return (
    <section id="background" className="w-full px-6 py-36 select-none overflow-hidden bg-[#ffffff]">
      <div className="flex flex-col w-full max-w-6xl mx-auto gap-8 md:gap-12">
        <motion.h2 
        variants={cascadeVariants}
        initial="hidden"
        whileInView="visible"
        viewport={backgroundViewport} 
        className="text-4xl md:text-5xl font-chillax tracking-tighter text-stone-900 leading-none text-center">
          My Background
        </motion.h2>

        <div 
        className="relative w-full flex flex-col gap-4 pl-0">          
          {backgroundData.map((item, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div 
              key={item.id} 
              custom={isEven}
              variants={slideVariants}
              initial="hidden"
              whileInView="visible"
              viewport={backgroundViewport}
              className="relative w-full group flex flex-col md:flex-row md:even:flex-row-reverse justify-between items-start gap-4 md:gap-0">
    
                <div className="hidden md:block absolute left-1/2 top-10 w-1 h-2/3 rounded-4xl bg-stone-400/20 group-hover:bg-stone-900
                                group-hover:border-none -translate-x-1/2 transition-all duration-300 group-hover:scale-50 z-10" />

                <div className="w-full md:w-[48%] rounded-2xl p-4 sm:p-6 flex flex-col transition-all duration-500
                 hover:bg-[#ffffff] hover:shadow-none bg-stone-200/20 shadow-xl">
                  
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                    <div className="flex flex-col gap-2 [&_svg]:transition-colors [&_svg]:duration-500 [&_svg]:shrink-0 w-full">
                      <h3 className="font-chillax font-bold text-lg tracking-tighter text-stone-900 flex justify-start items-center gap-1">
                        <backgroundIcons.role className="text-[#afafaf]"/>{item.role}
                      </h3>
                      <p className="font-synonym tracking-tight text-sm text-stone-900 flex justify-start items-center gap-1.5">
                        <backgroundIcons.company className="text-[#c71717]" /> {item.organization} 
                      </p>
                      <p className="font-synonym tracking-tight text-sm text-stone-900 flex  justify-start items-center gap-1.5">
                        <backgroundIcons.calendar className="text-[#1e63ca]" /> {item.duration} 
                      </p>
                      <p className="font-synonym tracking-tight text-sm text-stone-900 flex items-center gap-1.5 italic pb-2">
                        <backgroundIcons.growth className="text-[#209b3e]"/>{item.summary}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col gap-2 font-synonym tracking-tighter text-stone-900 leading-relaxed">
                    {item.contributions.map((contribution) => (
                      <div key={contribution.id} className="flex justify-start gap-1">
                        <backgroundIcons.arrow className="text-lg lg:text-xl shrink-0 select-none"/>
                        <p className="text-justify text-stone-500 text-sm transition-colors duration-500">{contribution.text}</p>
                      </div>
                    ))}
                  </div>                  
                </div>
                <div className="hidden md:block w-[0%]" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Background;