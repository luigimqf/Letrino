import { SetStateAction, useState } from "react";
import { Kingsize, Key, KeyboardWrapper, KeysWrapper } from "./style";
import { HiBackspace as Backspace } from "react-icons/hi";
import { BsCheck2 as Enter } from "react-icons/bs";

interface IProps {
  handleClick: Function;
  handleDelete: Function;
  setActiveColumn: React.Dispatch<SetStateAction<number>>;
  activeColumn: number;
}

export function Keyboard({
  handleClick,
  handleDelete,
  setActiveColumn,
  activeColumn,
}: IProps) {
  const [upKeys, setUpKeys] = useState([
    "Q",
    "E",
    "R",
    "T",
    "Y",
    "U",
    "I",
    "O",
    "P",
  ]);
  const [middleKeys, setMiddleKeys] = useState([
    "A",
    "S",
    "D",
    "F",
    "G",
    "H",
    "J",
    "K",
    "L",
  ]);
  const [downKeys, setDownKeys] = useState(["Z", "X", "C", "V", "B", "N", "M"]);
  return (
    <KeyboardWrapper>
      <KeysWrapper>
        {upKeys.map((key) => {
          return (
            <Key
              placeholder={key}
              value={key}
              key={key}
              onClick={() => handleClick(key)}
            >
              {key}
            </Key>
          );
        })}
      </KeysWrapper>
      <KeysWrapper>
        {middleKeys.map((key) => {
          return (
            <Key value={key} key={key} onClick={() => handleClick(key)}>
              {key}
            </Key>
          );
        })}
      </KeysWrapper>
      <KeysWrapper>
        <Kingsize>
          <Enter
            onClick={() => {
              if (activeColumn === 5) {
                setActiveColumn(0);
                return;
              }
              setActiveColumn(activeColumn + 1);
            }}
            style={{ width: "20px", height: "20px" }}
          />
        </Kingsize>
        {downKeys.map((key) => {
          return (
            <Key value={key} key={key} onClick={() => handleClick(key)}>
              {key}
            </Key>
          );
        })}
        <Kingsize>
          <Backspace
            onClick={() => handleClick("Backspace")}
            style={{ width: "20px", height: "20px" }}
          />
        </Kingsize>
      </KeysWrapper>
    </KeyboardWrapper>
  );
}
