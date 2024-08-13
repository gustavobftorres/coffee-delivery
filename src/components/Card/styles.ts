import styled from "styled-components";

export const CardContainer = styled.div`
  width: 250px;
  background-color: ${(props) => props.theme['base-card']};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-top-right-radius: 10px;
  border-bottom-left-radius: 10px;
  position: relative;
  padding-top: 6rem;
  margin-bottom: 2rem;

  img {
    position: absolute;
    top: -30px;
  }

  h2 {
    font-size: 1.5;
    color: 'white';
    margin-bottom: 1rem;
  }

  h4 {
    font-size: 1.5rem;
    color: 'black';
    text-align: center;
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
  }

  p {
    margin: 1rem;
  }

  .price {
    display: flex;
    flex-direction: row;
    gap: 1rem;
    align-items: center;
    text-align: center;
  }

  .amount {
    display: flex;
    flex-direction: row;
  }
`

export const TagContainer = styled.div`
  background-color: ${(props) => props.theme['yellow-light']};
  color: ${(props) => props.theme['yellow-dark']};
  padding: 0.2rem;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  border-radius: 10px;
`