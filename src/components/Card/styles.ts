import styled from "styled-components";

export const CardContainer = styled.div`
  width: 250px;
  background-color: ${(props) => props.theme["base-card"]};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-top-right-radius: 10px;
  border-bottom-left-radius: 10px;
  position: relative;
  padding-top: 6rem;
  margin-bottom: 2rem;
  padding-left: 1rem;
  padding-right: 1rem;

  img {
    position: absolute;
    top: -30px;
  }

  h2 {
    font-family: "Baloo 2", sans-serif;
    font-size: 1.5;
    color: "white";
    margin-bottom: 1rem;
  }

  h4 {
    font-family: "Baloo 2", sans-serif;
    font-size: 2rem;
    color: ${(props) => props.theme["base-text"]};
    color: "black";
    text-align: center;
    display: flex;
    align-items: center;
    gap: 0rem;
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
  }

  p {
    font-size: 16px;
    font-family: "Roboto", sans-serif;
    color: ${(props) => props.theme["base-label"]};
  }

  button {
    background-color: transparent;
    border: none;
    color: ${(props) => props.theme["purple"]};
  }

  .dolarSign {
    font-size: 16px;
    color: ${(props) => props.theme["base-label"]};
    font-weight: 300;
    margin-right: 0.2rem;
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
    align-items: center;
    text-align: center;
    padding: 0 0.5rem;
    height: 3rem;

    background-color: ${(props) => props.theme["base-hover"]};
    border-radius: 10px;

    font-size: 4rem;
  }

  .subtract {
    font-size: 32px;
  }

  .sum {
    font-size: 24px;
  }

  .moneyAmount {
    font-size: 24px;
    color: ${(props) => props.theme["base-text"]};
    margin-left: 0.5rem;
    margin-right: 0.5rem;
  }

  .shop {
    background-color: ${(props) => props.theme["purple"]};
  }

  .shopImage {
    display: flex;
    position: relative;
  }
`;

export const TagContainer = styled.div`
  font-family: "Roboto", sans-serif;
  font-size: 14px;
  background-color: ${(props) => props.theme["yellow-light"]};
  color: ${(props) => props.theme["yellow-dark"]};
  padding: 0.2rem;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  border-radius: 10px;
`;

export const ShopTimeButton = styled.button`
  background-color: ${(props) => props.theme["purple-dark"]};
  border: none;
  border-radius: 10px;
  padding: 0.5rem;
  font-family: "Baloo 2", sans-serif;
  cursor: pointer;
  transition: 0.3s;

  img {
    transform: scale(1.1);
    transition: 0.3s;
    filter: brightness(0.8);
    position: absolute;
    top: 50%;
  }

  &:hover {
    background-color: ${(props) => props.theme["purple-dark"]};
  }
`;
