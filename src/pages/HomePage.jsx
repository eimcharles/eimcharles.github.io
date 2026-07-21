import { useEffect, useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from '../components/Hero';
import About from '../components/About';
import Toolkit from '../components/Toolkit';
import Background from '../components/Background';
import Projects from '../components/Projects';

const HomePage = () => {

  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const targetId = location.hash.replace('#', '');
      const element = document.getElementById(targetId);

      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, );
      }
    }
  }, [location]);

  return (
    <div>
      <Hero/>
      <About/>
      <Toolkit/>
      <Background/>
      <Projects/> 
    </div>
  )
}

export default HomePage;