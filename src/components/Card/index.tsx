import {
  useState
} from "react";
import { CardContainer, TagContainer, ShopTimeButton } from "./styles";
import ShoppingCartSimple from "../../assets/shoppingCartSimple.svg";
import { useMenu } from "../../context/MenuContext";

interface CardProps {
  id: number;  // Add this to receive the id
  image: string;
  title: string;
  tag: string;
  description: string;
  price: number;
  quantity?: number;
}
export function Card(props: CardProps) {
  // const { handleAddToCart, coffeItems } = useContext(MenuContext);
  const { addToCart, getQuantity } = useMenu()
  const [quantity, setQuantity] = useState(getQuantity(props.id));

  const handleIncrease = () => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);

    // Add or update the coffee in the cart with the correct id and quantity
    addToCart({
      id: props.id,  // Use props.id here
      title: props.title,
      tag: props.tag,
      description: props.description,
      price: props.price,
      image: props.image,
      quantity: 1,  // Increase by 1
    });
  };

  const handleDecrease = () => {
    if (quantity > 0) {
      const newQuantity = quantity - 1;
      setQuantity(newQuantity);

      // Subtract the item from the cart
      addToCart({
        id: props.id,  // Use props.id here
        title: props.title,
        tag: props.tag,
        description: props.description,
        price: props.price,
        image: props.image,
        quantity: -1,  // Decrease by 1
      });
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
          <button
            className="subtract"
            onClick={handleDecrease}
          >
            -
          </button>

          <p className="moneyAmount">{quantity}</p>

          <button
            className="sum"
            onClick={handleIncrease}
          >
            +
          </button>
        </div>
        <ShopTimeButton className="shop">
          <img className="shopImage" src={ShoppingCartSimple} alt="cart" />
        </ShopTimeButton>
      </div>
    </CardContainer>
  );
}
