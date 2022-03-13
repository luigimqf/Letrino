import styled, { keyframes } from "styled-components";

interface IProps {
  $isActive: boolean;
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
  width: 250px;
  height: 40px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

export const GuessedLetter = styled.div`
  width: 13%;
  aspect-ratio: 1/1;
  border-radius: 5px;
  cursor: pointer;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${Flip} 0.7s linear;
`;
export const RowBox = styled.div`
  width: 250px;
  height: 40px;
  display: flex;

  justify-content: space-evenly;
  align-items: center;
`;

export const LetterBox = styled.input<IProps>`
  width: 13%;
  aspect-ratio: 1/1;
  border: 2px solid ${(props) => (props.$isActive ? "#2f3542" : "none")};
  border-radius: 5px;
  background: ${(props) => (props.$isActive ? "none" : "#none")};
  color: #2f3542;
  font-weight: bold;
  text-decoration: none;
  text-align: center;
`;
