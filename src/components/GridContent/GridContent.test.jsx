import { screen } from "@testing-library/react";
import { describe, expect } from "@jest/globals";
import { renderTheme } from "../../styles/render-theme";
import { GridContent } from ".";
import mock from "./mock";

describe("<GridContent />", () => {
  it("should render grid content component", () => {
    const { container } = renderTheme(<GridContent {...mock} />);
    const target = screen.getByLabelText("Grid Content");
    expect(target).toBeInTheDocument();
    expect(target).toHaveStyleRule("max-width", "40rem", {
      media: "(max-width:  768px)",
    });

    expect(container).toMatchSnapshot();
  });

  it("should render grid content component with background", () => {
    const { container } = renderTheme(
      <GridContent {...mock} background={true} />,
    );
    expect(container).toMatchSnapshot();
  });

  it("should render grid content component without background", () => {
    const { container } = renderTheme(
      <GridContent {...mock} background={false} />,
    );
    expect(container).toMatchSnapshot();
  });
});
