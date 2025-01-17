import styled, { css } from "styled-components";
import { theme } from "../../styles/theme";

export const Title = styled.h1`
  ${({ theme, colorDark }) => css`
    font-family: "Montserrat", serif;
    color: ${colorDark ? theme.colors.primaryColor : theme.colors.white};
  `}
`;
