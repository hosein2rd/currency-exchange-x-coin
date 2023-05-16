import React, { useContext, useEffect, useRef, useState } from "react";
import Button from "./components/Button";
import ExchangeRow from "./components/ExchangeRow";
import ConversionRate from "./components/ConversionRate";
import { getConversionRate } from "./api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { WalletContext } from "./contexts/Wallet";

function App() {
  const [wallet] = useContext(WalletContext);
  const [c1, setC1] = useState("USD");
  const [c2, setC2] = useState("USD");
  const [text, setText] = useState("--");
  const coefficient = useRef<number>(1);
  const [globalAmount, setGlobalAmount] = useState<number>();

  useEffect(() => {
    if (!c1 || !c2) return;

    getConversionRate(c1, c2)
      .then(({ result }) => {
        coefficient.current = result;
        setText(
          result
            ? `${wallet[c1].symbol}1 = ${wallet[c2].symbol}${result}`
            : "--"
        );
      })
      .catch(() =>
        toast("Something Heppend!", { type: "error", theme: "colored" })
      );
  }, [c1, c2, wallet]);

  return (
    <div className="w-screen h-screen bg-gray-200 flex justify-center items-center">
      <div className="flex flex-col w-2/5 bg-white p-4 rounded-md shadow-xl">
        <div className="relative flex flex-col">
          <ExchangeRow
            amount={globalAmount}
            onChangeAmount={(value) => setGlobalAmount(value)}
            onSelect={(value) => setC1(value)}
            addingMode
          />
          <ConversionRate
            className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2"
            text={text}
          />
          <ExchangeRow
            amount={
              globalAmount ? globalAmount * coefficient.current : undefined
            }
            onChangeAmount={(value) =>
              setGlobalAmount(value / coefficient.current)
            }
            onSelect={(value) => setC2(value)}
            addingMode={false}
          />
        </div>
        <Button className="mt-4">Exchange</Button>
      </div>
      <ToastContainer />
    </div>
  );
}

export default App;
