import React, { useState } from "react";
import styles from "./DishesSection.module.css";

const dishes = [
  {
    image: "/images/menu/food7.jpeg",
    title: "House Special Cocktail Experience",
    description: "Banana Blossom’s House Special Cocktail—crafted with tropical fruits and premium spirits for the perfect rooftop refreshment experience.",
  },
  {
    image: "/images/menu/food3.jpeg",
    title: "Chicken Lollipop",
    description: "Banana Blossom’s crispy Chicken Lollipop is a spicy Indo-Chinese favorite, perfect as a flavorful appetizer with signature sauces.",
  },
  {
    image: "/images/menu/food10.jpeg",
    title: "Chilli Paneer",
    description: "Enjoy Banana Blossom’s spicy Chilli Paneer—crispy cottage cheese tossed in tangy Indo-Chinese sauces, perfect as a bold appetizer.",
  },
  {
    image: "/images/menu/food1.jpeg",
    title: "Curry",
    description: "Relish our rich, aromatic Indian curry—slow-cooked with spices, herbs, and love—only at Banana Blossom Rooftop Fine Dine Restaurant.",
  },
  {
    image: "/images/menu/food2.jpeg",
    title: "French Fries",
    description: "Crispy golden French Fries, freshly prepared and lightly salted—your perfect sidekick to any meal at Banana Blossom Restaurant.",
  },
  {
    image: "/images/menu/food4.jpeg",
    title: "Noodles",
    description: "Savor delicious wok-tossed noodles at Banana Blossom, packed with veggies, sauces, and authentic Asian flavors in every bite.",
  },
  {
    image: "/images/menu/food5.jpeg",
    title: "Butter Chicken",
    description: "Indulge in our creamy Butter Chicken—an iconic North Indian delight—served hot at Banana Blossom Rooftop Fine Dine Restaurant.",
  },
  {
    image: "/images/menu/food6.jpeg",
    title: "Grilled Chicken",
    description: "Juicy grilled chicken seasoned to perfection, served with sides—Banana Blossom’s protein-rich favorite for fitness and flavor lovers alike.",
  },
];

const DishesSection = () => {
  const [bouncingIndex, setBouncingIndex] = useState(null);

  const handleCardHover = (index) => {
    setBouncingIndex(index);
    setTimeout(() => setBouncingIndex(null), 700); // Animation duration
  };

  return (
    <section className={styles.dishesSection}>
      <h2 className={styles.heading}>Our Dishes</h2>
      <div className={styles.grid}>
        {dishes.map((dish, index) => (
          <div
            key={index}
            className={`${styles.card} ${bouncingIndex === index ? styles.cardBounce : ""}`}
            style={{ "--card-delay": `${index * 0.15}s` }}
            onMouseEnter={() => handleCardHover(index)}
            tabIndex={0}
            onFocus={() => handleCardHover(index)}
          >
            <img src={dish.image} alt={dish.title} className={styles.image} />
            <h3 className={styles.title}>{dish.title}</h3>
            <p className={styles.description}>{dish.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DishesSection;
