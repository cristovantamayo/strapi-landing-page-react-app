import styled, { css } from "styled-components";

export const Container = styled.a`
  ${({ theme }) => css`
    position: fixed;
    background: ${theme.colors.primaryColor};
    color: ${theme.colors.white};
    display: flex;
    align-items: center;
    justify-content: center;
    width: 4.8rem;
    height: 4.8rem;
    bottom: 2rem;
    right: 2rem;
    z-index: 6;
    opacity: 0.7;
    transition: all 0.3s ease-in-out;

    &:hover {
      opacity: 1;
      background: red;
    }
  `}
`;
