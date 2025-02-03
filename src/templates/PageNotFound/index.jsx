import P from "prop-types";
import {} from "../../components/GridContent";
import { GridContent } from "../../components/GridContent/index";

export const PageNotFound = () => {
  return (
    <GridContent
      title="Error 404"
      html='<p>A página que você busca não foi encontrada. <a href="/">Clique aqui para voltar</a></p>'
    />
  );
};
