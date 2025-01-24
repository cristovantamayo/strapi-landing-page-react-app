import { screen } from "@testing-library/react";
import { describe, expect } from "@jest/globals";
import { renderTheme } from "../../styles/render-theme";
import { SectionBackground } from ".";

describe("<SectionBackground />", () => {
  it("should render with background dark", () => {
    const { container } = renderTheme(
      <SectionBackground background={true}>
        <h1>Children</h1>
      </SectionBackground>,
    );
    expect(screen.getByRole("heading")).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });

  it("should render with background light", () => {
    const { container } = renderTheme(
      <SectionBackground>
        <h1>Children</h1>
      </SectionBackground>,
    );
    expect(screen.getByRole("heading")).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });
});
