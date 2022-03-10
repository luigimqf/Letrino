import React, {
  createContext,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { words } from "../utils/randomWord";
import { allowed } from "../utils/allowedWords";

interface IProps {
  children: React.ReactNode;
}

interface IGame {
  word: string;
  teste: boolean;
  getResults: Function;
  setTeste: React.Dispatch<SetStateAction<boolean>>;
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
  const [word, setWord] = useState(
    words[Math.floor(Math.random() * words.length)]
  );
  const [activeRow, setActiveRow] = useState(0);
  const [teste, setTeste] = useState(true);
  const [guessedRows, setGuessedRows] = useState<number[]>([]);
  const [guesses, setGuesses] = useState<string[][]>([]);
  const [results, setResults] = useState<string[]>([]);
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
    }
  }

  function handleSetGuesses() {
    const guessesCopy = [...guesses];
    guessesCopy[activeRow] = grid[activeRow].letters;
    setGuesses(guessesCopy);
    setGuessedRows((prevValue) => [...prevValue, activeRow]);
  }

  function getResults() {
    guesses.map((guess, index) => {
      guess.map((letter, index) => {
        console.log(letter);
        if (word[index] === letter)
          setResults((prevValue) => [...prevValue, "🟩"]);
        if (word.includes(letter))
          setResults((prevValue) => [...prevValue, "🟨"]);
        if (!word.includes(letter))
          setResults((prevValue) => [...prevValue, "🟥"]);
      });
    });
  }

  /*
   * Criar o sistema de gridGuessed para a copia dos resultados em quadrados coloridos
   */
  useEffect(() => {
    console.log(word);
  }, []);
  useEffect(() => {
    console.log(guesses);
  }, [guesses]);
  useEffect(() => {
    console.log(results);
  }, [results]);

  return (
    <GameInfoContext.Provider
      value={{
        word,
        teste,
        getResults,
        setTeste,
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
