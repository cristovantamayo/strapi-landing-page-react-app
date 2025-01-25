import { screen } from "@testing-library/react";
import { describe, expect } from "@jest/globals";
import { renderTheme } from "../../styles/render-theme";
import { GridContent } from ".";
import mock from "./mock";

describe("<GridContent />", () => {
  it("should render the component", () => {
    const { container } = renderTheme(<GridContent {...mock} />);
    expect(container).toMatchSnapshot();
  });
});
