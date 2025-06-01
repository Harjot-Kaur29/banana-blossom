import React from 'react';
import styles from './Footer.module.css'; // optional if using external CSS

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.footerLogo}>
          <h2>BB</h2>
          <p>Banana Blossom</p>
          <p>Rooftop Fine Dine & Restaurant</p>
        </div>

        <div className={styles.footerLinks}>
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Menu</a>
          <a href="#">Contact</a>
          <a href="#">Reserve</a>
        </div>

        <div className={styles.footerContact}>
          <p>Email: contact@bananablossom.com</p>
          <p>Phone: +123 456 7890</p>
          <p>Location: 123 Rooftop Lane, City</p>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <p>&copy; 2025 Banana Blossom. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
