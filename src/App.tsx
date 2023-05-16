import React, { useEffect, useState } from "react";
import Button from "./components/Button";
import ExchangeRow from "./components/ExchangeRow";
import ConversionRate from "./components/ConversionRate";
import { getConversionRate } from "./api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [c1, setC1] = useState("USD");
  const [c2, setC2] = useState("USD");
  const [text, setText] = useState("--");

  useEffect(() => {
    if (!c1 || !c2) return;

    getConversionRate(c1, c2)
      .then((data) =>
        setText(data.result ? `1 ${c1} = ${data.result} ${c2}` : "--")
      )
      .catch(() =>
        toast("Something Heppend!", { type: "error", theme: "colored" })
      );
  }, [c1, c2]);

  return (
    <div className="w-screen h-screen bg-gray-200 flex justify-center items-center">
      <div className="flex flex-col w-2/5 bg-white p-4 rounded-md shadow-xl">
        <div className="relative flex flex-col">
          <ExchangeRow onSelect={(value) => setC1(value)} addingMode />
          <ConversionRate
            className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2"
            text={text}
          />
          <ExchangeRow onSelect={(value) => setC2(value)} addingMode={false} />
        </div>
        <Button className="mt-4">Exchange</Button>
      </div>
      <ToastContainer />
    </div>
  );
}

export default App;
