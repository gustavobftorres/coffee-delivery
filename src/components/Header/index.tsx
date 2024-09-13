import {
  HeaderContainer,
  LogoDiv,
  ButtonsDiv,
  LocationButton,
  ShopButton,
  PopUp,
} from "./styles";
import logo from "../../assets/logo.svg";
import locationPin from "../../assets/location-pin.svg";
import yellowCart from "../../assets/yellow-cart-icon.svg";
import { useNavigate } from "react-router-dom";
import { LocationComponent } from "../LocationComponent";

interface HeaderProps {
  amount: number;
}
export function Header(props: HeaderProps) {
  const navigate = useNavigate();

  return (
    <HeaderContainer>
      <LogoDiv>
        <img
          src={logo}
          alt=""
          onClick={() => {
            navigate("/");
          }}
        />
      </LogoDiv>
      <ButtonsDiv>
        <LocationComponent />
        <ShopButton
          type="button"
          onClick={() => {
            navigate("/checkout");
          }}
        >
          <img src={yellowCart} alt="" />
          {props.amount > 0 && <PopUp>{props.amount}</PopUp>}
        </ShopButton>
      </ButtonsDiv>
    </HeaderContainer>
  );
}
