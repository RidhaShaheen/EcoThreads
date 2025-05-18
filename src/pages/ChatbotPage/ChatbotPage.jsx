import React, { useState } from "react";
import styles from "./ChatbotPage.module.css";

const ChatbotPage = () => {
  const [messages, setMessages] = useState([
    // Removed the system message to ensure the chatbot does not display instructions
  ]);
  const [userInput, setUserInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSend = async () => {
    if (!userInput.trim()) return;

    const newMessages = [
      ...messages,
      { role: "user", content: userInput },
    ];
    setMessages(newMessages);
    setUserInput("");
    setIsLoading(true);

    try {
      const response = await fetch("https://api.aimlapi.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer 24c6ac9c22b7451ab0506e429b8191be",
        },
        body: JSON.stringify({
          model: "gpt-4o",
          messages: newMessages,
        }),
      });

      const data = await response.json();
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: data.choices[0].message.content },
      ]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "Sorry, something went wrong." },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={styles.chatbotPage}>
      <h1 className={styles.title}>EcoThreads Chatbot</h1>
      <div className={styles.chatWindow}>
        {messages.map((msg, index) => (
          <div
            key={index}
            className={
              msg.role === "user" ? styles.userMessage : styles.assistantMessage
            }
          >
            {msg.content}
          </div>
        ))}
        {isLoading && <div className={styles.loading}>Typing...</div>}
      </div>
      <div className={styles.inputContainer}>
        <input
          type="text"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          placeholder="Type your message..."
        />
        <button onClick={handleSend} disabled={isLoading}>
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatbotPage;
