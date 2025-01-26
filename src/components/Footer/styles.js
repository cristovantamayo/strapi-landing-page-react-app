import styled, { css } from "styled-components";
import { theme } from "../../styles/theme";

export const Container = styled.footer`
  ${({ theme }) => css`
    text-align: center;
    a {
      color: inherit;
      text-decoration: nome;
      font-size: ${theme.font.sizes.small};
    }
  `}
`;
