import React, {
  createContext,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { allowed } from "../utils/allowedWords";
import { getTodayWord } from "../utils/getRandomWord";

interface IProps {
  children: React.ReactNode;
}

interface IGame {
  word: string;
  results: string;
  isGameWon: boolean;
  setIsGameWon: React.Dispatch<SetStateAction<boolean>>;
  isGameLose: boolean;
  displayLoseScreen: boolean;
  setDisplayLoseScreen: React.Dispatch<SetStateAction<boolean>>;
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
  wrongLetters: string[];
  existingLetters: string[];
}

interface IGrid {
  id: number;
  letters: string[];
}
interface ILocalStorage {
  isGameWon: any;
  grid: IGrid[];
  guessedRows: number[];
  guesses: string[][];
  wrongLetters: string[];
  existingLetters: string[];
  rightLetters: string[];
}

export const GameInfoContext = createContext({} as IGame);

export function GameInfoProvider({ children }: IProps) {
  const word = getTodayWord();

  const [isGameWon, setIsGameWon] = useState(false);
  const [displayWonScreen, setDisplayWonScreen] = useState(false);
  const [isGameLose, setIsGameLose] = useState(false);
  const [displayLoseScreen, setDisplayLoseScreen] = useState(false);
  const [activeRow, setActiveRow] = useState(0);
  const [guessedRows, setGuessedRows] = useState<number[]>([]);
  const [guesses, setGuesses] = useState<string[][]>([]);
  const [results, setResults] = useState<string>("");
  const [inputOnFocus, setInputOnFocus] = useState(0);
  const [wrongLetters, setWrongLetters] = useState<string[]>([]);
  const [existingLetters, setExistingLetters] = useState<string[]>([]);
  const [rightLetters, setRightLetters] = useState<string[]>([]);
  const [grid, setGrid] = useState<IGrid[]>([
    { id: 0, letters: ["", "", "", "", ""] },
    { id: 1, letters: ["", "", "", "", ""] },
    { id: 2, letters: ["", "", "", "", ""] },
    { id: 3, letters: ["", "", "", "", ""] },
    { id: 4, letters: ["", "", "", "", ""] },
    { id: 5, letters: ["", "", "", "", ""] },
  ]);
  // const [localStorageIV, setLocalStorageIV] = useState({} as ILocalStorage);

  function handleGuess() {
    if (
      grid[activeRow].letters.filter(Boolean).length < 5 ||
      !allowed.includes(grid[activeRow].letters.join("").toUpperCase())
    )
      return;
    for (let i = 0; i < word.length; i++) {
      const letter = grid[activeRow].letters[i];

      if (word[i] === letter) {
        setRightLetters((prevValue) => [...prevValue, letter]);
      } else if (word.includes(letter)) {
        setExistingLetters((prevValue) => [...prevValue, letter]);
      }
      if (!word.includes(letter)) {
        setWrongLetters((prevValue) => [...prevValue, letter]);
      }
    }
    handleSetGuesses();

    setActiveRow(activeRow + 1);
    if (grid[activeRow].letters.join("") === word) {
      setActiveRow(0);
      setIsGameWon(true);
    }

    if (
      grid[5].letters.filter(Boolean).length === 5 &&
      grid[activeRow].letters.join("") !== word
    ) {
      setIsGameLose(true);
    }
  }

  function handleSetGuesses() {
    const guessesCopy = [...guesses];
    guessesCopy[activeRow] = grid[activeRow].letters;
    setGuesses(guessesCopy);
    setGuessedRows((prevValue) => [...prevValue, activeRow]);
  }

  function getResults() {
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

    setResults(
      (prevValue) =>
        prevValue + "\nJogue Letrino agora em https://letrino.com.br"
    );
  }

  return (
    <GameInfoContext.Provider
      value={{
        word,
        isGameLose,
        displayLoseScreen,
        setDisplayLoseScreen,
        results,
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
        wrongLetters,
        existingLetters,
      }}
    >
      {children}
    </GameInfoContext.Provider>
  );
}
