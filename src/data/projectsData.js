import { 
  SiReact, 
  SiTypescript,
  SiDocker, 
  SiSpringboot, 
  SiJavascript, 
  SiApachemaven, 
  SiCplusplus, 
  SiOpengl,
  SiNextdotjs,
  SiGo
 } from 'react-icons/si';

import { FaJava, FaDatabase, FaLinkedinIn } from 'react-icons/fa6';
import { FaCode } from "react-icons/fa6";
import { FiHeart } from "react-icons/fi";
import { BsFileText } from "react-icons/bs";
import { FiGithub } from "react-icons/fi";
import { LuExternalLink} from "react-icons/lu";
import { PiArrowBendDownRightThin } from "react-icons/pi";

import Smartess from '../assets/Smartess.webp';
import Sidekick from '../assets/Sidekick.webp';
import Cybertruck from '../assets/Cybertruck.gif';
import Particles from '../assets/Particles.gif';

export const projectsIcons = {
  linkedIn: FaLinkedinIn,
  resume: BsFileText,
  github: FiGithub,
  code: FaCode,
  heart: FiHeart,
  demoUrl: LuExternalLink,
  arrow: PiArrowBendDownRightThin,
};

export const projectsData = [
    {
    id: 'Sidekick',
    type: 'Personal Project',
    title: 'Sidekick',
    gridSpan: 'md:col-span-4',
    description: 'A employee management platform with role-based access control and integrated cross-site request forgery (CSRF) protection.',
    languages: [
        { id: 1, name: "Java 17", icon: FaJava, color: "text-[#5382A1]"},          
        { id: 2, name: "Spring Boot", icon: SiSpringboot, color: "text-[#6DB33F]"},    
        { id: 3, name: "React", icon: SiReact, color: "text-[#61DAFB]"}, 
        { id: 4, name: "Maven", icon: SiApachemaven, color: "text-[#C71A36]"},
        { id: 5, name: "MySQL", icon: FaDatabase, color: "text-[#00758F]"}, 
        { id: 6, name: "Docker", icon: SiDocker, color: "text-[#00758F]"},         
    ],
    image: Sidekick,
    demo: "In Progress",
    demoUrl: "https://github.com/eimcharles/sidekick-project",
    githubUrl: 'https://github.com/eimcharles/sidekick-project' 
  },
    {
    id: 'Smartess',
    type: 'Capstone Project',
    title: 'Smartess',
    gridSpan: 'md:col-span-4',
    description: 'A centralized smart home system that aggregates invaluable user unit information into a unified web platform.',
    languages: [
        { id: 11, name: "React", icon: SiReact, color: "text-[#61DAFB]"}, 
        { id: 12, name: "Nextjs", icon: SiNextdotjs, color: "text-[#000000]"},         
        { id: 13, name: "Docker", icon: SiDocker, color: "text-[#00758F]"},    
        { id: 14, name: "Go", icon: SiGo, color: "text-[#00ADD8]"},     
    ],
    image: Smartess,
    demo:"Live Demo",
    demoUrl: "https://smartess.vercel.app/",
    githubUrl: 'https://github.com/eimcharles/Smartess'
  },
  {
    id: 'Cybertruck',
    type: 'Academic Project',
    title: '3D Cybertruck Scene',
    gridSpan: 'md:col-span-4',
    description: 'An Interactive 3D Cybertruck scene featuring animations and user interactions.',
    languages: [
        { id: 7, name: "C++", icon: SiCplusplus, color: "text-[#00599C]"},       
        { id: 8, name: "OpenGL++", icon: SiOpengl, color: "text-[#00599C]"},       
    ],
    image: Cybertruck,
    demo:"Demo",
    githubUrl: 'https://github.com/eimcharles/interactive-3d-graphics-scene'
  },
  {
    id: 'Particles',
    type: 'Academic Project',
    title: '3D Particle Scene',
    gridSpan: 'md:col-span-4',
    description: 'An Interactive 3D particle system featuring animations and a dynamic camera.',
    languages: [
        { id: 9, name: "C++", icon: SiCplusplus, color: "text-[#00599C]"},
        { id: 10, name: "OpenGL", icon: SiOpengl, color: "text-[#00599C]"},        
    ],
    image: Particles,
    demo: "Demo",
    githubUrl: 'https://github.com/eimcharles/interactive-3d-graphics-scene' 
  },
];