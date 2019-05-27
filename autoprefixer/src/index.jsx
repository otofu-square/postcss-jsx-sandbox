import "core-js/stable";
import "regenerator-runtime/runtime";

import styled from "@emotion/styled";
import React from "react";
import { render } from "react-dom";

const StyledWrapper = styled.div`
  /* NOTE: & { ... } でスタイルを囲まないと autoprefixer がエラーを吐く */
  & {
    display: grid;
    grid-template-columns: repeat(3, 100px);
    grid-template-rows: repeat(2, 100px);
    grid-gap: 10px;
    background-color: #fff;
    color: #444;
  }
`;

const StyledBox = styled.div`
  background-color: #444;
  color: #fff;
  border-radius: 5px;
  padding: 20px;
  font-size: 150%;
`;

function App() {
  return (
    <StyledWrapper>
      <StyledBox>A</StyledBox>
      <StyledBox>B</StyledBox>
      <StyledBox>C</StyledBox>
      <StyledBox>D</StyledBox>
      <StyledBox>E</StyledBox>
      <StyledBox>F</StyledBox>
    </StyledWrapper>
  );
}

const root = document.createElement("div");
document.body.appendChild(root);

render(<App />, root);
