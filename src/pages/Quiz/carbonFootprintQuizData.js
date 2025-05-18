const carbonFootprintQuizData = {
  questions: [
    {
      question: "How often do you buy new clothes?",
      options: [
        { text: "Every week", type: "high-impact" },
        { text: "Once a month", type: "moderate-impact" },
        { text: "A few times a year", type: "low-impact" },
        { text: "Rarely", type: "minimal-impact" },
      ],
    },
    {
      question: "What do you do with old clothes?",
      options: [
        { text: "Throw them away", type: "high-impact" },
        { text: "Donate them", type: "low-impact" },
        { text: "Sell them", type: "moderate-impact" },
        { text: "Upcycle them", type: "minimal-impact" },
      ],
    },
    {
      question: "How do you usually travel for shopping?",
      options: [
        { text: "Drive a car", type: "high-impact" },
        { text: "Public transport", type: "moderate-impact" },
        { text: "Walk or bike", type: "low-impact" },
        { text: "Shop online", type: "minimal-impact" },
      ],
    },
    {
      question: "What type of brands do you prefer?",
      options: [
        { text: "Fast fashion brands", type: "high-impact" },
        { text: "Luxury brands", type: "moderate-impact" },
        { text: "Sustainable brands", type: "low-impact" },
        { text: "Local or handmade", type: "minimal-impact" },
      ],
    },
    {
      question: "How do you care for your clothes?",
      options: [
        { text: "Wash after every wear", type: "high-impact" },
        { text: "Wash only when needed", type: "low-impact" },
        { text: "Use cold water and air dry", type: "minimal-impact" },
        { text: "Dry clean frequently", type: "moderate-impact" },
      ],
    },
  ],
  results: {
    "high-impact": "Your fashion choices have a high carbon footprint. Consider more sustainable options.",
    "moderate-impact": "You are making some sustainable choices, but there is room for improvement.",
    "low-impact": "You are mindful of your carbon footprint and make sustainable choices.",
    "minimal-impact": "You have a minimal carbon footprint and prioritize sustainability.",
  },
};

export default carbonFootprintQuizData;
