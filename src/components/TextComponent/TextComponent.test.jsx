import { screen } from "@testing-library/react";
import { describe, expect } from "@jest/globals";
import { renderTheme } from "../../styles/render-theme";
import { TextComponent } from ".";

describe("<TextComponent />", () => {
  it("should render the component", () => {
    renderTheme(<TextComponent>Children</TextComponent>);
    expect(screen.getByRole("heading")).toBeInTheDocument();
  });
});
