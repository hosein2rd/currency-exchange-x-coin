import { currencies } from "../constants";
import Balance from "./Balance";
import Input from "./Input";
import Select from "./Select";
import { WalletContext } from "../contexts/Wallet";
import { useContext, useEffect, useState } from "react";

type ExchangeRowProps = {
  addingMode: boolean;
  onSelect: (value: string) => void;
  onChangeAmount?: (value: number) => void;
  amount?: number;
};

const ExchangeRow = ({
  addingMode = false,
  onSelect,
  onChangeAmount,
  amount: initialAmount,
}: ExchangeRowProps) => {
  const [wallet] = useContext(WalletContext);

  const [amount, setAmount] = useState(initialAmount);
  const [currency, setCurrency] = useState("USD");

  useEffect(() => {
    setAmount(initialAmount);
  }, [initialAmount]);

  return (
    <div
      className={`flex flex-row justify-between rounded-md p-5 ${
        addingMode ? "bg-gray-100" : "bg-white"
      }`}
    >
      <div className="flex flex-col">
        <Select
          onSelect={(value) => {
            onSelect(value as string);
            setCurrency(value as string);
          }}
          className="self-baseline"
          options={currencies}
        />
        <Balance
          value={wallet[currency].balance}
          currency={wallet[currency].symbol}
        />
      </div>
      <div className="flex flex-row items-center">
        <span className="text-2xl self-start mt-1">
          {addingMode ? "+" : "-"}
        </span>
        <div className="flex flex-col">
          <Input
            min={0}
            value={amount}
            type="number"
            className="w-32"
            onChange={(e) => {
              onChangeAmount && onChangeAmount(+e.currentTarget.value);
              setAmount(+e.currentTarget.value);
            }}
          />
          <span
            className={`text-red-600 ${
              !addingMode && (amount || 0) > wallet[currency].balance
                ? "visible"
                : "invisible"
            }`}
          >
            Exceeds Balance
          </span>
        </div>
      </div>
    </div>
  );
};

export default ExchangeRow;
