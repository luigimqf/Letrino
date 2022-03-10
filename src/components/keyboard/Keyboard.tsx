import { useContext } from "react";
import { Kingsize, Key, KeyboardWrapper, KeysWrapper } from "./style";
import { HiBackspace as Backspace } from "react-icons/hi";
import { BsCheck2 as Enter } from "react-icons/bs";
import { GameInfoContext } from "../../contexts/GameContext";

export function Keyboard() {
  const upKeys = ["Q", "E", "R", "T", "Y", "U", "I", "O", "P"];
  const middleKeys = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
  const downKeys = ["Z", "X", "C", "V", "B", "N", "M"];
  const {
    grid,
    setGrid,
    handleGuess,
    activeRow,
    inputOnFocus,
    setInputOnFocus,
    rightLetters,
    wrongLetter,
  } = useContext(GameInfoContext);

  function handleClick(key: string, index: number) {
    if (inputOnFocus === 5) {
      setInputOnFocus(index - 1);
      return;
    }
    const guessCopy = [...grid];
    guessCopy[activeRow].letters[index] = key.toLowerCase();
    setGrid(guessCopy);
    if (key === "") {
      setInputOnFocus(inputOnFocus - 1);
      return;
    }
    setInputOnFocus(inputOnFocus + 1);
  }

  function getLetterColor(letter: string) {
    for (let i = 0; i < rightLetters.length; i++) {
      if (rightLetters.includes(letter)) return "#10ac84";
      if (wrongLetter.includes(letter)) return "#b71540";

      return "transparent";
    }
  }

  return (
    <KeyboardWrapper>
      <KeysWrapper>
        {upKeys.map((key, index) => {
          const color = getLetterColor(key.toLowerCase());

          return (
            <Key
              value={key}
              style={{ backgroundColor: `${color}` }}
              onClick={() => handleClick(key, inputOnFocus)}
              key={key}
            >
              {key}
            </Key>
          );
        })}
      </KeysWrapper>
      <KeysWrapper>
        {middleKeys.map((key) => {
          const color = getLetterColor(key.toLowerCase());
          return (
            <Key
              value={key}
              style={{ backgroundColor: `${color}` }}
              onClick={() => handleClick(key, inputOnFocus)}
              key={key}
            >
              {key}
            </Key>
          );
        })}
      </KeysWrapper>
      <KeysWrapper>
        <Kingsize
          onClick={() => {
            handleGuess();
          }}
        >
          <Enter style={{ width: "20px", height: "20px" }} />
        </Kingsize>
        {downKeys.map((key) => {
          const color = getLetterColor(key.toLowerCase());
          return (
            <Key
              value={key}
              style={{ backgroundColor: `${color}` }}
              onClick={() => handleClick(key, inputOnFocus)}
              key={key}
            >
              {key}
            </Key>
          );
        })}
        <Kingsize onClick={() => handleClick("", inputOnFocus)}>
          <Backspace style={{ width: "20px", height: "20px" }} />
        </Kingsize>
      </KeysWrapper>
    </KeyboardWrapper>
  );
}
