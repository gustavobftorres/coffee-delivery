import { createContext, useState, useContext } from "react";

interface CoffeeItem {
  id: number;
  title: string;
  tag: string;
  description: string;
  price: number;
  image: string;
  quantity: number; // Add a quantity field to track how much the user clicked
}

interface MenuContextType {
  coffeItems: CoffeeItem[];
  setCoffeItems: (items: any) => void;
  addToCart: (item: CoffeeItem) => void;
  quantity: number;
  setQuantity: (value: number) => void;
  getQuantity: (id: number) => number; // Add a method to get the quantity of a specific item in the cart.
}

export const MenuContext = createContext({} as MenuContextType);

interface MenuContextProviderProps {
  children: React.ReactNode;
}

export function MenuContextProvider({ children }: MenuContextProviderProps) {
  const [coffeItems, setCoffeItems] = useState<CoffeeItem[]>([]);
  const [quantity, setQuantity] = useState(0);

  const addToCart = (newItem: CoffeeItem) => {
    setCoffeItems((prevItems) => {
      const itemExists = prevItems.find(item => item.id === newItem.id);
      if (itemExists) {

        // If the quantity is 0, remove the item from the cart
      if (itemExists.quantity + newItem.quantity === 0) {
        return prevItems.filter(item => item.id !== newItem.id);
      }
      
        // Update the quantity of the existing item
        return prevItems.map(item =>
          item.id === newItem.id
            ? { ...item, quantity: item.quantity + newItem.quantity }
            : item
        );
      } else {
        // Add new item to cart with the selected quantity
        return [...prevItems, { ...newItem }];
      }
    });
  };

  const getQuantity = (id: number) => {
    const item = coffeItems.find((item) => item.id === id);
    return item ? item.quantity : 0;
  };


  return (
    <MenuContext.Provider value={{ coffeItems, addToCart ,quantity , setCoffeItems, setQuantity, getQuantity }}>
      {children}
    </MenuContext.Provider>
  );
}

export const useMenu = () => useContext(MenuContext);
