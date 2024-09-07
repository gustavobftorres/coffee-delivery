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
import trash from "../../assets/trash-icon.svg";

export function Checkout() {
  const { coffeItems, addToCart } = useMenu();

  const handleQuantityIncrease = (id: number) => {
    coffeItems.map((coffe) => {
      if (coffe.id === id) {
        addToCart({
          id: coffe.id,
          title: coffe.title,
          tag: coffe.tag,
          description: coffe.description,
          price: coffe.price,
          image: coffe.image,
          quantity: 1,
        });
      }
    });
  };

  const handleQuantityDecrease = (id: number) => {
    coffeItems.map((coffe) => {
      if (coffe.id === id) {
        addToCart({
          id: coffe.id,
          title: coffe.title,
          tag: coffe.tag,
          description: coffe.description,
          price: coffe.price,
          image: coffe.image,
          quantity: -1,
        });
      }
    });
  };

  const handleRemove = (id: number) => {
    coffeItems.map((coffe) => {
      if (coffe.id === id) {
        console.log(coffe.quantity);
        addToCart({
          id: coffe.id,
          title: coffe.title,
          tag: coffe.tag,
          description: coffe.description,
          price: coffe.price,
          image: coffe.image,
          quantity: -coffe.quantity,
        });
      }
    });
  };

  console.log(coffeItems);

  const totalItemsPrice = coffeItems.reduce(
    (acc, coffe) => acc + coffe.price * coffe.quantity,
    0
  );

  const deliverPrice = 3.5;

  const totalPrice = totalItemsPrice + deliverPrice;

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
                        <div className="amount">
                          <button
                            className="subtract"
                            onClick={() => handleQuantityDecrease(coffee.id)}
                          >
                            -
                          </button>

                          <p className="moneyAmount">{coffee.quantity}</p>

                          <button
                            className="sum"
                            onClick={() => handleQuantityIncrease(coffee.id)}
                          >
                            +
                          </button>
                        </div>
                        <div className="remove-button-container">
                          <button
                            className="remove"
                            onClick={() => handleRemove(coffee.id)}
                          >
                            <img src={trash} alt="" />
                            <h4>REMOVER</h4>
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="price-div">
                      <p>R$ {coffee.price}</p>
                    </div>
                  </div>
                  <hr />
                </>
              ))
            ) : (
              <p>Your cart is empty.</p>
            )}
            <div className="final-info-div">
              <div className="info">
                <div className="info-titles">
                  <h4>Total de itens</h4>
                  <h4>Entrega</h4>
                  <h1>Total</h1>
                </div>
                <div className="info-numbers">
                  <h4>R$ {totalItemsPrice}</h4>
                  <h4>R$ {deliverPrice}</h4>
                  <h1>R$ {totalPrice}</h1>
                </div>
              </div>
              <button className="submit-button" type="submit">
                Finalizar pedido
              </button>
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
