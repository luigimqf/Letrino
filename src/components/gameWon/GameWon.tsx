import { useContext, useState, useEffect } from "react";
import { GameInfoContext } from "../../contexts/GameContext";
import {
  Button,
  ButtonWrapper,
  Close,
  Count,
  CountWrapper,
  Grid,
  GridWrapper,
  Info,
  Letter,
  NextWord,
  Row,
  Tries,
  UWon,
  Wrapper,
} from "./style";
import { IoIosArrowUp as Up } from "react-icons/io";
import { getTimeLeft } from "../../utils/getCountDown";

export function GameWon() {
  const {
    guesses,
    getResults,
    results,
    isGameWon,
    word,
    setDisplayWonScreen,
    displayWonScreen,
  } = useContext(GameInfoContext);
  const [copied, setCopied] = useState(false);
  const [count, setCount] = useState<string>(getTimeLeft());
  const iconStyle = {
    color: "#fff",
    width: "20px",
    height: "20px",
    cursor: "pointer",
  };

  function handleClick() {
    setCopied(true);
    getResults();
    if (results) {
      navigator.clipboard.writeText(results);
    }
  }

  function getGridColor(letter: string, index: number) {
    if (word[index] === letter.toLowerCase()) return "#10ac84";
    if (word.includes(letter.toLowerCase())) return "#ffa502";
    if (!word.includes(letter.toLowerCase())) return "#b71540";

    return "#121214";
  }

  useEffect(() => {
    if (copied) {
      const timeout = setTimeout(() => {
        setCopied(false);
      }, 2000);

      return () => clearTimeout(timeout);
    }
  }, [copied]);

  useEffect(() => {
    if (isGameWon) {
      setTimeout(() => {
        setDisplayWonScreen(true);
      }, 1500);
    }
  }, [isGameWon]);

  useEffect(() => {
    navigator.clipboard.writeText(results);
  }, [results]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount(getTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <Wrapper $display={displayWonScreen}>
      <GridWrapper>
        <Grid>
          {guesses?.map((guess, index) => {
            return (
              <Row key={index} $display={displayWonScreen}>
                {guess?.map((letter, index) => {
                  const color = getGridColor(letter, index);
                  return (
                    <Letter
                      key={index}
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
        <UWon $display={displayWonScreen}>Você acertou!</UWon>
        <Tries $display={displayWonScreen}>
          Seu placar foi de {guesses?.length}/6 tentativas
        </Tries>
        <ButtonWrapper>
          <Button
            $display={displayWonScreen}
            onClick={() => handleClick()}
            $color={copied}
          >
            {copied ? "Copiado" : "Copiar Resultado"}
          </Button>
        </ButtonWrapper>
        <Close onClick={() => setDisplayWonScreen(false)}>
          {displayWonScreen && <Up style={iconStyle} />}
        </Close>
      </Info>
      <CountWrapper>
        <NextWord $display={displayWonScreen}>Próxima palavra em:</NextWord>
        <Count $display={displayWonScreen}>{count}</Count>
      </CountWrapper>
    </Wrapper>
  );
}
