import React, { useState } from 'react';
import styles from './AboutSection.module.css';

// Banner image
const BANNER_SRC = '/images/image2.jpg';

// Grid images – replace these with your own paths
const GRID_IMAGES = [
  '/images/SittingArea/Sitting1.jpeg',
  '/images/SittingArea/Sitting3.jpeg',
  '/images/Restaurant/restaurant1.jpeg',
  '/images/menu/food7.jpeg',
];

const AboutSection = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleText = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <section className={styles.storySection}>
      {/* Banner */}
      <div className={styles.banner}>
        <img
          src={BANNER_SRC}
          alt="Our Story"
          className={styles.bannerImage}
        />
        <div className={styles.bannerOverlay}>
          <h3 className={styles.bannerTitle}>Our Story</h3>
        </div>
      </div>

      {/* Text content */}
      <div className={styles.content}>
        <h2 className={styles.heading}>About US</h2>
        <p className={styles.text}>
          {isExpanded ? (
            <>
              Welcome to Banana Blossom Rooftop Fine Dine & Restaurant, one of the most welcoming and flavorful restaurants in Noida. Since our opening in 2023, we have been dedicated to creating a warm and inviting space where families, friends, and food lovers can come together to enjoy great meals and memorable moments.
              Situated in the heart of Gaur City, Banana Blossom Rooftop has quickly earned a reputation as one of the best family restaurants in Noida. Our rooftop ambiance, combined with delicious, freshly prepared dishes and attentive service, makes us a favorite choice for family dinners, celebrations, and casual outings.
              We pride ourselves on being among the top restaurants in Noida, offering a diverse menu that caters to every taste. Whether you’re craving classic favorites or innovative chef specials, every dish is crafted with care and quality ingredients.
              At Banana Blossom, we believe dining is about more than just food—it’s about sharing moments and making memories. That’s why we focus on providing a comfortable, enjoyable experience for guests of all ages.
              Visit us at Banana Blossom Rooftop and discover why we’re a top choice among restaurants in Noida for those seeking great food and a friendly atmosphere.
            </>
          ) : (
            'Welcome to Banana Blossom Rooftop Fine Dine & Restaurant, one of the most welcoming and flavorful restaurants in Noida. Since our opening in 2023, we have been dedicated to creating a warm and inviting space where families, friends, and food lovers can come together to enjoy great meals and memorable moments.Situated in the heart of Gaur City, Banana Blossom Rooftop has quickly earned a reputation as one of the best family restaurants in Noida....'
              
          )}
          <button onClick={toggleText} className={styles.readMoreBtn}>
            {isExpanded ? 'Show Less' : 'Read More'}
          </button>
        </p>
      </div>

      {/* 4-Image Grid */}
      <div className={styles.imageGrid}>
        {GRID_IMAGES.map((src, idx) => (
          <div key={idx} className={styles.gridItem}>
            <img
              src={src}
              alt={`Gallery ${idx + 1}`}
              className={styles.gridImage}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutSection;

