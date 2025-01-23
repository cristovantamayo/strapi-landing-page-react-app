import { SectionContainer } from ".";

export default {
  title: "SectionContainer",
  component: SectionContainer,
  args: {
    children: (
      <div>
        <h1>SectionContainer</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure,
          molestias. Sint ut debitis quis illo? Laborum eos vero neque maiores!
          Obcaecati iure numquam vitae perferendis autem, sint cum doloremque
          ad.
        </p>
      </div>
    ),
  },
  argTypes: {
    children: {
      type: "",
    },
  },
};

export const Template = (args) => {
  return (
    <div>
      <SectionContainer {...args} />
    </div>
  );
};
