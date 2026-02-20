import { useTheme } from "next-themes";

export function useColors() {
  const { theme } = useTheme();
  return {
    // Text colors
    TEXT: theme === "light" ? "#0E0E0E" : "#F5F5F5",
    TEXT_SECONDARY: theme === "light" ? "#666666" : "#B0B0B0",
    TEXT_MUTED: theme === "light" ? "#999999" : "#888888",
    
    // Background colors
    BG: theme === "light" ? "#FFFFFF" : "#0A0A0A",
    BG_ELEVATED: theme === "light" ? "#FFFFFF" : "#141414",
    BG_CARD: theme === "light" ? "#FFFFFF" : "#1A1A1A",
    
    // Accent & borders
    BORDER: theme === "light" ? "#E8E8E8" : "#2A2A2A",
    BORDER_HOVER: theme === "light" ? "#F5C518" : "#FFD700",
    
    // Legacy support (kept for mobile menu)
    DARK: theme === "light" ? "#F8F8F6" : "#F5F5F5",
    WHITE: theme === "light" ? "#0E0E0E" : "#1A1A1A",
    GRAY: theme === "light" ? "#999999" : "#888888",
    LGRAY: theme === "light" ? "#666666" : "#B0B0B0",
  };
}

export function goTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}
