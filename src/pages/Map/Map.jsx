import React from "react";
import styles from "./Map.module.css";

const articles = [
  {
    id: 1,
    title: "The Environmental Impact of Fast Fashion, Explained",
    url: "https://earth.org/fast-fashions-detrimental-effect-on-the-environment/",
  },
  {
    id: 2,
    title: "TOOLKIT: HOW TO SUSTAINABLY SHOP FOR YOUR CLOTHES",
    url: "https://www.earthday.org/toolkit-how-to-shop-for-your-clothes/",
  },
  {
    id: 3,
    title: "8 Ways to Make Your Clothes Last Longer To Practice a Sustainable Lifestyle",
    url: "https://thegoodtee.com/blogs/news/howtobuyqualityclothing",
  },
  {
    id: 4,
    title: "Overconsumption in the fashion industry",
    url: "https://www.fashionrevolution.org/overconsumption-in-the-fashion-industry/",
  },
  {
    id: 5,
    title: "7 Fast Fashion Companies Responsible for Environmental Pollution",
    url: "https://earth.org/fast-fashion-companies/",
  },
  {
    id: 6,
    title: "99 Sustainable Clothing Brands By Budget ",
    url: "https://www.thegoodtrade.com/features/fair-trade-clothing/",
  },
];

const donationLinks = [
  {
    id: 1,
    name: "Clean Clothes Campaign",
    url: "https://cleanclothes.org/donate",
  },
  {
    id: 2,
    name: "Fashion Revolution",
    url: "https://www.fashionrevolution.org/donate/,",
  },
  {
    id: 3,
    name: "Kitchener (Cambridge, Waterloo) Clothing/Textile Recycling",
    url: "https://recyclingquotes.com/kitchener-cambridge-waterloo-clothingtextile-recycling.html",
  },
];

const sustainabilityTips = [
  "Buy secondhand or vintage clothing.",
  "Choose natural or recycled fabrics.",
  "Wash clothes in cold water to save energy.",
  "Donate or swap clothes instead of throwing away.",
  "Avoid impulse buys, plan your wardrobe carefully.",
];

const videos = [
  {
    id: 1,
    title: "Sustainable Fashion Tips",
    embedUrl: "https://www.youtube.com/embed/LWvOlZ4hPU0",
  },
  {
    id: 2,
    title: "Eco-Friendly Living",
    embedUrl: "https://www.youtube.com/embed/BiSYoeqb_VY",
  },
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

      <section className={styles.section}>
        <h2>Videos</h2>
        <div className={styles.videoContainer}>
          {videos.map((video) => (
            <div key={video.id} className={styles.videoItem}>
              <iframe
                src={video.embedUrl}
                title={video.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Map;
