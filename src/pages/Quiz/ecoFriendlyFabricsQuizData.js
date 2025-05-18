const ecoFriendlyFabricsQuizData = {
  questions: [
    {
      question: "Which fabric do you think is the most sustainable?",
      options: [
        { text: "Organic Cotton", type: "organic-cotton" },
        { text: "Recycled Polyester", type: "recycled-polyester" },
        { text: "Hemp", type: "hemp" },
        { text: "Bamboo", type: "bamboo" },
      ],
    },
    {
      question: "What is your priority when choosing fabrics?",
      options: [
        { text: "Durability", type: "recycled-polyester" },
        { text: "Softness", type: "bamboo" },
        { text: "Eco-friendliness", type: "hemp" },
        { text: "Affordability", type: "organic-cotton" },
      ],
    },
  ],
  results: {
    "organic-cotton": "You value affordability and eco-friendliness in organic cotton.",
    "recycled-polyester": "You prioritize durability with recycled polyester.",
    "hemp": "You prefer the eco-friendliness of hemp fabrics.",
    "bamboo": "You enjoy the softness and sustainability of bamboo fabrics.",
  },
};

export default ecoFriendlyFabricsQuizData;
