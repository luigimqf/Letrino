import styled from "styled-components";
interface IProps {
  $display?: boolean;
}

export const Wrapper = styled.div<IProps>`
  width: 100%;
  height: ${(props) => (props.$display ? "26%" : "0%")};
  position: absolute;
  display: flex;
  top: 0px;
  transition: 0.1s;
  border-bottom: 1px solid
    ${(props) => (props.$display ? " #2f3542" : "transparent")};
  justify-content: flex-end;
  align-items: center;
  z-index: 1;
  background-color: #2f3542;
`;

export const Side = styled.div`
  width: 30%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Info = styled.div`
  width: 40%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

export const Rule = styled.p<IProps>`
  color: #fff;
  font-size: clamp(0.5rem, 2.5vw, 0.8rem);
  display: ${(props) => (props.$display ? "visible" : "none")};
  user-select: none;
`;

export const DescHolder = styled.div`
  width: 70%;
  height: 60%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;

  @media (max-width: 1200px) {
    align-items: center;
    width: 100%;
  }
`;

export const Desc = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 1200px) {
    flex-direction: column;
    margin: 5px 0px;
  }
`;

export const DescText = styled.p<IProps>`
  color: #fff;
  font-size: clamp(0.5rem, 2.5vw, 0.7rem);
  border-radius: 5px;
  display: ${(props) => (props.$display ? "visible" : "none")};
  margin: 0px 5px;
`;
export const A = styled.p<IProps>`
  color: #009afe;
  cursor: pointer;
  display: ${(props) => (props.$display ? "visible" : "none")};
  border-radius: 5px;
  margin: 0px 5px;
  font-size: clamp(0.5rem, 2.5vw, 0.7rem);
`;

export const Close = styled.div<IProps>`
  width: 100%;
  display: ${(props) => (props.$display ? "flex" : "none")};
  justify-content: center;
  align-items: center;

  height: 10%;
  background-color: #2f3542;
`;
