import styled from "styled-components";

export const KeyboardWrapper = styled.div`
  width: 25%;
  height: 25%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

export const KeysWrapper = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Key = styled.button`
  width: 30px;
  aspect-ratio: 1/1;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0px 2px;
  border: 1px solid #fff;
  border-radius: 5px;
  color: #fff;
  background-color: transparent;
  font-weight: bold;
  user-select: none;
  cursor: pointer;
`;

export const Kingsize = styled.div`
  width: 40px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0px 2px;
  border: 1px solid #fff;
  border-radius: 5px;
  color: #fff;
  user-select: none;
  cursor: pointer;
`;
