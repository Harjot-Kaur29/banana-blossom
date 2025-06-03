// src/components/Hero/HeroSection.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";

import { EffectFade, Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/navigation";

import styles from "./Hero.module.css";

const images = [
  "images/image1.jpg",
  "images/image2.jpg",
  "images/image3.jpg",
];

const HeroSection = () => {
  return (
    <div className={styles.heroWrapper}>
      <Swiper
        effect="fade"
        fadeEffect={{ crossFade: true }}
        grabCursor={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        speed={2000}
        pagination={{ clickable: true }}
        navigation={false}
        modules={[EffectFade, Autoplay, Pagination, Navigation]}
        loop={true}
        className={styles.heroSwiper}
      >
        {images.map((img, index) => (
          <SwiperSlide key={index} className={styles.heroSlide}>
            <img
              src={img}
              alt={`Hero slide ${index + 1}`}
              className={styles.heroImage}
            />
            <div className={styles.overlay}></div>
            <div className={styles.heroContent}>
              <h1>BANANA BLOSSOM</h1>
              <p>ROOFTOP FINE DINE & RESTAURANT</p>
          <Link to ="/menu"> <button className={styles.viewMenu}>View Menu</button></Link> 
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroSection;
