import styled, { css } from "styled-components";

export const Title = styled.h1`
  ${({ theme, light }) => css`
    color: ${light ? theme.font.color : theme.colors.dark};
  `}
`;
