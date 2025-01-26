import P from "prop-types";
import * as Styled from "./styles";
import { SectionBackground } from "../SectionBackground/index";
import { Heading } from "../Heading/index";
import { TextComponent } from "../TextComponent/index";

export const GridImage = ({ title, description, grid, background = false }) => {
  return (
    <SectionBackground background={background}>
      <Styled.Container>
        <Heading size="huge" uppercase colorDark={!background} as="h2">
          {title}
        </Heading>
        <TextComponent>{description}</TextComponent>
        <Styled.Grid>
          {grid.map((element) => (
            <Styled.GridElement key={element.srcImg}>
              <Styled.Image src={element.srcImg} alt={element.altText} />
              <TextComponent>{element.description}</TextComponent>
            </Styled.GridElement>
          ))}
        </Styled.Grid>
      </Styled.Container>
    </SectionBackground>
  );
};

GridImage.propTypes = {
  children: P.node.isRequired,
};

GridImage.propTypes = {
  title: P.string.isRequired,
  description: P.string.isRequired,
  grid: P.arrayOf(
    P.shape({
      altText: P.string.isRequired,
      description: P.string.isRequired,
    }),
  ).isRequired,
  background: P.bool,
};
