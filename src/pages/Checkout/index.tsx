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
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

export function Checkout() {
  const { register, getValues, handleSubmit, setValue } = useForm();
  const { coffeItems, addToCart } = useMenu();
  const [activeButton, setActiveButton] = useState(0);
  const [selectedPayment, setSelectedPayment] = useState("");

  const navigate = useNavigate();

  const handleButtonClick = (id: number, paymentMethod: string) => {
    setActiveButton(id);
    setSelectedPayment(paymentMethod);
    setValue("paymentMethod", paymentMethod, { shouldValidate: true });
  };

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

  const onSubmit = (data: any) => {
    console.log(data);
    console.log(getValues());
    localStorage.setItem("formData", JSON.stringify(data)); // Save form data in localStorage
    navigate("../sucess");
  };

  console.log(coffeItems);

  const totalItemsPrice = coffeItems.reduce(
    (acc, coffe) => acc + coffe.price * coffe.quantity,
    0
  );

  const deliverPrice = 3.5;

  const totalPrice = totalItemsPrice + deliverPrice;

  console.log(getValues());

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
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="boxes-separation">
            <div className="forms-payment-container">
              <FormsContainer>
                <div>
                  <div className="adress-title">
                    <img src={pin} alt="" />
                    <h2>Endereço de entrega</h2>
                  </div>
                  <h4>Informe o endereço onde deseja receber o pedido</h4>
                </div>

                <div className="input-container">
                  <input
                    id="cep"
                    type="number"
                    placeholder="CEP"
                    {...register("cep", {
                      valueAsNumber: true,
                      required: true,
                      minLength: 7,
                      maxLength: 8,
                    })}
                  />
                </div>

                <div className="input-container">
                  <input
                    id="adress"
                    className="adress-input"
                    type="text"
                    placeholder="Rua"
                    {...register("adress", { required: true })}
                  />
                </div>

                <div className="input-container">
                  <input
                    id="adressNumber"
                    className="adress-number-input"
                    type="number"
                    placeholder="Número"
                    {...register("adressNumber", {
                      valueAsNumber: true,
                      required: true,
                    })}
                  />
                  <input
                    id="adress-complement"
                    className="adress-input"
                    type="text"
                    placeholder="Complemento"
                    {...register("adress-complement")}
                  />
                </div>

                <div className="input-container">
                  <input
                    id="neighborhood"
                    className="adress-bairro-input"
                    type="text"
                    placeholder="Bairro"
                    {...register("neighborhood", { required: true })}
                  />
                  <input
                    id="city"
                    className="adress-city-input"
                    type="text"
                    placeholder="Cidade"
                    {...register("city", { required: true })}
                  />
                  <input
                    id="state"
                    className="adress-state-input"
                    type="text"
                    placeholder="SC"
                    {...register("state", { required: true })}
                  />
                </div>
              </FormsContainer>

              <PaymentContainer>
                <div>
                  <div className="payment-title">
                    <img src={payment} alt="" />
                    <h2>Endereço de entrega</h2>
                  </div>
                  <h4>
                    O pagamento é feito na entrega. Escolha a forma que deseja
                    pagar
                  </h4>
                </div>
                <div className="payment-buttons">
                  <button
                    type="button"
                    className={activeButton === 1 ? "active" : "payment-button"}
                    onClick={() => handleButtonClick(1, "Cartão de Crédito")}
                  >
                    <img src={creditCard} alt="" />
                    CARTÃO DE CRÉDITO
                  </button>
                  <button
                    type="button"
                    className={activeButton === 2 ? "active" : "payment-button"}
                    onClick={() => handleButtonClick(2, "Cartão de Débito")}
                  >
                    <img src={debitCard} alt="" />
                    CARTÃO DE DÉBITO
                  </button>
                  <button
                    type="button"
                    className={activeButton === 3 ? "active" : "payment-button"}
                    onClick={() => handleButtonClick(3, "Dinheiro")}
                  >
                    <img src={cash} alt="" />
                    DINHEIRO
                  </button>
                </div>
              </PaymentContainer>
            </div>

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
                <button
                  className="submit-button"
                  type="submit"
                  disabled={coffeItems.length === 0}
                >
                  Finalizar pedido
                </button>
              </div>
            </CartContainer>
          </div>
        </form>
      </Page>
    </>
  );
}
