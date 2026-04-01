import React from "react";
import { motion } from "framer-motion";
import type { ButtonProps } from "@/types";

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "md",
  onClick,
  className = "",
  ...props
}) => {
  const baseClasses =
    "cursor-pointer font-semibold rounded-2xl shadow-2xl transition-all duration-300 flex items-center justify-center focus:outline-none focus:ring-4 font-medium";

  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const variantClasses = {
    primary: `
      bg-gradient-to-r from-[#C2FCF7] to-[#85BDBF] 
      text-[#040F0F] 
      hover:from-[#C9FBFF] hover:to-[#85BDBF] 
      hover:shadow-[#85BDBF]/40 
      hover:shadow-2xl 
      hover:border-[#85BDBF]/50 
      border border-[#C2FCF7]/60
      focus:ring-[#85BDBF]/50
    `,
    secondary: `
      bg-[#040F0F]/40 backdrop-blur-xl 
      text-[#C9FBFF] 
      border border-[#57737A]/50 
      hover:bg-[#040F0F]/60 
      hover:border-[#C2FCF7]/60 
      hover:text-[#C2FCF7]
      focus:ring-[#C2FCF7]/40
    `,
    outline: `
      bg-transparent 
      text-[#C9FBFF] 
      border-2 border-[#C2FCF7]/60 
      hover:bg-[#C2FCF7]/10 
      hover:border-[#85BDBF]/80 
      hover:shadow-[#C2FCF7]/20
      focus:ring-[#85BDBF]/50
    `,
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.97 }}
      className={`${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export default Button;
