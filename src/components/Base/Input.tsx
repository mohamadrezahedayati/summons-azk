import React, { LegacyRef } from 'react';

interface InputProps {
  label?: string;
  type?: string;
  placeholder?: string;
  className?: string;
  name?: string;
  value: string;
  ref?: LegacyRef<HTMLInputElement> | undefined;
  onChange: (value: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({
  label,
  type = 'text',
  placeholder = '',
  value,
  className,
  name,
  ref,
  onChange,
}) => {

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event);
  };

  return (
    <div className="flex flex-col mb-4">
      <label className="mb-2 font-medium">{label}</label>
      <input
        className={`px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 ${className}`}
        type={type}
        placeholder={placeholder}
        value={value}
        name={name}
        ref={ref}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default Input;