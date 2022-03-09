import styled from "styled-components";

interface IProps {
  isActive: boolean;
}

export const Wrapper = styled.div`
  width: 25%;
  height: 75%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;
