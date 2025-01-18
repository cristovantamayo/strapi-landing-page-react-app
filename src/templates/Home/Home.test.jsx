import React from "react";
import { screen } from "@testing-library/react";
import { describe, expect, it } from "@jest/globals";
import { renderTheme } from "../../styles/render-theme";
import Home from ".";

describe("<Home />", () => {
  it("should render", () => {
    renderTheme(<Home />);
    expect(screen.getByRole("heading")).toBeInTheDocument();
  });
});

it("renders learn react link", () => {
  const { debug } = renderTheme(<Home />);

  debug();
});
