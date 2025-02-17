'use client';
import { useState } from "react";

interface Message {
  role: 'user' | 'ai';
  content: string;
}

export default function ChatPage() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");

  const sendMessage = async () => {
    if (input.trim() === "") return;
    const userMessage: Message = { role: "user", content: input };
    setMessages([...messages, userMessage]);
    setInput("");

    // Simulate AI response
    const aiMessage: Message = { role: "ai", content: "This is a refined version of your prompt." };
    setTimeout(() => {
      setMessages((prev) => [...prev, aiMessage]);
    }, 1000);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">AI Dialogue</h1>
      <div className="flex flex-col space-y-2">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`p-2 rounded ${
              msg.role === "user" ? "bg-blue-100 self-end" : "bg-gray-100 self-start"
            }`}
          >
            {msg.content}
          </div>
        ))}
      </div>
      <textarea
        className="w-full p-2 border rounded mt-4"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter your prompt"
      />
      <button
        className="mt-2 px-4 py-2 bg-blue-500 text-white rounded"
        onClick={sendMessage}
      >
        Send
      </button>
    </div>
  );
}
