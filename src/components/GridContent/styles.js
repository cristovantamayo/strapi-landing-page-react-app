import styled, { css } from "styled-components";

export const Container = styled.div`
  ${({ theme }) => css`
    text-align: center;
    max-width: 60rem;
    margin: 0 auto;

    @media ${theme.media.lessMedium} {
      max-width: 40rem;
    }
  `}
`;

export const Html = styled.div`
  ${({ theme }) => css`
    margin: ${theme.spacings.xHuge};
  `}
`;
