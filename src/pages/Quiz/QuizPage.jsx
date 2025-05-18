import React from 'react';
import { Link } from 'react-router-dom';
import styles from './QuizPage.module.css';

const quizzes = [
  {
    id: 'aesthetic',
    title: 'Discover Your Fashion Aesthetic',
    description: 'Uncover whether your style aligns with Cottagecore, Dark Academia, Y2K, or Minimalist vibes.',
  },
  {
    id: 'style-personality',
    title: 'What\'s Your Style Personality?',
    description: 'Determine if you\'re more of a Classic, Bohemian, Edgy, or Romantic dresser.',
  },
  {
    id: 'fashion-era',
    title: 'Which Fashion Era Inspires You?',
    description: 'Explore if your fashion sense is rooted in the \'70s boho, \'80s glam, \'90s grunge, or 2000s chic.',
  },
  {
    id: 'capsule-wardrobe',
    title: 'Build Your Capsule Wardrobe',
    description: 'Identify essential pieces that align with your lifestyle and aesthetic preferences.',
  },
  {
    id: 'eco-friendly-fabrics',
    title: 'Eco-Friendly Fabrics',
    description: 'Learn about sustainable fabric choices and their benefits.',
  },
  {
    id: 'upcycling-wardrobe',
    title: 'Upcycling Your Wardrobe',
    description: 'Discover creative ways to upcycle and reuse old clothes.',
  },
  {
    id: 'carbon-footprint',
    title: 'Carbon Footprint Awareness',
    description: 'Learn how your fashion choices impact the environment.',
  },
  {
    id: 'sustainable-shopping',
    title: 'Sustainable Shopping Habits',
    description: 'Discover how to shop sustainably and make eco-friendly choices.',
  },
];

const QuizPage = () => {
  return (
    <div className={`${styles.quizPage} ${styles.quizPageContainer}`}>
      <h1 className={styles.mainHeader}>Quizzes</h1>
      <div className={styles.splitContainer}>
        <div className={styles.leftPane}>
          <h2 className={styles.subtopicHeader}>Sustainability Quizzes</h2>
          <div className={styles.quizList}>
            {quizzes.filter(quiz => ['sustainable-fashion', 'eco-friendly-fabrics', 'upcycling-wardrobe', 'carbon-footprint', 'sustainable-shopping'].includes(quiz.id)).map((quiz) => (
              <div key={quiz.id} className={styles.quizCard}>
                <h2 className={styles.quizTitle}>{quiz.title}</h2>
                <p className={styles.quizDescription}>{quiz.description}</p>
                <Link to={`/quiz/${quiz.id}`} className={styles.quizLink}>
                  Take Quiz
                </Link>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.rightPane}>
          <h2 className={styles.subtopicHeader}>Fashion Quizzes</h2>
          <div className={styles.quizList}>
            {quizzes.filter(quiz => !['sustainable-fashion', 'eco-friendly-fabrics', 'upcycling-wardrobe', 'carbon-footprint', 'sustainable-shopping'].includes(quiz.id)).map((quiz) => (
              <div key={quiz.id} className={styles.quizCard}>
                <h2 className={styles.quizTitle}>{quiz.title}</h2>
                <p className={styles.quizDescription}>{quiz.description}</p>
                <Link to={`/quiz/${quiz.id}`} className={styles.quizLink}>
                  Take Quiz
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizPage;