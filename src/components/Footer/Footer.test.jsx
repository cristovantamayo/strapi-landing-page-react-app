import { screen } from "@testing-library/react";
import { describe, expect } from "@jest/globals";
import { renderTheme } from "../../styles/render-theme";
import { Footer } from ".";

describe("<Footer />", () => {
  it("should render the Footer component no Content", () => {
    const { container } = renderTheme(<Footer />);
    expect(container).toMatchSnapshot();
  });
  it("should render the Footer component", () => {
    const { container } = renderTheme(<Footer html="<h1>Olá</h1>" />);
    expect(screen.getByRole("heading", { name: "Olá" })).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
