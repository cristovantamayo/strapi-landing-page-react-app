import { screen } from "@testing-library/react";
import { describe, expect } from "@jest/globals";
import { renderTheme } from "../../styles/render-theme";
import { GridTwoColumns } from ".";
import mock from "./mock";

describe("<GridTwoColumns />", () => {
  it("should render Two columns grid", () => {
    const { container } = renderTheme(<GridTwoColumns {...mock} />);
    expect(container).toMatchSnapshot();
  });
});
