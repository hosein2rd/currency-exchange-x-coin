import React from "react";
import Button from "./components/Button";
import ExchangeRow from "./components/ExchangeRow";

function App() {
  return (
    <div className="flex flex-col w-full">
      <div className="relative flex flex-col">
        <ExchangeRow addingMode />
        <ExchangeRow addingMode={false} />
      </div>
      <Button>Exchange</Button>
    </div>
  );
}

export default App;
