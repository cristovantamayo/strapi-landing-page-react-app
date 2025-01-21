import styled, { css } from "styled-components";

export const Container = styled.div`
  ${({ theme }) => css`
    background: #fff;
    display: flex;
    flex-flow: row wrap;

    @media ${theme.media.lessMedium} {
      flex-flow: column wrap;
      align-content: center;
    }
  `}
`;
