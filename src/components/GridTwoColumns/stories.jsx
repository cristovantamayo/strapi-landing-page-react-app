import { GridTwoColumns } from ".";

export default {
  title: "GridTwoColumns",
  component: GridTwoColumns,
  args: {
    title: "Grid Two Columns",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    srcImg: "assets/images/javascript.svg",
  },
};

export const Template = (args) => {
  return (
    <div>
      <GridTwoColumns {...args} />
    </div>
  );
};
