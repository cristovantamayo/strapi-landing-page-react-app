import { screen } from "@testing-library/react";
import { describe, expect } from "@jest/globals";
import { renderTheme } from "../../styles/render-theme";
import { SectionContainer } from ".";

describe("<SectionContainer />", () => {
  it("should render the content container", () => {
    const { container } = renderTheme(
      <SectionContainer>
        <h1>Children</h1>
      </SectionContainer>,
    );
    expect(screen.getByRole("heading")).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });
});
