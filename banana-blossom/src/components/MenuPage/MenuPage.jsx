import React, { useState } from 'react';
import styles from './MenuPage.module.css';
import { FaLeaf, FaDrumstickBite, FaIceCream, FaGlassMartiniAlt } from 'react-icons/fa';

const vegMenu = {
  Breakfast: {
    'North Indian': ['Aloo Paratha', 'Chole Bhature'],
    'South Indian': ['Idli Sambar', 'Masala Dosa'],
    Chinese: ['Veg Spring Roll'],
    Italian: ['Veg Croissant'],
  },
  'Main Course': {
    'North Indian': ['Paneer Butter Masala'],
    'South Indian': ['Avial'],
    Chinese: ['Veg Manchurian'],
    Italian: ['Pasta Primavera'],
  },
  Starters: {
    'North Indian': ['Paneer Tikka'],
    'South Indian': ['Medu Vada'],
    Chinese: ['Spring Rolls'],
    Italian: ['Garlic Bread'],
  },
  Soups: ['Tomato Soup', 'Sweet Corn Soup']
};

const nonVegMenu = {
  'Main Course': ['Chicken Curry', 'Fish Fry'],
  Starters: ['Chicken Tikka', 'Mutton Seekh Kebab'],
  Soups: ['Chicken Soup', 'Hot & Sour Chicken Soup']
};

const dessertMenu = ['Gulab Jamun', 'Rasgulla', 'Chocolate Brownie'];
const beveragesMenu = ['Mango Lassi', 'Coca Cola', 'Fresh Lime Water'];

const MenuPage = () => {
  const [activeCategory, setActiveCategory] = useState('Veg');
  const [selectedSubcategory, setSelectedSubcategory] = useState('');

  const getVegSubcategories = () => {
    const subcats = new Set();
    Object.entries(vegMenu).forEach(([section, items]) => {
      if (typeof items === 'object' && !Array.isArray(items)) {
        Object.keys(items).forEach(subcat => subcats.add(subcat));
      } else {
        subcats.add(section); // Soups is directly a dish list
      }
    });
    return Array.from(subcats);
  };

  const getNonVegSubcategories = () => Object.keys(nonVegMenu);

  const renderVegMenu = () => {
    return Object.entries(vegMenu).map(([section, items]) => {
      if (typeof items === 'object' && !Array.isArray(items)) {
        return Object.entries(items)
          .filter(([subcat]) => subcat === selectedSubcategory)
          .map(([subcat, dishes]) => (
            <div key={subcat} className={styles.sectionBlock}>
              <h2 className={styles.sectionTitle}>{section} - {subcat}</h2>
              <ul className={styles.dishList}>
                {dishes.map(dish => <li key={dish}>{dish}</li>)}
              </ul>
            </div>
          ));
      } else if (section === selectedSubcategory) {
        return (
          <div key={section} className={styles.sectionBlock}>
            <h2 className={styles.sectionTitle}>{section}</h2>
            <ul className={styles.dishList}>
              {items.map(dish => <li key={dish}>{dish}</li>)}
            </ul>
          </div>
        );
      } else {
        return null;
      }
    });
  };

  const renderNonVegMenu = () => {
    return Object.entries(nonVegMenu)
      .filter(([section]) => section === selectedSubcategory)
      .map(([section, dishes]) => (
        <div key={section} className={styles.sectionBlock}>
          <h2 className={styles.sectionTitle}>{section}</h2>
          <ul className={styles.dishList}>
            {dishes.map(dish => <li key={dish}>{dish}</li>)}
          </ul>
        </div>
      ));
  };

  const renderSimpleMenu = (title, dishes) => (
    <div className={styles.sectionBlock}>
      <h2 className={styles.sectionTitle}>{title}</h2>
      <ul className={styles.dishList}>
        {dishes.map(dish => <li key={dish}>{dish}</li>)}
      </ul>
    </div>
  );

  const renderSubcategoryButtons = () => {
    let subcategories = [];

    if (activeCategory === 'Veg') {
      subcategories = getVegSubcategories();
    } else if (activeCategory === 'Non-Veg') {
      subcategories = getNonVegSubcategories();
    }

    return (
      <div className={styles.subcategoryButtons}>
        {subcategories.map(sub => (
          <button
            key={sub}
            className={`${styles.subButton} ${selectedSubcategory === sub ? styles.active : ''}`}
            onClick={() => setSelectedSubcategory(sub)}
          >
            {sub}
          </button>
        ))}
      </div>
    );
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Our Menu</h1>

      <div className={styles.mainCategories}>
        <button className={`${styles.iconButton} ${activeCategory === 'Veg' ? styles.active : ''}`}
          onClick={() => { setActiveCategory('Veg'); setSelectedSubcategory('North Indian'); }}>
          <FaLeaf color="green" /> Veg
        </button>
        <button className={`${styles.iconButton} ${activeCategory === 'Non-Veg' ? styles.active : ''}`}
          onClick={() => { setActiveCategory('Non-Veg'); setSelectedSubcategory('Main Course'); }}>
          <FaDrumstickBite color="red" /> Non-Veg
        </button>
        <button className={`${styles.iconButton} ${activeCategory === 'Dessert' ? styles.active : ''}`}
          onClick={() => { setActiveCategory('Dessert'); setSelectedSubcategory(''); }}>
          <FaIceCream /> Dessert
        </button>
        <button className={`${styles.iconButton} ${activeCategory === 'Beverages' ? styles.active : ''}`}
          onClick={() => { setActiveCategory('Beverages'); setSelectedSubcategory(''); }}>
          <FaGlassMartiniAlt /> Beverages
        </button>
      </div>

      {(activeCategory === 'Veg' || activeCategory === 'Non-Veg') && renderSubcategoryButtons()}

      <div className={styles.menuContent}>
        {activeCategory === 'Veg' && selectedSubcategory && renderVegMenu()}
        {activeCategory === 'Non-Veg' && selectedSubcategory && renderNonVegMenu()}
        {activeCategory === 'Dessert' && renderSimpleMenu('Dessert', dessertMenu)}
        {activeCategory === 'Beverages' && renderSimpleMenu('Beverages', beveragesMenu)}
      </div>
    </div>
  );
};

export default MenuPage;
