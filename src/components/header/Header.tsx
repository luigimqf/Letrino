import { IconWrapper, Wrapper } from "./style";
import {
  BsFillQuestionSquareFill as Tutorial,
  BsGearFill as Config,
} from "react-icons/bs";
import { SetStateAction } from "react";

interface IProps {
  setDisplayModal: React.Dispatch<SetStateAction<boolean>>;
}

export function Header({ setDisplayModal }: IProps) {
  const iconStyle = {
    color: "#fff",
    width: "25px",
    height: "25px",
    cursor: "pointer",
  };
  return (
    <Wrapper>
      <IconWrapper>
        <Tutorial style={iconStyle} onClick={() => setDisplayModal(true)} />
      </IconWrapper>
      <IconWrapper>
        <Config style={iconStyle} />
      </IconWrapper>
    </Wrapper>
  );
}
