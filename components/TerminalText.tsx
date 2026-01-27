"use client";

import { useEffect, useState } from "react";

interface TerminalTextProps {
  text: string;
  delay?: number;
  className?: string;
}

export function TerminalText({ text, delay = 0, className = "" }: TerminalTextProps) {
  const [displayText, setDisplayText] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    const startTimeout = setTimeout(() => {
      setIsTyping(true);
      let currentIndex = 0;
      
      const typeInterval = setInterval(() => {
        if (currentIndex < text.length) {
          setDisplayText(text.slice(0, currentIndex + 1));
          currentIndex++;
        } else {
          clearInterval(typeInterval);
          setIsTyping(false);
        }
      }, 50);

      return () => clearInterval(typeInterval);
    }, delay);

    return () => clearTimeout(startTimeout);
  }, [text, delay]);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 530);

    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <span className={`font-mono ${className}`}>
      <span className="text-primary">{">"}</span>{" "}
      {displayText}
      <span className={`text-primary ${showCursor ? "opacity-100" : "opacity-0"} ${isTyping ? "" : "animate-blink"}`}>
        _
      </span>
    </span>
  );
}
