import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import styles from "./Hero.module.css";

const images = [
  "images/image1.jpg",
  "images/image2.jpg",
  "images/image3.jpg",
];

const HeroSection = () => {
    const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 1000,          
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,  
    pauseOnHover: false,
  };


  return (
    <div className={styles.heroWrapper}>
      <Slider {...settings}>
        {images.map((img, index) => (
          <div key={index} className={styles.heroSlide}>
  <img
    src={img}
    alt={`Hero slide ${index + 1}`}
    className={styles.heroImage}
  />
  <div className={styles.overlay}></div> {/* darkens background */}
  <div className={styles.heroContent}>
    <h1>BANANA BLOSSOM</h1>
    <p>ROOFTOP FINE DINE & RESTAURANT</p>
    <button className={styles.viewMenu}>View Menu</button>
  </div>
</div>
        ))}
      </Slider>
    </div>
  );
};

export default HeroSection;
