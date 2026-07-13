import { describe, it, expect } from "vitest";
import { artistSchema, artworkListSchema, SITE_URL } from "./seo";

describe("artistSchema", () => {
  it("describes the artist Person entity anchored to the site", () => {
    expect(artistSchema["@type"]).toBe("Person");
    expect(artistSchema["@id"]).toBe(`${SITE_URL}/#artist`);
    expect(artistSchema.name).toBe("Alan Mulhall");
    expect(artistSchema.sameAs).toContain("https://www.instagram.com/alanvmulhall/");
  });
});

describe("artworkListSchema", () => {
  const images = [
    { url: "https://cdn/one.jpg", title: "West Cork", year: 2024 },
    { url: "https://cdn/two.jpg", title: "", year: null },
  ];

  it("maps each image to a positioned VisualArtwork linked to the artist", () => {
    const schema = artworkListSchema(images);
    expect(schema["@type"]).toBe("ItemList");
    expect(schema.itemListElement).toHaveLength(2);
    expect(schema.itemListElement[0]).toEqual({
      "@type": "ListItem",
      position: 1,
      item: {
        "@type": "VisualArtwork",
        image: "https://cdn/one.jpg",
        creator: { "@id": `${SITE_URL}/#artist` },
        name: "West Cork",
        dateCreated: "2024",
      },
    });
  });

  it("omits name and dateCreated when the image has no title or year", () => {
    const item = artworkListSchema(images).itemListElement[1].item;
    expect(item).not.toHaveProperty("name");
    expect(item).not.toHaveProperty("dateCreated");
    expect(item.image).toBe("https://cdn/two.jpg");
  });
});
