import { screen } from "@testing-library/react";
import { describe, expect } from "@jest/globals";
import { renderTheme } from "../../styles/render-theme";
import { Dummy } from ".";

describe("<Dummy />", () => {
  it("should render the component", () => {
    renderTheme(<Dummy>Children</Dummy>);
    expect(screen.getByRole("heading")).toBeInTheDocument();
  });
});
