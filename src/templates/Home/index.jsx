import React from "react";
import * as Styled from "./styles";
import { Heading } from "../../components/Heading";
import { mockBase } from "../Base/stories";
import { Base } from "../Base";
import mock from "../Base/mock";

function Home() {
  return <Base className="Home" {...mockBase} />;
}

export default Home;
