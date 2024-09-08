import { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { useMenu } from "../../context/MenuContext";
import { Page, Title, Subtitle, DeliveryService, Info, Image } from "./styles";
import deliveryGuy from "../../assets/delivery-guy.svg";
import location from "../../assets/purple-location-pin.svg";
import clock from "../../assets/yellow-clock.svg";
import payment from "../../assets/brown-payment.svg";

export function Sucess() {
  const { coffeItems } = useMenu();
  const [formData, setFormData] = useState(null);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("formData"));
    setFormData(data);
  }, []);

  console.log(formData);

  return (
    <>
      <Header amount={coffeItems.length} />
      <Page>
        <Info>
          <Title>
            <h1>Uhu! Pedido confirmado</h1>
          </Title>
          <Subtitle>
            <p>Agora é só aguardar que logo o café chegará até você</p>
          </Subtitle>
          <DeliveryService>
            <div>
              <img src={location} />
              <div className="information">
                <p>
                  Entrega em{" "}
                  <strong>
                    {" "}
                    {formData?.adress}, {formData?.adressNumber}
                  </strong>
                </p>
                <p>
                  {formData?.neighborhood} - {formData?.city} ,{" "}
                  {formData?.state}
                </p>
              </div>
            </div>

            <div>
              <img src={clock} />
              <div className="information">
                <p>Previsão de entrega</p>

                <p>
                  <strong>20 min - 30 min</strong>
                </p>
              </div>
            </div>

            <div>
              <img src={payment} />
              <div className="information">
                <p>Pagamento na entrega</p>

                <p>
                  <strong>{formData?.paymentMethod}</strong>
                </p>
              </div>
            </div>
          </DeliveryService>
        </Info>
        <Image>
          <img src={deliveryGuy} alt="Delivery guy" />
        </Image>
      </Page>
    </>
  );
}
