import styled from "styled-components";

interface IProps {
  $display: boolean;
}

export const Wrapper = styled.div<IProps>`
  width: 100%;
  height: ${(props) => (props.$display ? "26%" : "0%")};
  position: absolute;
  display: flex;
  top: 0px;
  transition: 0.1s;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  z-index: 1;
`;

export const Info = styled.div`
  width: 100%;
  height: 100%;
  background-color: #2f3542;
`;

export const TutorialWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
`;

export const Tutorial = styled.div`
  width: 30%;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 500px) {
    width: 50%;
    height: 50%;
  }
`;

export const Description = styled.p<IProps>`
  color: #fff;
  max-height: 50%;
  text-align: center;
  font-size: clamp(0.6rem, 2.2vw, 1rem);
  display: ${(props) => (props.$display ? "visible" : "none")};
`;

export const LetterBox = styled.div`
  width: 70%;
  height: 30%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding-bottom: 10px;
`;

export const Letter = styled.div<IProps>`
  width: 35px;
  aspect-ratio: 1/1;
  display: ${(props) => (props.$display ? "flex" : "none")};
  justify-content: center;
  align-items: center;
  font-size: clamp(0.7rem, 2.5vw, 1.3rem);
  aspect-ratio: 1/1;
  border-radius: 5px;
  border: 1px solid #fff;
  color: #fff;
  font-weight: bold;

  @media (max-width: 768px) {
    width: 25px;
    aspect-ratio: 1/1;
  }
  @media (max-width: 400px) {
    width: 20px;
    aspect-ratio: 1/1;
  }
`;

export const Close = styled.div`
  width: 100%;
  border-radius: 0px 0px 5px 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 10%;
  background-color: #2f3542;
`;
