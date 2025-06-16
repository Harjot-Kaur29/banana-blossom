import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import styles from "./CelebrationSection.module.css";

// Replace with your actual event images
const EVENT_IMAGES = [
  "/images/Restaurant/restaurant3.jpeg",
  "/images/SittingArea/Sitting1.jpeg",
  "/images/EventImage/event2.jpeg",
  "/images/SittingArea/Sitting5.jpeg",
];

const CelebrationSection = () => {
  const [showFullText, setShowFullText] = useState(false);

  useEffect(() => {
    AOS.init({ once: true, duration: 800 });
  }, []);

  const handleReadMoreClick = () => {
    setShowFullText(true);
  };

  return (
    <section className={styles.section}>
      <div className={styles.inner} data-aos="fade-up">
        <h2 className={styles.heading} data-aos="fade-right">
          Celebrate With Us
        </h2>
        <p className={styles.paragraph} data-aos="fade-left">
          {!showFullText ? (
            <span>
              Host your birthdays, anniversaries, and special occasions at Banana
              Blossom. Our rooftop ambiance and curated menu make every
              celebration memorable. Contact us for custom packages and
              reservations!
              <br />
              <button
                type="button"
                className={styles.readMoreLink}
                onClick={handleReadMoreClick}
              >
                Read More
              </button>
            </span>
          ) : (
            <span>
              Celebrate Your Special Occasions at Banana Blossom Rooftop
              <br />
              Looking for the perfect venue in Noida to make your celebrations
              truly unforgettable? Banana Blossom Rooftop, located at Aarza
              Square, offers a stunning rooftop experience ideal for all your
              special moments. As one of the best restaurants in Noida, we
              provide a perfect blend of elegant ambiance, flavorful food, and
              warm hospitality to make your event memorable.
              <br />
              Whether you're planning a birthday party, an intimate anniversary
              dinner, a lively corporate event, a cozy family gathering, or
              even a private celebration with close friends, Banana Blossom
              Rooftop is designed to suit every occasion. Our stylish rooftop
              space and comfortable seating make it a top choice for everything
              from farewell parties and engagement dinners to romantic evenings
              and casual get-togethers.
              <br />
              As one of the most loved fine dining restaurants in Noida, we
              offer curated menus, attentive service, and a peaceful ambiance
              that enhances every celebration. Our experienced team works
              closely with you to make sure every detail is just right—from décor
              to dining.
              <br />
              Celebrate in style, enjoy mouth-watering cuisine, and make lasting
              memories at Banana Blossom Rooftop—your go-to destination for
              events in Aarza Square, Noida
            </span>
          )}
        </p>

        <div className={styles.grid}>
          {EVENT_IMAGES.map((src, i) => (
            <div key={i} className={styles.card}>
              <img
                src={src}
                alt={`Event ${i + 1}`}
                className={styles.image}
              />
            </div>
          ))}
        </div>

        <Link to="/Gallery" className={styles.showMoreLink}>
          Show More&nbsp;&rarr;
        </Link>
      </div>
    </section>
  );
};

export default CelebrationSection;

