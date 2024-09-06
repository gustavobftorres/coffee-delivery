import { Header } from "../../components/Header";
import {
  Title,
  FormsContainer,
  Page,
  CartContainer,
  PaymentContainer,
} from "./styles";
import pin from "../../assets/pin-adress-yellow.svg";
import payment from "../../assets/payment-icon.svg";
import creditCard from "../../assets/credit-card-icon.svg";
import debitCard from "../../assets/debit-card-icon.svg";
import cash from "../../assets/cash-icon.svg";
import { useMenu } from "../../context/MenuContext";
import { useState } from "react";
import { Card } from "../../components/Card";

export function Checkout() {
  const { coffeItems, getQuantity, addToCart } = useMenu();
  const [quantity, setQuantity] = useState(getQuantity(coffeItems));

  console.log(coffeItems);

  const handleIncrease = () => {
    coffeItems.map((coffe) => console.log(coffe));
  };

  const totalItemsPrice = coffeItems.reduce(
    (acc, coffe) => acc + coffe.price * coffe.quantity,
    0
  );

  const deliverPrice = 3.5

  const totalPrice = totalItemsPrice + deliverPrice;

  // const handleDecrease = () => {
  //   if (quantity > 0) {
  //     const newQuantity = quantity - 1;
  //     setQuantity(newQuantity);

  //     // Subtract the item from the cart
  //     addToCart({
  //       id: props.id,  // Use props.id here
  //       title: props.title,
  //       tag: props.tag,
  //       description: props.description,
  //       price: props.price,
  //       image: props.image,
  //       quantity: -1,  // Decrease by 1
  //     });
  //   }
  // };

  return (
    <>
      <Header amount={coffeItems.length} />

      <Page>
        <Title>
          <div>
            <h1>Complete o seu pedido</h1>
          </div>
          <div className="selected-coffee-title">
            <h1>Cafés selecionados</h1>
          </div>
        </Title>

        <div className="boxes-separation">
          <FormsContainer>
            <div>
              <div className="adress-title">
                <img src={pin} alt="" />
                <h2>Endereço de entrega</h2>
              </div>
              <h4>Informe o endereço onde deseja receber o pedido</h4>
            </div>

            <div className="input-container">
              <input type="number" placeholder="CEP" />
            </div>

            <div className="input-container">
              <input className="adress-input" type="text" placeholder="Rua" />
            </div>

            <div className="input-container">
              <input
                className="adress-number-input"
                type="number"
                placeholder="Número"
              />
              <input
                className="adress-input"
                type="text"
                placeholder="Complemento"
              />
            </div>

            <div className="input-container">
              <input
                className="adress-bairro-input"
                type="text"
                placeholder="Bairro"
              />
              <input
                className="adress-city-input"
                type="text"
                placeholder="Cidade"
              />
              <input
                className="adress-state-input"
                type="text"
                placeholder="SC"
              />
            </div>
          </FormsContainer>

          <CartContainer>
            {coffeItems.length > 0 ? (
              coffeItems.map((coffee) => (
                <>
                  <div key={coffee.id}>
                    <img src={coffee.image} alt={coffee.title} />
                    <div className="title-div">
                      <h2>{coffee.title}</h2>
                      <div className="button-div">
                        <button onClick={handleIncrease} />
                        <button />
                      </div>
                    </div>
                    <div className="price-div">
                      <p>R$ {coffee.price}0</p>
                    </div>
                  </div>
                  <hr />
                </>
              ))
            ) : (
              <p>Your cart is empty.</p>
            )}
            <div className="final-info-div">
              <h4>Total de itens {coffeItems.length}</h4>
              <h4>Frete: {deliverPrice}0</h4>
              <h1>Total: R$ {totalPrice}0</h1>
              <button className="submit-button" type="submit">Finalizar pedido</button>
            </div>
          </CartContainer>
        </div>

        <PaymentContainer>
          <div>
            <div className="payment-title">
              <img src={payment} alt="" />
              <h2>Endereço de entrega</h2>
            </div>
            <h4>
              O pagamento é feito na entrega. Escolha a forma que deseja pagar
            </h4>
          </div>
          <div className="payment-buttons">
            <button type="submit" className="payment-button">
              <img src={creditCard} alt="" />
              CARTÃO DE CRÉDITO
            </button>
            <button type="submit" className="payment-button">
              <img src={debitCard} alt="" />
              CARTÃO DE DÉBITO
            </button>
            <button type="submit" className="payment-button">
              <img src={cash} alt="" />
              DINHEIRO
            </button>
          </div>
        </PaymentContainer>
      </Page>
    </>
  );
}
