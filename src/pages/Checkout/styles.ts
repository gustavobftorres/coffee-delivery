import styled from "styled-components";

export const Page = styled.div`
  margin-left: 10rem;
  margin-right: 10rem;

  .boxes-separation {
    justify-content: space-between;
  }

  .forms-payment-container {
    display: flex;
    flex-direction: column;
    gap: 0.3rem;
    border-radius: 0.3rem;
    width: 60%;
    float: left;
    margin-right: 0.3rem;
    margin-bottom: 1rem;
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
  flex: 1;
  background-color: #f5f5f5;
  line-height: 0.8;
  border-radius: 0.3rem;
  padding: 1rem;
  width: 90%;
  padding-bottom: 2rem;
  height: 20%;

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
  /* flex: 1; */
  background-color: #f5f5f5;
  display: flex;
  width: 27rem;
  border-radius: 0.3rem;
  flex-direction: column;
  align-items: center;
  padding: 1rem;

  border-top-right-radius: 3rem;
  border-bottom-left-radius: 3rem;

  div {
    display: flex;
    flex-direction: row;
    width: 90%;
  }

  hr {
    width: 90%;
    margin-bottom: 1rem;
    border-color: #f5f5f5;
    border-width: 0.2px;
  }

  .amount {
    display: flex;
    flex-direction: row;
    align-items: center;
    text-align: center;
    padding-left: 0.5rem;
    padding-right: 1rem;
    height: 2rem;
    gap: 0.3rem;

    background-color: ${(props) => props.theme["base-hover"]};
    border-radius: 6px;

    font-size: 1.2rem;
    font-family: "Roboto", sans-serif;
    font-weight: 300;

    width: 22%;

    .subtract {
      font-size: 16px;
      border: none;
      background-color: transparent;
      color: ${(props) => props.theme["purple"]};
    }

    .sum {
      font-size: 16px;
      border: none;
      background-color: transparent;
      color: ${(props) => props.theme["purple"]};
    }
  }

  .remove-button-container {
    display: flex;
    /* width: 10%; */
    border-radius: 6px;
    font-size: 1.2rem;
    border: none;
    background-color: transparent;
    color: ${(props) => props.theme["purple"]};

    button {
      display: flex;
      border: none;
      background-color: ${(props) => props.theme["base-hover"]};
      /* background-color: green; */
      align-items: center;
      padding: 0rem;
      border-radius: 6px;
      padding-right: 0.5rem;
    }

    img {
      width: 20px;
      height: 20px;
      margin: 0.4rem;
    }

    h4 {
      padding: 0;
      margin: 0;
      font-size: 0.8rem;
      color: ${(props) => props.theme["base-subtitle"]};

      font-family: "Roboto", sans-serif;
      font-weight: 400;
    }
  }
  .price-div {
    display: flex;
    width: 20%;
    text-align: right;
    justify-content: flex-end;
    margin-right: 1rem;

    p {
      font-size: 1rem;
      font-family: "Roboto", sans-serif;
      font-weight: 500;
      color: ${(props) => props.theme["base-subtitle"]};
    }
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

  .final-info-div {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.1rem;
    /* margin-top: 2rem; */

    .info {
    }

    .info-titles {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      text-align: start;
      font-size: 1rem;
      font-family: "Roboto", sans-serif;
      font-weight: 400;
      color: ${(props) => props.theme["base-subtitle"]};
    }

    .info-numbers {
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      text-align: end;
    }
  }

  .submit-button {
    background-color: ${(props) => props.theme["yellow"]};
    color: ${(props) => props.theme["white"]};
    padding: 0.8rem 1rem;
    border-radius: 0.3rem;
    /* border-color: ${(props) => props.theme["base-button"]};
    border-style: solid; */
    border: none;
    width: 90%;
    cursor: pointer;

    font-family: "Roboto", sans-serif;
    font-weight: 500;

    margin-bottom: 1rem;
  }

  h1 {
    font-family: "Baloo 2", sans-serif;
    font-size: 22px;
  }

  h2 {
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-size: 16px;
  }

  h4 {
    font-size: 14px;
    font-family: "Roboto", sans-serif;
    font-weight: 300;
    margin: 0.5rem;
    margin-left: 0rem;
    margin-right: 0rem;
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
  width: 90%;
  border-radius: 0.3rem;
  padding: 1rem;
  margin-top: 1rem;
  margin-bottom: 1rem;

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
    gap: 3rem;
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

    &:hover {
      background-color: ${(props) => props.theme["purple-light"]};
    }
  }

  .active {
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

      background-color: ${(props) => props.theme["purple-light"]};
      border: 1px solid ${(props) => props.theme["purple"]};
      border-color: ${(props) => props.theme["purle"]};
    }
`;


