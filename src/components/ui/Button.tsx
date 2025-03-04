import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'link';
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  ...props
}) => {
  const baseStyles = 'px-4 py-2 rounded-md font-medium transition duration-200';
  const variantStyles = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700',
    secondary: 'bg-gray-600 text-white hover:bg-gray-700',
    link: 'text-blue-600 hover:underline',
  };

  return (
    <button
      type="button"
      onClick={props.onClick}
      className={`${baseStyles} ${variantStyles[variant]}`}
    >
      {children}
    </button>
  );
};

export default Button;
