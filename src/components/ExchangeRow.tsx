import { currencies } from "../constants";
import Balance from "./Balance";
import Input from "./Input";
import Select from "./Select";

type ExchangeRowProps = {
  addingMode: boolean;
  onSelect: (value: string) => void;
};

const ExchangeRow = ({ addingMode = false, onSelect }: ExchangeRowProps) => {
  return (
    <div
      className={`flex flex-row justify-between rounded-md p-5 ${
        !addingMode ? "bg-gray-100" : "bg-white"
      }`}
    >
      <div className="flex flex-col">
        <Select
          onSelect={(value) => onSelect(value as string)}
          className="self-baseline"
          options={currencies}
        />
        <Balance value={200} currency="$" />
      </div>
      <div className="flex flex-row items-center">
        <span className="text-2xl">{addingMode ? "+" : "-"}</span>
        <Input type="number" className="w-32" />
      </div>
    </div>
  );
};

export default ExchangeRow;
