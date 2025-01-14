import React from "react";
import ReactDOM from "react-dom/client";

import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./styles/global-styles";
import { theme } from "./styles/theme";

import Home from "./templates/Home";

import styled, { css } from "styled-components";

const changeBackground = (theme, bg) => css`
  background: ${({ theme }) => bg};
`;

const Heading = styled.h1`
  color: ${({ theme }) => theme.color.primary};
`;

export const Container = styled.div`
  background: ${({ theme }) => theme.color.secondary};

  ${({ thene, bg }) => css`
    color: ${theme.color.primary};
    ${changeBackground(theme, bg)};
  `}

  ${Heading} {
    color: yellow;
  }

  ${Heading}:hover {
    color: orange;
  }

  &:hover {
    background: darkblue;
  }

  &::after {
    content: "-------------------------------";
    display: block;
    clear: both;
  }
`;

export const Container2 = styled(Container).attrs({ as: "article" })`
  color: ${({ theme }) => theme.font.color};
`;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Home />
      <Container2 bg="brown">
        <Heading>Oi</Heading>
      </Container2>
      <GlobalStyles />
    </ThemeProvider>
  </React.StrictMode>,
);
