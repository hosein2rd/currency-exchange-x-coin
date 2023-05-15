type BalanceProps = { value: number; currency: string };

const Balance = ({ value, currency }: BalanceProps) => (
  <div>
    Balance: <span>{value}</span>
    {currency}
  </div>
);

export default Balance;
