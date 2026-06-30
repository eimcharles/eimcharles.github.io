import React from 'react';
import { backgroundData, backgroundIcons } from '../data/backgroundData';

const Background = () => {
  return (
    <section id="background" className="w-full px-6 py-16 md:py-24 select-none overflow-hidden bg-[#ffffff]">
      <div className="flex flex-col w-full max-w-6xl mx-auto gap-8 md:gap-12">
        <h2 className="text-3xl md:text-5xl font-black font-satoshi tracking-tighter text-stone-900 leading-none text-center">
          My Background
        </h2>

        <div className="relative w-full flex flex-col gap-8 md:gap-6 pl-0">          
          <div className="hidden md:block absolute"/>

          {backgroundData.map((item) => {
            return (
              <div key={item.id} 
                className="relative w-full group flex flex-col md:flex-row md:even:flex-row-reverse justify-between items-start gap-4 md:gap-0">
    
                <div className="hidden md:block absolute left-1/2 top-10 w-1 h-2/3 rounded-4xl bg-stone-400/20 group-hover:bg-stone-900
                                group-hover:border-none -translate-x-1/2 transition-all duration-300 group-hover:scale-50 z-10" />

                <div className="w-full md:w-[48%] rounded-3xl p-6 sm:p-8 flex flex-col transition-all duration-500
                 hover:bg-[#ffffff] hover:shadow-none bg-stone-200/20 shadow-xl">
                  
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-1">
                    <div className="flex flex-col gap-2 [&_svg]:transition-colors [&_svg]:duration-500 [&_svg]:shrink-0">
                      <h3 className="font-chillax lg:text-xl font-black tracking-tight text-stone-900 flex items-center gap-1.5">
                        <backgroundIcons.role className="group-hover:text-[#afafaf]"/>{item.role}
                      </h3>
                      <p className="font-satoshi text-xs lg:text-sm font-medium text-stone-900 flex items-center gap-1.5">
                        <backgroundIcons.calendar className="group-hover:text-[#1e63ca]" /> {item.duration} 
                      </p>
                      <p className="font-satoshi text-xs lg:text-sm font-medium text-stone-900 flex items-center gap-1.5">
                        <backgroundIcons.company className="group-hover:text-[#c71717]" /> {item.organization} 
                      </p>
                      <p className="font-satoshi text-xs lg:text-sm text-stone-900 flex items-center gap-1.5 italic">
                        <backgroundIcons.growth className="group-hover:text-[#209b3e]" />{item.summary}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col gap-1 font-satoshi text-xs lg:text-sm text-stone-900 leading-relaxed pt-1">
                    {item.contributions.map((contribution) => (
                      <div key={contribution.id} className="flex justify-start gap-1">
                        <backgroundIcons.arrow className="text-lg lg:text-xl shrink-0 select-none"/>
                        <p className="text-justify group-hover:text-stone-500 transition-colors duration-500">{contribution.text}</p>
                      </div>
                    ))}
                  </div>                  
                </div>
                <div className="hidden md:block w-[0%]" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Background;