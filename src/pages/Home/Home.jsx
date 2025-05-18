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
          name: 'Organic Cotton T-Shirt',
          price: '$40',
          image: '/src/assets/image.png', // Updated to use the downloaded image
          link: 'https://www.patagonia.com',
        },
        {
          id: 2,
          name: 'Recycled Wool Sweater',
          price: '$120',
          image: 'https://example.com/images/recycled-wool-sweater.jpg',
          link: 'https://www.patagonia.com',
        },
        {
          id: 3,
          name: 'Recycled Wool Sweater',
          price: '$120',
          image: 'https://example.com/images/recycled-wool-sweater.jpg',
          link: 'https://www.patagonia.com',
        },
      ],
    },
    {
      name: 'Everlane',
      items: [
        {
          id: 4,
          name: 'Hemp Canvas Tote Bag',
          price: '$25',
          image: 'https://example.com/images/hemp-tote-bag.jpg',
          link: 'https://www.everlane.com',
        },
        {
          id: 5,
          name: 'Recycled Denim Jeans',
          price: '$98',
          image: 'https://example.com/images/recycled-denim-jeans.jpg',
          link: 'https://www.everlane.com',
        },
        {
          id: 6,
          name: 'Recycled Wool Sweater',
          price: '$120',
          image: 'https://example.com/images/recycled-wool-sweater.jpg',
          link: 'https://www.patagonia.com',
        },
      ],
    },
    {
      name: 'Reformation',
      items: [
        {
          id: 7,
          name: 'Eco-Friendly Dress',
          price: '$150',
          image: 'https://example.com/images/eco-friendly-dress.jpg',
          link: 'https://www.thereformation.com',
        },
        {
          id: 8,
          name: 'Sustainable Blouse',
          price: '$80',
          image: 'https://example.com/images/sustainable-blouse.jpg',
          link: 'https://www.thereformation.com',
        },
        {
          id: 9,
          name: 'Recycled Wool Sweater',
          price: '$120',
          image: 'https://example.com/images/recycled-wool-sweater.jpg',
          link: 'https://www.patagonia.com',
        },
      ],
    },
    {
      name: 'ThredUp',
      items: [
        {
          id: 10,
          name: 'Vintage Leather Jacket',
          price: '$60',
          image: 'https://example.com/images/vintage-leather-jacket.jpg',
          link: 'https://www.thredup.com',
        },
        {
          id: 11,
          name: 'Pre-Loved Sneakers',
          price: '$45',
          image: 'https://example.com/images/pre-loved-sneakers.jpg',
          link: 'https://www.thredup.com',
        },
        {
          id: 12,
          name: 'Upcycled Backpack',
          price: '$35',
          image: 'https://example.com/images/upcycled-backpack.jpg',
          link: 'https://www.thredup.com',
        },
      ],
    },
    {
      name: 'Depop',
      items: [
        {
          id: 13,
          name: 'Handmade Earrings',
          price: '$20',
          image: 'https://example.com/images/handmade-earrings.jpg',
          link: 'https://www.depop.com',
        },
        {
          id: 14,
          name: 'Custom Graphic Tee',
          price: '$30',
          image: 'https://example.com/images/custom-graphic-tee.jpg',
          link: 'https://www.depop.com',
        },
        {
          id: 15,
          name: 'Vintage Sunglasses',
          price: '$25',
          image: 'https://example.com/images/vintage-sunglasses.jpg',
          link: 'https://www.depop.com',
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
