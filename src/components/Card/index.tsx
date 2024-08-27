import { Dispatch, SetStateAction, useContext, useState } from "react";
import { CardContainer, TagContainer, ShopTimeButton } from "./styles";
import ShoppingCartSimple from "../../assets/shoppingCartSimple.svg";
import { MenuContext } from "../../context/MenuContext";

type CoffeeCounts = {
  [id: string]: number;
}
interface CardProps {
  key: number;
  image: string;
  title: string;
  tag: string;
  description: string;
  price: number;
  amount: number;
  onAmountChange: (amount: number) => void;
}
export function Card(props: CardProps) {
  // const { amount, setAmount } = useContext(MenuContext);
  // const [amount, setAmount] = useState(0);
  const handleIncrease = () => props.onAmountChange(props.amount + 1);
  const handleDecrease = () => {
    if (props.amount > 0) {
      props.onAmountChange(props.amount - 1);
    }
  };

  return (

    <CardContainer>
      <img src={props.image} alt="placeholder" />
      <div>
        <h2>{props.title}</h2>
        <TagContainer>
          <span>{props.tag}</span>
        </TagContainer>
        <p>{props.description}</p>
      </div>

      <div className="price">
        <h4>
          <p className="dolarSign">R$</p> 
          {props.price}
        </h4>

        <div className="amount">
          <button className='subtract'
            onClick={handleDecrease}
          >
            -
          </button>

          <p className="moneyAmount">{props.amount}</p>

          <button className="sum"
            onClick={handleIncrease}
          >
            +
          </button>
        </div>
        <ShopTimeButton className='shop'>
          <img className='shopImage' src={ShoppingCartSimple} alt="cart" />
        </ShopTimeButton>
      </div>
    </CardContainer>
  );
}
