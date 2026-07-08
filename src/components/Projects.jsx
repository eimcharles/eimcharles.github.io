import React from 'react';
import { projectsData, projectsIcons } from '../data/projectsData';
import { heroIcons } from '../data/heroData';

const Projects = () => {
  return (
    <section id="projects" className="w-full px-6 py-36 select-none overflow-hidden bg-[#ffffff]">
      <div className="w-full max-w-6xl mx-auto flex flex-col gap-8 md:gap-12">
        <h2 className="text-4xl md:text-5xl font-chillax tracking-tighter text-stone-900 leading-none text-center">
          Featured Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-8 gap-4 w-full">
          {projectsData.map((project) => (
            <div key={project.id} className={`group ${project.gridSpan} w-full flex flex-col`}>
              
              <div className="flex flex-col gap-4 overflow-hidden rounded-2xl border border-stone-200 
                              hover:scale-[0.99] transition-all duration-500 hover:bg-[#ffffff] hover:shadow-none bg-stone-200/20 shadow-xl">  
                <div className="flex flex-col gap-5 pt-4 px-6 sm:pt-8 sm:px-8">
                  
                  <div className="flex flex-row justify-between gap-4">
                    <h3 className="font-chillax font-bold tracking-tighter lg:text-xl text-stone-900">
                      {project.title}
                    </h3>   

                    <div className="flex flex-row justify-end gap-8 text-xs lg:text-sm">
                      {project.demoUrl && (
                        <a href={project.demoUrl} target="_blank" rel="noreferrer" 
                        className="flex items-center gap-1 text-stone-900 transition-all duration-300 hover:translate-x-1"
                          title={`Live Link for ${project.title}`}>
                          <projectsIcons.demoUrl className="text-xs lg:text-lg text-[#1e63ca] " />
                          <p className="text-xs lg:text-sm font-synonym tracking-tight text-stone-500">{project.demo}</p>
                        </a>
                      )}
                      <a href={project.githubUrl} target="_blank" rel="noreferrer" title={`${project.title} Repository`}
                      className="flex items-center gap-2 text-stone-900 transition-all duration-300 hover:translate-x-1 ">
                        <p className="text-xs lg:text-sm font-synonym tracking-tight  text-stone-500">Project</p>
                        <projectsIcons.github className="text-xs lg:text-lg text-[#F05032] transition-colors duration-500"/>
                      </a>
                    </div> 
                  </div>  

                  <div className="flex flex-row justify-between items-start gap-4">
                    <p className="font-synonym tracking-tight text-xs lg:text-sm text-stone-500">
                      {project.type}
                    </p>
                    <div className="flex flex-row gap-4">
                    {project.languages && (
                      <div className="flex flex-row justify-end gap-4 w-full">
                        {project.languages.map((item) => {
                          const Icon = item.icon;
                          return (
                            <div key={item.id} className="flex justify-between" title={item.name}>
                              <Icon className={`text-xs lg:text-lg ${item.color} transition-colors duration-500`} />
                            </div>
                          );
                        })}
                      </div>
                    )} 
                    </div> 
                  </div>      
                  <p className="font-synonym tracking-tighter text-xs lg:text-sm text-justify leading-relaxed text-stone-500">
                    {project.description}
                  </p>          
                </div>

                <div className="w-full aspect-video mt-auto overflow-hidden">
                  <img src={project.image} alt={`${project.title} Preview`} className="w-full h-full object-cover" loading="lazy"/>  
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center font-chillax font-bold tracking-tighter text-sm text-neutral-500">
          <a href="https://github.com/eimcharles" target="_blank" rel="noreferrer" title="GitHub Profile"
          className="flex gap-1.5 items-center group border px-5 py-2 rounded-2xl border-stone-300 bg-[#ffffff] 
                    hover:bg-stone-50 transition-all duration-300 hover:scale-[0.97] text-stone-900 hover:text-stone-500"> View More Projects
            <projectsIcons.github className="text-md text-[#F05032] group-hover:text-stone-500 transition-colors duration-300"/>
          </a>
        </div> 
      </div>
    </section>
  );
};

export default Projects;