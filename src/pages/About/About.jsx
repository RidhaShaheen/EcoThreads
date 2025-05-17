import React from "react";
import styles from "./About.module.css";

const About = () => {
  return (
    <div className={styles.aboutPage}>
      <header className={styles.headerSection}>
        <h1 className={styles.title}>About EcoThread</h1>
        <p className={styles.tagline}>
          Your guide to conscious fashion and sustainable living.
        </p>
      </header>

      <section className={styles.missionSection}>
        <h2>Our Mission</h2>
        <p>
          EcoThread empowers individuals to make eco-friendly clothing choices
          through education, community engagement, and gamified challenges.
          Whether you're just starting your sustainability journey or exploring
          new ways to make an impact, EcoThread is here to inspire and guide
          you.
        </p>
      </section>

      <section className={styles.offerSection}>
        <h2>What We Offer</h2>
        <ul>
          <li>✨ Challenges that encourage planet-friendly habits</li>
          <li>🧠 Quizzes to boost your knowledge of sustainable fashion</li>
          <li>🛍️ A curated shop of eco-conscious products</li>
          <li>🤖 A personal stylist chatbot for smart, sustainable outfit ideas</li>
          <li>🏆 Leaderboards and rewards to keep it engaging</li>
          <li>📚 Resources and donation links to make real-world impact</li>
        </ul>
      </section>

      <section className={styles.extraSection}>
        <h2>Why Sustainable Fashion?</h2>
        <p>
          The fashion industry is one of the most polluting industries in the
          world. Fast fashion contributes to waste, water pollution, and
          unethical labor practices. EcoThread was created to make sustainability
          simple, fun, and rewarding — so everyone can play a part in changing
          the narrative.
        </p>
      </section>

      <section className={styles.extraSection}>
        <h2>Meet the Team</h2>
        <p>
          We’re a group of students, designers, and eco-activists passionate
          about making sustainable fashion accessible to all. From developers to
          digital artists, everyone on our team shares the same goal: making
          fashion a force for good.
        </p>
      </section>

      <section className={styles.extraSection}>
        <h2>Our Impact</h2>
        <ul>
          <li>♻️ Over 2,000 clothing items diverted from landfills</li>
          <li>🌱 5,000+ users taking sustainability challenges</li>
          <li>🧵 300+ ethical brands promoted through our shop</li>
          <li>📦 150 school supply donations facilitated</li>
        </ul>
      </section>

      <section className={styles.extraSection}>
        <h2>What Our Users Say</h2>
        <div className={styles.testimonials}>
          <blockquote>
            “EcoThread made it so easy to change my shopping habits. The
            challenges are actually fun!”<br />
            <span>— Maya T.</span>
          </blockquote>
          <blockquote>
            “I love the chatbot stylist! I got outfit ideas using only what I
            already owned.”<br />
            <span>— Jordan L.</span>
          </blockquote>
          <blockquote>
            “The leaderboard kept me motivated to complete more challenges.
            Definitely recommending to friends.”<br />
            <span>— Rina K.</span>
          </blockquote>
        </div>
      </section>

      <section className={styles.closingSection}>
        <p>
          Join us in building a future where fashion doesn’t cost the Earth.
          Together, we can thread a more sustainable world — one outfit at a
          time.
        </p>
      </section>
    </div>
  );
};

export default About;
