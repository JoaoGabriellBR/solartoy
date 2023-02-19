import React from "react";
import { useState } from "react";
import Home from "./screens/Home/index";
import { GlobalStyle } from "./styles/globalStyle";
import "@mui/material/styles";

function App() {
  return (
    <>
      <GlobalStyle />
      <Home />
    </>
  );
}

export default App;
