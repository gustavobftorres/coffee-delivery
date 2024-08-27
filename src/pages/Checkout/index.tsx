
import { Header } from "../../components/Header"
import { MenuContext } from "../../context/MenuContext";
import { useContext } from "react";

export function Checkout() {
  const { amounts, setAmounts, totalItems } = useContext(MenuContext);

  return (
    <>
      <Header
        amount={totalItems}
      />
      <h1>Checkout</h1>
      </>
  )
}