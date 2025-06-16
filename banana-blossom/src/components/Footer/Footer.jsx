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
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/menu">Menu</a>
          <a href="/contact">Contact</a>
          <a href="/reserve">Reserve</a>
        </div>

        <div className={styles.footerContact}>
          <p className={styles.noDecoration}>
            <a href="mailto:contact@bananablossom.com">Email: sfapl.noida@gmail.com</a>
          </p>
          <p className={styles.noDecoration}>
            <a href="tel:+91 9643332049">Phone: +91 9643332049</a>
          </p>
          <p className={styles.noDecoration}>
            <a href="tel:+91 9643332039">Phone: +91 9643332039</a>
          </p>
          <p className={styles.noDecoration}>
            <a
              href="https://www.google.com/maps/dir//4th+Floor,+Aarza+Square+-+1,+near+7th+Avenue,+Gaur+City+1,+Extension,+Gaur+City+2,+Noida,+Ghaziabad,+Uttar+Pradesh+201009/@28.6084588,77.3425146,23293m/data=!3m1!1e3!4m8!4m7!1m0!1m5!1m1!1s0x390cef7ebb188099:0xebad23695e356f7c!2m2!1d77.424916!2d28.6084837?entry=ttu&g_ep=EgoyMDI1MDYxMS4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
            >
              Banana Blossom Rooftop Fine Dine & Restaurant - Noida
            </a>
          </p>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <p>&copy; 2025 Banana Blossom. All rights reserved.</p>
        <p>Design and Developed by <a href="https://sadhanacybertech.com/" className={styles.nolink} target="_blank" rel="noopener noreferrer">Sadhana Cybertech Private Limited</a></p>
      </div>
    </footer>
  );
};

export default Footer;

