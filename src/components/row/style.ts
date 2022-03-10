import styled, { keyframes } from "styled-components";

interface IProps {
  isActive: boolean;
}

const Flip = keyframes`
  from {
    transform: rotateY(180deg)
  }
  to{
    transform: rotateY(360deg)
  }

`;

export const GuessedBox = styled.div`
  width: 80%;
  height: 40px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

export const GuessedLetter = styled.div`
  width: 10%;
  aspect-ratio: 1/1;
  border-radius: 5px;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${Flip} 0.7s linear;
`;
export const RowBox = styled.div`
  width: 80%;
  height: 40px;
  display: flex;

  justify-content: space-evenly;
  align-items: center;
`;

export const LetterBox = styled.input<IProps>`
  width: 10%;
  aspect-ratio: 1/1;
  border: 2px solid ${(props) => (props.isActive ? "#fff" : "none")};
  border-radius: 5px;
  background: ${(props) => (props.isActive ? "none" : "#none")};
  color: #fff;
  font-weight: bold;
  text-decoration: none;
  text-align: center;
`;
