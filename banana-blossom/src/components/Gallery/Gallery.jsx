import React from "react";
import styles from "./Gallery.module.css";

const Gallery = () => {
  return (
    <div className={styles.galleryPage}>
      <h1 className={styles.heading}>Our Gallery</h1>

      {/* Food Images Section */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Delicious Food</h2>
        <div className={styles.imageGrid}>
          <img src="/images/menu/food1.jpeg" alt="Food 1" />
          <img src="/images/menu/food2.jpeg" alt="Food 2" />
          <img src="/images/menu/food3.jpeg" alt="Food 3" />
          <img src="/images/menu/food4.jpeg" alt="Food 4" />
          <img src="/images/menu/food5.jpeg" alt="Food 5" />
          <img src="/images/menu/food6.jpeg" alt="Food 6" />
          <img src="/images/menu/food7.jpeg" alt="Food 7" />
          <img src="/images/menu/food8.jpeg" alt="Food 8" />
          <img src="/images/menu/food9.jpeg" alt="Food 9" />
          <img src="/images/menu/food10.jpeg" alt="Food 10" />
        </div>
      </section>

      {/* Sitting Area Section */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Sitting Area</h2>
        <div className={styles.imageGrid}>
          <img src="/images/SittingArea/Sitting1.jpeg" alt="Sitting 1" />
          <img src="/images/SittingArea/Sitting2.jpeg" alt="Sitting 2" />
          <img src="/images/SittingArea/Sitting3.jpeg" alt="Sitting 3" />
          <img src="/images/SittingArea/Sitting4.jpeg" alt="Sitting 4" />
          <img src="/images/SittingArea/Sitting5.jpeg" alt="Sitting 5" />
          <img src="/images/SittingArea/Sitting6.jpeg" alt="Sitting 6" />
          <img src="/images/SittingArea/Sitting7.jpeg" alt="Sitting 7" />
          <img src="/images/SittingArea/Sitting8.jpeg" alt="Sitting 8" />
        </div>
      </section>

      {/* Restaurant Photos Section */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Restaurant Interior & Exterior</h2>
        <div className={styles.imageGrid}>
          <img src="/images/Restaurant/restaurant1.jpeg" alt="Restaurant 1" />
          <img src="/images/Restaurant/restaurant2.jpeg" alt="Restaurant 2" />
          <img src="/images/Restaurant/restaurant3.jpeg" alt="Restaurant 3" />
          <img src="/images/Restaurant/restaurant4.jpeg" alt="Restaurant 4" />
          <img src="/images/Restaurant/restaurant5.jpeg" alt="Restaurant 5" />
          <img src="/images/Restaurant/restaurant6.jpeg" alt="Restaurant 6" />
          <img src="/images/Restaurant/restaurant7.jpeg" alt="Restaurant 7" />
          <img src="/images/Restaurant/restaurant8.jpeg" alt="Restaurant 8" />
        
        </div>
      </section>

      {/* Events We Organize Section */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Events We Organize</h2>
        <div className={styles.imageGrid}>
          <img src="/images/EventImage/event1.jpeg" alt="Event 1" />
          <img src="/images/EventImage/event2.jpeg" alt="Event 2" />
          <img src="/images/EventImage/event3.jpeg" alt="Event 3" />
          <img src="/images/EventImage/event4.jpeg" alt="Event 4" />
          <img src="/images/EventImage/event5.jpeg" alt="Event 5" />
          <img src="/images/EventImage/event6.jpeg" alt="Event 6" />
          <img src="/images/EventImage/event7.jpeg" alt="Event 7" />
          <img src="/images/EventImage/event8.jpeg" alt="Event 8" />
         
        </div>
      </section>
    </div>
  );
};

export default Gallery;
