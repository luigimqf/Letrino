import React, { createRef, useEffect, useRef, useState } from "react";
import { ColumnBox, LetterBox, Wrapper } from "./style";

interface IProps {
  handleInputChange: Function;
  word: string;
  activeColumn: number;
}

export function Game({ handleInputChange, word, activeColumn }: IProps) {
  const [line, setLine] = useState([1, 2, 3, 4, 5]);
  const [column, setColumns] = useState([1, 2, 3, 4, 5, 6]);
  // const [activeColumn, setActiveColumn] = useState(0);
  const [grid, setGrid] = useState([
    {
      id: 0,
      values: ["", "", "", "", ""],
    },
    {
      id: 1,
      values: ["", "", "", "", ""],
    },
    {
      id: 2,
      values: ["", "", "", "", ""],
    },
    {
      id: 3,
      values: ["", "", "", "", ""],
    },
    {
      id: 4,
      values: ["", "", "", "", ""],
    },
    {
      id: 5,
      values: ["", "", "", "", ""],
    },
  ]);

  const elementsRef = useRef<HTMLInputElement[]>([]);

  function changeInputFocus(
    index: number,
    e?: React.KeyboardEvent<HTMLInputElement>
  ) {
    const ref = elementsRef.current[index];
    if (ref) {
      ref.focus();
    }
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>, index: number) {
    const gridCopy = [...grid];
    gridCopy[activeColumn].values[index] = e.target.value;
    setGrid(gridCopy);
    changeInputFocus(index + 1);
  }

  function onKeyDown(index: number, e: React.KeyboardEvent<HTMLInputElement>) {
    const key = e.nativeEvent.code;
    if (key !== "Backspace") return;

    changeInputFocus(index - 1);
  }
  /*
    * if word?.indexOf(letter) = index do map (verde) 
    * if word?.indexOf(letter) = -1 (vermelho)
    * if word?.indexOf(letter) > 0 (amarelo)
    
  */

  useEffect(() => {
    console.log(grid[0].values);
  }, [grid]);

  return (
    <Wrapper>
      {grid.map((item, index) => {
        const isActive = index === activeColumn;
        return (
          <ColumnBox isActive={isActive} key={index}>
            {grid[index].values.map((item, index) => {
              return (
                <LetterBox
                  ref={(el) => {
                    if (el) {
                      elementsRef.current[index] = el;
                    }
                  }}
                  disabled={!isActive}
                  value={item}
                  name={"values"}
                  onChange={(e) => handleChange(e, index)}
                  onKeyDown={(e) => onKeyDown(index, e)}
                  key={index}
                ></LetterBox>
              );
            })}
          </ColumnBox>
        );
      })}
    </Wrapper>
  );
}
