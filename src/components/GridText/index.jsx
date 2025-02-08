import P from "prop-types";
import * as Styled from "./styles";
import { SectionBackground } from "../SectionBackground/index";
import { Heading } from "../Heading/index";
import { TextComponent } from "../TextComponent/index";

export const GridText = ({
  title,
  description,
  grid,
  background = false,
  sectionId = "",
}) => {
  return (
    <SectionBackground background={background} sectionId={sectionId}>
      <Styled.Container>
        <Heading size="xhuge" upperCase={true} colorDark={!background}>
          {title}
        </Heading>
        <TextComponent>{description}</TextComponent>
        <Styled.Grid>
          {grid.map((element) => (
            <Styled.GridElement key={element.title}>
              <Heading
                size="small"
                colorDark={!background}
                as="h3"
                uppercase={false}
              >
                {element.title}
              </Heading>
              <TextComponent>{element.description}</TextComponent>
            </Styled.GridElement>
          ))}
        </Styled.Grid>
      </Styled.Container>
    </SectionBackground>
  );
};

GridText.propTypes = {
  title: P.string.isRequired,
  description: P.string.isRequired,
  grid: P.arrayOf(
    P.shape({
      title: P.string.isRequired,
      description: P.string.isRequired,
    }),
  ).isRequired,
  background: P.bool,
  sectionId: P.string,
};
