import React, {
  createContext,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { words } from "../utils/randomWord";
import { denied } from "../utils/deniedWords";

interface IProps {
  children: React.ReactNode;
}

interface IGame {
  word: string;
  handleGuess: Function;
  grid: { id: number; letters: string[] }[];
  setGrid: React.Dispatch<SetStateAction<{ id: number; letters: string[] }[]>>;
  activeRow: number;
  setActiveRow: React.Dispatch<SetStateAction<number>>;
  inputOnFocus: number;
  setInputOnFocus: React.Dispatch<SetStateAction<number>>;
  guessedRows: number[];
}

export const GameInfoContext = createContext({} as IGame);

export function GameInfoProvider({ children }: IProps) {
  const [word, setWord] = useState(
    words[Math.floor(Math.random() * words.length)]
  );
  const [activeRow, setActiveRow] = useState(0);
  const [guessedRows, setGuessedRows] = useState<number[]>([]);
  const [inputOnFocus, setInputOnFocus] = useState(0);
  const [results, setResults] = useState([[], [], [], [], [], []]);

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
      !denied.includes(grid[activeRow].letters.join(""))
    )
      return;

    setGuessedRows((prevValue) => [...prevValue, activeRow]);
    setActiveRow(activeRow + 1);
    if (grid[activeRow].letters.join("") === word.toUpperCase()) {
      setActiveRow(0);
    }
  }

  useEffect(() => {
    console.log(word);
  }, []);

  /*
   * Criar o sistema de gridGuessed para a copia dos resultados em quadrados coloridos
   */

  return (
    <GameInfoContext.Provider
      value={{
        word,
        handleGuess,
        grid,
        setGrid,
        activeRow,
        setActiveRow,
        inputOnFocus,
        setInputOnFocus,
        guessedRows,
      }}
    >
      {children}
    </GameInfoContext.Provider>
  );
}
