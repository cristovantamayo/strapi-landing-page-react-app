import { screen } from "@testing-library/react";
import { describe, expect } from "@jest/globals";
import { renderTheme } from "../../styles/render-theme";
import { GoTop } from ".";

describe("<GoTop />", () => {
  it("should render Goto component", () => {
    const { container } = renderTheme(<GoTop />);
    expect(screen.getByRole("link", { name: "Go to top" })).toBeInTheDocument();
    expect(screen.getByLabelText("Go to top")).toHaveAttribute("href", "#");
    expect(container).toMatchSnapshot();
  });
});
