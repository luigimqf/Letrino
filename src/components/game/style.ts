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

export const ColumnBox = styled.div<IProps>`
  width: 80%;
  height: 40px;
  display: flex;
  background-color: ${(props) => (props.isActive ? "red" : "transparent")};
  justify-content: space-evenly;
  align-items: center;
`;

export const LetterBox = styled.input`
  width: 10%;
  aspect-ratio: 1/1;
  border: 2px solid black;
  background: none;
  color: #fff;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
`;
