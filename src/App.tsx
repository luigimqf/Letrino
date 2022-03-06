import React, { useEffect, useState } from "react";
import { GameContainer, Header, Letter, NameWrapper, Wrapper } from "./style";
import { GlobalStyle } from "./globalStyles";
import { Game } from "./components/game/Game";
import { Keyboard } from "./components/keyboard/Keyboard";

function App() {
  const [gameName, setGameName] = useState(["L", "E", "T", "R", "I", "N", "O"]);
  const [activeColumn, setActiveColumn] = useState(0);
  const [word, setWord] = useState("");

  function handleInputChange(
    index: number,
    e: React.ChangeEvent<HTMLInputElement>
  ) {
    setWord(`${word}${e.target.value}`);
  }

  function handleClick(key: string) {
    if (key === "Backspace") {
      handleDelete();
      return;
    }
    setWord(`${word}${key}`);
  }

  function handleDelete() {
    let lessWord = word.split("");
    lessWord.pop();
    let newWord = lessWord.join("");
    setWord(newWord);
  }

  useEffect(() => {}, []);

  return (
    <Wrapper>
      <GlobalStyle />
      <Header />
      <NameWrapper>
        {gameName.map((letter, index) => {
          let color = "";

          if (letter == "L") {
            color = "#2ed573";
          } else if (letter == "R") {
            color = "#ffa502";
          } else if (letter == "O") {
            color = "#b71540";
          } else {
            color = "#121214";
          }
          return (
            <Letter key={index} style={{ color: `${color}` }}>
              {letter}
            </Letter>
          );
        })}
      </NameWrapper>
      <GameContainer>
        <Game
          activeColumn={activeColumn}
          word={word}
          handleInputChange={handleInputChange}
        />
        <Keyboard
          setActiveColumn={setActiveColumn}
          activeColumn={activeColumn}
          handleDelete={handleDelete}
          handleClick={handleClick}
        />
      </GameContainer>
    </Wrapper>
  );
}

export default App;
