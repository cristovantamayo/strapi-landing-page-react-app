import React, { useState, useEffect, useRef } from "react";

import { mockBase } from "../Base/mock";
import { Base } from "../Base";
import { mapData } from "../../api/map-data";
import { PageNotFound } from "../PageNotFound";

function Home() {
  const [data, setData] = useState([]);
  const isMounted = useRef(true);

  useEffect(() => {
    const load = async () => {
      try {
        const data = await fetch(
          "http://localhost:1337/api/pages?populate[sections][populate]=*&populate[menu][populate]=*",
        );
        const json = await data.json();
        const pageData = mapData(json.data);
        setData(pageData[0]);
      } catch (error) {
        setData(undefined);
      }
    };

    if (isMounted.current === true) {
      load();
    }

    return () => {
      isMounted.current = false;
    };
  }, []);

  if (data === undefined) {
    return <PageNotFound />;
  }

  if (data && !data.slug) {
    return <h1>Loading...</h1>;
  }

  return <Base className="Home" {...mockBase} />;
}

export default Home;
