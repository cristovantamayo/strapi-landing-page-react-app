import linksMock from "../../components/NavLinks/mock";

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
  inks: linksMock,
  logoData: {
    text: "Logo",
    link: "#",
  },
  footerHtml: `<p>Teste de Footer</a></p>`,
};
