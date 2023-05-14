import { ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ children, ...props }: ButtonProps) => (
  <button
    className="self-start bg-pink-600 py-1.5 px-3 text-white rounded-md hover:bg-pink-700 transition-all active:shadow-2xl active:shadow-gray-600"
    {...props}
  >
    {children}
  </button>
);

export default Button;
