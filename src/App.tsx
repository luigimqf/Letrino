import { useState } from "react";
import { GameContainer, Wrapper } from "./style";
import { GlobalStyle } from "./globalStyles";
import { Game } from "./components/game/Game";
import { Keyboard } from "./components/keyboard/Keyboard";
import { GameInfoProvider } from "./contexts/GameContext";
import { Header } from "./components/header/Header";
import { Modal } from "./components/modal/Modal";
import { GameWon } from "./components/gameWon/GameWon";
import { GameLost } from "./components/gameLost/GameLost";
import { Rules } from "./components/rules/Rules";
import { Analytics } from "@vercel/analytics/react";

function App() {
  const [displayModal, setDisplayModal] = useState(false);
  const [displayRules, setDisplayRules] = useState(false);

  return (
    <GameInfoProvider>
      <Wrapper>
        <GlobalStyle />
        <Header
          setDisplayModal={setDisplayModal}
          setDisplayRules={setDisplayRules}
        />
        <Modal setDisplayModal={setDisplayModal} displayModal={displayModal} />
        <Rules displayRules={displayRules} setDisplayRules={setDisplayRules} />
        <GameWon />
        <GameLost />
        <GameContainer>
          <Game />
          <Keyboard />
        </GameContainer>
      </Wrapper>
      <Analytics />
    </GameInfoProvider>
  );
}

export default App;
