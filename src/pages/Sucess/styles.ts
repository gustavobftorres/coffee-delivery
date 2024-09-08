import styled from "styled-components";

export const Page = styled.div`
  display: flex;
  margin-left: 5rem;
  margin-right: 5rem;
  margin-top: 5rem;
  gap: 7rem;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 1rem;

  width: 50%;
`;

export const Title = styled.div`
  font-family: "Baloo 2", sans-serif;
  font-size: 18px;
  color: ${(props) => props.theme["yellow-dark"]};
  margin: 0;

  h1 {
    margin: 0;
  }
`;

export const Subtitle = styled.div`
  font-family: "Roboto", sans-serif;
  font-size: 18px;
  margin-bottom: 1rem;
  color: ${(props) => props.theme["base-text"]};

  p {
    margin: 0;
  }
`;

export const DeliveryService = styled.div`
  border: 1px solid ${(props) => props.theme["yellow"]};
  border-radius: 0.3rem;
  border-top-right-radius: 1rem;
  border-bottom-left-radius: 1rem;

  padding: 2rem;
  padding-bottom: 1rem;
  margin-top: 1rem;

  
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  color: ${(props) => props.theme["base-text"]};

  div {
    display: flex;
    align-items: flex-start;
    gap: 1rem;
    margin-bottom: 1rem;
  }

  .information {
    display: flex;
    flex-direction: column;
    gap: 0.2rem;

    p {
      margin: 0;
    }
  }
`;

export const Image = styled.div`
  width: 50%;
  margin-top: 6rem;
`;
