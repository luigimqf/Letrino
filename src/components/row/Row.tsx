import React, { useRef, useEffect, useContext } from "react";
import { GameInfoContext } from "../../contexts/GameContext";
import { GuessedBox, GuessedLetter, LetterBox, RowBox } from "./style";
import { alphabet } from "../../utils/alfabeto";

interface IProps {
  isActive: boolean;
  row: { id: number; letters: string[] };
  index: number;
}

export function Row({ isActive, row, index }: IProps) {
  const {
    word,
    isGameWon,
    handleGuess,
    setDisplayWonScreen,
    setDisplayLoseScreen,
    isGameLose,
    grid,
    setGrid,
    activeRow,
    setInputOnFocus,
    inputOnFocus,
    guessedRows,
  } = useContext(GameInfoContext);

  const isGuessed = guessedRows.includes(index);

  const elementsRef = useRef<HTMLInputElement[]>([]);

  function handleInputChange(e: any, index: number) {
    if (!alphabet.includes(e.target.value)) return;
    if (e.nativeEvent.inputType === "deleteContentBackward") return;
    const guessCopy = [...grid];
    guessCopy[activeRow].letters[index] = e.target.value;
    setGrid(guessCopy);
    if (grid[activeRow].letters.filter(Boolean).length === 5) return;
    changeInputFocus(index + 1);
  }

  function changeInputFocus(index: number) {
    const ref = elementsRef.current[index];
    if (ref) {
      ref.focus();
    }
  }
  function handleKeyDown(
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) {
    if (
      e.key === "Enter" &&
      grid[activeRow].letters.filter(Boolean).length === 5
    ) {
      handleGuess();
      return;
    }
    if (!alphabet.includes(e.key)) return;
    if (e.key === "Backspace") {
      const guessCopy = [...grid];
      if (guessCopy[activeRow].letters[index] !== "") {
        guessCopy[activeRow].letters[index] = "";
        setGrid(guessCopy);
        return;
      }
      changeInputFocus(index - 1);
    }
  }

  function getLetterColor(letter: string, index: number) {
    if (word[index] === letter.toLowerCase()) return "#10ac84";
    if (word.includes(letter.toLowerCase())) return "#ffa502";
    if (!word.includes(letter.toLowerCase())) return "#b71540";

    return "#121214";
  }

  function handleLetterClick() {
    if (isGameWon) {
      setDisplayWonScreen(true);
    }
    if (isGameLose) {
      setDisplayLoseScreen(true);
    }
  }

  useEffect(() => {
    changeInputFocus(inputOnFocus);
  }, [inputOnFocus]);

  useEffect(() => {
    const ref = elementsRef.current[0];
    if (ref) {
      ref.focus();
    }
  }, [isActive]);

  return (
    <>
      {isGuessed ? (
        <GuessedBox>
          {row.letters.map((letter, index) => {
            const color = getLetterColor(letter, index);

            return (
              <GuessedLetter
                key={index}
                onClick={() => handleLetterClick()}
                style={{ backgroundColor: `${color}` }}
              >
                {letter.toUpperCase()}
              </GuessedLetter>
            );
          })}
        </GuessedBox>
      ) : (
        <RowBox>
          {row.letters.map((letter, index) => {
            return (
              <LetterBox
                value={letter.toUpperCase()}
                disabled={!isActive}
                maxLength={1}
                onFocus={() => setInputOnFocus(index)}
                onChange={(e) => handleInputChange(e, inputOnFocus)}
                onKeyDown={(e) => handleKeyDown(e, inputOnFocus)}
                ref={(el) => {
                  if (el) {
                    elementsRef.current[index] = el;
                  }
                }}
                $isActive={isActive}
                key={index}
              />
            );
          })}
        </RowBox>
      )}
    </>
  );
}

/*
 * Row passa a fazer as logicas de focus
 * Mudar os valores atuais dos inputs
 * Verificar se a palavra esta correta
 * Mudar a renderização do componente para as cores
 * Renderização condicional feita a partidas da verificação junto com o activeRow passado pelo App.tsx
 */
