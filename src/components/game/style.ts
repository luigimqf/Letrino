import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 75%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  @media (max-width: 1000px) {
    width: 35%;
  }
  @media (max-width: 768px) {
    width: 40%;
  }
  @media (max-width: 600px) {
    width: 55%;
  }
  @media (max-width: 420px) {
    width: 75%;
  }
`;
