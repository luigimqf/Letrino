import React, {
  createContext,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { allowed } from "../utils/allowedWords";
import { randomWord } from "../utils/getRandomWord";

interface IProps {
  children: React.ReactNode;
}

interface IGame {
  word: string;
  isGameWon: boolean;
  setIsGameWon: React.Dispatch<SetStateAction<boolean>>;
  displayWonScreen: boolean;
  setDisplayWonScreen: React.Dispatch<SetStateAction<boolean>>;
  guesses: string[][];
  getResults: Function;
  handleGuess: Function;
  grid: { id: number; letters: string[] }[];
  setGrid: React.Dispatch<SetStateAction<{ id: number; letters: string[] }[]>>;
  activeRow: number;
  setActiveRow: React.Dispatch<SetStateAction<number>>;
  inputOnFocus: number;
  setInputOnFocus: React.Dispatch<SetStateAction<number>>;
  guessedRows: number[];
  rightLetters: string[];
  wrongLetter: string[];
}

export const GameInfoContext = createContext({} as IGame);

export function GameInfoProvider({ children }: IProps) {
  const word = randomWord;
  const [activeRow, setActiveRow] = useState(0);
  const [isGameWon, setIsGameWon] = useState(false);
  const [displayWonScreen, setDisplayWonScreen] = useState(false);
  const [guessedRows, setGuessedRows] = useState<number[]>([]);
  const [guesses, setGuesses] = useState<string[][]>([]);
  const [results, setResults] = useState<string>("");
  const [inputOnFocus, setInputOnFocus] = useState(0);
  const [wrongLetter, setWrongLetters] = useState<string[]>([]);
  const [rightLetters, setRightLetters] = useState<string[]>([]);

  const [grid, setGrid] = useState([
    { id: 0, letters: ["", "", "", "", ""] },
    { id: 1, letters: ["", "", "", "", ""] },
    { id: 2, letters: ["", "", "", "", ""] },
    { id: 3, letters: ["", "", "", "", ""] },
    { id: 4, letters: ["", "", "", "", ""] },
    { id: 5, letters: ["", "", "", "", ""] },
  ]);

  function handleGuess() {
    if (
      grid[activeRow].letters.filter(Boolean).length < 5 ||
      !allowed.includes(grid[activeRow].letters.join("").toUpperCase())
    )
      return;

    for (let i = 0; i < word.length; i++) {
      const letter = grid[activeRow].letters[i];
      if (word.includes(letter)) {
        setRightLetters((prevValue) => [...prevValue, letter]);
      }
      if (!word.includes(letter)) {
        setWrongLetters((prevValue) => [...prevValue, letter]);
      }
    }
    handleSetGuesses();

    setActiveRow(activeRow + 1);
    if (grid[activeRow].letters.join("") === word) {
      setActiveRow(0);
      setTimeout(() => {
        setIsGameWon(true);
      }, 1500);
    }
  }

  function handleSetGuesses() {
    const guessesCopy = [...guesses];
    guessesCopy[activeRow] = grid[activeRow].letters;
    setGuesses(guessesCopy);
    setGuessedRows((prevValue) => [...prevValue, activeRow]);
  }

  function getResults() {
    console.log("entrei");
    setResults(`Meu resultado foi (${guesses.length}/6) @everyone \n \n`);
    guesses.map((guess) => {
      guess.map((letter, index) => {
        if (word[index] === letter) {
          setResults((prevValue) => prevValue + "🟩");
        } else if (word.includes(letter)) {
          setResults((prevValue) => prevValue + "🟨");
        } else if (!word.includes(letter)) {
          setResults((prevValue) => prevValue + "🟥");
        }
        if (index === 4) setResults((prevValue) => prevValue + "\n");
      });
    });

    setResults((prevValue) => prevValue + "\nJogue Letrino em site:");
  }

  useEffect(() => {
    console.log(word);
  }, []);
  useEffect(() => {
    console.log(isGameWon);
  }, [isGameWon]);
  useEffect(() => {
    navigator.clipboard.writeText(results);
  }, [results]);

  return (
    <GameInfoContext.Provider
      value={{
        word,
        displayWonScreen,
        setDisplayWonScreen,
        guesses,
        isGameWon,
        setIsGameWon,
        getResults,
        handleGuess,
        grid,
        setGrid,
        activeRow,
        setActiveRow,
        inputOnFocus,
        setInputOnFocus,
        guessedRows,
        rightLetters,
        wrongLetter,
      }}
    >
      {children}
    </GameInfoContext.Provider>
  );
}
