import { SetStateAction, useContext, useState } from "react";
import { Kingsize, Key, KeyboardWrapper, KeysWrapper } from "./style";
import { HiBackspace as Backspace } from "react-icons/hi";
import { BsCheck2 as Enter } from "react-icons/bs";
import { GameInfoContext } from "../../contexts/GameContext";

export function Keyboard() {
  const [upKeys, setUpKeys] = useState([
    "Q",
    "E",
    "R",
    "T",
    "Y",
    "U",
    "I",
    "O",
    "P",
  ]);
  const [middleKeys, setMiddleKeys] = useState([
    "A",
    "S",
    "D",
    "F",
    "G",
    "H",
    "J",
    "K",
    "L",
  ]);
  const [downKeys, setDownKeys] = useState(["Z", "X", "C", "V", "B", "N", "M"]);
  const {
    word,
    grid,
    setGrid,
    handleGuess,
    activeRow,
    inputOnFocus,
    setInputOnFocus,
  } = useContext(GameInfoContext);

  function handleClick(key: string, index: number) {
    if (inputOnFocus === 5) {
      setInputOnFocus(index - 1);
      return;
    }
    const guessCopy = [...grid];
    guessCopy[activeRow].letters[index] = key.toUpperCase();
    setGrid(guessCopy);
    if (key === "") {
      setInputOnFocus(inputOnFocus - 1);
      return;
    }
    setInputOnFocus(inputOnFocus + 1);
  }

  function getLetterColor(letter: string) {
    if (grid[activeRow].letters.includes(letter.toLowerCase()))
      return "#2ed573";
    if (grid[activeRow].letters.includes(letter.toLowerCase()))
      return "#b71540";
    return "transparent";
  }

  return (
    <KeyboardWrapper>
      <KeysWrapper>
        {upKeys.map((key, index) => {
          const color = getLetterColor(key);

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
          return (
            <Key
              value={key}
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
          return (
            <Key
              value={key}
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
