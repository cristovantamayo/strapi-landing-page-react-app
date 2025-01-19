import { TextComponent } from ".";

export default {
  title: "TextComponent",
  component: TextComponent,
  args: {
    children: `
    Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Ullam a, temporibus quidem alias tenetur rerum ab.
    Corrupti quod at vitae repudiandae earum tempore,
    libero a, rerum provident deleniti,
    ducimus praesentium?`,
  },
  argTypes: {
    children: {
      type: "string",
    },
  },
};

export const Template = (args) => {
  return (
    <div>
      <TextComponent {...args} />
    </div>
  );
};
