import P from "prop-types";
import * as Styled from "./styles";
import { TextComponent } from "../TextComponent";
import { SectionContainer } from "../SectionContainer/index";

export const Footer = ({ html: children = "" }) => {
  return (
    <Styled.Container>
      <SectionContainer>
        <TextComponent>{children}</TextComponent>
      </SectionContainer>
    </Styled.Container>
  );
};

Footer.propTypes = {
  html: P.string.isRequired,
};
