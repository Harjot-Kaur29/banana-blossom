import React, { useState } from 'react';
import styles from './MenuPage.module.css';
import {
  FaLeaf,
  FaDrumstickBite,
  FaIceCream,
  FaGlassMartiniAlt,
  FaPizzaSlice,
  FaHamburger,
  FaUtensils
} from 'react-icons/fa';

const vegMenu = {
  Breakfast: {
    'North Indian': ['Veg Grilled Sandwich', 'Paneer Tikka Sandwich', 'Spinach Corn Sandwich', 'Mexican Cheese Club Sandwich'],
    
  },
  'Main Course': {
    'North Indian': [
      'Dal Makhani',
      'Dal Tadka',
      'Aloo Jeera',
      'Paneer Butter Masala',
      'Kadhai Paneer',
      'Paneer Pasanda',
      'Paneer Lababdar',
      'Shahi Paneer',
      'Palak Paneer',
      'Paneer Dhaniya Adraki',
      'Soya Chaap Masala',
      'Banarasi Dum Aloo',
      'Malai Kofta',
      'Mix Veg.',
      'Makhani Chaap',
      'Tawa Chaap',
      'Kadhai Chaap',
      'Tawa Paneer',
      'Methi Corn',
      'Mattar Mashroom',
      'Mushroom Masala',
      'Kaju Paneer',
      'Kaju Paneer Masala',
      'Kaju Makhana Masala',
    ],
    'South Indian': [
      'Plain Dosa',
      'Plain Rava Dosa',
      'Masala Dosa',
      'Rava masala Dosa',
      'Onion Masala dosa',
      'Paneer dosa',
      'Sambhar Idli',
      'Sambhar Vada',
      'Onion Uttapam',
      'Mix Uttapam',
      'Egg Bhujia Dosa',
    ],
    Chinese: [
      'Chilly Paneer',
      'Chilli Mushroom',
      'Veg Manchurian Gravy',
      'Veg Hakka Noodle',
      'Chilly Garlic Noodles',
      'Singapuri Noodles',
      'Spicy Shezwan Noodles',
      'Pan Fries Noodles',
    ],
    Italian: [
      'Pasta Primavera',
      'Pink Souce Pasta',
      'White Souce Pasta',
      'Paneer Nugets',
      'Cheese Nugets',
      'Corn Cheese Nugets',
    ],
  },
  Starters: {
    'North Indian': [
      'Paneer Tikka',
      'Hara Bhara Kebab',
      'Dahi K Sholay',
      'Soya Malai Tikka',
      'Soya Tikka',
      'Aloo Dilnaaz',
      'Dahi Kebab',
      'Tandoori Mushroom Tikka',
      'Makhani Malai Chaap',
      'Crispy Mushroom',
      'French Fries'
    ],
    Chinese: [
      'Spring Rolls',
      'Chilly Honey Potato',
      'Veg Manchurian Dry',
      'Classic Chilli Paneer',
      'Spring Roll',
      'Cigar Roll',
      'Chilly Potato',
      'Soya Chilly Chaap',
      'Chilly Babycorn',
      'Crispy Corn'
    ],
  },
  Staples: {
    'North Indian': [
      'Roti (Tandoori/ Butter)',
      'Roomali Roti',
      'Lachha Parantha (Pudina/Harimirch)',
      'Naan (Plain /Butter / Garlic)',
      'Missi Roti / Pudina / Laccha Parantha',
      'Stuffed Naan / Parantha'
    ]
  },
  Soups: [
    'Hot & Sour Soup',
    'Sweet Corn Soup',
    'Manchow Soup',
    'Tomato Soup',
    'Mushroom Soup',
    'Banana Blossom Soup (Chief Spl.)'
  ]
};

const nonVegMenu = {
  'Main Course': [
    'Butter Chicken',
    'Kadhai Murgh',
    'Murgh Curry',
    'Murgh Kali Mirch',
    'Murgh Rara',
    'Murgh Tikka Masala',
    'Murgh Saag Wala',
    'Gosht Saag Wala',
    'Gosht Rogan Josh',
    'Gosht Rara',
    'Laal Maas',
    'Chicken Sheekh Tawa Masala',
    'Tawa Chicken',
    'Chicken Korma',
    'Chicken Lababdar',
    'Chicken Do Pyaza',
    'Mutton Sheekh Masala',
    'Mutton Curry',
    'Mutton Handi',
    'Mutton Korma',
    'Mutton Boti Kebab',
    'Mutton Champaran'
  ],
  Starters: [
    'Murgh Afgani',
    'Murgh Tikka',
    'Lehsuni Chicken Tikka',
    'Haryali Chicken Tikka',
    'Angara Chicken Tikka',
    'Tandoori Chicken',
    'Fish Tikka',
    'Fish Curry',
    'Tangri Kebab',
    'Murg Malai Tikka',
    'Murgh Seekh Kebab',
    'Ghosht Seekh Kebab'
  ],
  Soups: [
    'Chicken Soup',
    'Hot & Sour Chicken Soup',
    'Checken Sweet Corn Soup',
    'Chicken Manchow Soup',
    'Mutton Payaa Soup (Advance Order)',
    'Banana Blossom Soup (Chief Spl.'
  ],
     Chinese: [
      'Veg Hakka Noodles',
      'Veg Fried Rice',
      'Chicken Spring Roll',
      'Lemon Chicken',
      'Hydra Chicken 65',
      'Chilli Chicken (Dry)',
      'Chilli Fish',
      'Chicken Lollypop',
      'Chicken Manchurian',
    ],
};

