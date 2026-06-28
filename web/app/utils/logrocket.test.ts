import { describe, it, expect, vi, beforeEach } from "vitest";

const initMock = vi.hoisted(() => vi.fn());

vi.mock("logrocket", () => ({ default: { init: initMock } }));

// Re-import the module fresh each test so its internal `started` flag resets.
async function loadInit() {
  vi.resetModules();
  return (await import("./logrocket")).initLogRocket;
}

beforeEach(() => {
  initMock.mockClear();
});

describe("initLogRocket", () => {
  it("initializes LogRocket with the given app id", async () => {
    const initLogRocket = await loadInit();
    initLogRocket("org/app");
    expect(initMock).toHaveBeenCalledWith("org/app");
  });

  it("does nothing when no app id is provided", async () => {
    const initLogRocket = await loadInit();
    initLogRocket(undefined);
    initLogRocket("");
    expect(initMock).not.toHaveBeenCalled();
  });

  it("only initializes once across repeated calls", async () => {
    const initLogRocket = await loadInit();
    initLogRocket("org/app");
    initLogRocket("org/app");
    expect(initMock).toHaveBeenCalledOnce();
  });
});
