import { Heading } from ".";

export default {
  title: "Components/Heading",
  component: Heading,
  args: {
    children: "Hello World! Is Light!",
  },
  argTypes: {
    children: { type: "string" },
  },
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
};

export const Light = (args) => <Heading {...args} />;
export const Dark = (args) => <Heading {...args} />;

Light.parameters = {
  backgrounds: {
    default: "light",
  },
};

Dark.args = {
  children: "Hello World! Is Night!",
  colorDark: false,
};
