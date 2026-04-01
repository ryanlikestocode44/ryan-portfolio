import React from "react";
import type { FC } from "react";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "tech" | "status";
  size?: "sm" | "md" | "lg";
  className?: string;
}

const Badge: FC<BadgeProps> = ({
  children,
  variant = "primary",
  size = "md",
  className = "",
}) => {
  const sizeClasses = {
    sm: "px-2 py-0.5 text-xs",
    md: "px-3 py-1 text-sm",
    lg: "px-4 py-1.5 text-base",
  };

  const variantClasses = {
    primary: "bg-[#C2FCF7]/20 text-[#85BDBF] border-[#85BDBF]/40",
    secondary: "bg-[#57737A]/20 text-[#C9FBFF] border-[#57737A]/40",
    tech: "bg-[#C2FCF7]/15 text-[#85BDBF] border-[#C2FCF7]/30",
    status:
      "bg-gradient-to-r from-[#C2FCF7]/20 to-[#85BDBF]/20 text-[#C9FBFF] border-[#C2FCF7]/40",
  };

  return (
    <span
      className={`font-medium rounded-lg border transition-all duration-200 hover:scale-105 inline-flex items-center ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
    >
      {children}
    </span>
  );
};

Badge.displayName = "Badge";

export default Badge;
