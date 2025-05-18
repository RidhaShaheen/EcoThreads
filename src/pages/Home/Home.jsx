import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; 
import styles from "./Home.module.css";

const Home = () => {
  const navigate = useNavigate(); // Initialize navigate

  const handleNavigateToChallenges = () => {
    navigate("/challenge"); // Navigate to the Challenges page
  };

  const handleNavigateToMap = () => {
    navigate("/map"); // Navigate to the Map page
  };

  const [stores] = useState([
    {
name: 'Patagonia',
      items: [
        {
          id: 1,
          name: 'Womens Tidal Threads Dress',
          price: '$169',
          image: '/src/assets/drewss.png', 
          link: 'https://www.patagonia.ca/product/womens-tidal-threads-dress/58450.html?dwvar_58450_color=UNBL',
        },
        {
          id: 2,
          name: 'Mens Daily Polo Shirt',
          price: '$79',
          image: '/src/assets/mens polo.png',
          link: 'https://www.patagonia.ca/product/mens-daily-polo-shirt/53251.html?dwvar_53251_color=SSTM',
        },
        {
          id: 3,
          name: 'Baby Fitz Roy Flurries T-Shirt',
          price: '$35',
          image: '/src/assets/patagonia baby tee.png',
          link: 'https://www.patagonia.ca/product/baby-fitz-roy-flurries-t-shirt/60382.html?dwvar_60382_color=UDNL',
        },
      ],
    },
    {
      name: 'Everlane',
      items: [
        {
          id: 4,
          name: 'The Gauze Mini Tiered Dress',
          price: '$218',
          image: '/src/assets/tiered dress.png',
          link: 'https://www.everlane.com/products/womens-gauze-mini-tiered-dress-soft-cobalt?collection=womens-dresses',
        },
        {
          id: 5,
          name: 'The Rib-Knit Cap-Sleeve Midi Dress',
          price: '$132',
          image: 'src/assets/midi dress.png',
          link: 'https://www.everlane.com/products/womens-rib-knit-cap-sleeve-midi-dress-black?collection=womens-sale',
        },
        {
          id: 6,
          name: 'The Cabin Beanie',
          price: '$19',
          image: 'src/assets/beanie.png',
          link: 'https://www.everlane.com/products/womens-gifting-beanie-black?collection=womens-sale',
        },
      ],
    },
    {
      name: 'Reformation',
      items: [
        {
          id: 7,
          name: 'Hannah Shoulder Bag',
          price: '$428',
          image: 'src/assets/hannah handbag.png',
          link: 'https://www.thereformation.com/products/hannah-shoulder-bag/1317914LLP.html?dwvar_1317914LLP_color=LLP&dwvar_1317914LLP_size_clothing=0OS&quantity=1',
        },
        {
          id: 8,
          name: 'Pears Knit Top',
          price: '$88',
          image: 'src/assets/pears top.png',
          link: 'https://www.thereformation.com/products/pears-knit-top/1317581FDL.html?dwvar_1317581FDL_color=FDL',
        },
        {
          id: 9,
          name: 'HOKA x Reformation Mach 6 LS Crochet',
          price: '$190',
          image: 'src/assets/hoka shoes.png',
          link: 'https://www.thereformation.com/products/hoka-x-reformation-mach-6-ls-crochet/1315742FLG.html?dwvar_1315742FLG_color=FLG',
        },
      ],
    },
    {
      name: 'ThredUp',
      items: [
        {
          id: 10,
          name: 'Casual dress',
          price: '$24.99',
          image: 'src/assets/casual dress.png',
          link: 'https://www.thredup.com',
        },
        {
          id: 11,
          name: 'Coach 1941 Boots',
          price: '$32.49',
          image: 'src/assets/Screenshot 2025-05-18 022127.png',
          link: 'https://www.thredup.com/product/women-coach-1941-black-boots/191611689?query_id=1036970862354178048&result_id=1036970862631002112',
        },
        {
          id: 12,
          name: 'Nike Black Backpack',
          price: '$24.99',
          image: 'src/assets/nike black bag.png',
          link: 'https://www.thredup.com/product/women-spandex-nike-black-backpack/',
        },
      ],
    },
    {
      name: 'Depop',
      items: [
        {
          id: 13,
          name: 'Aritzia Mens Brown Joggers-tracksuits',
          price: '$17.49',
          image: 'src/assets/brown aritizia sweats.png',
          link: 'https://www.depop.com/products/jjjjior-brown-aritzia-super-world-sweatpants',
        },
        {
          id: 14,
          name: 'Lululemon Womens XS Black Hoodie',
          price: '$15',
          image: 'src/assets/lululemon jacket.png',
          link: 'https://www.depop.com/products/wearelse-lululemon-black-zip-up-hoodie',
        },
        {
          id: 15,
          name: 'Nike Mens 11.5 Dunk Low Pandas',
          price: '$40',
          image: 'src/assets/nike shoes.png',
          link: 'https://www.depop.com/products/kirby333-nike-dunk-low-panda-trainers',
        },
      ],
    },
  ]);

  const [searchTerm, setSearchTerm] = useState(""); // State for search term

  const filteredStores = stores.map((store) => ({
    ...store,
    items: store.items.filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    ),
  }));

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className={styles.home}>
      <header className={styles.header}>
        <h1 className={styles.logo}>Anti-Fast Fashion Brands</h1>
        <input
          type="text"
          placeholder="Search items..."
          value={searchTerm}
          onChange={handleSearchChange}
          className={styles.searchBar}
        />
      </header>

      <section className={styles.shopSection}>
        {filteredStores.map((store) => (
          <div key={store.name} className={styles.storeSection}>
            <h2>
              {store.name}
              <a href={store.items[0]?.link} target="_blank" rel="noopener noreferrer" className={styles.storeArrow}>
                →
              </a>
            </h2>
            <div className={styles.productList}>
              {store.items.slice(0, 3).map((item) => (
                <div key={item.id} className={styles.productCard}>
                  <img src={item.image} alt={item.name} />
                  <h3>{item.name}</h3>
                  <p>{item.price}</p>
                  <a href={item.link} target="_blank" rel="noopener noreferrer">
                    <button>Visit Website</button>
                  </a>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2>Find your local thrift store</h2>
          <span
            className={styles.arrow}
            onClick={handleNavigateToMap} // Add click handler
          >
            ›
          </span>
        </div>
        
        <iframe
  title="Thrift Stores Near Me"
  className={styles.map}
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.093720376122!2d-122.41941538468124!3d37.77492927975917!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808f7e2e4415b7d3%3A0x2e0db3db2b2e43f9!2sThrift%20Store!5e0!3m2!1sen!2sus!4v1615324144741!5m2!1sen!2sus"
  width="100%"
  height="300"
  style={{ border: 0 }}
  allowFullScreen=""
  loading="lazy"
/>

      </section>
    </div>
  );
};

export default Home;
