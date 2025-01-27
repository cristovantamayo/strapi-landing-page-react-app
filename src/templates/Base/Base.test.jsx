import { screen } from "@testing-library/react";
import { describe, expect } from "@jest/globals";
import { renderTheme } from "../../styles/render-theme";
import { Base } from ".";

describe("<Base />", () => {
  it("should render the component", () => {
    renderTheme(<Base>Children</Base>);
    expect(screen.getByRole("heading")).toBeInTheDocument();
  });
});
