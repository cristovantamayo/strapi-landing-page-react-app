import { describe } from "@jest/globals";
import { mapData } from "./map-data";

describe("map-data", () => {
  it("should map data even if there is no data", () => {
    const pagesData = mapData()[0];
    expect(pagesData.footerHtml).toBe("");
    expect(pagesData.slug).toBe("");
    expect(pagesData.title).toBe("");
  });

  it("should map data if there are data", () => {
    const pagesData = mapData([
      {
        footer_text: "<h1>Olá</h1>",
        slug: "slug",
        title: "title",
      },
    ])[0];
    expect(pagesData.footerHtml).toBe("<h1>Olá</h1>");
    expect(pagesData.slug).toBe("slug");
    expect(pagesData.title).toBe("title");
  });
});
