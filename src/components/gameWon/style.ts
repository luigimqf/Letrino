import styled, { keyframes } from "styled-components";

interface IProps {
  $color?: boolean;
  $display?: boolean;
  $index?: number;
}

const Flip = keyframes`
  from {
    transform: rotateY(180deg)
  }
  to{
    transform: rotateY(360deg)
  }

`;

export const Wrapper = styled.div<IProps>`
  width: 100%;
  height: ${(props) => (props.$display ? "26%" : "0%")};
  position: absolute;
  display: flex;
  top: 0px;
  transition: 0.1s;
  justify-content: space-between;
  align-items: center;
  z-index: 1;
  background-color: #2f3542;
`;

export const GridWrapper = styled.div`
  width: 30%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  /* background-color: blue; */
`;

export const Grid = styled.div<IProps>`
  width: 150px;
  height: 100%;
  display: ${(props) => (props.$display ? "none" : "flex")};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    width: 100px;
  }
  @media (max-width: 400px) {
    width: 70px;
  }
`;

export const Row = styled.div<IProps>`
  width: 100%;
  height: 30px;
  display: ${(props) => (props.$display ? "flex" : "none")};
  justify-content: space-evenly;
  align-items: center;
  /* background-color: purple; */
`;

export const Letter = styled.div<IProps>`
  width: 25px;
  /* background-color: yellow; */
  aspect-ratio: 1/1;
  transition: ${(props) => props.$index}s;
  border-radius: 4px;
  animation: ${Flip} ${(props) => props.$index}s linear;

  @media (max-width: 768px) {
    width: 15px;
    border-radius: 2px;
  }
  @media (max-width: 400px) {
    width: 10px;
    border-radius: 1px;
  }
`;

export const Info = styled.div`
  width: 40%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
export const Tries = styled.p<IProps>`
  width: 80%;
  text-align: center;
  display: ${(props) => (props.$display ? "visible" : "none")};
  font-size: clamp(0.5rem, 2.5vw, 1rem);
  margin: 0;
  font-weight: bold;
  color: #fff;
`;
export const UWon = styled.h1<IProps>`
  width: 70%;
  margin: 0;
  display: ${(props) => (props.$display ? "visible" : "none")};
  text-align: center;
  font-size: clamp(0.8rem, 2.5vw, 2rem);
  color: #10ac84;
`;

export const Button = styled.div<IProps>`
  width: 40%;
  height: 15%;
  background-color: ${(props) => (props.$color ? "#009afe" : "#10ac84")};
  transition: 0.5s;
  border-radius: 3px;
  text-align: center;
  color: #fff;
  cursor: pointer;
  font-size: clamp(0.5rem, 2.5vw, 0.7rem);
  display: ${(props) => (props.$display ? "flex" : "none")};
  justify-content: center;
  align-items: center;
`;

export const Close = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 10%;
  background-color: #2f3542;
`;
