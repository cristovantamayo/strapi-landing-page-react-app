import { describe } from "@jest/globals";
import { mapMenu } from "./map-menu";
import { mapMenuLinks } from "./map-menu";

describe("map-menu", () => {
  it("should return default object if no data", () => {
    const menu = mapMenu();
    expect(menu.newTab).toBe(false);
    expect(menu.text).toBe("");
    expect(menu.srcImg).toBe("");
    expect(menu.link).toBe("");
  });

  it("should map menu to match required keys and values", () => {
    const menu = mapMenu({
      open_in_new_tab: false,
      logo_text: "Landing Page",
      logo_link: "#home",
      menu_links: [
        {
          open_in_new_tab: false,
          link_text: "pricing",
          url: "#pricing",
        },
        {
          open_in_new_tab: true,
          link_text: "contact",
          url: "#contact",
        },
      ],
      logo: {
        url: "a.svg",
      },
    });
    expect(menu.newTab).toBe(false);
    expect(menu.text).toBe("Landing Page");
    expect(menu.srcImg).toBe("a.svg");
    expect(menu.link).toBe("#home");

    expect(menu.links[0].newTab).toBe(false);
    expect(menu.links[0].children).toBe("pricing");
    expect(menu.links[0].link).toBe("#pricing");

    expect(menu.links[1].newTab).toBe(true);
    expect(menu.links[1].children).toBe("contact");
    expect(menu.links[1].link).toBe("#contact");
  });

  it("should return empty array if no links", () => {
    const links = mapMenuLinks();
    expect(links).toEqual([]);
  });

  it("should map links if exists", () => {
    const links = mapMenuLinks([
      {
        open_in_new_tab: false,
        link_text: "pricing",
        url: "#pricing",
      },
      {},
    ]);
    expect(links[0].newTab).toBe(false);
    expect(links[0].children).toBe("pricing");
    expect(links[0].link).toBe("#pricing");
  });
});
