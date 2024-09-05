
import { Header } from "../../components/Header"
import {
  Title,
  FormsContainer,
  Page,
  CartContainer,
  PaymentContainer,
} from "./styles"
import pin from "../../assets/pin-adress-yellow.svg"
import payment from "../../assets/payment-icon.svg"
import creditCard from "../../assets/credit-card-icon.svg"
import debitCard from "../../assets/debit-card-icon.svg"
import cash from "../../assets/cash-icon.svg"
import { useMenu } from "../../context/MenuContext";


export function Checkout() {
  const { coffeItems } = useMenu();

  console.log(coffeItems);

  return (
    <>
      <Header
        amount={coffeItems.length}
      />

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
                <img src={pin} alt=""/>
                <h2>Endereço de entrega</h2>
              </div>
              <h4>Informe o endereço onde deseja receber o pedido</h4>
            </div>

            <div className="input-container">
              <input type="number" placeholder="CEP"/>
            </div>
            
            <div className="input-container">
              <input className="adress-input" type="text" placeholder="Rua"/>
            </div>

            <div className="input-container">
              <input className="adress-number-input" type="number" placeholder="Número"/>
              <input className="adress-input" type="text" placeholder="Complemento"/>
            </div>

            <div className="input-container">
              <input className="adress-bairro-input" type="text" placeholder="Bairro"/>
              <input className="adress-city-input" type="text" placeholder="Cidade"/>
              <input className="adress-state-input" type="text" placeholder="SC"/>
            </div>

          </FormsContainer>

          <CartContainer>
            {coffeItems.length > 0 ? (
              
              coffeItems.map((coffee) => (
                <div key={coffee.id}>
                  <img src={coffee.image} alt={coffee.title} />
                  <div className="title-div">
                    <h2>{coffee.title}</h2>
                    <div className="button-div">
                      <button />
                      <button />
                    </div>
                  </div>
                  <div className="price-div">
                    <p>R$ {coffee.price}</p>
                  </div>
                  {/* <p>Quantity: {coffee.quantity}</p> */}
                </div>
              ))
            ) : (
              <p>Your cart is empty.</p>
            )}
          </CartContainer>

        </div>
        
        <PaymentContainer>
          <div>
            <div className="payment-title">
              <img src={payment} alt=""/>
              <h2>Endereço de entrega</h2>
            </div>
            <h4>O pagamento é feito na entrega. Escolha a forma que deseja pagar</h4>
          </div>
          <div className="payment-buttons">
            <button type="submit" className="payment-button">
              <img src={creditCard} alt=""/>
              CARTÃO DE CRÉDITO
              </button>
            <button type="submit" className="payment-button">
              <img src={debitCard} alt="" />
              CARTÃO DE DÉBITO
              </button>
            <button type="submit" className="payment-button">
              <img src={cash} alt=""/>
              DINHEIRO
              </button>
          </div>
        </PaymentContainer>




      </Page>


      </>
  )
}