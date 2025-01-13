import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./App";
import { GlobalStyles } from "./styles/global-styles";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Home />
    <GlobalStyles />
  </React.StrictMode>,
);
