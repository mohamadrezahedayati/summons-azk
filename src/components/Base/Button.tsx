import React from 'react';

interface ButtonProps {
  label?: string;
  variant?: 'primary' | 'secondary' | 'danger';
  className?: string;
  onClick?: () => void;
  type?:  "submit" | "reset" | "button" | undefined
  children?: React.ReactNode
}

const Button: React.FC<ButtonProps> = ({
  label,
  variant = 'primary',
  className,
  type = 'submit',
  onClick,
  children
}) => {
  const getVariantClasses = () => {
    switch (variant) {
      case 'secondary':
        return 'bg-green-300 text-gray-800 text-white';
      case 'danger':
        return 'bg-red-500 text-white';
      default:
        return 'bg-blue-500 text-white';
    }
  };

  return (
    <button
      className={`py-2 focus:outline-none ${getVariantClasses()} ${className}`}
      onClick={onClick}
      type={type}
    >
      {children}
      {label}
    </button>
  );
};

export default Button;