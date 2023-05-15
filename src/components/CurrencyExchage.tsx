type CurrencyExchageProps = { className?: string; text: string };

const CurrencyExchage = ({ className = "", text }: CurrencyExchageProps) => (
  <span
    className={`bg-white border-green-700 w-fit rounded-full border-2 px-3 py-0.5 ${className}`}
  >
    {text}
  </span>
);

export default CurrencyExchage;
