type BalanceProps = { value: number; currency: string };

const Balance = ({ value, currency }: BalanceProps) => (
  <div>
    Balance: {currency}
    <span>{value}</span>
  </div>
);

export default Balance;
