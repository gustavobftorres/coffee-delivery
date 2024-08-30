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
import { useNavigate, useLocation } from "react-router-dom";

interface HeaderProps {
  amount: number;
}
export function Header(props: HeaderProps) {
  const navigate = useNavigate();
  // const location = useLocation();



  return (
    <HeaderContainer>
      <LogoDiv>
        <img src={logo} alt="" onClick={() => {
          navigate("/");
        }} />
      </LogoDiv>
      <ButtonsDiv>
        <LocationButton type="button">
          <img src={locationPin} alt="" />
          Porto Alegre, RS
        </LocationButton>
        <ShopButton
          type="button"
          onClick={() => {
            navigate("/checkout");
          }}
        >
          <img src={yellowCart} alt="" />
          {props.amount > 0 && (
            <PopUp>{props.amount}</PopUp>
          )}
        </ShopButton>
      </ButtonsDiv>
    </HeaderContainer>
  );
}
