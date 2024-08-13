import { Header } from '../../components/Header';
import { 
  Container,
  InfoContainer,
  LogoContainer
  } from './styles';
import café from '../../assets/café.png';

export function Home() {
  return (
    <>
      <Header />
      <Container>
        <InfoContainer>
        <h1>Encontre o café perfeito para <br />
          qualquer hora do dia</h1>
          <p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>
        </InfoContainer>
        <LogoContainer>
          <img src={café} alt="" />
        </LogoContainer>
      </Container>
    </>
    
  )
}