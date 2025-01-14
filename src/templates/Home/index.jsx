import React from "react";
import * as Styled from "./styles";
import { Heading } from "../../components/Heading";

function Home() {
  return (
    <div className="Home">
      <Styled.Container>
        <Heading> Hello World </Heading>
      </Styled.Container>
    </div>
  );
}

export default Home;
