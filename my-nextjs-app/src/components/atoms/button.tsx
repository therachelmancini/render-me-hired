import React from "react";

interface ButtonProps {
  label?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  className?: string; // Allow additional styles via class names
  disabled?: boolean;
  children?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  type = "button",
  className = "",
  disabled = false,
  children
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`py-2 px-4 rounded-lg transition-colors duration-300 ease-in-out 
        bg-blue-500 text-white hover:bg-blue-600 disabled:bg-blue-300 disabled:cursor-not-allowed ${className}`}
    >
      {label && <span>{label}</span>}
      {children}
    </button>
  );
};

export default Button;