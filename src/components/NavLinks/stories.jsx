import { NavLinks } from "./index.jsx";
import links from "./mock.js";

export default {
  title: "NavLinks",
  component: NavLinks,
  args: {
    links: links,
  },
  argTypes: {
    links: { type: "" },
  },
};

export const Template = (args) => {
  return (
    <div>
      <NavLinks {...args} />
    </div>
  );
};
