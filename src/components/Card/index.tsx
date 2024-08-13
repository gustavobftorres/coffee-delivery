import { useState } from 'react';
import { 
  CardContainer,
  TagContainer,
  } from './styles';

interface CardProps {
  key: number;
  image: string;
  title: string;
  tag: string;
  description: string;
  price: number;
}
export function Card(props: CardProps) {
  const [amount, setAmount] = useState(0);

  return (
    <CardContainer>
      <img src={props.image} alt='placeholder' />
      <div>
        <h2>{props.title}</h2>
        <TagContainer>
          <span>{props.tag}</span>
        </TagContainer>
        <p>{props.description}</p>
      </div>

      <div className='price'>
        <h4>R$ {props.price}</h4>

        <div className='amount'>
        <button onClick={() => {
            if (amount > 0) {
              setAmount(amount - 1);
            }
          }}>
            -
          </button>

            <p>{amount}</p>

          <button onClick={() => {
            setAmount(amount + 1);
          }}>
            +
          </button>

        </div>
        <button>Add</button>
      </div>
    </CardContainer>
  )
}

