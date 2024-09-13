import styled from 'styled-components';

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