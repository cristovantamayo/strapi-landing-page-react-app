import styled, { css } from "styled-components";

export const Container = styled.div`
  ${({ bcolor, color }) => css`
    background-color: ${bcolor};
    color: ${color};
  `}
`;
