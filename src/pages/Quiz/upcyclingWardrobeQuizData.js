const upcyclingWardrobeQuizData = {
  questions: [
    {
      question: "What is your favorite way to upcycle old clothes?",
      options: [
        { text: "Turn them into new outfits", type: "new-outfits" },
        { text: "Use them for DIY projects", type: "diy-projects" },
        { text: "Donate to charity", type: "donate" },
        { text: "Sell them online", type: "sell-online" },
      ],
    },
    {
      question: "What motivates you to upcycle?",
      options: [
        { text: "Saving money", type: "sell-online" },
        { text: "Helping the environment", type: "diy-projects" },
        { text: "Supporting others", type: "donate" },
        { text: "Being creative", type: "new-outfits" },
      ],
    },
  ],
  results: {
    "new-outfits": "You love transforming old clothes into new outfits.",
    "diy-projects": "You enjoy creative DIY projects to upcycle clothes.",
    "donate": "You prioritize supporting others by donating old clothes.",
    "sell-online": "You focus on saving money by selling clothes online.",
  },
};

export default upcyclingWardrobeQuizData;
