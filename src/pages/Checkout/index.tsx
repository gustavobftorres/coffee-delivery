
import { Header } from "../../components/Header"
import { MenuContext } from "../../context/MenuContext";
import { useContext } from "react";
import {
  Title,
  FormsContainer,
  Page,
  CartContainer,
  PaymentContainer,
} from "./styles"
import pin from "../../assets/pin-adress-yellow.svg"
import payment from "../../assets/payment-icon.svg"

export function Checkout() {
  const { totalItems } = useContext(MenuContext);

  return (
    <>
      <Header
        amount={totalItems}
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
            <h1>
              opa
            </h1>
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
        </PaymentContainer>




      </Page>


      </>
  )
}