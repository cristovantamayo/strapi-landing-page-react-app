import { describe } from "@jest/globals";
import {
  mapSections,
  mapSectionTwoColumns,
  mapSectionContent,
  mapTextGrid,
  mapImageGrid,
} from "./map-sections";

import fakePagesData from "./dados.json";

describe("map-sections", () => {
  it("should render predefined section id no data", () => {
    const data = mapSections();
    expect(data).toEqual([]);
  });

  it("should render section Two Columns with data", () => {
    expect(Array.isArray(fakePagesData[0].sections)).toBe(true);
    const data = mapSections(fakePagesData[0].sections);
    expect(data[0].component).toBe("section.section-two-columns");
  });

  it("should render section OneContent with data", () => {
    expect(Array.isArray(fakePagesData[0].sections)).toBe(true);
    const data = mapSections(fakePagesData[0].sections);
    expect(data[1].__component).toBe("section.section-content");
  });

  it("should test section with invalid data", () => {
    const withNoTextOrImageGrid = mapSections([
      {
        __component: "section.section-grid",
      },
    ]);

    const WithNoComponent = mapSections([{}]);
    expect(withNoTextOrImageGrid).toEqual([
      { __component: "section.section-grid" },
    ]);
    expect(WithNoComponent).toEqual([{}]);
  });

  it("should validate section grid without image grid or text grid", () => {
    const withoutImageOrTextGrid = mapSections([
      {
        __component: "section.section-grid",
        image_grid: [{}],
      },
      {
        __component: "section.section-grid",
        text_grid: [{}],
      },
    ]);
    expect(withoutImageOrTextGrid.length).toBe(2);
  });

  it("should map sections two columns", () => {
    const data = mapSectionTwoColumns();
    expect(data.background).toBe(false);
    expect(data.component).toBe("");
    expect(data.sectionId).toBe("");
    expect(data.srcImg).toBe("");
    expect(data.text).toBe("");
    expect(data.title).toBe("");
  });

  it("should map sections two columns with Data", () => {
    const data = mapSectionTwoColumns({
      __component: "section.section-two-columns",
      title: "January brings us Firefox 85",
      description: "abc",
      metadata: {
        background: true,
        section_id: "contact",
      },
      __v: 1,
      image: {
        url: "a.svg",
      },
    });
    expect(data.background).toBe(true);
    expect(data.component).toBe("section.section-two-columns");
    expect(data.sectionId).toBe("contact");
    expect(data.srcImg).toBe("a.svg");
    expect(data.text).toBe("abc");
    expect(data.title).toBe("January brings us Firefox 85");
  });

  it("should map section content with no content", () => {
    const data = mapSectionContent();
    expect(data.background).toBe(false);
    expect(data.component).toBe("");
    expect(data.sectionId).toBe("");
    expect(data.html).toBe("");
    expect(data.title).toBe("");
  });

  it("should map section content", () => {
    const data = mapSections([
      {
        __component: "section.section-one-content",
        title: "January brings us Firefox 85",
        content: [
          { children: [{ text: "abc" }] },
          { children: [{ text: "def" }] },
        ],
        metadata: {
          background: false,
          section_id: "contact",
        },
        image: {
          url: "a.svg",
        },
      },
    ]);

    expect(data[0].background).toBe(false);
    expect(data[0].component).toBe("section.section-one-content");
    expect(data[0].sectionId).toBe("contact");
    expect(data[0].html.trim().replace(/[^<>//a-z]/gi, "")).toBe(
      "<p>abc</p><p>def</p>",
    );
    expect(data[0].title).toBe("January brings us Firefox 85");
  });

  it("should map text grid with data", () => {
    const data = mapTextGrid({
      __component: "section.section-grid",
      description: "abc",
      title: "My Grid",
      text_grid: [
        {
          title: "Teste 1",
          description: "abcd",
        },
        {
          title: "Teste 2",
          description: "description 2",
        },
        {
          title: "Teste 3",
          description: "description 3",
        },
      ],
      image_grid: [],
      metadata: {
        background: true,
        _id: "602fdf2e540c00269e056199",
        name: "grid-one",
        section_id: "grid-one",
        __v: 0,
        id: "602fdf2e540c00269e056199",
      },
      __v: 2,
      id: "602fdf2d540c00269e056174",
    });
    expect(data.background).toBe(true);
    expect(data.component).toBe("section.section-grid-text");
    expect(data.sectionId).toBe("grid-one");
    expect(data.title).toBe("My Grid");
    expect(data.description).toBe("abc");
    expect(data.grid[0].title).toBe("Teste 1");
    expect(data.grid[0].description).toBe("abcd");
  });

  it("should map text grid without data", () => {
    const data = mapTextGrid(undefined);
    expect(data.background).toBe(false);
    expect(data.component).toBe("section.section-grid-text");
    expect(data.sectionId).toBe("");
    expect(data.title).toBe("");
    expect(data.description).toBe("");
  });

  it("should map image grid without data", () => {
    const data = mapImageGrid(undefined);
    expect(data.background).toBe(false);
    expect(data.component).toBe("section.section-grid-image");
    expect(data.sectionId).toBe("");
    expect(data.title).toBe("");
    expect(data.description).toBe("");
  });
  it("should map image grid with data", () => {
    const data = mapImageGrid({
      description: "abc",
      title: "Gallery",
      text_grid: [],
      image_grid: [
        {
          alternativeText: "abc",
          url: "a.svg",
        },
        {
          alternativeText: "Um livro grande aberto",
          url: "https://res.cloudinary.com/dlizakp2a/image/upload/v1613749814/360x360_r_1_c073b11d09.jpg",
        },
        {
          alternativeText: "Imagem do topo de uma cidade grande",
          url: "https://res.cloudinary.com/dlizakp2a/image/upload/v1613749814/360x360_r_2_38651a645b.jpg",
        },
        {
          __v: 0,
          alternativeText: "Filme para câmeras antigas",
          url: "https://res.cloudinary.com/dlizakp2a/image/upload/v1613749814/360x360_r_1_9d32ada1f9.jpg",
        },
        {
          _id: "602fdf2d540c00269e056187",
          __v: 0,
          alternativeText: "Tela de notebook com Webull",
          url: "https://res.cloudinary.com/dlizakp2a/image/upload/v1613749814/360x360_r_a1_973b2a68c9.jpg",
        },
        {
          __v: 0,
          alternativeText: "Filme Kodak para câmeras antigas",
          url: "https://res.cloudinary.com/dlizakp2a/image/upload/v1613749814/360x360_r_1_b3fcbf1d93.jpg",
        },
      ],
      metadata: {
        name: "gallery",
        section_id: "gallery",
      },
    });

    expect(data.background).toBe(false);
    expect(data.component).toBe("section.section-grid-image");
    expect(data.sectionId).toBe("gallery");
    expect(data.title).toBe("Gallery");
    expect(data.description).toBe("abc");
    expect(data.grid[0].srcImg).toBe("a.svg");
    expect(data.grid[0].altText).toBe("abc");
  });
});
