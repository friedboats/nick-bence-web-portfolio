import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "link";
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  ...props
}) => {
  return (
    <button type="button" onClick={props.onClick}>
      {children}
    </button>
  );
};

export default Button;
