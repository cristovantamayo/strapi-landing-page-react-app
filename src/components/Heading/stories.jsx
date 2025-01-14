import { Heading } from ".";

export default {
  title: "Components/Heading",
  component: Heading,
  args: {
    children: "Hello World",
  },
  argTypes: {
    children: { type: "string" },
  },
};

export const Template = (args) => <Heading {...args} />;
