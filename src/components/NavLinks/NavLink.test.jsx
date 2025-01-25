import { screen } from "@testing-library/react";
import { describe, expect } from "@jest/globals";
import { renderTheme } from "../../styles/render-theme";
import { NavLinks } from ".";
import { theme } from "../../styles/theme";

import mock from "./mock";

describe("<NavLinks />", () => {
  it("should render the component", () => {
    renderTheme(<NavLinks links={mock} />);
    expect(screen.getAllByRole("link")).toHaveLength(mock.length);
  });

  it("should not render the component", () => {
    renderTheme(<NavLinks />);
    expect(screen.queryAllByText(/link/i)).toHaveLength(0);
  });

  it("should render the parent component", () => {
    renderTheme(<NavLinks links={mock} />);
    expect(screen.getByText(/link 10/i).parentElement).toHaveStyleRule(
      "flex-flow",
      "column wrap",
      {
        media: "(max-width:  768px)",
      },
    );
  });

  it("should match snapshot", () => {
    const { container } = renderTheme(<NavLinks links={mock} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
