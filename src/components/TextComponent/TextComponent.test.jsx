import { screen } from "@testing-library/react";
import { describe, expect } from "@jest/globals";
import { renderTheme } from "../../styles/render-theme";
import { TextComponent } from ".";

describe("<TextComponent />", () => {
  it("should render a text", () => {
    renderTheme(<TextComponent>Children</TextComponent>);
    expect(screen.getByText("Children")).toBeInTheDocument();
  });

  it("should match the snapshot", () => {
    const { container } = renderTheme(<TextComponent>Children</TextComponent>);
    expect(container).toMatchSnapshot();
  });
});
