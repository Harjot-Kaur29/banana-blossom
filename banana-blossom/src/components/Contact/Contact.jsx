import React from "react";
import Map from "../Map/Map";
import styles from "./Contact.module.css";

// Import Material-UI icons:
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

const Contact = () => {
  return (
    <>
      <div className={styles.hero}>
        <div className={styles.heroOverlay}></div>
        <h2 className={styles.heroText}>Contact Banana Blossom</h2>
      </div>
      <div className={styles.container}>
      
        <div className={styles.content}>
          <div className={styles.mapContainer}>
            <Map />
          </div>
          <div className={styles.details}>
            <h3>Banana Blossom Rooftop Restaurant</h3>
            
            <p className={styles.row}>
              <LocationOnIcon className={styles.icon} />
              <span>
                <strong>Address:</strong><br />
                <a
                   href="https://www.google.com/maps/dir//4th+Floor,+Aarza+Square+-+1,+near+7th+Avenue,+Gaur+City+1,+Extension,+Gaur+City+2,+Noida,+Ghaziabad,+Uttar+Pradesh+201009/@28.6084588,77.3425146,23293m/data=!3m1!1e3!4m8!4m7!1m0!1m5!1m1!1s0x390cef7ebb188099:0xebad23695e356f7c!2m2!1d77.424916!2d28.6084837?entry=ttu&g_ep=EgoyMDI1MDYxMS4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                   Banana Blossom Rooftop Fine Dine & Restaurant <br />
                  4th Floor, Aarza Square - 1, near 7th Avenue, Gaur City 1, Extension, Gaur City 2, Noida, Ghaziabad, Uttar Pradesh 201009
                </a>
              </span>
            </p>
            
            <p className={styles.row}>
              <PhoneIcon className={styles.icon} />
              <span>
                <strong>Phone:</strong>{" "}
                <a href="tel:+919643332049">
                  +91 9643332049
                </a>
              </span>
            </p>
            <p className={styles.row}>
              <PhoneIcon className={styles.icon} />
              <span>
                <strong>Phone:</strong>{" "}
                <a href="tel:+919643332039">
                  +91 9643332039
                </a>
              </span>
            </p>
            
            <p className={styles.row}>
              <EmailIcon className={styles.icon} />
              <span>
                <strong>Email:</strong>{" "}
                <a href="mailto:sfapl.noida@gmail.com">reservations@bananablossom.in</a>
              </span>
            </p>
            
            <p className={styles.row}>
              <AccessTimeIcon className={styles.icon} />
              <span>
                <strong>Opening Hours:</strong><br />
                Mon – Sun: 11:00 AM – 12:00 PM
              </span>
            </p>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;

