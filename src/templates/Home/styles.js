import styled, { css } from "styled-components";

export const Container = styled.div`
  ${({ theme }) => css`
    background: ${theme.color.secondary};
    color: ${theme.font.color};
  `}
`;
