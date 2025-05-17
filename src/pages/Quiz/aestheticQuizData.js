const aestheticQuizData = {
  questions: [
    {
      question: 'What\'s your ideal weekend activity?',
      options: [
        { text: 'Reading poetry in a cozy café', type: 'Dark Academia' },
        { text: 'Having a picnic in a meadow', type: 'Cottagecore' },
        { text: 'Shopping at vintage stores', type: 'Y2K' },
        { text: 'Organizing your wardrobe', type: 'Minimalist' },
      ],
    },
    {
      question: 'Choose a color palette:',
      options: [
        { text: 'Earthy tones and neutrals', type: 'Cottagecore' },
        { text: 'Black, white, and gray', type: 'Minimalist' },
        { text: 'Pastels and bright colors', type: 'Y2K' },
        { text: 'Deep browns and burgundy', type: 'Dark Academia' },
      ],
    },
    // Add more questions as needed
  ],
  results: {
    'Cottagecore': 'You embrace the romantic and nature-inspired aesthetic of Cottagecore.',
    'Dark Academia': 'You are drawn to the intellectual and moody vibes of Dark Academia.',
    'Y2K': 'You love the bold and nostalgic style of the early 2000s.',
    'Minimalist': 'You prefer clean lines and simplicity in your fashion choices.',
  },
};

export default aestheticQuizData;