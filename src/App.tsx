import React from "react";
import Button from "./components/Button";
import ExchangeRow from "./components/ExchangeRow";
import CurrencyExchage from "./components/CurrencyExchage";

function App() {
  return (
    <div className="flex flex-col w-full">
      <div className="relative flex flex-col">
        <ExchangeRow addingMode />
        <CurrencyExchage
          className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2"
          text="1$ = 120$"
        />
        <ExchangeRow addingMode={false} />
      </div>
      <Button>Exchange</Button>
    </div>
  );
}

export default App;
