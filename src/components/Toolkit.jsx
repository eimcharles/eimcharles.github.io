import React from 'react';
import { toolkitData } from '../data/toolkitData';

const Toolkit = () => {
  return (
    <section id="toolkit" className="w-full px-6 py-36 select-none bg-[#ffffff]">
      <div className="flex flex-col w-full max-w-3xl mx-auto gap-8 md:gap-12">
        <h2 className="text-4xl md:text-5xl font-black font-satoshi tracking-tighter text-stone-900 leading-none text-center">
          My Toolkit
        </h2>   

        <div className="flex flex-col w-full gap-8">
          {toolkitData.map((item) => {
            return (
              <div key={item.title} className="group flex flex-col md:grid md:grid-cols-8 w-full transition-transform duration-300 hover:translate-x-2">
                <div className="flex md:col-span-3 py-2">
                  <h3 className="font-chillax text-lg md:text-base font-black tracking-tight text-stone-900 group-hover:text-stone-500 transition-colors duration-300">{item.title}</h3>
                </div>

                <div className="md:col-span-5 flex flex-row flex-wrap gap-x-8 w-full">
                  {item.languages.map((language) => {
                    const Icon = language.icon;
                    return (
                      <div key={language.name} className="flex items-center gap-2 py-2">
                        <div className={`text-xl ${language.color}`}>
                          <Icon/>
                        </div>
                        <p className="font-satoshi text-sm text-stone-900 leading-relaxed">{language.name}</p>
                      </div>
                    );
                  })} 
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Toolkit;