import { screen } from "@testing-library/react";
import { describe, expect } from "@jest/globals";
import { renderTheme } from "../../styles/render-theme";
import { LogoLink } from ".";

describe("<LogoLink />", () => {
  it("should render text logo", () => {
    renderTheme(
      <LogoLink link="#target" text="Olá Mundo">
        Children
      </LogoLink>,
    );
    const heading = screen.getByRole("heading", { name: "Olá Mundo" });
    expect(heading.firstChild).toHaveAttribute("href", "#target");
    expect(
      screen.getByRole("heading", { name: "Olá Mundo" }),
    ).toBeInTheDocument();
    // a another way to
    expect(screen.getByRole("link", { name: "Olá Mundo" })).toHaveAttribute(
      "href",
      "#target",
    );
  });

  it("should render image logo", () => {
    renderTheme(
      <LogoLink link="#target" text="Olá Mundo" srcImg="image.jpg">
        Children
      </LogoLink>,
    );

    expect(screen.getByRole("img", { name: "Olá Mundo" })).toHaveAttribute(
      "src",
      "image.jpg",
    );
    // a another way to
    expect(screen.getByAltText("Olá Mundo")).toHaveAttribute(
      "src",
      "image.jpg",
    );
  });

  it("should match snapshot", () => {
    const { container } = renderTheme(
      <LogoLink link="#target" text="Olá Mundo" srcImg="image.jpg">
        Children
      </LogoLink>,
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});
