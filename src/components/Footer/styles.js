import styled, { css } from "styled-components";
import { theme } from "../../styles/theme";
import { Container as TextComponent } from "../TextComponent/styles";
import { Container as SectionContainer } from "../SectionContainer/styles";

export const Container = styled.footer`
  ${({ theme }) => css`
    text-align: center;
    font-size: ${theme.font.sizes.small};
    border-top: 0.1rem solid ${theme.colors.mediumGray};

    p {
      margin-top: 1.5rem;
      margin-bottom: 1.8rem;
    }

    a {
      color: inherit;
      text-decoration: none;
      font-size: ${theme.font.sizes.small};
    }

    & ${TextComponent} {
      font-size: ${theme.font.sizes.small};
    }

    & ${SectionContainer} {
      padding-bottom: 0;
      padding-top: 0;
    }
  `}
`;
