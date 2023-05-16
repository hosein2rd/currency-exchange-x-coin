import { ButtonHTMLAttributes, forwardRef } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, className = "", ...props }, ref) => (
    <button
      ref={ref}
      className={`self-start bg-pink-600 py-1.5 px-3 text-white rounded-md hover:bg-pink-700 transition-all active:shadow-inner active:shadow-pink-900 ${className} disabled:bg-gray-500 disabled:cursor-not-allowed`}
      {...props}
    >
      {children}
    </button>
  )
);

export default Button;
