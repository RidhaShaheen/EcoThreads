import React, { useState } from "react";
import styles from "./ChatbotPage.module.css";

const ChatbotPage = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (input.trim() === "") return;

    const newMessage = { role: "user", content: input };
    setMessages([...messages, newMessage]);
    setInput("");

    // Simulate bot response
    setTimeout(() => {
      const botMessage = {
        role: "bot",
        content: "Thank you for your message! I am here to help with sustainabile fashion.",
      };
      setMessages((prev) => [...prev, botMessage]);
    }, 1000);
  };

  return (
    <div className={styles.chatbotPage}>
      <h1>EcoThreads Chatbot</h1>
      <div className={styles.chatWindow}>
        {messages.map((msg, index) => (
          <div
            key={index}
            className={msg.role === "user" ? styles.userMessage : styles.botMessage}
          >
            {msg.content}
          </div>
        ))}
      </div>
      <div className={styles.inputArea}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message..."
        />
        <button onClick={handleSend}>Send</button>
      </div>
    </div>
  );
};

export default ChatbotPage;
