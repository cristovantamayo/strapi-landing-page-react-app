import { screen } from "@testing-library/react";
import { describe, expect } from "@jest/globals";
import { renderTheme } from "../../styles/render-theme";
import { NavLink } from ".";
import { theme } from "../../styles/theme";

import mock from "./mock";

describe("<NavLink />", () => {
  it("should render the component", () => {
    renderTheme(<NavLink links={mock} />);
    expect(screen.getAllByRole("link")).toHaveLength(mock.length);
  });

  it("should not render the component", () => {
    renderTheme(<NavLink />);
    expect(screen.queryAllByText(/link/i)).toHaveLength(0);
  });

  it("should render the parent component", () => {
    renderTheme(<NavLink links={mock} />);
    expect(screen.getByText(/link 10/i).parentElement).toHaveStyleRule(
      "flex-flow",
      "column wrap",
      {
        media: "(max-width:  768px)",
      },
    );
  });

  it("should match snapshot", () => {
    const { container } = renderTheme(<NavLink links={mock} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
