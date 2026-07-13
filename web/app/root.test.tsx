import { render } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { Layout } from "./root";

vi.mock("react-router", async (importOriginal) => ({
  ...(await importOriginal<typeof import("react-router")>()),
  Meta: () => null,
  Links: () => null,
  Scripts: () => null,
  ScrollRestoration: () => null,
}));

describe("Layout analytics", () => {
  // Vitest runs with import.meta.env.PROD === false, i.e. the dev branch.
  it("does not load the GA collector script outside production", () => {
    render(
      <Layout>
        <div />
      </Layout>
    );
    expect(document.querySelector('script[src*="googletagmanager.com"]')).toBeNull();
  });

  it("embeds the artist Person JSON-LD", () => {
    render(
      <Layout>
        <div />
      </Layout>
    );
    const script = document.querySelector('script[type="application/ld+json"]');
    expect(script).not.toBeNull();
    const schema = JSON.parse(script!.innerHTML);
    expect(schema["@type"]).toBe("Person");
    expect(schema.name).toBe("Alan Mulhall");
  });

  it("still defines the inline gtag stub so component calls are safe", () => {
    render(
      <Layout>
        <div />
      </Layout>
    );
    const inline = Array.from(document.querySelectorAll("script")).find((s) =>
      s.innerHTML.includes("function gtag")
    );
    expect(inline).toBeDefined();
  });
});
