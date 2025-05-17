import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Challenge.module.css";

const challenges = [
  { title: "Clean Your Closet", points: 25},
  { title: "Go Thrifting", points: 25},
  { title: "Donate a Piece of Clothing", points: 25},
  { title: "Repair a Piece of Clothing", points: 20},
  { title: "Host a Clothing Swap", points: 30},
];

const ChallengesPage = () => {
  const [completed, setCompleted] = useState([0]); // Start with the first challenge unlocked
  const navigate = useNavigate();

  const handleClick = (index) => {
    // Unlock the next challenge
    setCompleted((prev) => {
      if (!prev.includes(index + 1) && index + 1 < challenges.length) {
        return [...prev, index + 1];
      }
      return prev;
    });

    // Navigate to the challenge details page
    navigate(`/challenge/${index}`, { state: { challengeIndex: index } });
  };

  return (
    <div className={styles.challengePage}>
      <div className={styles.header}>
        <h2>🌿 Challenges</h2>
        <div className={styles.logo}>Sustain Style</div>
      </div>
      <div className={styles.grid}>
        {challenges.map((item, index) => {
          const isLocked = index > 0 && !completed.includes(index);
          return (
            <div
              key={index}
              className={`${styles.card}`}
              onClick={() => handleClick(index)}
            >
              <img src={item.image} alt={item.title} className={styles.image} />
              <div className={styles.cardContent}>
                <h3 className={styles.title}>{item.title}</h3>
                <div className={styles.points}>⚡ {item.points} points</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};export default ChallengesPage;