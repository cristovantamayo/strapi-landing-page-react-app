import styled, { css } from "styled-components";
import { theme } from "../../styles/theme";

export const Container = styled.a`
  ${({ theme }) => css`
    display: block;
    text-decoration: none;
    text-align: center;
    font-size: ${theme.font.sizes.small};
    padding: ${theme.spacings.small};
    color: ${theme.colors.primaryColor};
    position: relative;

    &::after {
      content: "";
      position: absolute;
      bottom: 0.76rem;
      left: 50%;
      width: 0;
      height: 0.2rem;
      background: ${theme.colors.secondaryColor};
      transition: all 200ms ease-in-out;
    }

    &:hover::after {
      left: 22%;
      width: 50%;
    }
  `}
`;
