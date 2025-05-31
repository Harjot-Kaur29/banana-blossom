// src/components/Navbar/Navbar.jsx
import React, { useState, useEffect } from "react";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.logo}>BB</div>
      <ul className={styles.navLinks}>
        <li>
          <a
            href="#"
            className={scrolled ? styles.linkDark : styles.linkLight}
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="#"
            className={scrolled ? styles.linkDark : styles.linkLight}
          >
            About
          </a>
        </li>
        <li>
          <a
            href="#"
            className={scrolled ? styles.linkDark : styles.linkLight}
          >
            Contact
          </a>
        </li>
      </ul>
      <button
        className={`${styles.reserveBtn} ${
          scrolled ? styles.btnDark : styles.btnLight
        }`}
      >
        View Menu
      </button>
    </nav>
  );
};

export default Navbar;
