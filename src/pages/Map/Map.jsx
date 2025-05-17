import React from "react";
import styles from "./Map.module.css";

const articles = [
  {
    id: 1,
    title: "The Environmental Impact of Fast Fashion",
    url: "https://www.sustainability-times.com/fashion/environmental-impact-fast-fashion/",
  },
  {
    id: 2,
    title: "10 Easy Ways to Shop Sustainably",
    url: "https://www.greenlivingtips.com/sustainable-shopping/",
  },
  {
    id: 3,
    title: "How to Care for Your Clothes to Make Them Last",
    url: "https://www.ecofashioncare.com/how-to-care-clothes/",
  },
];

const donationLinks = [
  {
    id: 1,
    name: "Fashion Revolution Foundation",
    url: "https://www.fashionrevolution.org/",
  },
  {
    id: 2,
    name: "Global Recycling Foundation",
    url: "https://globalrecyclingfoundation.org/",
  },
  {
    id: 3,
    name: "Charity: Water",
    url: "https://www.charitywater.org/",
  },
];

const sustainabilityTips = [
  "Buy secondhand or vintage clothing.",
  "Choose natural or recycled fabrics.",
  "Wash clothes in cold water to save energy.",
  "Donate or swap clothes instead of throwing away.",
  "Avoid impulse buys, plan your wardrobe carefully.",
];

const Resources = () => {
  return (
    <div className={styles.resourcesPage}>
      <header className={styles.header}>
        <h1>EcoThread Resources</h1>
        <p>Your guide to learning and acting on sustainable fashion.</p>
      </header>

      <section className={styles.section}>
        <h2>Articles to Explore</h2>
        <ul className={styles.list}>
          {articles.map(({ id, title, url }) => (
            <li key={id}>
              <a href={url} target="_blank" rel="noopener noreferrer" className={styles.link}>
                {title}
              </a>
            </li>
          ))}
        </ul>
      </section>

      <section className={styles.section}>
        <h2>Donation Opportunities</h2>
        <ul className={styles.list}>
          {donationLinks.map(({ id, name, url }) => (
            <li key={id}>
              <a href={url} target="_blank" rel="noopener noreferrer" className={styles.link}>
                {name}
              </a>
            </li>
          ))}
        </ul>
      </section>

      <section className={styles.section}>
        <h2>Sustainability Tips</h2>
        <ul className={styles.list}>
          {sustainabilityTips.map((tip, idx) => (
            <li key={idx} className={styles.tip}>
              🌿 {tip}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

const Map = () => {
  return (
    <div className={styles.resourcesPage}>
      <header className={styles.header}>
        <h1>EcoThread Resources</h1>
        <p>Your guide to learning and acting on sustainable fashion.</p>
      </header>

      <section className={styles.section}>
        <h2>Articles to Explore</h2>
        <ul className={styles.list}>
          {articles.map(({ id, title, url }) => (
            <li key={id}>
              <a href={url} target="_blank" rel="noopener noreferrer" className={styles.link}>
                {title}
              </a>
            </li>
          ))}
        </ul>
      </section>

      <section className={styles.section}>
        <h2>Donation Opportunities</h2>
        <ul className={styles.list}>
          {donationLinks.map(({ id, name, url }) => (
            <li key={id}>
              <a href={url} target="_blank" rel="noopener noreferrer" className={styles.link}>
                {name}
              </a>
            </li>
          ))}
        </ul>
      </section>

      <section className={styles.section}>
        <h2>Sustainability Tips</h2>
        <ul className={styles.list}>
          {sustainabilityTips.map((tip, idx) => (
            <li key={idx} className={styles.tip}>
              🌿 {tip}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Map;
