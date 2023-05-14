import { ButtonHTMLAttributes, forwardRef } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, className = "", ...props }, ref) => (
    <button
      ref={ref}
      className={`self-start bg-pink-600 py-1.5 px-3 text-white rounded-md hover:bg-pink-700 transition-all active:shadow-2xl active:shadow-gray-600 ${className}`}
      {...props}
    >
      {children}
    </button>
  )
);

export default Button;
