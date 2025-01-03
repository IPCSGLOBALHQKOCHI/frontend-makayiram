import React from "react";

type ButtonProps = {
   label: React.ReactNode;
  onClick: () => void;
  type?: "button" | "submit" | "reset"; // Optional button types
  disabled?: boolean; // Optional disabled state
  className?: string;
};

const Button: React.FC<ButtonProps> = ({ label, onClick, type = "button", disabled = false,className = "",}) => {
  // Define variant styles
  const baseStyles = "px-4 py-2 rounded font-semibold font-pops";


  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyles}  ${className}`}
      disabled={disabled}
    >
      {label}
    </button>
  );
};

export default Button;
