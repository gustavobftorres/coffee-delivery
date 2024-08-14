import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 104px;
  /* background-color: #282c34; */
  padding-left: 5rem;
  padding-right: 5rem;
`

export const LogoDiv = styled.div`
  display: flex;
  `

export const ButtonsDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`

export const LocationButton = styled.button`
  background-color: ${(props) => props.theme['purple-light']};
  color: ${(props) => props.theme['purple-dark']};
  border-radius: 5px;
  border: none;
  height: 50px;
  padding: 0 20px;

  display: flex;
  align-items: center;
  gap: 5px;

  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  font-weight: 400;

  &:hover {
    background-color: ${(props) => props.theme['purple-dark']};
    color: ${(props) => props.theme['purple-light']};
  }
  
`

export const ShopButton = styled.button`
  background-color: ${(props) => props.theme['yellow-light']};
  color: ${(props) => props.theme['yellow-dark']};
  border-radius: 5px;
  border: none;
  height: 50px;
  padding: 0 20px;

  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  font-weight: 400;

  display: flex;
  align-items: center;

  &:hover {
    background-color: ${(props) => props.theme['yellow']};
  }
`