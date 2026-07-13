import type { WorkImage } from "./types";

export const SITE_URL = "https://www.alanmulhall.com";

const ARTIST_ID = `${SITE_URL}/#artist`;

// Person entity for the artist. Only asserts facts the site itself backs up —
// no invented organizations, profile images, or embellished descriptions.
export const artistSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": ARTIST_ID,
  name: "Alan Mulhall",
  url: `${SITE_URL}/`,
  jobTitle: "Artist",
  description: "Alan Mulhall, artist based in Los Angeles.",
  sameAs: ["https://www.instagram.com/alanvmulhall/"],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Los Angeles",
    addressRegion: "CA",
    addressCountry: "US",
  },
};

// The gallery as a list of artworks, each linked back to the artist entity.
export function artworkListSchema(images: WorkImage[]) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: images.map((image, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "VisualArtwork",
        image: image.url,
        creator: { "@id": ARTIST_ID },
        ...(image.title ? { name: image.title } : {}),
        ...(image.year ? { dateCreated: String(image.year) } : {}),
      },
    })),
  };
}
