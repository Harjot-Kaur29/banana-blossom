import React from "react";
import Map from "../Map/Map";
import styles from "./Contact.module.css";

const Contact = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Contact Us</h2>
      <div className={styles.content}>
        <div className={styles.mapContainer}>
          <Map />
        </div>
        <div className={styles.details}>
          <h3>Banana Blossom Rooftop Restaurant</h3>
          <p><strong>Address:</strong><br />
            123 Rooftop Lane, Sector 45<br />
            Noida, Uttar Pradesh, India
          </p>
          <p><strong>Phone:</strong> +91 9876543210</p>
          <p><strong>Email:</strong> contact@bananablossom.in</p>
          <p><strong>Opening Hours:</strong><br />
            Mon - Sun: 12:00 PM – 11:00 PM
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
