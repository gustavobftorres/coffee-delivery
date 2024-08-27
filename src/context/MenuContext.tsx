import { createContext, useState } from "react";


interface MenuContextData {
  amount: number;
  setAmount: React.Dispatch<React.SetStateAction<number>>;
}

export const MenuContext = createContext({} as MenuContextData);

interface MenuContextProviderProps {
  children: React.ReactNode;
}

export function MenuContextProvider({ children }: MenuContextProviderProps) {
  const [cart, setCart] = useState([{}]);


  return (
    <MenuContext.Provider value={{ cart, setCart }}>
      {children}
    </MenuContext.Provider>
  );
}