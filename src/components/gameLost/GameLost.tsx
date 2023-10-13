import { useContext, useEffect, useState } from "react";
import { GameInfoContext } from "../../contexts/GameContext";
import {
  Close,
  Info,
  Desc,
  ULost,
  Wrapper,
  DescWrapper,
  Word,
  GridWrapper,
  Grid,
  Row,
  Letter,
  CountWrapper,
  NextWord,
  Count,
} from "./style";
import { IoIosArrowUp as Up } from "react-icons/io";
import { getTimeLeft } from "../../utils/getCountDown";

export function GameLost() {
  const { word, isGameLose, setDisplayLoseScreen, displayLoseScreen, guesses } =
    useContext(GameInfoContext);
  const [count, setCount] = useState<string>(getTimeLeft());
  const iconStyle = {
    color: "#fff",
    width: "20px",
    height: "20px",
    cursor: "pointer",
  };
  function getGridColor(letter: string, index: number) {
    if (word[index] === letter.toLowerCase()) return "#10ac84";
    if (word.includes(letter.toLowerCase())) return "#ffa502";
    if (!word.includes(letter.toLowerCase())) return "#b71540";

    return "#121214";
  }

  useEffect(() => {
    if (isGameLose) {
      setTimeout(() => {
        setDisplayLoseScreen(true);
      }, 1500);
    }
  }, [isGameLose]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount(getTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <Wrapper $display={displayLoseScreen}>
      <GridWrapper>
        <Grid>
          {guesses?.map((guess, index) => {
            return (
              <Row key={index} $display={displayLoseScreen}>
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
        <ULost $display={displayLoseScreen}>Você Perdeu!</ULost>
        <DescWrapper>
          <Desc $display={displayLoseScreen}>A palavra era</Desc>
          <Word $display={displayLoseScreen}>{word.toUpperCase()}</Word>
        </DescWrapper>
        <Close onClick={() => setDisplayLoseScreen(false)}>
          {displayLoseScreen && <Up style={iconStyle} />}
        </Close>
      </Info>
      <CountWrapper>
        <NextWord $display={displayLoseScreen}>Próxima palavra em:</NextWord>
        <Count $display={displayLoseScreen}>{count}</Count>
      </CountWrapper>
    </Wrapper>
  );
}
