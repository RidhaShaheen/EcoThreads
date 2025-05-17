import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom'; // Added useLocation
import styles from './ChallengeDetailsPage.module.css';

const ChallengeDetailsPage = () => {
  const [isFinished, setIsFinished] = useState(false);
  const [isPostUploaded, setIsPostUploaded] = useState(false);
  const [isVerified, setIsVerified] = useState(false);
  const [points, setPoints] = useState(0);
  const navigate = useNavigate();
  const location = useLocation();

  const handleFinish = () => {
    setIsFinished(true);
    setPoints(points + 10);
  };

  const handleUploadPost = () => {
    setIsPostUploaded(true);

    localStorage.setItem('postProgress', 'true'); 
    navigate('/community'); 
    setTimeout(() => {
      localStorage.setItem('postSubmitted', 'true');
    }, 2000);
};

  const handleGoBack = () => {
    const currentChallengeIndex = location.state?.challengeIndex || 0;
    navigate('/challenge', { state: { unlockNext: currentChallengeIndex + 1 } }); // Unlock the next challenge
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>Challenge: Clean Your Closet</h1>
        <p>Earn 10 points for finishing, and 15 more for posting!</p>
      </header>

      <main className={styles.main}>
        <button
          className={`${styles.button} ${isFinished ? styles.disabled : styles.active}`}
          onClick={handleFinish}
          disabled={isFinished}
        >
          {isFinished ? 'Finished ✅' : 'Mark as Finished'}
        </button>

        <button
          className={`${styles.button} ${isVerified ? styles.verified : isPostUploaded ? styles.verifying : styles.active}`}
          onClick={handleUploadPost}
          disabled={!isFinished || isPostUploaded}
        >
          {isVerified ? 'Verified ✅' : isPostUploaded ? 'Verifying...' : 'Upload Post to Community'}
        </button>

        <button
          className={styles.button}
          onClick={handleGoBack}
        >
          Go Back to Challenges
        </button>

        {isVerified && <p className={styles.successMessage}>Great! Your post is verified, and you've earned all your points!</p>}

        <p className={styles.points}>Total Points: {points}</p>
      </main>
    </div>
  );
};

export default ChallengeDetailsPage;
