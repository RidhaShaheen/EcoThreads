import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import styles from "./Challenge.module.css";

const challenges = [
  { title: "Clean Your Closet", points: 25 },
  { title: "Go Thrifting", points: 25 },
  { title: "Donate a Piece of Clothing", points: 25 },
  { title: "Repair a Piece of Clothing", points: 20 },
  { title: "Host a Clothing Swap", points: 30 },
  { title: "DIY Upcycle Old Clothes", points: 30 },
  { title: "Wear the Same Outfit Twice a Week", points: 15 },
  { title: "Research Ethical Brands", points: 15 },
  { title: "Buy Secondhand Instead of New", points: 25 },
  { title: "Create a Capsule Wardrobe", points: 40 },
  { title: "Donate Clothes Responsibly", points: 20 },
  { title: "Post About Your Challenge", points: 10 },
  { title: "Wash Clothes in Cold Water", points: 10 },
];

const Challenge = () => {
  const [completedChallenges, setCompletedChallenges] = useState([0]); // Start with the first challenge unlocked
  const navigate = useNavigate(); // Initialize navigate

  const handleCardClick = (index) => {
    setCompletedChallenges((prev) => {
      if (!prev.includes(index + 1) && index + 1 < challenges.length) {
        return [...prev, index + 1];
      }
      return prev;
    });

    // Navigate to the challenge details page
    navigate(`/challenge/${index + 1}`);
  };

  return (
    <div className={styles.challengePage}>
      <div className={styles.header}>
        <h2>Challenges</h2>
        <div className={styles.logo}>Sustain Style</div>
      </div>

      <div className={styles.grid}>
        {challenges.map((item, index) => {
          const isLocked = false;
          return (
            <div
              key={index}
              className={`${styles.card} ${isLocked ? styles.locked : ""}`}
              onClick={() => !isLocked && handleCardClick(index)} // Add click handler
            >
              <div className={styles.cardContent}>
                <h3 className={styles.title}>{item.title}</h3>
                {item.points && (
                  <div className={styles.points}>⚡ {item.points}</div>
                )}
                {item.price && (
                  <div className={styles.price}>{item.price}</div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}; export default Challenge;