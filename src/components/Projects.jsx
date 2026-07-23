import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { projectsData, projectsIcons } from '../data/projectsData';
import { heroIcons } from '../data/heroData';

import { 
  cascadeVariants, 
  projectsViewport, 
  buttonViewport,
  hoverButtonProps, 
  hoverSlideRightProps, 
  hoverProjectCardProps } from '../animations/framerAnimations';

const Projects = () => {
    return (
    <section id="projects" className="w-full px-6 py-36 select-none overflow-hidden bg-[#ffffff]">
      <div className="w-full max-w-6xl mx-auto flex flex-col gap-8 md:gap-12">
        <motion.h2 
        variants={cascadeVariants}
        initial="hidden"
        whileInView="visible"
        viewport={projectsViewport} 
        className="text-4xl md:text-5xl font-chillax tracking-tighter text-stone-900 leading-none text-center">
          Featured Projects
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-8 gap-4 w-full">
          {projectsData.map((project) => { 
            return (
            <motion.div key={project.id}
            variants={cascadeVariants}
            initial="hidden"
            whileInView="visible"
            viewport={projectsViewport} 
            className="group md:col-span-4 w-full flex flex-col">
              
              <motion.div 
              {...hoverProjectCardProps}
              className="flex flex-col gap-4 overflow-hidden rounded-2xl border border-stone-200 bg-stone-200/20 w-full h-full">
                <div className="flex flex-col gap-5 pt-4 px-6 sm:pt-8 sm:px-8">
                  
                  <div className="flex flex-row justify-between gap-4">
                    <h3 className="font-chillax font-bold tracking-tighter lg:text-xl text-stone-900">
                      {project.title}
                    </h3>   

                    <div className="flex flex-row justify-end gap-8 text-xs lg:text-sm">
                      {project.demoUrl && (
                        <motion.a 
                        href={project.demoUrl} 
                        {...hoverSlideRightProps}
                        title={`${project.title}`}
                        className="flex items-center gap-1 text-stone-900">
                            <projectsIcons.demo className="text-xs lg:text-lg text-[#1e63ca]"/>
                          <p className="text-xs lg:text-sm font-synonym tracking-tight text-stone-500">{project.demo}</p>
                        </motion.a>
                      )}
                      <motion.a href=
                      {project.githubUrl} 
                      title={`${project.title} Repository`}
                      {...hoverSlideRightProps}
                      className="flex items-center gap-2 text-stone-900">
                        <projectsIcons.github className="text-xs lg:text-lg text-[#F05032] transition-colors duration-500"/>
                        <p className="text-xs lg:text-sm font-synonym tracking-tight  text-stone-500">Github</p>
                      </motion.a>
                    </div> 
                  </div>  

                  <div className="flex flex-row justify-between items-start gap-4">
                    <p className="font-synonym tracking-tight text-xs lg:text-sm text-stone-500">
                      {project.type}
                    </p>
                    <div className="flex flex-row gap-4">
                    {project.stack && (
                      <div className="flex flex-row justify-end gap-4 w-full">
                        {project.stack.map((item) => {
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
                    {project.overview}
                  </p>          
                </div>

                <div className="relative w-full aspect-video mt-auto overflow-hidden">
                  <img src={project.image} 
                  alt={`${project.title} Preview`} 
                  className="w-full h-full object-cover"/>  
                  {project.motivation && (
                  <div 
                  className="absolute inset-0 flex items-center justify-center bg-black/50">
                    <Link to={`/projects/${project.id}`}
                    className="text-white/80 font-chillax font-bold tracking-tighter 
                    text-xs md:text-sm px-6 py-3 border-2 border-white/80 rounded-xl group-hover:bg-white/90 
                    group-hover:text-stone-900 transition-colors duration-300"> 
                      Project Details
                    </Link> 
                  </div>
                  )} 
                </div>

              </motion.div>
            </motion.div>
          );
        })}
        </div>

        <motion.div 
        variants={cascadeVariants}
        initial="hidden"
        whileInView="visible"
        viewport={buttonViewport}
        className="flex justify-center font-chillax font-bold tracking-tighter text-sm text-neutral-500">
          <motion.a href="https://github.com/eimcharles" 
          title="GitHub Profile"
          {...hoverButtonProps}
          className="flex gap-1.5 items-center group border px-6 py-3 rounded-xl border-stone-300">
            View More Projects
            <projectsIcons.github className="text-md text-[#F05032] group-hover:text-stone-500 transition-colors duration-200"/>
          </motion.a>
        </motion.div> 

      </div>
    </section>
  );
};

export default Projects;