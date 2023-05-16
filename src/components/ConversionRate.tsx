type ConversionRateProps = { className?: string; text: string };

const ConversionRate = ({ className = "", text }: ConversionRateProps) => (
  <span
    className={`bg-white border-green-700 w-max rounded-full border-2 px-3 py-0.5 ${className}`}
  >
    {text}
  </span>
);

export default ConversionRate;
