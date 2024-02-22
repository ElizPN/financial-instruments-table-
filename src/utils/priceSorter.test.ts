import { priceSorter } from "./priceSorter.ts";

describe("priceSorter", () => {
  test("should return sorted array by “Price” in descending order", () => {
    // prepare
    const mockArrayFindata = [
      {
        ticker: "BETA",
        price: 3791.37,
        assetClass: "Equities",
      },
      {
        ticker: "GAMMA",
        price: 2299.1,
        assetClass: "Equities",
      },
      {
        ticker: "DELTA",
        price: 3132.66,
        assetClass: "Equities",
      },
    ];

    const expectedArray = [
      {
        ticker: "BETA",
        price: 3791.37,
        assetClass: "Equities",
      },
      {
        ticker: "DELTA",
        price: 3132.66,
        assetClass: "Equities",
      },
      {
        ticker: "GAMMA",
        price: 2299.1,
        assetClass: "Equities",
      },
    ];

    // act
    const sortedArray = priceSorter(mockArrayFindata);

    // assert
    expect(sortedArray).toEqual(expectedArray);
  });
});
