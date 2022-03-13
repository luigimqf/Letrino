import { useContext } from "react";
import { GameInfoContext } from "../../contexts/GameContext";
import { Row } from "../row/Row";
import { Wrapper } from "./style";

export function Game() {
  const { grid, activeRow } = useContext(GameInfoContext);

  return (
    <Wrapper>
      {grid.map((item, index) => {
        const isActive = index === activeRow;
        return <Row index={index} row={item} key={index} isActive={isActive} />;
      })}
    </Wrapper>
  );
}
