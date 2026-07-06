import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Background from './components/Background';
import Projects from './components/Projects';
import Footer from './components/Footer';
import Toolkit from './components/Toolkit';

function App() {
  return (
      <div>
        <Navbar/>
        <Hero/>
        <About/>
        <Toolkit/>
        <Background/>
        <Projects/>
        <Footer/>
      </div>
  )
}

export default App
