/** @type { import('@storybook/react').Preview } */
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../src/styles/global-styles";
import { theme } from "../src/styles/theme";

const fontLink = document.createElement("link");
fontLink.rel = "stylesheet";
fontLink.href =
  "https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap";
document.head.appendChild(fontLink);

export default {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: "light",
      values: [
        {
          name: "light",
          value: theme.colors.white,
        },
        {
          name: "dark",
          value: theme.colors.primaryColor,
        },
      ],
    },
  },
};

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <Story />
      <GlobalStyles />
    </ThemeProvider>
  ),
];
