import { createContext, useState } from "react";

interface MenuContextType {
  amounts: { [key: number]: number }; // The structure of amounts
  setAmounts: (
    amounts:
      | { [key: number]: number }
      | ((prev: { [key: number]: number }) => { [key: number]: number })
  ) => void; // The function to set amounts
  totalItems: number; // The total number of items in the cart
}

export const MenuContext = createContext({} as MenuContextType);

interface MenuContextProviderProps {
  children: React.ReactNode;
}

export function MenuContextProvider({ children }: MenuContextProviderProps) {
  const [amounts, setAmounts] = useState<{ [key: number]: number }>({});

  const totalItems = Object.values(amounts).reduce(
    (sum, amount) => sum + amount,
    0
  );

  return (
    <MenuContext.Provider value={{ amounts, setAmounts, totalItems }}>
      {children}
    </MenuContext.Provider>
  );
}
