import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import styles from "./Navbar.module.css";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = (
    <ul className={styles.navLinks}>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            `${scrolled ? styles.linkDark : styles.linkLight} ${
              isActive ? styles.activeLink : ""
            }`
          }
          onClick={() => setDrawerOpen(false)}
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
          onClick={() => setDrawerOpen(false)}
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
          onClick={() => setDrawerOpen(false)}
        >
          Contact
        </NavLink>
      </li>
      <li>
        <Link to="/gallery">
          <button
            className={`${styles.reserveBtn} ${
              scrolled ? styles.btnDark : styles.btnLight
            }`}
            onClick={() => setDrawerOpen(false)}
          >
            Gallery
          </button>
        </Link>
      </li>
    </ul>
  );

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.logo}>BB</div>
      <div className={styles.desktopNav}>{navLinks}</div>
      <div className={styles.mobileNav}>
        <IconButton
          aria-label="menu"
          onClick={() => setDrawerOpen(true)}
          size="large"
        >
          <MenuIcon fontSize="inherit" style={{ color: scrolled ? "black" : "white" }} />
        </IconButton>
        <Drawer
          anchor="right"
          open={drawerOpen}
          onClose={() => setDrawerOpen(false)}
        >
          <div className={styles.drawerContent}>
            <IconButton
              aria-label="close"
              onClick={() => setDrawerOpen(false)}
              className={styles.closeBtn}
              size="large"
            >
              <CloseIcon fontSize="inherit" style={{ color: scrolled ? "black" : "white" }} />
            </IconButton>
            {navLinks}
          </div>
        </Drawer>
      </div>
    </nav>
  );
};

export default Navbar;

