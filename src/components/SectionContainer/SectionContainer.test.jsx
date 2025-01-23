import { screen } from "@testing-library/react";
import { describe, expect } from "@jest/globals";
import { renderTheme } from "../../styles/render-theme";
import { SectionContainer } from ".";

describe("<SectionContainer />", () => {
  it("should render the component", () => {
    renderTheme(<SectionContainer>Children</SectionContainer>);
    expect(screen.getByRole("heading")).toBeInTheDocument();
  });
});
