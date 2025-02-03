import { Base } from ".";

import { GridText } from "../../components/GridText";
import { mockBase } from "./mock";

export default {
  title: "Templates/Base",
  component: Base,
  args: mockBase,
};

export const Template = (args) => {
  return (
    <div>
      <Base {...args} />
    </div>
  );
};
