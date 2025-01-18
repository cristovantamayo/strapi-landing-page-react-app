import { Heading } from ".";
import { renderTheme } from "../../styles/render-theme";
import { screen } from "@testing-library/react";
import { expect } from "@jest/globals";
import { theme } from "../../styles/theme";
import { ThemeProvider } from "styled-components";

describe("<Heading />", () => {
  it("should render with default values", () => {
    renderTheme(<Heading as="h1">texto</Heading>);
    const heading = screen.getByRole("heading", { name: "texto" });

    expect(heading).toHaveStyle({
      color: theme.colors.primaryColor,
      "font-size": theme.font.sizes.huge,
      "text-transform": "uppercase",
    });
  });

  it("should render with white color", () => {
    renderTheme(<Heading colorDark={false}>texto</Heading>);
    const heading = screen.getByRole("heading", { name: "texto" });

    expect(heading).toHaveStyle({
      color: theme.colors.white,
    });
  });

  it("should render correct heading sizes", () => {
    const { rerender } = renderTheme(<Heading size="small">texto</Heading>);
    const heading = screen.getByRole("heading", { name: "texto" });

    expect(heading).toHaveStyle({
      "font-size": theme.font.sizes.medium,
    });

    rerender(
      <ThemeProvider theme={theme}>
        <Heading size="big">texto</Heading>
      </ThemeProvider>,
    );

    expect(screen.getByRole("heading", { name: "texto" })).toHaveStyle({
      "font-size": theme.font.sizes.xLarge,
    });

    rerender(
      <ThemeProvider theme={theme}>
        <Heading size="medium">texto</Heading>
      </ThemeProvider>,
    );

    expect(screen.getByRole("heading", { name: "texto" })).toHaveStyle({
      "font-size": theme.font.sizes.large,
    });

    rerender(
      <ThemeProvider theme={theme}>
        <Heading size="huge">texto</Heading>
      </ThemeProvider>,
    );

    expect(screen.getByRole("heading", { name: "texto" })).toHaveStyle({
      "font-size": theme.font.sizes.huge,
    });
  });

  it("should render correct font-size when using mobile", () => {
    renderTheme(<Heading size="huge">texto</Heading>);
    const heading = screen.getByRole("heading", { name: "texto" });
    expect(heading).toHaveStyleRule("font-size", theme.font.sizes.xLarge, {
      media: "(max-width:  768px)",
    });
  });

  it("should render with uppercase letters", () => {
    renderTheme(<Heading uppercase>texto</Heading>);
    const heading = screen.getByRole("heading", { name: "texto" });

    expect(heading).toHaveStyle({
      "text-transform": "uppercase",
    });
  });

  it("should render correct Heading Element", () => {
    const { container } = renderTheme(<Heading as="h6">texto</Heading>);
    const heading = screen.getByRole("heading", { name: "texto" });
    const h6 = container.querySelector("h6");

    expect(h6.tagName.toLowerCase()).toBe("h6");
  });
});
