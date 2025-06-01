import React from 'react';
import Navbar from './components/NavBar/NavBar';
import Hero from './components/Hero/Hero';
import InfoSection from './components/InfoSection/InfoSection';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <div>
      <Navbar />
       <Hero /> 
      <InfoSection />
      <Footer/>
    </div>
  );
};

export default App;
