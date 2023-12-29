import React from 'react';
import { UseControllerProps, useController, FieldValues } from 'react-hook-form';

interface InputProps<T extends FieldValues> extends UseControllerProps<T> {
  label?: string;
  type?: string;
  placeholder?: string;
  className?: string;
}

function Input<T extends FieldValues> ({
  label,
  type = 'text',
  placeholder = '',
  className,
  ...props
}: InputProps<T>) {

  const { field, fieldState } = useController(props);

  return (
    <div className="flex flex-col mb-4">
      <label className="mb-2 font-medium">{label}</label>
      <input
        className={`px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 ${className}`}
        type={type}
        placeholder={placeholder}
        {...field}
      />
      <p>{fieldState.error?.message}</p>
    </div>

  );
};

export default Input;