import React, { useState } from "react";
import styles from "./ChatbotPage.module.css";

const ChatbotPage = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const OPENAI_API_KEY = "ba902e8b280e4cba94e40d6c17a96099"; // Updated to match the provided API key name

  const handleSendMessage = async (e) => {
    e.preventDefault(); // Prevent form submission
    if (input.trim() !== "") {
      const newMessage = { role: "user", content: input };
      setMessages([...messages, newMessage]);
      setInput(""); // Clear input field

      try {
        const response = await fetch("https://api.aimlapi.com/v1/chat/completions", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${OPENAI_API_KEY}`,
          },
          body: JSON.stringify({
            model: "gpt-4o", // Updated model name
            messages: [
              {
                role: "system",
                content: "You are a helpful assistant for EcoThreads, a program focused on sustainable fashion and shopping. Answer questions about how students can shop sustainably, reduce waste, and promote eco-friendly habits."
              },
              ...messages,
              newMessage
            ],
          }),
        });

        console.log("Response status:", response.status); // Log response status
        const responseData = await response.json();
        console.log("Full response data:", responseData); // Log full response data

        if (response.ok) {
          const botMessage = {
            role: "bot",
            content: responseData.choices[0]?.message?.content || "No content received.",
          };
          setMessages((prev) => [...prev, botMessage]);
        } else {
          const errorMessage = {
            role: "bot",
            content: responseData.error?.message || "Sorry, I couldn't process your request. Please try again later.",
          };
          setMessages((prev) => [...prev, errorMessage]);
        }
      } catch (error) {
        console.error("Error during fetch:", error); // Log error details
        const errorMessage = {
          role: "bot",
          content: "An error occurred. Please check your connection and try again.",
        };
        setMessages((prev) => [...prev, errorMessage]);
      }
    }
  };

  return (
    <div className={styles.chatbotPage}>
      <h1 className={styles.title}>EcoThreads Chatbot</h1>
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
      <form className={styles.inputArea} onSubmit={handleSendMessage}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message..."
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default ChatbotPage;
