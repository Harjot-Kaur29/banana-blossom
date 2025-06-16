import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import Hero from './components/Hero/Hero';
import InfoSection from './components/InfoSection/InfoSection';
import MenuPage from './components/MenuPage/MenuPage';
// import About from './components/About/About';
import Contact from './components/Contact/Contact';
import AboutSection from './components/About/AboutSection';
import CelebrationSection from './components/CelebrationSection/CelebrationSection';
import Gallery from './components/Gallery/Gallery';
import DishesSection from './components/DishesSection/DishesSection';
import GoogleReviews from './components/GoogleReview/GoogleReview';
// import Explore from './components/Explore/Explore';

const Home = () => (
  <>
    <Hero  />
    <InfoSection />
    <DishesSection />
    <CelebrationSection/>
    <Contact />
    <GoogleReviews/>
  </>
);

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
       <Route path="/" element={<Home />} />
       {/* ? <Route path="/about" element={<About />} /> */}
        <Route path="/contact" element={<Contact />} />
        {/* <Route path="/explore" element={<Explore />} /> */}
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/About" element={<AboutSection />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
      <Footer />

    </Router>
  );
};

export default App;
