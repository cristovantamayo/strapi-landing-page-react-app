import styled, { css } from "styled-components";
import { Title as HeadingContainer } from "../Heading/styles";
import { Container as TextComponent } from "../TextComponent/styles";

export const Container = styled.div`
  ${({ theme }) => css`
    & > ${TextComponent} {
      margin-bottom: ${theme.spacings.xHuge};
    }
  `}
`;

export const Grid = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: ${theme.spacings.large};
  `}
`;

export const GridElement = styled.div`
  ${({ theme }) => css`
    overflow: hidden;
    width: 100%;
    height: 280px;
  `}
`;

export const Image = styled.img`
  ${({ theme }) => css`
    height: 100%;
    width: 100%;
    object-fit: cover;

    &:hover {
      transform: scale(1.2) rotate(10deg);
      transition: transform 0.5s;
    }
  `}
`;
