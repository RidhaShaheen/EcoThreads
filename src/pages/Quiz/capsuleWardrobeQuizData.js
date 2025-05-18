const capsuleWardrobeQuizData = {
  questions: [
    {
      question: "What is your primary goal for a capsule wardrobe?",
      options: [
        { text: "Minimize clutter", type: "minimalist" },
        { text: "Save money", type: "budget-friendly" },
        { text: "Stay trendy", type: "fashion-forward" },
        { text: "Be sustainable", type: "eco-conscious" },
      ],
    },
    {
      question: "What is your preferred color palette?",
      options: [
        { text: "Neutral tones", type: "minimalist" },
        { text: "Bright and bold", type: "fashion-forward" },
        { text: "Earthy shades", type: "eco-conscious" },
        { text: "Mix of everything", type: "budget-friendly" },
      ],
    },
    {
      question: "What type of clothing do you prioritize?",
      options: [
        { text: "Timeless basics", type: "minimalist" },
        { text: "Trendy pieces", type: "fashion-forward" },
        { text: "Affordable options", type: "budget-friendly" },
        { text: "Sustainable fabrics", type: "eco-conscious" },
      ],
    },
  ],
  results: {
    "minimalist": "You prefer a minimalist capsule wardrobe with timeless basics.",
    "budget-friendly": "You focus on creating a capsule wardrobe that is affordable and versatile.",
    "fashion-forward": "You love staying trendy while maintaining a curated wardrobe.",
    "eco-conscious": "You prioritize sustainability in your capsule wardrobe choices.",
  },
};

export default capsuleWardrobeQuizData;
