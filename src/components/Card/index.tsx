import { useState } from "react";
import { CardContainer, TagContainer, ShopTimeButton } from "./styles";
import ShoppingCartSimple from "../../assets/shoppingCartSimple.svg";
interface CardProps {
  key: number;
  image: string;
  title: string;
  tag: string;
  description: string;
  price: number;
}
export function Card(props: CardProps) {
  const [amount, setAmount] = useState(0);

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
            onClick={() => {
              if (amount > 0) {
                setAmount(amount - 1);
              }
            }}
          >
            -
          </button>

          <p className="moneyAmount">{amount}</p>

          <button className="sum"
            onClick={() => {
              setAmount(amount + 1);
            }}
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
