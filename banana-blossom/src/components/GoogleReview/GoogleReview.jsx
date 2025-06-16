import { useEffect, useState } from "react";
import styles from "./GoogleReview.module.css";

const GoogleReviews = () => {
  const [widgetLoaded, setWidgetLoaded] = useState(false);

  const fallbackReviews = [
    {
      name: "NishyaNand Kaushik",
      rating: "★★★★★",
      review: "Wonderful ambience and very cooperative staff, food was also delicious thanks to Mr. Ritesh",
    },
    {
      name: "Ashwani Singh",
      rating: "★★★★☆",
      review: "Great place for party love tha place food and starter is very yummi... Make my special day.nice staff and service is also very good. Food is very testy. Thank you ritesh ji",
    },
    {
      name: "Neha Bansal",
      rating: "★★★★★",
      review: "Our favorite place for weekend dinners. Quick service and value for money!",
    },
    {
      name: "Garima Joshi",
      rating: "★★★",
      review: "We had planned a birthday party and it went awesome and then we had planned for family dinner last week. Again the services are good, food is awesome.",
    },
    {
      name: "AKANSHA SINGH",
      rating: "★★★★",
      review: "We had our daughter's first birthday party here. And I am happy that we chose Banana blossom for the same. the decoration was exactly as we wanted and most importantly the food was amazing. All my guests actually liked the food and the vibe too",
    },
    {
      name: "Azad Chandra Saxena",
      rating: "★★★★★",
      review: "I booked this restaurant for my kids birthday party and it was great experience.Ambiance- Great place to small party Food - taste was good and delicious Service- fully satisfied with service Music- lovely!",
    },
    {
      name: "Shubhangi Srivastava",
      rating: "★★★★★",
      review: "Amazing food and rooftop view! One of the best restaurants near Chaar Murti Chauraha.",
    },
    {
      name: "Sumit Pandey",
      rating: "★★★★★",
      review: "Great experience.Ritesh ji the manager at Banana Blossom did a wonderful job for us for our brother’s baby 1st birthday.The service, the staff, the food everything was 1st class. Thank you for the amazing experience",


    },
  ];
     useEffect(() => {
      const script = document.createElement("script");
      script.src = "https: static.elfsight.com/platform/platform.js";
      script.async = true;

      script.onload = () => {
        setTimeout(() => {
          const el = document.querySelector(
            ".elfsight-app-e40867f7-9e0f-4859-979e-97fa908bc7f6"
          );
          if (el && el.childNodes.length > 0) {
            setWidgetLoaded(true);
          } else {
            setWidgetLoaded(false);
          }
        }, 3000);
      };

      document.body.appendChild(script);
    }, []);

  return (
    <div className={styles.googleReviewsSection}>
      {!widgetLoaded && (
        <div className={styles.fallbackReviews}>
          <h3>Customer Reviews</h3>
          <div className={styles.reviewsScroller}>
            {fallbackReviews.map((review, index) => (
              <div className={styles.reviewCard} key={index}>
                <div className={styles.reviewName}>{review.name}</div>
                <div className={styles.reviewRating}>{review.rating}</div>
                <div className={styles.reviewText}>{review.review}</div>
              </div>
            ))}
          </div>
        </div>
      )}

      <div
        className="elfsight-app-e40867f7-9e0f-4859-979e-97fa908bc7f6"
        data-elfsight-app-lazy
        style={{ display: widgetLoaded ? "block" : "none" }}
      ></div>
    </div>
  );
};

export default GoogleReviews;
