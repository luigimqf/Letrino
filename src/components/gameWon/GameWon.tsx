import { useContext, useState, useEffect, SetStateAction } from "react";
import { GameInfoContext } from "../../contexts/GameContext";
import {
  Button,
  Close,
  Grid,
  GridWrapper,
  Info,
  Letter,
  Row,
  Tries,
  UWon,
  Wrapper,
} from "./style";
import { IoIosArrowUp as Up } from "react-icons/io";

export function GameWon() {
  const {
    guesses,
    getResults,
    isGameWon,
    word,
    setDisplayWonScreen,
    displayWonScreen,
  } = useContext(GameInfoContext);
  const [copied, setCopied] = useState(false);
  const iconStyle = {
    color: "#fff",
    width: "20px",
    height: "20px",
  };

  useEffect(() => {
    if (copied) {
      setTimeout(() => {
        setCopied(false);
      }, 2000);
    }
  }, [copied]);

  useEffect(() => {
    if (isGameWon) {
      setDisplayWonScreen(true);
    }
  }, [isGameWon]);

  function handleClick() {
    setCopied(true);
    getResults();
  }

  function getGridColor(letter: string, index: number) {
    if (word[index] === letter.toLowerCase()) return "#10ac84";
    if (word.includes(letter.toLowerCase())) return "#ffa502";
    if (!word.includes(letter.toLowerCase())) return "#b71540";

    return "#121214";
  }

  return (
    <Wrapper $display={displayWonScreen}>
      <GridWrapper>
        <Grid>
          {guesses.map((guess, index) => {
            return (
              <Row $display={displayWonScreen}>
                {guess.map((letter, index) => {
                  const color = getGridColor(letter, index);
                  return (
                    <Letter
                      $index={index}
                      style={{ backgroundColor: `${color}` }}
                    />
                  );
                })}
              </Row>
            );
          })}
        </Grid>
      </GridWrapper>
      <Info>
        <UWon $display={displayWonScreen}>Parabéns,você acertou!</UWon>
        <Tries $display={displayWonScreen}>
          Seu placar foi de {guesses.length}/6 tentativas
        </Tries>
        <Button
          $display={displayWonScreen}
          onClick={() => handleClick()}
          $color={copied}
        >
          {copied ? "Copiado" : "Copiar Resultado"}
        </Button>
        <Close onClick={() => setDisplayWonScreen(false)}>
          {displayWonScreen && <Up style={iconStyle} />}
        </Close>
      </Info>
      <GridWrapper>
        <Grid>
          {guesses.map((guess, index) => {
            return (
              <Row $display={displayWonScreen}>
                {guess.map((letter, index) => {
                  const color = getGridColor(letter, index);
                  return (
                    <Letter
                      $index={index}
                      style={{ backgroundColor: `${color}` }}
                    />
                  );
                })}
              </Row>
            );
          })}
        </Grid>
      </GridWrapper>
    </Wrapper>
  );
}
