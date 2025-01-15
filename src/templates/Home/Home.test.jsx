import React from "react";
import { screen } from "@testing-library/react";
import { describe, expect, it } from "@jest/globals";
import { renderTheme } from "../../styles/render-theme";
import Home from ".";

it("renders learn react link", () => {
  const { debug } = renderTheme(<Home />);
  const headingContainer = screen.getByRole("heading", {
    name: "Hello World",
  }).parentElement;

  expect(headingContainer).toHaveStyle({
    background: "black",
    color: "white",
  });

  expect(headingContainer).toHaveStyleRule("background", "black");

  //expect(headingContainer).toMatchSnapshot();

  debug();
});
