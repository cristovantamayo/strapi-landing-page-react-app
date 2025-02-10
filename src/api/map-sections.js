export const mapSections = (sections = []) => {
  return sections.map((section) => {
    if (section.__component === "section.section-two-columns") {
      return mapSectionTwoColumns(section);
    }
    if (section.__component === "section.section-one-content") {
      return mapSectionContent(section);
    }
    if (section.__component === "section.section-grid") {
      const { text_grid = [], image_grid = [] } = section;
      if (text_grid.length > 0) {
        return mapTextGrid(section);
      }
      if (image_grid.length > 0) {
        return mapImageGrid(section);
      }
    }

    return section;
  });
};

export const mapSectionTwoColumns = (section = []) => {
  const {
    __component: component = "",
    title = "",
    description: text = "",
    image: { url: srcImg = "" } = "",
    metadata: { background = false, section_id: sectionId = "" } = false,
  } = section;

  return {
    component,
    title,
    text,
    srcImg,
    background,
    sectionId,
  };
};

export const mapTextGrid = (section = []) => {
  const {
    __component: component = "",
    title = "",
    description = "",
    metadata: { background = false, section_id: sectionId = "" } = false,
    text_grid: grid = [],
  } = section;
  return {
    component: "section.section-grid-text",
    title,
    description,
    background,
    sectionId,
    grid: grid.map((text) => {
      const { title = "", description = "" } = text;
      return {
        title,
        description,
      };
    }),
  };
};

export const mapImageGrid = (section = {}) => {
  const {
    __component: component = "",
    title = "",
    description = "",
    metadata: { background = false, section_id: sectionId = "" } = false,
    image_grid: grid = [],
  } = section;
  return {
    component: "section.section-grid-image",
    title,
    background,
    sectionId,
    description,
    grid: grid.map((img) => {
      const srcImg = img.url;
      const altText = img.alternativeText;
      return {
        srcImg,
        altText,
      };
    }),
  };
};

const builderContext = (html) => {
  return html
    .map((item) => {
      return `
      <p>${item.children[0].text}</p>
    `;
    })
    .join("");
};

export const mapSectionContent = (section = []) => {
  const {
    __component: component = "",
    title = "",
    content = [],
    srcImg,
    metadata: { background = false, section_id: sectionId = "" } = false,
  } = section;

  const html = builderContext(content);

  return {
    component,
    title,
    html,
    background,
    sectionId,
  };
};
