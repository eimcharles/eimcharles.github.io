import { FaFigma } from 'react-icons/fa';
import { FaJava, FaDatabase } from 'react-icons/fa6';
import { FiGithub} from 'react-icons/fi';
import { LuExternalLink, LuArrowLeft } from 'react-icons/lu';
import { PiArrowBendDownRightThin, PiCertificate } from 'react-icons/pi';
import { SiApachemaven, SiCplusplus, SiDocker, SiGo, SiNextdotjs, SiOpengl, SiReact, SiSpringboot } from 'react-icons/si';

import Smartess from '../assets/Smartess.webp';
import SmartessProject from '../assets/SmartessProject.webp';
import SmartessDashboard from '../assets/SmartessDashboard.webp';

import Sidekick from '../assets/Sidekick.webp';
import SidekickProject from '../assets/SidekickProject.webp';

import Cybertruck from '../assets/Cybertruck.gif';
import Particles from '../assets/Particles.gif';

export const projectsIcons = {
  github: FiGithub,
  demo: LuExternalLink,
  back: LuArrowLeft,
};

export const projectsData = [
  // 1. Sidekick
  {
    id: 'sidekick',
    type: 'Personal Project',
    title: 'Sidekick',
    overview: 'Sidekick is a full-stack employee management platform with role-based access control and integrated cross site forgery (CSRF) protection.',
    motivation: '',
    
    keyFeatures: [
      { id: 1, text: '', icon: PiArrowBendDownRightThin, color: 'text-stone-500' },
      { id: 2, text: '', icon: PiArrowBendDownRightThin, color: 'text-stone-500' },
      { id: 3, text: '', icon: PiArrowBendDownRightThin, color: 'text-stone-500' },
      { id: 4, text: '', icon: PiArrowBendDownRightThin, color: 'text-stone-500' },
      { id: 5, text: '', icon: PiArrowBendDownRightThin, color: 'text-stone-500' },
      { id: 6, text: '', icon: PiArrowBendDownRightThin, color: 'text-stone-500' },
    ],
     
    stack: [
      { id: 7, name: 'Java', icon: FaJava, color: 'text-[#5382A1]' },          
      { id: 8, name: 'Spring Boot', icon: SiSpringboot, color: 'text-[#6DB33F]' },    
      { id: 9, name: 'React', icon: SiReact, color: 'text-[#61DAFB]' }, 
      { id: 10, name: 'Maven', icon: SiApachemaven, color: 'text-[#C71A36]' },
      { id: 11, name: 'MySQL', icon: FaDatabase, color: 'text-[#00758F]' }, 
      { id: 12, name: 'Docker', icon: SiDocker, color: 'text-[#00758F]' },         
    ],

    image: Sidekick,
    images: [ 
      { id: 13, src: SidekickProject }
    ],
        
    demo: 'Coming Soon!',
    demoUrl: '',
    githubUrl: 'https://github.com/eimcharles/sidekick-project'
  },

  // 2. Smartess
  {
    id: 'smartess',
    type: 'Capstone Project',
    title: 'Smartess',
    overview: 'A full-stack smart home management platform for residential communities that connects tenants and property owners through visual dashboards, user management, alert tracking, ticket handling and real-time video monitoring.',
    motivation: 'Smartess was motivated by the limitations of traditional smart home technology when scaled to multi-unit residential properties. Standard setups are notoriously expensive, fragmented, and difficult to maintain due to poor interoperability between different device providers. Smartess bridges this gap with a unified, all-in-one smart home platform.',

    keyFeatures: [
      { id: 14, text: 'Centralized Multi-Project Dashboard', icon: PiArrowBendDownRightThin, color: 'text-stone-500' },
      { id: 15, text: 'Tenant Ticket & Alert Management', icon: PiArrowBendDownRightThin, color: 'text-stone-500' },
      { id: 16, text: 'IoT Event Interception & Logging', icon: PiArrowBendDownRightThin, color: 'text-stone-500' },
      { id: 17, text: 'Live Video Surveillance', icon: PiArrowBendDownRightThin, color: 'text-stone-500' },
      { id: 18, text: 'Resource Consumption Analytics', icon: PiArrowBendDownRightThin, color: 'text-stone-500' },
      { id: 19, text: 'Organizational Announcements & Administration', icon: PiArrowBendDownRightThin, color: 'text-stone-500' },
    ],
     
    stack: [
      { id: 20, name: 'React', icon: SiReact, color: 'text-[#61DAFB]' }, 
      { id: 21, name: 'Figma', icon: FaFigma, color: 'text-[#F24E1E]' },
      { id: 22, name: 'Next.js', icon: SiNextdotjs, color: 'text-[#000000]' },       
      { id: 23, name: 'Docker', icon: SiDocker, color: 'text-[#00758F]' },    
      { id: 24, name: 'Go', icon: SiGo, color: 'text-[#00ADD8]' }
    ],
    
    image: Smartess,
    images: [ 
      { id: 25, src: SmartessDashboard }
    ],
        
    demo: 'Demo',
    demoUrl: 'https://smartess.vercel.app/',
    githubUrl: 'https://github.com/eimcharles/Smartess'
  },

  // 3. Cybertruck
  {
    id: 'cybertruck',
    type: 'Academic Project',
    title: '3D Cybertruck',
    overview: 'Interactive 3D Cybertruck scene featuring burnout animations with synchronized smoke generation.',
    motivation: '',

    keyFeatures: [
      { id: 27, text: '', icon: PiArrowBendDownRightThin, color: 'text-stone-500' },
      { id: 28, text: '', icon: PiArrowBendDownRightThin, color: 'text-stone-500' },
      { id: 29, text: '', icon: PiArrowBendDownRightThin, color: 'text-stone-500' },
      { id: 30, text: '', icon: PiArrowBendDownRightThin, color: 'text-stone-500' },
      { id: 31, text: '', icon: PiArrowBendDownRightThin, color: 'text-stone-500' },
      { id: 32, text: '', icon: PiArrowBendDownRightThin, color: 'text-stone-500' },
    ],
     
    stack: [
      { id: 33, name: 'C++', icon: SiCplusplus, color: 'text-[#00599C]' },       
      { id: 34, name: 'OpenGL', icon: SiOpengl, color: 'text-[#00599C]' },             
    ],
        
    image: Cybertruck,
    images: [ 
      { id: 35, src: Cybertruck }
    ],
    
    demo: '',
    demoUrl: '',
    githubUrl: 'https://github.com/eimcharles/interactive-3d-graphics-scene',
  },

  // 4. Particles
  {
    id: 'particles',
    type: 'Academic Project',
    title: '3D Particles',
    overview: 'Interactive rotating 3D particles featuring animations and a dynamic first person camera.',
    motivation: '',
    
    keyFeatures: [
      { id: 36, text: '', icon: PiArrowBendDownRightThin, color: 'text-stone-500' },
      { id: 37, text: '', icon: PiArrowBendDownRightThin, color: 'text-stone-500' },
      { id: 38, text: '', icon: PiArrowBendDownRightThin, color: 'text-stone-500' },
      { id: 39, text: '', icon: PiArrowBendDownRightThin, color: 'text-stone-500' },
      { id: 40, text: '', icon: PiArrowBendDownRightThin, color: 'text-stone-500' },
      { id: 41, text: '', icon: PiArrowBendDownRightThin, color: 'text-stone-500' },
    ],
     
    stack: [
      { id: 42, name: 'C++', icon: SiCplusplus, color: 'text-[#00599C]' },       
      { id: 43, name: 'OpenGL', icon: SiOpengl, color: 'text-[#00599C]' },             
    ],
      
    image: Particles,
    images: [ 
      { id: 44, src: Particles }
    ],
      
    demo: '',
    demoUrl: '',
    githubUrl: 'https://github.com/eimcharles/interactive-3d-graphics-scene',
  },
];