const dessertMenu = ['Gulab Jamun', 'Phirni(Gulab/Kesar)', 'Choice of Ice Cream'];
const beveragesMenu = [
  'Chai (Ginger / Cardamom / Masala)',
  'Lemon N Honey Tea',
  'Hot Coffee / Cold Coffee',
  'Juice (Pineapple/Guava/Anaar)',
  'Lassi (Sweet/Namkeen)',
  'Classic Mojito',
  'Royal Mojito',
  'Raspberry / Mintberry/Blueberry Mojito',
  'Virgin Mojito',
  'Green Apple /Water Melon Mojito',
  'Aam Pana (Seasonal)',
  'Fresh Lime Soda',
  'Oreo Shake',
  'Banana Shake',
  'Mango Shake (Seasonal)'
];

const MenuPage = () => {
  const [activeCategory, setActiveCategory] = useState('Veg');
  const [selectedSubcategory, setSelectedSubcategory] = useState('North Indian');

  const getVegSubcategories = () => {
    const subcats = new Set();
    Object.entries(vegMenu).forEach(([section, items]) => {
      if (typeof items === 'object' && !Array.isArray(items)) {
        Object.keys(items).forEach(subcat => subcats.add(subcat));
      } else {
        subcats.add(section);
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
              <h2 className={styles.sectionTitle}>{section} – {subcat}</h2>
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
      {/* Hero Banner */}
      <div className={styles.hero}>
        <div className={styles.heroOverlay}></div>
        <h2 className={styles.heroText}>Welcome to Banana Blossom Kitchen</h2>
        <FaPizzaSlice className={styles.floatingIcon1} />
        <FaHamburger className={styles.floatingIcon2} />
        <FaUtensils className={styles.floatingIcon3} />
      </div>

      {/* Section Title + Divider */}
      <h1 className={styles.heading}>Our Menu</h1>
      <div className={styles.divider} />

      {/* Main Category Buttons */}
      <div className={styles.mainCategories}>
        <button
          className={`${styles.iconButton} ${activeCategory === 'Veg' ? styles.active : ''}`}
          onClick={() => { setActiveCategory('Veg'); setSelectedSubcategory('North Indian'); }}
        >
          <FaLeaf color="green" /> Veg
        </button>

        <button
          className={`${styles.iconButton} ${activeCategory === 'Non-Veg' ? styles.active : ''}`}
          onClick={() => { setActiveCategory('Non-Veg'); setSelectedSubcategory('Main Course'); }}
        >
          <FaDrumstickBite color="red" /> Non-Veg
        </button>

        <button
          className={`${styles.iconButton} ${activeCategory === 'Dessert' ? styles.active : ''}`}
          onClick={() => { setActiveCategory('Dessert'); setSelectedSubcategory(''); }}
        >
          <FaIceCream /> Dessert
        </button>

        <button
          className={`${styles.iconButton} ${activeCategory === 'Beverages' ? styles.active : ''}`}
          onClick={() => { setActiveCategory('Beverages'); setSelectedSubcategory(''); }}
        >
          <FaGlassMartiniAlt /> Beverages
        </button>
      </div>

      {/* Subcategory Buttons (Veg / Non-Veg) */}
      {(activeCategory === 'Veg' || activeCategory === 'Non-Veg') && renderSubcategoryButtons()}

      {/* Menu Content */}
      <div className={styles.menuContent}>
        {activeCategory === 'Veg' && selectedSubcategory && renderVegMenu()}
        {activeCategory === 'Non-Veg' && selectedSubcategory && renderNonVegMenu()}
        {activeCategory === 'Dessert' && renderSimpleMenu('Dessert', dessertMenu)}
        {activeCategory === 'Beverages' && renderSimpleMenu('Beverages', beveragesMenu)}
      </div>

      {/* Decorative Background Blobs */}
      <div className={styles.blobOne}></div>
      <div className={styles.blobTwo}></div>
    </div>
  );
};

export default MenuPage;
