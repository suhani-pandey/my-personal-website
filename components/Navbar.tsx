"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

interface NavbarProps {
  activeSection: string;
}

const navItems = [
  { id: "hero", label: "Home" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "journey", label: "Journey" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
];

export const Navbar = ({ activeSection }: NavbarProps) => {
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Set light theme by default
    document.documentElement.classList.remove("dark");
    setTheme("light");
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    
    if (newTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass py-3" : "py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="text-xl font-bold font-mono cursor-pointer"
          onClick={() => scrollToSection("hero")}
        >
          <span className="text-primary">{"<"}</span>
          SP
          <span className="text-primary">{"/>"}</span>
        </motion.div>

        <div className="hidden md:flex items-center gap-1 glass rounded-full px-2 py-2">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`relative px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeSection === item.id
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {activeSection === item.id && (
                <motion.div
                  layoutId="activeSection"
                  className="absolute inset-0 bg-primary/10 rounded-full"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              <span className="relative z-10">{item.label}</span>
            </button>
          ))}
        </div>

        <motion.button
          whileHover={{ scale: 1.1, rotate: 180 }}
          whileTap={{ scale: 0.9 }}
          onClick={toggleTheme}
          className="w-10 h-10 rounded-full glass flex items-center justify-center"
        >
          {theme === "light" ? (
            <Moon className="w-5 h-5" />
          ) : (
            <Sun className="w-5 h-5" />
          )}
        </motion.button>
      </div>

      {/* Mobile nav */}
      <div className="md:hidden mt-3 px-6">
        <div className="glass rounded-2xl p-2 grid grid-cols-3 gap-1">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`relative px-3 py-2 rounded-xl text-xs font-medium transition-colors ${
                activeSection === item.id
                  ? "text-primary"
                  : "text-muted-foreground"
              }`}
            >
              {activeSection === item.id && (
                <motion.div
                  layoutId="activeSectionMobile"
                  className="absolute inset-0 bg-primary/10 rounded-xl"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              <span className="relative z-10">{item.label}</span>
            </button>
          ))}
        </div>
      </div>
    </motion.nav>
  );
};
