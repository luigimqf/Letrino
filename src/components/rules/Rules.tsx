import {
  A,
  Close,
  Desc,
  DescHolder,
  DescText,
  Info,
  Rule,
  Side,
  Wrapper,
} from "./style";

import { AiFillGithub as Git } from "react-icons/ai";
import { IoIosArrowUp as Up } from "react-icons/io";
import { SetStateAction } from "react";

interface IProps {
  displayRules: boolean;
  setDisplayRules: React.Dispatch<SetStateAction<boolean>>;
}

export function Rules({ displayRules, setDisplayRules }: IProps) {
  const iconStyle = {
    color: "#fff",
    width: "35px",
    height: "35px",
    cursor: "pointer",
  };
  return (
    <Wrapper $display={displayRules}>
      <Info>
        <Rule $display={displayRules}> É sorteado uma palavra por dia.</Rule>
        <Rule $display={displayRules}> Não é necessário o uso de acentos.</Rule>
        <Rule $display={displayRules}>
          {" "}
          Futuramente existirá a versão para celular.
        </Rule>
        <Close $display={displayRules} onClick={() => setDisplayRules(false)}>
          {displayRules && (
            <Up
              style={{
                color: "#fff",
                cursor: "pointer",
                width: "20px",
                height: "20px",
              }}
            />
          )}
        </Close>
      </Info>
      <Side>
        <DescHolder>
          <Desc>
            <DescText $display={displayRules}>Criado por</DescText>
            <A
              $display={displayRules}
              onClick={() => window.open("https://github.com/luigimqf")}
            >
              Luigi Mendes
            </A>
          </Desc>
          <Desc>
            <DescText $display={displayRules}>Banco de palavras por</DescText>
            <A
              $display={displayRules}
              onClick={() =>
                window.open("https://pt-br.libreoffice.org/projetos/vero")
              }
            >
              Vero
            </A>
          </Desc>
          <Desc>
            <DescText $display={displayRules}>Versão brasileira do</DescText>
            <A
              $display={displayRules}
              onClick={() =>
                window.open("https://www.nytimes.com/games/wordle/index.html")
              }
            >
              Wordle
            </A>
          </Desc>
          <Desc>
            <DescText $display={displayRules}>Powered by:</DescText>
            <A
              $display={displayRules}
              onClick={() => window.open("https://pt-br.reactjs.org")}
            >
              React
            </A>
            <A
              $display={displayRules}
              onClick={() => window.open("https://styled-components.com")}
            >
              Styled Componentes
            </A>
          </Desc>
        </DescHolder>
      </Side>
    </Wrapper>
  );
}
