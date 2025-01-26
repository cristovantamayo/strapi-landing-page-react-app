import styled, { css } from "styled-components";
import { Title as HeadingContainer } from "../Heading/styles";
import { Container as TextComponent } from "../TextComponent/styles";

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 120rem;
    ${TextComponent} {
      margin-bottom: ${theme.spacings.xHuge};
    }
  `}
`;

export const Grid = styled.div`
  ${({ theme }) => css`
    counter-reset: grid-counter;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: ${theme.spacings.xHuge};
  `}
`;

export const GridElement = styled.div`
  ${({ theme }) => css`
    ${HeadingContainer} {
      position: relative;
      left: 5rem;
    }

    ${HeadingContainer}::before {
      counter-increment: grid-counter;
      content: counter(grid-counter);
      position: absolute;
      font-size: ${theme.font.sizes.xHuge};
      top: -3.5rem;
      left: -4rem;
      transform: rotate(10deg);
  `}
`;
