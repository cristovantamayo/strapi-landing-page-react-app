import React from "react";
import { screen } from "@testing-library/react";
import { describe, expect, it } from "@jest/globals";
import { renderTheme } from "../../styles/render-theme";
import { theme } from "../../styles/theme";
import Home from ".";

describe("<Home />", () => {
  it("should render", () => {
    const { container } = renderTheme(<Home />);
    expect(container).toMatchSnapshot();
  });
});
