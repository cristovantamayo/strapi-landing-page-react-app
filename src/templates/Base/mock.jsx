import mock from "../../components/NavLinks/mock";
import { NavLinks } from "../../components/NavLinks/index";
import gridMock from "../../components/GridText/mock";
import { GridText } from "../../components/GridText";

export const mockBase = {
  children: (
    <>
      <GridText {...gridMock} background />
      <GridText {...gridMock} />
      <GridText {...gridMock} background />
      <GridText {...gridMock} />
      <GridText {...gridMock} background />
      <GridText {...gridMock} />
    </>
  ),
  inks: mock,
  logoData: {
    text: "Logo",
    link: "#",
  },
  footerHtml: `<p>Teste de Footer</a></p>`,
};
