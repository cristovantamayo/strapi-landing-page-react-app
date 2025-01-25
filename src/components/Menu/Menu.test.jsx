import { screen, fireEvent } from "@testing-library/react";
import { describe, expect } from "@jest/globals";
import { renderTheme } from "../../styles/render-theme";
import { Menu } from ".";

import linksMock from "../NavLinks/mock";
const logoData = {
  text: "Logo",
  link: "#target",
};

describe("<Menu />", () => {
  it("should render Logo and Main Menu Nav", () => {
    const { container } = renderTheme(
      <Menu links={linksMock} logoData={logoData}>
        Children
      </Menu>,
    );
    expect(screen.getByRole("heading", { name: "Logo" })).toBeInTheDocument();
    expect(
      screen.getByRole("navigation", { name: "Main menu" }),
    ).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });

  it("should render Menu Mobile and Button for open and Close menu", () => {
    const { container } = renderTheme(
      <Menu links={linksMock} logoData={logoData}>
        Children
      </Menu>,
    );

    const button = screen.getByLabelText("Open/Close menu");
    const menuContainer = button.nextSibling;

    expect(button).toHaveStyle({ display: "none" });

    expect(button).toHaveStyleRule("display", "flex", {
      media: "(max-width:  768px)",
    });

    expect(menuContainer).toHaveStyleRule("opacity", "0", {
      media: "(max-width:  768px)",
    });

    expect(screen.getByLabelText("Open menu")).toBeInTheDocument();

    fireEvent.click(button);

    expect(menuContainer).toHaveStyleRule("opacity", "1", {
      media: "(max-width:  768px)",
    });

    expect(screen.getByLabelText("Close menu")).toBeInTheDocument();

    fireEvent.click(menuContainer);

    expect(menuContainer).toHaveStyleRule("opacity", "0", {
      media: "(max-width:  768px)",
    });

    expect(screen.getByLabelText("Open menu")).toBeInTheDocument();
  });

  it("should not render links", () => {
    const { container } = renderTheme(<Menu logoData={logoData} />);

    expect(
      screen.queryByRole("navigation", { name: "Main menu" }).firstChild,
    ).not.toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });
});
