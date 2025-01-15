import { Heading } from ".";

export default {
  title: "Components/Heading",
  component: Heading,
  args: {
    children: "Hello World! Is Light!",
    light: false,
  },
  argTypes: {
    children: { type: "string" },
    light: { type: "boolean" },
  },
  parameters: {
    backgrounds: {
      default: "light",
    },
  },
};

export const Light = (args) => <Heading {...args} light={false} />;
export const Dark = (args) => <Heading {...args} light={true} />;

Dark.parameters = {
  backgrounds: {
    default: "dark",
  },
};

Dark.args = {
  children: "Hello World! Is Night!",
};
