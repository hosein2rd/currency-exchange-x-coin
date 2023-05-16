import { SelectHTMLAttributes, forwardRef } from "react";

export type Option = { title: string; value: string };
type SelectProps = SelectHTMLAttributes<HTMLSelectElement> & {
  options: Option[];
  onSelect: (value: string) => void;
};

const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ className = "", options = [], onSelect, ...props }, ref) => (
    <select
      onChange={(e) => onSelect(e.currentTarget.value)}
      ref={ref}
      className={`bg-inherit min-w-0 ${className}`}
      {...props}
    >
      {options.map(({ value, title }, i) => (
        <option key={i} value={value}>
          {title}
        </option>
      ))}
    </select>
  )
);

export default Select;
