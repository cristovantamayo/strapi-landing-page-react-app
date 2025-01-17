import styled, { css } from "styled-components";
import { theme } from "../../styles/theme";

const titleSizes = {
  small: (theme) => css`
    font-size: ${theme.font.sizes.medium};
  `,
  medium: (theme) => css`
    font-size: ${theme.font.sizes.large};
  `,
  big: (theme) => css`
    font-size: ${theme.font.sizes.xLarge};
  `,
  huge: (theme) => css`
    font-size: ${theme.font.sizes.huge};
    ${mediaFont(theme)};
  `,
};

const mediaFont = (theme) => css`
  @media ${theme.media.lessMedium} {
    font-size: ${theme.font.sizes.xLarge};
  }
`;

const titleCase = (upperCase) => css`
  text-transform: ${upperCase ? "none" : "uppercase"};
`;

export const Title = styled.h1`
  ${({ theme, colorDark, size, upperCase }) => css`
    color: ${colorDark ? theme.colors.primaryColor : theme.colors.white};
    ${titleSizes[size](theme)}
    ${titleCase(upperCase)}
  `}
`;
