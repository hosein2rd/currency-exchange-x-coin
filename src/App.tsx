import React from "react";
import Button from "./components/Button";
import ExchangeRow from "./components/ExchangeRow";
import ConversionRate from "./components/ConversionRate";

function App() {
  return (
    <div className="w-screen h-screen bg-gray-200 flex justify-center items-center">
      <div className="flex flex-col w-2/5 bg-white p-4 rounded-md shadow-xl">
        <div className="relative flex flex-col">
          <ExchangeRow addingMode />
          <ConversionRate
            className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2"
            text="1$ = 120$"
          />
          <ExchangeRow addingMode={false} />
        </div>
        <Button className="mt-4">Exchange</Button>
      </div>
    </div>
  );
}

export default App;
