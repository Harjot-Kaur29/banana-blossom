import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import styles from "./InfoSection.module.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
const InfoSection = () => {
  const navigate = useNavigate();
  const [showMore, setShowMore] = useState(false);

  const handleShowMore = () => {
    setShowMore(!showMore);
  };

  useEffect(() => {
    AOS.init({ once: true, duration: 800 });
  }, []);

  return (
    <section className={styles.infoSection}>
      <div className={styles.textContainer} data-aos="fade-right">
        <div className={styles.subtitle}>WELCOME TO BANANA BLOSSOM</div>
        <h1 className={styles.title}>COME &amp; MEET US AT BANANA BLOSSOM</h1>
        <p className={styles.paragraph}>
          {showMore ? (
            <span>
              Welcome to Banana Blossom Rooftop
              <br />
              Established in 2023, Banana Blossom Rooftop Fine Dine & Restaurant brings you a fresh and modern dining experience in the heart of Gaur City. We offer a beautiful rooftop setting where great food, handcrafted drinks, and a relaxed vibe come together to create unforgettable moments.
              <br />
              As one of the top-rated fine dining restaurants in Noida, we take pride in serving delicious food made with quality ingredients, along with signature cocktails and warm hospitality. Whether you’re planning a romantic dinner, a family meal, or a casual evening with friends, our restaurant provides the perfect atmosphere for every occasion.
              <br />
              Located in Gaur City, our rooftop offers stunning views and a stylish setting to enjoy both everyday meals and special celebrations. From chef-curated dishes to refreshing beverages, everything at Banana Blossom is designed to make you feel special.
              <br />
              Join us at Banana Blossom Rooftop and discover why we’re becoming one of the most loved restaurants in Noida for food lovers and celebration seekers alike.
            </span>
          ) : (
            <span>
              Welcome to Banana Blossom Rooftop
              <br />
              Established in 2023, Banana Blossom Rooftop Fine Dine & Restaurant brings you a fresh and modern dining experience in the heart of Gaur City.
            </span>
          )}
          <br />
          <button className={styles.showMoreButton} onClick={handleShowMore}>
            {showMore ? "Show Less" : "Read More"}
          </button>
        </p>
      </div>

      <div className={styles.imageGridContainer} data-aos="fade-left">
        <div className={styles.imageGrid}>
          <img src="/images/Restaurant/restaurant1.jpeg" alt="Restaurant 1" className={styles.gridImage} />
          <img src="/images/SittingArea/Sitting3.jpeg" alt="Restaurant 2" className={styles.gridImage} />
          <img src="/images/SittingArea/Sitting4.jpeg" alt="Restaurant 3" className={styles.gridImage} />
          <img src="/images/menu/food7.jpeg" alt="Restaurant 4" className={styles.gridImage} />
        </div>
      </div>
    </section>
  );
};

export default InfoSection;

