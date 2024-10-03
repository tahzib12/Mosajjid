import React from 'react';
import Navbar from './Components/navbar';
import HeroSection from './Components/hero';
import ServicesSection from './Components/service';
import ProjectsSection from './Components/project';
import Contact from './Components/contact';


function App() {
  return (
    <div className="App">
      <Navbar />
       <HeroSection />
      <ServicesSection /> 
      <ProjectsSection />
      <Contact />
    </div>
  );
}

export default App;
