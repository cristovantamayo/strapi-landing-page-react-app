import React, { useState, useEffect } from "react";

import { mockBase } from "../Base/mock";
import { Base } from "../Base";
import { mapData } from "../../api/map-data";

function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const load = async () => {
      const data = await fetch(
        "http://localhost:1337/api/pages?populate[sections][populate]=*&populate[menu][populate]=*",
      );
      const json = await data.json();
      const pageData = mapData(json.data);
      setData(pageData[0]);
    };

    load();
  }, []);

  if (data === undefined) {
    return <h1>Not Found</h1>;
  }

  if (data && !data.slug) {
    return <h1>Loading...</h1>;
  }

  return <Base className="Home" {...mockBase} />;
}

export default Home;
