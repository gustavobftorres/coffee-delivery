import { HeaderContainer, LogoDiv, ButtonsDiv, LocationButton, ShopButton} from "./styles";
import logo from "../../assets/logo.svg";
import locationPin from "../../assets/location-pin.svg";
import yellowCart from "../../assets/yellow-cart-icon.svg";
import { useNavigate } from "react-router-dom";
export function Header() {
  const navigate = useNavigate();
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
        <ShopButton type="button" onClick={() => {
          // trigger modal with checkout form
          navigate("/checkout");
        }}>
          <img src={yellowCart} alt="" />
        </ShopButton>
      </ButtonsDiv>
    </HeaderContainer>
  );
}
