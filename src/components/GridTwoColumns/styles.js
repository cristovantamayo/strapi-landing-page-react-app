import styled, { css } from "styled-components";
import { Title } from "../Heading/styles";

export const Container = styled.div`
  ${({ theme, background }) => css`
    display: grid;
    grid-template-columns: 1fr 2fr;
    align-items: center;
    justify-content: center;
    gap: ${theme.spacings.large};
    border: 1px solid red;

    @media ${theme.media.lessMedium} {
      grid-template-columns: 1fr;
      text-align: center;
    }

    ${Title} {
      margin-bottom: ${theme.spacings.large};
      color: ${background ? theme.colors.white : theme.colors.primaryColor};
    }
  `}
`;

export const TextContainer = styled.div`
  ${({ theme }) => css`
    border: 1px solid blue;
    @media ${theme.media.lessMedium} {
      margin-bottom: ${theme.spacings.large};
    }
  `}
`;

export const ImageContainer = styled.div`
  ${({ theme }) => css`
    border: 1px solid yellow;
    max-width: 80rem;
  `}
`;

export const Image = styled.img`
  ${({ theme }) => css``}
`;
