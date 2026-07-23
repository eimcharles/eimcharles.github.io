import React, { useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { projectsData, projectsIcons } from '../data/projectsData';

import { 
  cascadeVariants, 
  projectsViewport, 
  hoverButtonProps, 
  hoverProjectCardProps,
  hoverSlideRightProps } from '../animations/framerAnimations';

  const MotionLink = motion.create(Link);

const Project = () => {

  const { id } = useParams(); 
  const currentProject = projectsData.find((p) => String(p.id) === String(id));

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant',
    });
  }, []);
  

  return (
    <section id="projects" className="w-full px-6 py-16 select-none overflow-hidden bg-[#ffffff]">
      <div className="w-full max-w-5xl mx-auto flex flex-col gap-4">

        <motion.h2 
        variants={cascadeVariants}
        initial="hidden"
        whileInView="visible"
        viewport={projectsViewport} 
        className="text-4xl md:text-5xl font-chillax tracking-tighter text-stone-900 leading-none text-center">
        {currentProject.title}
        </motion.h2>

        <motion.h2 
        variants={cascadeVariants}
        initial="hidden"
        whileInView="visible"
        viewport={projectsViewport} 
        className="text-md md:text-xl font-chillax tracking-tighter text-stone-900 leading-none text-center">
        {currentProject.type}
        </motion.h2>

        <div className='flex flex-row gap-2 justify-center md:justify-between'>
          <motion.div 
            variants={cascadeVariants}
            initial="hidden"
            whileInView="visible"
            viewport={projectsViewport}
            className="flex font-chillax font-bold tracking-tighter text-xs md:text-sm text-neutral-500">
              <MotionLink 
              to="/#projects" 
              title="Home"
              {...hoverButtonProps}
              className="flex gap-1.5 items-center group border px-6 py-3 rounded-xl border-stone-300">
                <projectsIcons.back className="text-md text-[#209b3e] group-hover:text-stone-500 transition-colors duration-200"/>
                Back
              </MotionLink>
          </motion.div> 

          <div className='flex flex-row gap-2'>
            {currentProject.demoUrl && (
            <motion.div 
              variants={cascadeVariants}
              initial="hidden"
              whileInView="visible"
              viewport={projectsViewport}
              className="flex font-chillax font-bold tracking-tighter text-xs md:text-sm text-neutral-500">
                <motion.a href={currentProject.demoUrl} 
                title="Demo Link"
                {...hoverButtonProps}
                className="flex gap-1.5 items-center group border px-6 py-3 rounded-xl border-stone-300">
                  <projectsIcons.demo className="text-md text-[#1e63ca] group-hover:text-stone-500 transition-colors duration-200"/>
                  {currentProject.demo}
                </motion.a>
            </motion.div>   
            )}
            <motion.div 
              variants={cascadeVariants}
              initial="hidden"
              whileInView="visible"
              viewport={projectsViewport}
              className="flex font-chillax font-bold tracking-tighter text-xs md:text-sm text-neutral-500">
                <motion.a href={currentProject.githubUrl}
                title="GitHub Profile"
                {...hoverButtonProps}
                className="flex gap-1.5 items-center group border px-6 py-3 rounded-xl border-stone-300">
                  <projectsIcons.github className="text-md text-[#F05032] group-hover:text-stone-500 transition-colors duration-200"/>
                  Github
                </motion.a>
            </motion.div>   
          </div>
        </div>

        <motion.div 
        variants={cascadeVariants}
        initial="hidden"
        whileInView="visible"
        viewport={projectsViewport}
        className="flex flex-col gap-4 justify-center items-center rounded-2xl border border-stone-200 p-6">
          {currentProject.images.map((item) => (
            <img key={item.id} 
            src={item.src} className={`w-full h-full ${currentProject.aspect} object-cover rounded-2xl`}/>
            ))}
        </motion.div>

        <motion.div 
        variants={cascadeVariants}
        initial="hidden"
        whileInView="visible"
        viewport={projectsViewport}
        className="grid grid-cols-1 md:grid-cols-12 w-full border rounded-2xl border-stone-200">
          
          <div className='md:col-span-2 flex flex-col md:gap-4 px-6 py-4 md:p-6'>
            <div className="flex flex-col gap-3.5">
              <p className='font-chillax text-sm lg:text-lg font-bold tracking-tighter text-stone-900 leading-none'>Tech Stack</p>
              {currentProject.stack && (
                <div className="flex flex-col gap-3 w-full">
                  {currentProject.stack.map((item) => {
                    const Icon = item.icon;
                    return (
                      <motion.div 
                      key={item.id}
                      {...hoverSlideRightProps} 
                      className="flex items-center gap-1.5" title={item.name}>
                        <Icon className={`text-xs lg:text-lg ${item.color} transition-colors duration-500`} /> 
                        <p className='text-xs lg:text-sm font-synonym tracking-tight text-stone-500'>{item.name}</p>
                      </motion.div>
                    );
                  })}
                </div>
              )} 
            </div>
          </div>

          <div className='md:col-span-10 flex flex-col justify-around gap-4 px-6 pb-3 md:p-6'>
            <div className='flex flex-col gap-3'>
              <h3 className='font-chillax text-sm lg:text-lg font-bold tracking-tighter text-stone-900 leading-none'>
                Overview
              </h3>
              <p className="font-synonym tracking-tight text-xs lg:text-sm text-justify leading-relaxed text-stone-600/90">
              {currentProject.overview}
              </p>
            </div>  

            <div className='flex flex-col gap-3'>
              <h3 className='font-chillax text-sm lg:text-lg font-bold tracking-tighter text-stone-900 leading-none'>
                Motivation
              </h3>
              <p className="font-synonym tracking-tight text-xs lg:text-sm text-justify leading-relaxed text-stone-600/90">
              {currentProject.motivation}
              </p>
            </div>  

            <div className='flex flex-col gap-3'>
              <h3 className='font-chillax text-sm lg:text-lg font-bold tracking-tighter text-stone-900 leading-none'>
                Key Features
              </h3>
                <div className="flex flex-col gap-2 font-synonym tracking-tighter text-stone-900">
                  {currentProject.keyFeatures.map((item) => {
                    const Icon = item.icon;
                    return (
                    <motion.div 
                    key={item.id} 
                    className="flex justify-start gap-1.5"
                    {...hoverSlideRightProps}>
                      <Icon className={`text-xs lg:text-lg ${item.color} transition-colors duration-500`} /> 
                      <p className="font-synonym tracking-tight text-xs lg:text-sm text-justify leading-relaxed text-stone-600/90">{item.text}</p>
                    </motion.div>
                    );
                  })}
                </div>  
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Project;