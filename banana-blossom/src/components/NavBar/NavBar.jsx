import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

 

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.logo}>BB</div>
      <ul className={styles.navLinks}>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              `${scrolled ? styles.linkDark : styles.linkLight} ${
                isActive ? styles.activeLink : ""
              }`
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `${scrolled ? styles.linkDark : styles.linkLight} ${
                isActive ? styles.activeLink : ""
              }`
            }
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `${scrolled ? styles.linkDark : styles.linkLight} ${
                isActive ? styles.activeLink : ""
              }`
            }
          >
            Contact
          </NavLink>
        </li>
      </ul>
      <button
        className={`${styles.reserveBtn} ${
          scrolled ? styles.btnDark : styles.btnLight
        }`}
       
      >
        Explore
      </button>
    </nav>
  );
};

export default Navbar;
