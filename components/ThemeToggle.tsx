"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <motion.button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      style={{
        position: "fixed",
        top: 10,
        right: 24,
        width: 50,
        height: 50,
        borderRadius: "50%",
        background: theme === "dark" 
          ? "rgba(255,255,255,0.1)" 
          : "rgba(0,0,0,0.1)",
        backdropFilter: "blur(10px)",
        border: theme === "dark"
          ? "1.5px solid rgba(255,255,255,0.2)"
          : "1.5px solid rgba(0,0,0,0.2)",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "0 4px 16px rgba(0,0,0,0.1)",
        zIndex: 1000,
        transition: "all 0.3s ease",
      }}
    >
      {theme === "dark" ? (
        <Sun size={22} color="#F5C518" strokeWidth={2.5} />
      ) : (
        <Moon size={22} color="#0E0E0E" strokeWidth={2.5} />
      )}
    </motion.button>
  );
}
