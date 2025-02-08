import styled, { css } from "styled-components";
import { Title as HeadingContainer } from "../Heading/styles";
import { Container as TextComponent } from "../TextComponent/styles";

export const Container = styled.div`
  ${({ theme }) => css`
    max-width: 128rem;
    margin: 0 auto;
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
    width: 100%;

    @media ${theme.media.lessMedium} {
      grid-template-columns: 1fr;
    }
  `}
`;

export const GridElement = styled.div`
  ${({ theme }) => css`

    ${HeadingContainer} {
      display: inline-block;
      position: relative;
      left: 5rem;
      height: 7rem;
      font-size: ${theme.font.sizes.xLarge};
      padding-left: 3rem;
    }

    ${HeadingContainer}::before {
      counter-increment: grid-counter;
      content: counter(grid-counter);
      position: absolute;
      font-size: ${theme.font.sizes.xHuge};
      top: -1.7rem;
      left: -4rem;
      transform: rotate(10deg);
  `}
`;
