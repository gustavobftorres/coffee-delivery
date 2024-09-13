import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin-top: 5rem;
`;

export const InfoContainer = styled.div`
  display: block;
  padding: 2rem;

  p {
    font-family: "Roboto", sans-serif;
    font-size: 20px;
    line-height: 1.5;
    color: ${(props) => props.theme["base-subtitle"]};
  }

  .info {
    display: flex;
    gap: 1rem;
    align-items: center;
    font-size: 14px;
  }

  h1 {
    font-family: "Baloo 2", sans-serif;
    font-size: 42px;
    font-weight: bolder;
  }
`;

export const LogoContainer = styled.div``;

export const IconsContainer = styled.div`
  display: inline-block;
  gap: 1rem;
  align-items: center;
  margin-right: 1rem;

  .main {
    display: inline-block;
    flex-direction: column;
    gap: 2rem;
    /* background-color: ${(props) => props.theme["base-card"]}; */
  }

  .main2 {
    display: inline-block;
    flex-direction: column;
    gap: 2rem;
    /* background-color: green; */
  }

  div {
    display: flex;
    gap: 1rem;
  }

  h3 {
    font-family: "Roboto", sans-serif;
    font-size: 14px;
    color: ${(props) => props.theme["base-text"]};
    font-weight: normal;
  }
`;

export const Title = styled.div`
  display: flex;
  margin-top: 5rem;
  margin-bottom: 3rem;
  margin-left: 12rem;
  text-align: center;
  font-size: 20px;
  font-family: "Baloo 2", sans-serif;
  color: ${(props) => props.theme["base-title"]};
`;

export const CoffeeMenu = styled.div`
  margin-left: 5rem;

  .title {
    margin-bottom: 5rem;
    text-align: center;
  }
`;

export const CoffeeCards = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(300px, 0fr));
  gap: 1rem;
  align-items: center;
  justify-content: center;
`;
