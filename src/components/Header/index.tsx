import { 
  HeaderContainer,
  LogoDiv,
  ButtonsDiv,
  } from "./styles"
import logo from '../../assets/logo.svg'
export function Header () {
  return (
    <HeaderContainer>
      <LogoDiv>
        <img src={logo} alt="" />   
      </LogoDiv>
      <ButtonsDiv>
      <button type="button">Endereço</button>  
      <button type="button">Carrinho</button>
      </ButtonsDiv>
    </HeaderContainer>
  )
}