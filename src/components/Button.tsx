import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  className = '',
}) => {
  return (
    <button
      onClick={onClick}
      className={`hover:scale-105 py-2 bg-blue-500 text-white text-center rounded transform transition-transform focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 w-full ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
