import { screen } from "@testing-library/react";
import { describe, expect } from "@jest/globals";
import { renderTheme } from "../../styles/render-theme";
import { SectionBackground } from ".";

describe("<SectionBackground />", () => {
  it("should render the component", () => {
    renderTheme(<SectionBackground>Children</SectionBackground>);
    expect(screen.getByRole("heading")).toBeInTheDocument();
  });
});
