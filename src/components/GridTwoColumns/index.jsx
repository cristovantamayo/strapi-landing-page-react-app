import P from "prop-types";
import * as Styled from "./styles";
import { SectionBackground } from "../SectionBackground";
import { Heading } from "../Heading";
import { TextComponent } from "../TextComponent";

export const GridTwoColumns = ({
  title = "",
  text = "",
  srcImg = "",
  background = false,
}) => {
  console.log(title);
  console.log(text);
  console.log(srcImg);
  return (
    <SectionBackground background={background}>
      <Styled.Container background={background}>
        <Styled.TextContainer>
          <Heading upperCase colorDark={!background}>
            {title}
          </Heading>
          <TextComponent>{text}</TextComponent>
        </Styled.TextContainer>
        <Styled.ImageContainer>
          <Styled.Image src={srcImg} alt={title} />
        </Styled.ImageContainer>
      </Styled.Container>
    </SectionBackground>
  );
};

GridTwoColumns.propTypes = {
  title: P.String,
  text: P.String,
  srcImg: P.String,
  background: P.bool,
};
