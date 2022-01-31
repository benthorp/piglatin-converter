import "@testing-library/jest-dom";
import { converter } from "./piglatin.js";

describe("piglatin module exists", () => {
  it("exists", () => {
    expect(converter).not.toBeUndefined();
  });
});
