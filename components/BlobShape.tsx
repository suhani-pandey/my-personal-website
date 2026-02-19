import { motion } from "framer-motion";

interface BlobShapeProps {
  className?: string;
  variant?: "primary" | "accent";
  size?: "sm" | "md" | "lg" | "xl";
  delay?: number;
}

export const BlobShape = ({ 
  className = "", 
  variant = "primary", 
  size = "lg",
  delay = 0 
}: BlobShapeProps) => {
  const sizeClasses = {
    sm: "w-32 h-32",
    md: "w-48 h-48",
    lg: "w-64 h-64",
    xl: "w-96 h-96"
  };

  const colorClasses = {
    primary: "bg-primary/30",
    accent: "bg-accent/30"
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ 
        delay, 
        duration: 1.5,
        ease: "easeOut"
      }}
      className={`${sizeClasses[size]} ${colorClasses[variant]} ${className} rounded-full blur-3xl animate-blob-morph`}
    />
  );
};
