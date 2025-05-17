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
    id: 'seasonal-color',
    title: 'Seasonal Color Analysis',
    description: 'Find out which color palette complements your natural features—Spring, Summer, Autumn, or Winter.',
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
];

const QuizPage = () => {
  return (
    <div className={styles.quizPage}>
      <h1 className={styles.header}>Fashion Quizzes</h1>
      <div className={styles.quizList}>
        {quizzes.map((quiz) => (
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
  );
};

export default QuizPage;