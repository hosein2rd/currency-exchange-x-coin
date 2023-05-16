import { createContext, useState } from "react";

type CurrenyType = { balance: number; symbol: string };

type WalletContextType = {
  USD: CurrenyType;
  EUR: CurrenyType;
  GBP: CurrenyType;
};

const initialValue: WalletContextType = {
  USD: { balance: 200, symbol: "$" },
  EUR: { balance: 150, symbol: "€" },
  GBP: { balance: 10, symbol: "£" },
};

export const WalletContext = createContext<any>({});

export const WalletProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <WalletContext.Provider value={useState(initialValue)}>
      {children}
    </WalletContext.Provider>
  );
};

const obj = {
  usd: { balance: 0, symbol: "$" },
  eur: {},
};
