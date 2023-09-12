import {
  Close,
  Description,
  Info,
  Letter,
  LetterBox,
  Tutorial,
  TutorialWrapper,
  Wrapper,
} from "./style";
import { IoIosArrowUp as Up } from "react-icons/io";
import { SetStateAction } from "react";

interface IProps {
  displayModal: boolean;
  setDisplayModal: React.Dispatch<SetStateAction<boolean>>;
}

export function Modal({ displayModal, setDisplayModal }: IProps) {
  const tutorialWords = [
    { id: 0, word: ["C", "E", "R", "T", "O"] },
    { id: 1, word: ["Q", "U", "A", "S", "E"] },
    { id: 2, word: ["F", "A", "L", "H", "A"] },
  ];
  const iconStyle = {
    color: "#fff",
    width: "20px",
    height: "20px",
    cursor: "pointer",
  };

  function getLetterColor(letter: string) {
    switch (letter) {
      case "C":
        return "#10ac84";
      case "U":
        return "#ffa502";
      case "L":
        return "#b71540";
    }
  }
  return (
    <Wrapper $display={displayModal}>
      <Info>
        <TutorialWrapper>
          <Tutorial>
            <Description $display={displayModal}>
              Se a letra ficar verde, significa que está na posição correta da
              palavra.
            </Description>
            <LetterBox>
              {tutorialWords[0].word.map((letter, index) => {
                const color = getLetterColor(letter);
                return (
                  <Letter
                    key={index}
                    $display={displayModal}
                    style={{ backgroundColor: `${color}` }}
                  >
                    {letter}
                  </Letter>
                );
              })}
            </LetterBox>
          </Tutorial>

          <Tutorial>
            <Description $display={displayModal}>
              Se a letra ficar vermelha, significa que a letra não existe na
              palavra.
            </Description>
            <LetterBox>
              {tutorialWords[2].word.map((letter, index) => {
                const color = getLetterColor(letter);
                return (
                  <Letter
                    key={index}
                    $display={displayModal}
                    style={{ backgroundColor: `${color}` }}
                  >
                    {letter}
                  </Letter>
                );
              })}
            </LetterBox>
          </Tutorial>
          <Tutorial>
            <Description $display={displayModal}>
              Se a letra ficar amarela, significa que a letra existe na palavra
              mas em outra posição.
            </Description>
            <LetterBox>
              {tutorialWords[1].word.map((letter, index) => {
                const color = getLetterColor(letter);
                return (
                  <Letter
                    key={index}
                    $display={displayModal}
                    style={{ backgroundColor: `${color}` }}
                  >
                    {letter}
                  </Letter>
                );
              })}
            </LetterBox>
          </Tutorial>
        </TutorialWrapper>
      </Info>
      <Close>
        {displayModal && (
          <Up style={iconStyle} onClick={() => setDisplayModal(false)} />
        )}
      </Close>
    </Wrapper>
  );
}
