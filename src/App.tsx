import React, { useEffect, useState, useRef, useContext } from "react";
import { GameContainer, Header, Letter, NameWrapper, Wrapper } from "./style";
import { GlobalStyle } from "./globalStyles";
import { Game } from "./components/game/Game";
import { Keyboard } from "./components/keyboard/Keyboard";
import { GameInfoProvider } from "./contexts/GameContext";

function App() {
  const [gameName, setGameName] = useState(["L", "E", "T", "R", "I", "N", "O"]);

  return (
    <GameInfoProvider>
      <Wrapper>
        <GlobalStyle />
        <Header />
        <NameWrapper>
          {gameName.map((letter, index) => {
            let color = "#121214";

            switch (letter) {
              case "L":
                color = "#2ed573";
                break;
              case "R":
                color = "#ffa502";
                break;
              case "O":
                color = "#b71540";
                break;
            }

            return (
              <Letter key={index} style={{ color: `${color}` }}>
                {letter}
              </Letter>
            );
          })}
        </NameWrapper>
        <GameContainer>
          <Game />
          <Keyboard />
        </GameContainer>
      </Wrapper>
    </GameInfoProvider>
  );
}

export default App;
