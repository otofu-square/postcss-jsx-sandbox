import React from "react";
import styled from "@emtion/styled";

const StyledApp = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vh;
  height: 100vh;
  color: ${props => props.color || "black"};
`;

export const App = () => <StyledApp color="red">Hello World</StyledApp>;
