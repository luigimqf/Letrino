import styled from "styled-components";

export const KeyboardWrapper = styled.div`
  width: 100%;
  height: 35%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const KeysWrapper = styled.div`
  width: 100%;
  margin-bottom: 10px;
  height: 25%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Key = styled.button`
  width: 45px;
  aspect-ratio: 1/1;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0px 3px;
  border: 1px solid #2f3542;
  border-radius: 5px;
  color: #2f3542;
  background-color: transparent;
  font-weight: bold;
  user-select: none;
  cursor: pointer;
`;

export const Kingsize = styled.div`
  width: 70px;
  height: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0px 2px;
  border: 1px solid #2f3542;
  border-radius: 5px;
  color: #2f3542;
  user-select: none;
  cursor: pointer;
`;
