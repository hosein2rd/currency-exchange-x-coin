import { SelectHTMLAttributes, forwardRef } from "react";

export type Option = { title: string; value: string };
type SelectProps = SelectHTMLAttributes<HTMLSelectElement> & {
  options: Option[];
};

const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ className = "", options = [], ...props }, ref) => (
    <select ref={ref} className={`bg-inherit min-w-0 ${className}`} {...props}>
      {options.map(({ value, title }) => (
        <option value={value}>{title}</option>
      ))}
    </select>
  )
);

export default Select;
