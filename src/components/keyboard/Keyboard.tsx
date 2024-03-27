import { useContext } from "react";
import { Kingsize, Key, KeyboardWrapper, KeysWrapper } from "./style";
import { HiBackspace as Backspace } from "react-icons/hi";
import { BsCheck2 as Enter } from "react-icons/bs";
import { GameInfoContext } from "../../contexts/GameContext";

export function Keyboard() {
  const upKeys = ["Q","W", "E", "R", "T", "Y", "U", "I", "O", "P"];
  const middleKeys = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
  const downKeys = ["Z", "X", "C", "V", "B", "N", "M"];
  const {
    grid,
    setGrid,
    handleGuess,
    isGameLose,
    isGameWon,
    activeRow,
    inputOnFocus,
    setInputOnFocus,
    rightLetters,
    wrongLetters,
    existingLetters,
  } = useContext(GameInfoContext);

  function handleClick(key: string, index: number) {
    if (isGameWon) return;
    if (isGameLose) return;
    if (inputOnFocus === 5) {
      setInputOnFocus(index - 1);
      return;
    }

    const guessCopy = [...grid];
    guessCopy[activeRow].letters[index] = key.toLowerCase();
    setGrid(guessCopy);
    if (key === "") {
      if (grid[activeRow].letters.filter(Boolean).length === 0) return;
      setInputOnFocus(inputOnFocus - 1);
      return;
    }
    if (grid[activeRow].letters.filter(Boolean).length === 5) return;
    setInputOnFocus(inputOnFocus + 1);
  }

  function getLetterBackground(letter: string) {
    const allLenght = `${rightLetters.join("")}${existingLetters.join(
      ""
    )}${wrongLetters.join("")}`;

    for (let i = 0; i < allLenght.length; i++) {
      if (rightLetters.includes(letter)) return "#10ac84";
      if (existingLetters.includes(letter)) return "#ffa502";
      if (wrongLetters.includes(letter)) return "#b71540";

      return "transparent";
    }
  }
  function getLetterColor(letter: string) {
    const allLenght = `${rightLetters.join("")}${existingLetters.join(
      ""
    )}${wrongLetters.join("")}`;

    for (let i = 0; i < allLenght.length; i++) {
      if (
        rightLetters.includes(letter) ||
        existingLetters.includes(letter) ||
        wrongLetters.includes(letter)
      )
        return "#fff";

      return "#2f3542";
    }
  }

  return (
    <KeyboardWrapper>
      <KeysWrapper>
        {upKeys.map((key, index) => {
          const background = getLetterBackground(key.toLowerCase());
          const color = getLetterColor(key.toLowerCase());

          return (
            <Key
              value={key}
              style={{ backgroundColor: `${background}`, color: `${color}` }}
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
          const background = getLetterBackground(key.toLowerCase());
          const color = getLetterColor(key.toLowerCase());
          return (
            <Key
              value={key}
              style={{ backgroundColor: `${background}`, color: `${color}` }}
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
          <Enter style={{ width: "25px", height: "25px" }} />
        </Kingsize>
        {downKeys.map((key) => {
          const background = getLetterBackground(key.toLowerCase());
          const color = getLetterColor(key.toLowerCase());
          return (
            <Key
              value={key}
              style={{ backgroundColor: `${background}`, color: `${color}` }}
              onClick={() => handleClick(key, inputOnFocus)}
              key={key}
            >
              {key}
            </Key>
          );
        })}
        <Kingsize onClick={() => handleClick("", inputOnFocus)}>
          <Backspace style={{ width: "25px", height: "25px" }} />
        </Kingsize>
      </KeysWrapper>
    </KeyboardWrapper>
  );
}
