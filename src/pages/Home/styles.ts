import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  margin-top: 5rem;
`

export const InfoContainer = styled.div`

  display: block;
  padding: 2rem;

  p {
    font-size: 16px;
    line-height: 1.5;
    color: ${(props) => props.theme['base-subtitle']}
  }

  .info {
    display: flex;
    gap: 1rem;
    align-items: center;
    font-size: 14px;
  }
`

export const LogoContainer = styled.div`

`

export const IconsContainer = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;

  .main {
    display: flex;
    gap: 2rem;
  }

  div {
    display: flex;
    gap: 1rem;

  }

  h3 {
    font-size: 14px;
    color: ${(props) => props.theme['base-text']};
    font-weight: normal;	
  }
`

export const Title = styled.div`
  display: flex;
  margin-top: 5rem;
  margin-bottom: 3rem;
  margin-left: 5rem;
  text-align: center;
  font-size: 20px;
  color: ${(props) => props.theme['base-text']};
`

export const CoffeeMenu = styled.div`
  margin-left: 5rem;

  .title {
    margin-bottom: 5rem;
    text-align: center;
  }
`

export const CoffeeCards = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(300px, 0fr));
  gap: 1rem;
  align-items: center;
  justify-content: center;
`
