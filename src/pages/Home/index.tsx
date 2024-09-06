import { Header } from "../../components/Header";
import {
  Container,
  InfoContainer,
  LogoContainer,
  IconsContainer,
  Title,
  CoffeeMenu,
  CoffeeCards,
} from "./styles";
import { Card } from "../../components/Card";
import café from "../../assets/café.png";
import cartIcon from "../../assets/cartIcon.svg";
import boxIcon from "../../assets/box-icon.svg";
import clockIcon from "../../assets/clockIcon.svg";
import coffeeIcon from "../../assets/coffeeIcon.svg";
import ExpressoTradicional from "../../assets/expresso-tradicional.svg";
import ExpressoAmericano from "../../assets/expresso-americano.svg";
import ExpressoCremoso from "../../assets/expresso-cremoso.svg";
import ExpressoGelado from "../../assets/expresso-gelado.svg";
import CafeComLeite from "../../assets/cafe-com-leite.svg";
import Latte from "../../assets/latte.svg";
import Cappucino from "../../assets/capuccino.svg";
import Macchiato from "../../assets/macchiato.svg";
import Moccacino from "../../assets/mocaccino.svg";
import ChocolateQuente from "../../assets/chocolate-quente.svg";
import Cubano from "../../assets/cubano.svg";
import Havaiano from "../../assets/havaiano.svg";
import Arabe from "../../assets/arabe.svg";
import Irlandes from "../../assets/irlandes.svg";
import { useMenu } from "../../context/MenuContext";


const cardData = [
  {
    id: 1,
    title: "Expresso Tradicional",
    tag: "Tradicional",
    description: "O tradicional café feito com água quente e grãos moídos",
    price: 9.90,
    image: ExpressoTradicional,
  },
  {
    id: 2,
    title: "Expresso Americano",
    tag: "Tradicional",
    description: "Expresso diluído, menos intenso que o tradicional",
    price: 9.90,
    image: ExpressoAmericano,
  },
  {
    id: 3,
    title: "Expresso Cremoso",
    tag: "Tradicional",
    description: "Café expresso tradicional com espuma cremosa",
    price: 9.90,
    image: ExpressoCremoso,
  },
  {
    id: 4,
    title: "Expresso Gelado",
    tag: "Tradicional",
    description: "Bebida preparada com café expresso e cubos de gelo",
    price: 9.90,
    image: ExpressoGelado,
  },
  {
    id: 5,
    title: "Café com Leite",
    tag: "Tradicional",
    description: "Meio a meio de expresso tradicional com leite vaporizado",
    price: 9.90,
    image: CafeComLeite,
  },
  {
    id: 6,
    title: "Latte",
    tag: "Tradicional",
    description:
      "Uma dose de café expresso com o dobro de leite e espuma cremosa",
    price: 9.90,
    image: Latte,
  },
  {
    id: 7,
    title: "Capuccino",
    tag: "Tradicional",
    description:
      "Bebida com canela feita de doses iguais de café, leite e espuma",
    price: 9.90,
    image: Cappucino,
  },
  {
    id: 8,
    title: "Macchiato",
    tag: "Tradicional",
    description:
      "Café expresso misturado com um pouco de leite quente e espuma",
    price: 9.90,
    image: Macchiato,
  },
  {
    id: 9,
    title: "Moccacino",
    tag: "Tradicional",
    description: "Café expresso com calda de chocolate, pouco leite e espuma",
    price: 9.90,
    image: Moccacino,
  },
  {
    id: 10,
    title: "Chocolate Quente",
    tag: "Tradicional",
    description: "Bebida feita com chocolate dissolvido no leite quente e café",
    price: 9.90,
    image: ChocolateQuente,
  },
  {
    id: 11,
    title: "Cubano",
    tag: "Tradicional",
    description:
      "Drink gelado de café expresso com rum, creme de leite e hortelã",
    price: 9.90,
    image: Cubano,
  },
  {
    id: 12,
    title: "Havaiano",
    tag: "Tradicional",
    description: "Bebida adocicada preparada com café e leite de coco",
    price: 9.90,
    image: Havaiano,
  },
  {
    id: 13,
    title: "Árabe",
    tag: "Tradicional",
    description: "Bebida preparada com grãos de café árabe e especiarias",
    price: 9.90,
    image: Arabe,
  },
  {
    id: 14,
    title: "Irlandês",
    tag: "Tradicional",
    description: "Bebida a base de café, uísque irlandês, açúcar e chantilly",
    price: 9.90,
    image: Irlandes,
  },
];

export function Home() {
  const { coffeItems } = useMenu()

  console.log(coffeItems);

  return (
    <>
      <Header amount={coffeItems.length} />
      <Container>
        <InfoContainer>
          <div>
            <h1>
              Encontre o café perfeito
              <br />
              para qualquer hora do dia
            </h1>
            <p>
              Com o Coffee Delivery você recebe seu café onde estiver, a<br />
              qualquer hora
            </p>
          </div>
          <IconsContainer>
            <div className="main">
              <div>
                <img src={cartIcon} alt="" />
                <h3>Compra simples e segura</h3>
              </div>
              <div>
                <img src={boxIcon} alt="" />
                <h3>Embalagem mantém o café intacto</h3>
              </div>
            </div>
          </IconsContainer>
          <IconsContainer>
            <div className="main2">
              <div>
                <img src={clockIcon} alt="" />
                <h3>Entrega rápida e rastreada</h3>
              </div>
              <div>
                <img src={coffeeIcon} alt="" />
                <h3>O café chega fresquinho até você</h3>
              </div>
            </div>
          </IconsContainer>
        </InfoContainer>
        <LogoContainer>
          <img src={café} alt="" />
        </LogoContainer>
      </Container>
      <Title>
        <h1>Nossos Cafés</h1>
      </Title>

      <CoffeeMenu>
          <CoffeeCards>
            {cardData.map((coffee) => (
              <Card
                key={coffee.id} // This is just for React's internal use
                id={coffee.id}  // Explicitly pass the id as a prop
                title={coffee.title}
                tag={coffee.tag}
                description={coffee.description}
                price={coffee.price}
                image={coffee.image}
              />
            ))}
          </CoffeeCards>
      </CoffeeMenu>
    </>
  );
}
