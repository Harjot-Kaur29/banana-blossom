import React from 'react';
import Navbar from './components/NavBar/NavBar';
import Hero from './components/Hero/Hero';
import InfoSection from './components/InfoSection/InfoSection';

const App = () => {
  return (
    <div>
      <Navbar />
       <Hero /> 
      <InfoSection />
    </div>
  );
};

export default App;
