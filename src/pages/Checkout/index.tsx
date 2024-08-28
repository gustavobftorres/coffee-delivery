
import { Header } from "../../components/Header"
import { MenuContext } from "../../context/MenuContext";
import { useContext } from "react";
import {
  Title,
  FormsContainer,
  Page,
  CartContainer,
} from "./styles"
import pin from "../../assets/pin-adress-yellow.svg"

export function Checkout() {
  const { amounts, setAmounts, totalItems } = useContext(MenuContext);

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
              <input type="" placeholder="CEP"/>
            </div>
          </FormsContainer>

          <CartContainer>
            
          </CartContainer>
        </div>


      </Page>


      </>
  )
}