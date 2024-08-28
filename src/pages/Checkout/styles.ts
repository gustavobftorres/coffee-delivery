import styled from "styled-components";

export const Page = styled.div`
margin-left: 5rem;
margin-right: 5rem;

.boxes-separation {
  display: flex;
  gap: 1rem;
}
`

export const Title = styled.div`
font-family: "Baloo 2", sans-serif;
font-size: 12px;

display: flex;
flex-direction: row;
justify-content: space-between;

.selected-coffee-title {
  display: flex;
  margin-right: 29rem;
}


`

export const FormsContainer = styled.div`
background-color: #f5f5f5;
line-height: 0.8;
border-radius: 0.3rem;
padding: 1rem;
width: 60%;

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
  }

  input {
    height: 1rem;
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
`

export const CartContainer = styled.div`
  background-color: #f5f5f5;
  display: flex;
  width: 40%;
  border-radius: 0.3rem;
`