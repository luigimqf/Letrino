import { SetStateAction, useContext, useEffect } from "react";
import { GameInfoContext } from "../../contexts/GameContext";
import { Row } from "../row/Row";
import { Wrapper } from "./style";

interface IProps {
  setDisplayGameWon: React.Dispatch<SetStateAction<boolean>>;
}

export function Game({ setDisplayGameWon }: IProps) {
  const { grid, activeRow, isGameWon } = useContext(GameInfoContext);

  useEffect(() => {
    if (isGameWon) {
      setTimeout(() => {
        setDisplayGameWon(true);
      }, 2000);
    }
  }, [isGameWon]);

  return (
    <Wrapper>
      {grid.map((item, index) => {
        const isActive = index === activeRow;
        return <Row index={index} row={item} key={index} isActive={isActive} />;
      })}
    </Wrapper>
  );
}
