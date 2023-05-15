import { InputHTMLAttributes, forwardRef } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement>;

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className = "", ...props }, ref) => (
    <input
      className={`border-b-2 border-dashed border-black p-2 outline-none bg-inherit ${className}`}
      ref={ref}
      {...props}
    />
  )
);

export default Input;
