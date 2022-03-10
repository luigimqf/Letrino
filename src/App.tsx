import { useState } from "react";
import { GameContainer, Letter, NameWrapper, Wrapper } from "./style";
import { GlobalStyle } from "./globalStyles";
import { Game } from "./components/game/Game";
import { Keyboard } from "./components/keyboard/Keyboard";
import { GameInfoProvider } from "./contexts/GameContext";
import { Header } from "./components/header/Header";
import { Modal } from "./components/modal/Modal";

function App() {
  const gameName = ["L", "E", "T", "R", "I", "N", "O"];
  const [displayModal, setDisplayModal] = useState(false);

  function getGameNameColor(letter: string) {
    switch (letter) {
      case "L":
        return "#10ac84";

      case "R":
        return "#ffa502";

      case "O":
        return "#b71540";
    }
  }

  return (
    <GameInfoProvider>
      <Wrapper>
        <GlobalStyle />
        <Header setDisplayModal={setDisplayModal} />
        <Modal setDisplayModal={setDisplayModal} displayModal={displayModal} />
        <GameContainer>
          <NameWrapper>
            {gameName.map((letter, index) => {
              const color = getGameNameColor(letter);

              return (
                <Letter key={index} style={{ color: `${color}` }}>
                  {letter}
                </Letter>
              );
            })}
          </NameWrapper>
          <Game />
          <Keyboard />
        </GameContainer>
      </Wrapper>
    </GameInfoProvider>
  );
}

export default App;
