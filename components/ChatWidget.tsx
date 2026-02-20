"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Sparkles } from "lucide-react";

const Y = "#F5C518";
const YD = "#C8970A";
const DARK = "#0E0E0E";
const WHITE = "#FFFFFF";

interface Message {
  id: number;
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
}

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hi! I'm Suhani's AI assistant. Ask me anything about her. I can give exact response like Suhani since I am trained by her👋",
      sender: "bot",
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Auto-open chat after 10 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  const handleSend = () => {
    if (!inputValue.trim()) return;

    // Add user message
    const userMessage: Message = {
      id: messages.length + 1,
      text: inputValue,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");

    // Simulate bot response (you can replace this with actual AI later)
    setTimeout(() => {
      const botMessage: Message = {
        id: messages.length + 2,
        text: "Thanks for your message! This is a demo UI. You can connect this to an AI service later to make it interactive! This is still in progress 🚀",
        sender: "bot",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botMessage]);
    }, 1000);
  };

  return (
    <>
      {/* Chat Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        style={{
          position: "fixed",
          bottom: 24,
          right: 24,
          width: 60,
          height: 60,
          borderRadius: "50%",
          background: `linear-gradient(135deg, ${Y} 0%, ${YD} 100%)`,
          border: "none",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: `0 8px 32px rgba(245,197,24,0.4)`,
          zIndex: 1000,
        }}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X size={28} color={DARK} strokeWidth={3} />
            </motion.div>
          ) : (
            <motion.div
              key="chat"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <MessageCircle size={28} color={DARK} strokeWidth={2.5} />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            style={{
              position: "fixed",
              bottom: 100,
              right: 24,
              width: 380,
              height: 550,
              background: DARK,
              border: `2px solid ${Y}`,
              borderRadius: 20,
              boxShadow: "0 20px 60px rgba(0,0,0,0.5)",
              display: "flex",
              flexDirection: "column",
              overflow: "hidden",
              zIndex: 999,
            }}
          >
            {/* Header */}
            <div
              style={{
                background: `linear-gradient(135deg, ${Y} 0%, ${YD} 100%)`,
                padding: "20px",
                display: "flex",
                alignItems: "center",
                gap: 12,
                borderBottom: `1px solid ${YD}`,
              }}
            >
              <motion.div
                animate={{
                  rotate: [0, 360],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                <Sparkles size={24} color={DARK} />
              </motion.div>
              <div>
                <h3 style={{ fontSize: 16, fontWeight: 800, color: DARK, margin: 0 }}>
                  Chat with Suhani's AI
                </h3>
                <p style={{ fontSize: 12, color: "rgba(0,0,0,0.6)", margin: 0 }}>
                  Ask me anything!
                </p>
              </div>
            </div>

            {/* Messages */}
            <div
              style={{
                flex: 1,
                overflowY: "auto",
                padding: "20px",
                display: "flex",
                flexDirection: "column",
                gap: 16,
                background: "#1a1a1a",
              }}
            >
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  style={{
                    display: "flex",
                    justifyContent: message.sender === "user" ? "flex-end" : "flex-start",
                  }}
                >
                  <div
                    style={{
                      maxWidth: "75%",
                      padding: "12px 16px",
                      borderRadius: message.sender === "user" ? "18px 18px 4px 18px" : "18px 18px 18px 4px",
                      background: message.sender === "user"
                        ? `linear-gradient(135deg, ${Y} 0%, ${YD} 100%)`
                        : "rgba(255,255,255,0.05)",
                      border: message.sender === "bot" ? "1px solid rgba(255,255,255,0.1)" : "none",
                      color: message.sender === "user" ? DARK : WHITE,
                      fontSize: 14,
                      lineHeight: 1.5,
                      fontWeight: message.sender === "user" ? 600 : 400,
                      boxShadow: message.sender === "user" 
                        ? "0 4px 12px rgba(245,197,24,0.3)"
                        : "none",
                    }}
                  >
                    {message.text}
                  </div>
                </motion.div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div
              style={{
                padding: "16px",
                background: "#0a0a0a",
                borderTop: "1px solid rgba(255,255,255,0.1)",
                display: "flex",
                gap: 12,
              }}
            >
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSend()}
                placeholder="Type your message..."
                style={{
                  flex: 1,
                  padding: "12px 16px",
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.15)",
                  borderRadius: 12,
                  color: WHITE,
                  fontSize: 14,
                  outline: "none",
                  transition: "all 0.3s ease",
                }}
              />
              <motion.button
                onClick={handleSend}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  padding: "12px 16px",
                  background: `linear-gradient(135deg, ${Y} 0%, ${YD} 100%)`,
                  border: "none",
                  borderRadius: 12,
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: `0 4px 16px rgba(245,197,24,0.3)`,
                }}
              >
                <Send size={18} color={DARK} />
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Styles */}
      <style jsx>{`
        @media (max-width: 640px) {
          div[style*="width: 380px"] {
            width: calc(100vw - 32px) !important;
            right: 16px !important;
            left: 16px !important;
          }
        }
      `}</style>
    </>
  );
}
