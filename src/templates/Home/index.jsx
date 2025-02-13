import React, { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

import { GridTwoColumns } from "../../components/GridTwoColumns";
import { GridContent } from "../../components/GridContent/index";
import { GridText } from "../../components/GridText";
import { GridImage } from "../../components/GridImage";

import { mockBase } from "../Base/mock";
import { Base } from "../Base";
import { mapData } from "../../api/map-data";
import { PageNotFound } from "../PageNotFound";
import { Loading } from "../Loading";

import config from "../../config";

function Home() {
  const [data, setData] = useState([]);
  const isMounted = useRef(true);
  const location = useLocation();

  useEffect(() => {
    const pathname = location.pathname.replace(/[^a-z0-9-_]/gi, "");
    const slug = pathname ? pathname : config.defaultSlug;
    const load = async () => {
      try {
        const data = await fetch(
          `${config.url}${slug}&populate[sections][populate]=*&populate[menu][populate]=*`,
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
  }, [location]);

  useEffect(() => {
    if (data === undefined) {
      document.tittle = `Page not found | ${config.siteName}`;
    }

    if (data && !data.slug) {
      document.title = `Loading... | ${config.siteName}`;
    }

    if (data && data.title) {
      document.title = `${data.title} | ${config.siteName}`;
    }
  }, [data]);

  if (data === undefined) {
    return <PageNotFound />;
  }

  if (data && !data.slug) {
    return <Loading />;
  }

  const { menu, sections, footerHtml, slug } = data;
  const { links, text, link, srcImg } = menu;

  const buildFooter = (footerHtml) => {
    return footerHtml
      .map((item) => {
        return `
          <p>${item.children[0].text}<strong>${item.children[1].text}</strong></p>
        `;
      })
      .join("");
  };

  return (
    <Base
      className="Home"
      links={links}
      footerHtml={buildFooter(footerHtml)}
      logoData={{ text, link, srcImg }}
    >
      {sections.map((section, index) => {
        const { component } = section;
        const key = `${slug}-${index}`;

        if (component == "section.section-two-columns") {
          return <GridTwoColumns key={key} {...section} />;
        }

        if (component == "section.section-one-content") {
          return <GridContent key={key} {...section} />;
        }

        if (component == "section.section-grid-text") {
          return <GridText key={key} {...section} />;
        }

        if (component == "section.section-grid-image") {
          return <GridImage key={key} {...section} />;
        }
      })}
    </Base>
  );
}

export default Home;
