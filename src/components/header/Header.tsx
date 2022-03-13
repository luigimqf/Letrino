import { IconWrapper, Letter, NameWrapper, Wrapper } from "./style";
import {
  BsFillQuestionSquareFill as Tutorial,
  BsFillInfoSquareFill as Info,
} from "react-icons/bs";
import { SetStateAction } from "react";

interface IProps {
  setDisplayModal: React.Dispatch<SetStateAction<boolean>>;
  setDisplayRules: React.Dispatch<SetStateAction<boolean>>;
}

export function Header({ setDisplayModal, setDisplayRules }: IProps) {
  const iconStyle = {
    color: "#2f3542",
    width: "25px",
    height: "25px",
    cursor: "pointer",
  };
  const gameName = ["L", "E", "T", "R", "I", "N", "O"];

  function getGameNameColor(letter: string) {
    switch (letter) {
      case "L":
        return "#10ac84";

      case "R":
        return "#ffa502";

      case "O":
        return "#b71540";
    }
  }
  return (
    <Wrapper>
      <IconWrapper>
        <Tutorial style={iconStyle} onClick={() => setDisplayModal(true)} />
      </IconWrapper>
      <NameWrapper>
        {gameName.map((letter, index) => {
          const color = getGameNameColor(letter);

          return (
            <Letter key={index} style={{ color: `${color}` }}>
              {letter}
            </Letter>
          );
        })}
      </NameWrapper>
      <IconWrapper>
        <Info style={iconStyle} onClick={() => setDisplayRules(true)} />
      </IconWrapper>
    </Wrapper>
  );
}
