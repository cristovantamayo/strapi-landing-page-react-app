import { GoTop } from ".";

export default {
  title: "GoTop",
  component: GoTop,
  args: {
    children: "GoTop",
  },
  argTypes: {
    children: {
      type: "string",
    },
  },
};

export const Template = (args) => {
  return (
    <div style={{ height: "400vh" }}>
      <h1>Lorem ipsum dolor sit amet.</h1>
      <p>
        Loren Ipsum is simply dummy text of the printing and typesetting
        industry. Loren Ipsum has been the industry standard dummy text ever
        since the 1500s.
      </p>
      <h1>Lorem ipsum dolor sit amet.</h1>
      <p>
        Loren Ipsum is simply dummy text of the printing and typesetting
        industry. Loren Ipsum has been the industry standard dummy text ever
        since the 1500s.
      </p>
      <h1>Lorem ipsum dolor sit amet.</h1>
      <p>
        Loren Ipsum is simply dummy text of the printing and typesetting
        industry. Loren Ipsum has been the industry standard dummy text ever
        since the 1500s.
      </p>
      <h1>Lorem ipsum dolor sit amet.</h1>
      <p>
        Loren Ipsum is simply dummy text of the printing and typesetting
        industry. Loren Ipsum has been the industry standard dummy text ever
        since the 1500s.
      </p>
      <h1>Lorem ipsum dolor sit amet.</h1>
      <p>
        Loren Ipsum is simply dummy text of the printing and typesetting
        industry. Loren Ipsum has been the industry standard dummy text ever
        since the 1500s.
      </p>
      <h1>Lorem ipsum dolor sit amet.</h1>
      <p>
        Loren Ipsum is simply dummy text of the printing and typesetting
        industry. Loren Ipsum has been the industry standard dummy text ever
        since the 1500s.
      </p>
      <h1>Lorem ipsum dolor sit amet.</h1>
      <p>
        Loren Ipsum is simply dummy text of the printing and typesetting
        industry. Loren Ipsum has been the industry standard dummy text ever
        since the 1500s.
      </p>
      <GoTop {...args} />
    </div>
  );
};
