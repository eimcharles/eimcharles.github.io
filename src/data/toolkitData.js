import { 
  SiReact, 
  SiTypescript,
  SiDocker, 
  SiSpringboot, 
  SiGooglegemini, 
  SiJavascript, 
  SiApachemaven, 
  SiGithubactions, 
  SiConfluence, 
  SiJira, 
  SiCplusplus } from 'react-icons/si';

import { 
  FaJava, 
  FaDatabase, 
  FaLinux, 
  FaGitAlt, 
  FaUsers } from 'react-icons/fa6';

import { RiTailwindCssFill } from 'react-icons/ri';
import { HiOutlineBadgeCheck } from 'react-icons/hi';
import { PiCertificate } from 'react-icons/pi';

export const toolkitData = [
    {
    title: "Frontend",
    languages: [
      { name: "JavaScript", icon: SiJavascript, color: "text-[#F7DF1E]"},  
      { name: "TypeScript", icon: SiTypescript, color: "text-[#0052CC]"}, 
      { name: "Tailwind CSS", icon: RiTailwindCssFill, color: "text-[#06B6D4]"}, 
      { name: "React", icon: SiReact, color: "text-[#61DAFB]"},           
    ]
  },
  {
    title: "Backend",
    languages: [
      { name: "Java 17", icon: FaJava, color: "text-[#5382A1]" },
      { name: "C++", icon: SiCplusplus, color: "text-[#00599C]"},              
      { name: "MySQL", icon: FaDatabase, color: "text-[#00758F]" },        
      { name: "Spring Boot", icon: SiSpringboot, color: "text-[#6DB33F]"},
    ]
  },
  {
    title: "DevOps",
    languages: [
      { name: "Linux", icon: FaLinux, color: "text-[#FCC624]" },           
      { name: "Docker", icon: SiDocker, color: "text-[#2496ED]" },          
      { name: "GitHub Actions", icon: SiGithubactions, color: "text-[#2088FF]"}, 
    ]
  }, 
  {
    title: "Development Tools",
    languages: [
      { name: "Git", icon: FaGitAlt, color: "text-[#F05032]" },            
      { name: "Maven", icon: SiApachemaven, color: "text-[#C71A36]"},     
      { name: "Gemini", icon: SiGooglegemini, color: "text-[#7A93FE]"},     
    ]
  }, 
  {
    title: "Methodologies",
    languages: [
      { name: "Agile", icon: FaUsers, color: "text-[#A855F7]"},           
      { name: "Confluence", icon: SiConfluence, color: "text-[#0052CC]"},  
      { name: "Jira", icon: SiJira, color: "text-[#00B5FF]"},              
    ]
  },
  {
    title: "Continuous Learning",
    languages: [
      { name: "Amigoscode", icon: HiOutlineBadgeCheck, color: "text-[#8A4FFF]"},
      { name: "Maven Essentials", icon: PiCertificate, color: "text-[#2a805b]"}, 
      { name: "Docker for Professionals", icon: PiCertificate, color: "text-[#2a805b]"},
    ]
  }
];