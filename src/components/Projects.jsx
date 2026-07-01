import React from 'react';
import { projectsData, projectsIcons } from '../data/projectsData';

const Projects = () => {
  return (
    <section id="projects" className="w-full px-6 py-16 md:py-24 select-none overflow-hidden bg-[#ffffff]">
      <div className="w-full max-w-6xl mx-auto flex flex-col gap-8 md:gap-12">
        <h2 className="text-3xl md:text-5xl font-black font-satoshi tracking-tighter text-stone-900 leading-none text-center">
          Featured Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-8 gap-6 w-full">
          {projectsData.map((project) => (
            <div key={project.id} className={`group ${project.gridSpan} w-full flex flex-col`}>
              
              <div className="flex flex-col gap-4 overflow-hidden rounded-2xl border border-stone-200 
                              hover:scale-[0.99] transition-all duration-500 bg-[#ffffff]">  
                <div className="flex flex-col gap-4 pt-4 px-6 sm:pt-8 sm:px-8">
                  
                  <div className="flex flex-row justify-between items-center gap-2">
                    <h3 className="font-chillax lg:text-xl font-black tracking-tight text-stone-900">
                      {project.title}
                    </h3> 

                    {project.languages && (
                      <div className="flex flex-row items-center gap-3">
                        {project.languages.map((item) => {
                          const Icon = item.icon;
                          return (
                            <div key={item.id} className="flex items-center" title={item.name}>
                              <Icon className={`text-xs lg:text-lg ${item.color} transition-colors duration-500`} />
                            </div>
                          );
                        })}
                      </div>
                    )}    
                  </div>  

                  <div className="flex flex-row justify-between items-center border-b border-stone-300 pb-1">
                    <p className="font-satoshi text-xs lg:text-sm font-black text-stone-900">
                      {project.type}
                    </p>
                    
                    <div className="flex justify-end items-center gap-4 font-chillax text-xs lg:text-sm">
                      {project.demoUrl && (
                        <a href={project.demoUrl} target="_blank" rel="noreferrer" 
                          className="flex items-center gap-2 text-stone-900 transition-all duration-300 hover:translate-x-1"
                          title={`Live Link for ${project.title}`}>
                          <p className="text-xs lg:text-sm font-satoshi text-stone-900 group-hover:text-stone-500 transition-colors duration-500">
                            {project.demo}
                          </p>
                          <projectsIcons.demoUrl className="text-xs lg:text-lg text-stone-900 group-hover:text-[#1e63ca] transition-colors duration-500" />
                        </a>
                      )}
                      
                      <a 
                        href={project.githubUrl} target="_blank" rel="noreferrer" 
                        className="flex items-center gap-2 text-stone-900 transition-all duration-300 hover:translate-x-1" 
                        title={`${project.title} Repository`}>
                        <p className="text-xs lg:text-sm font-satoshi text-stone-900 group-hover:text-stone-500 transition-colors duration-500">
                          Github
                        </p>
                        <projectsIcons.github className="text-xs lg:text-lg text-stone-900 group-hover:text-[#F05032] transition-colors duration-500"/>
                      </a>
                    </div>
                  </div> 
                  
                  <div className="flex flex-row justify-start items-start gap-1">
                    <projectsIcons.arrow className="text-lg text-[#afafaf] shrink-0" />
                    <p className="font-satoshi tracking-tight font-black text-xs lg:text-sm text-stone-900 text-justify 
                                  leading-relaxed group-hover:text-stone-500 transition-colors duration-500">
                      {project.description}
                    </p>
                  </div>
                </div>

                <div className="w-full aspect-video mt-auto overflow-hidden">
                  <img src={project.image} alt={`${project.title} Preview`} className="w-full h-full object-cover" loading="lazy"/>  
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;