import styled from "styled-components";

export const Page = styled.div`
  margin-left: 5rem;
  margin-right: 5rem;

  .boxes-separation {
    display: flex;
    gap: 1rem;
  }
`;

export const Title = styled.div`
  font-family: "Baloo 2", sans-serif;
  font-size: 12px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 77%;

  .selected-coffee-title {
    display: flex;
  }
`;

export const FormsContainer = styled.div`
  background-color: #f5f5f5;
  line-height: 0.8;
  border-radius: 0.3rem;
  padding: 1rem;
  width: 60%;
  padding-bottom: 2rem;

  h2 {
    font-family: "Roboto", sans-serif;
    font-weight: 400;
  }

  h4 {
    font-family: "Roboto", sans-serif;
    font-weight: 300;
    margin-top: 0;
    margin-left: 2rem;
  }

  .input-container {
    display: flex;
    gap: 0.5rem;
    margin: 2rem;
    margin-bottom: 0rem;
    margin-top: 0.8rem;
  }

  input {
    background-color: ${(props) => props.theme["base-input"]};
    padding: 1rem;
    border-radius: 0.3rem;
    border-color: ${(props) => props.theme["base-button"]};
    border-style: solid;
  }

  .adress-title {
    display: flex;
    gap: 0.5rem;
  }

  .adress-input {
    width: 100%;
  }

  .adress-number-input {
    width: 60%;
  }

  .adress-bairro-input {
    width: 80%;
  }

  .adress-city-input {
    width: 60%;
  }

  .adress-state-input {
    width: 10%;
  }
`;

export const CartContainer = styled.div`
  background-color: #f5f5f5;
  display: flex;
  width: 40%;
  border-radius: 0.3rem;
  flex-direction: column;
  align-items: center;

  border-top-right-radius: 3rem;
  border-bottom-left-radius: 3rem;

  div {
    display: flex;
    flex-direction: row;
    width: 90%;
    align-items: center;
    /* background-color: blue */
  }

  .price-div {
    display: flex;
    width: 20%;
    text-align: right;
    justify-content: flex-end;
    /* background-color: green; */
  }

  .title-div {
    display: flex;
    /* background-color: red; */
    width: 80%;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }

  .button-div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    /* margin-top: 1rem; */
  }

  h2 {
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-size: 16px;
    /* background-color: red; */
  }

  img {
    width: 60px;
    height: 60px;
    margin: 1rem;
    border-radius: 50%;
    object-fit: cover;
  }
`;

export const PaymentContainer = styled.div`
  background-color: #f5f5f5;
  width: 58%;
  border-radius: 0.3rem;
  padding: 1rem;
  margin-top: 1rem;

  h2 {
    font-family: "Roboto", sans-serif;
    font-weight: 400;
  }

  h4 {
    font-family: "Roboto", sans-serif;
    font-weight: 300;
    margin-top: 0;
    margin-left: 2rem;
  }

  .payment-title {
    display: flex;
    gap: 0.5rem;
  }

  .payment-buttons {
    display: flex;
    gap: 5rem;
    margin-top: 1rem;
    /* background-color: green; */
    align-items: center;

  }

  .payment-button {
    display: flex;
    width: 300px;
    height: 50px;
    border-radius: 0.3rem;
    border: none;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;

    font-family: "Roboto", sans-serif;
    font-weight: 300;

    background-color: ${(props) => props.theme["base-button"]};
  }

`
