import React from "react";
import styles from "./About.module.css";

const About = () => {
  return (
    <div className={styles.aboutPage}>
      <header className={styles.headerSection}>
        <h1 className={styles.title}>About EcoThread</h1>
        <p className={styles.tagline}>
          EcoThread is your companion on the journey to sustainable fashion. We aim to make eco-friendly living accessible and enjoyable through interactive tools, community engagement, and curated resources.
        </p>
      </header>

      <section>
        <h2 className={styles.sectionTitle}>Our Mission</h2>
        <div className={styles.missionSection}>
          <p>
            At EcoThread, we empower individuals to make environmentally conscious clothing choices. Through education, community involvement, and engaging experiences, we inspire sustainable habits that benefit both people and the planet.
          </p>
        </div>
      </section>

      <section>
        <h2 className={styles.sectionTitle}>What We Offer</h2>
        <div className={styles.offerSection}>
          <ul>
            <li>🛍️ Curated Shop: Discover a selection of eco-conscious products from ethical brands.</li>
            <li>📚 Resources: Access articles, donation opportunities, and practical tips to deepen your understanding of sustainable fashion.</li>
            <li>🧠 Fashion-Themed Quizzes: Engage with interactive quizzes to explore your style and sustainability knowledge.</li>
            <li>🤖 Personalized Stylist Chatbot: Receive outfit suggestions tailored to your wardrobe and eco-friendly preferences.</li>
          </ul>
        </div>
      </section>

      <section className={styles.section}>
        <h2>Why Sustainable Fashion?</h2>
        <div className={styles.missionSection}>
          <h3>Reducing Waste</h3>
          <p>By promoting recycling and upcycling, sustainable fashion minimizes environmental impact.</p>
        </div>
        <div className={styles.missionSection}>
          <h3>Conserving Resources</h3>
          <p>Eco-friendly practices in fashion save water, energy, and other natural resources.</p>
        </div>
        <div className={styles.missionSection}>
          <h3>Empowering Communities</h3>
          <p>Supporting sustainable brands fosters fair trade and ethical labor practices.</p>
        </div>
      </section>

      <section className={styles.section}>
        <h2>Meet Our Team</h2>
        <div className={styles.missionSection}>
          <h3>Ridha Shaheen Shahul Hameed</h3>
          <p>Co-founder, passionate about sustainable fashion and community building.</p>
        </div>
        <div className={styles.missionSection}>
          <h3>Yashika Katyal</h3>
          <p>Co-founder, dedicated to making sustainable fashion accessible to all.</p>
        </div>
      </section>
    </div>
  );
};

export default About;
