const sustainableShoppingQuizData = {
  questions: [
    {
      question: "What do you prioritize when shopping for clothes?",
      options: [
        { text: "Price", type: "budget-focused" },
        { text: "Quality", type: "quality-focused" },
        { text: "Sustainability", type: "sustainability-focused" },
        { text: "Trends", type: "trend-focused" },
      ],
    },
    {
      question: "Where do you usually shop?",
      options: [
        { text: "Fast fashion stores", type: "trend-focused" },
        { text: "Thrift stores", type: "sustainability-focused" },
        { text: "High-end boutiques", type: "quality-focused" },
        { text: "Online deals", type: "budget-focused" },
      ],
    },
    {
      question: "How do you decide on a purchase?",
      options: [
        { text: "Based on price", type: "budget-focused" },
        { text: "Based on quality", type: "quality-focused" },
        { text: "Based on sustainability", type: "sustainability-focused" },
        { text: "Based on trends", type: "trend-focused" },
      ],
    },
    {
      question: "What do you do with clothes you no longer wear?",
      options: [
        { text: "Throw them away", type: "trend-focused" },
        { text: "Donate them", type: "sustainability-focused" },
        { text: "Sell them", type: "budget-focused" },
        { text: "Repurpose them", type: "quality-focused" },
      ],
    },
    {
      question: "How often do you research brands before buying?",
      options: [
        { text: "Never", type: "trend-focused" },
        { text: "Sometimes", type: "budget-focused" },
        { text: "Often", type: "quality-focused" },
        { text: "Always", type: "sustainability-focused" },
      ],
    },
  ],
  results: {
    "budget-focused": "You prioritize affordability when shopping. Consider sustainable options within your budget.",
    "quality-focused": "You value quality in your purchases. Look for durable and sustainable items.",
    "sustainability-focused": "You prioritize sustainability in your shopping habits. Keep it up!",
    "trend-focused": "You follow trends. Try incorporating sustainable fashion into your style.",
  },
};

export default sustainableShoppingQuizData;
