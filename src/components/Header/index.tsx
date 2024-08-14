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
export function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <HeaderContainer>
      <LogoDiv>
        <img src={logo} alt="" />
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
          {currentPath === "/checkout" && <PopUp>3</PopUp>}
        </ShopButton>
      </ButtonsDiv>
    </HeaderContainer>
  );
}
