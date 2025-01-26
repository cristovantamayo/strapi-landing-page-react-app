import { Footer } from ".";

export default {
  title: "Footer",
  component: Footer,
  args: {
    html: `<p><a rel="nofollow" target="_blank" href="https://cristovantamayo.dev">Coded with <span class="heart">❤</span> by Cristovan Tamayo feat. Otávio Miranda</a></p>`,
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
      <Footer {...args} />
    </div>
  );
};
