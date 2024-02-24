import { getPriceColor, getRowColor } from "./useFinData";

describe("getRowColor function in useFinData hook", () => {
  it('returns white for asset class "Macro"', () => {
    expect(getRowColor("Macro")).toBe("white");
  });

  it('returns blue for asset class "Equities"', () => {
    expect(getRowColor("Equities")).toBe("#89CFF0");
  });

  it('returns green for asset class "Credit"', () => {
    expect(getRowColor("Credit")).toBe("green");
  });

  it("returns grey for unknown asset classes", () => {
    expect(getRowColor()).toBe("#D3D3D3");
    expect(getRowColor("SomeUnknownClass")).toBe("#D3D3D3");
  });
});

describe("getPriceColor function in useFinData hook", () => {
  it("returns blue for positive price", () => {
    expect(getPriceColor(3450)).toBe("#00008B");
  });

  it("returns red for negative price", () => {
    expect(getPriceColor(-3450)).toBe("red");
  });
});
