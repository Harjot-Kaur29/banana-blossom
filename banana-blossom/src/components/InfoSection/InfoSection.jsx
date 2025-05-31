import React from "react";
import styles from "./InfoSection.module.css";

const InfoSection = () => {
  return (
    <section className={styles.infoSection}>
      <div className={styles.textContainer}>
        {/* Small uppercase subtitle */}
        <p className={styles.subtitle}>WELCOME TO BANANA BLOSSOM</p>

        {/* Large heading */}
        <h2 className={styles.title}>COME &amp; MEET US AT BANANA BLOSSOM</h2>

        {/* Descriptive paragraph */}
        <p className={styles.paragraph}>
          Banana Blossom Rooftop Fine Dine &amp; Restaurant is your destination for an unforgettable
          elevated dining experience. Nestled in the heart of the city, we combine
          modern elegance with signature flavors curated to delight every palate.
          Join us for fresh ingredients, handcrafted cocktails, and a view that
          will stay with you long after the last bite.
        </p>

        {/* Underlined link / call‐to‐action */}
        <a href="#concept" className={styles.link}>
          DISCOVER OUR CONCEPT
        </a>
      </div>

      <div className={styles.imageContainer}>
        {/* Point directly at public/images/banana-blossom.jpg */}
        <img
          src="/images/image1.jpg"
          alt="Banana Blossom Restaurant"
          className={styles.image}
        />
      </div>
    </section>
  );
};

export default InfoSection;
