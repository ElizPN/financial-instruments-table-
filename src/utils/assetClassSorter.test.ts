import { assetClassSorter } from "./assetClassSorter.ts";

describe("assetClassSorter", () => {
  test("should return sorted", () => {
    // prepare
    const mockArrayFinData = [
      {
        ticker: "DELTA",
        price: 3132.66,
        assetClass: "Equities",
      },
      {
        ticker: "EPSILON",
        price: 1168.46,
        assetClass: "Credit",
      },
      {
        ticker: "ZETA",
        price: 2716.78,
        assetClass: "Credit",
      },
      {
        ticker: "ETA",
        price: 3089.2,
        assetClass: "Macro",
      },
    ];

    const expectedArray = [
      {
        ticker: "DELTA",
        price: 3132.66,
        assetClass: "Equities",
      },
      {
        ticker: "ETA",
        price: 3089.2,
        assetClass: "Macro",
      },
      {
        ticker: "EPSILON",
        price: 1168.46,
        assetClass: "Credit",
      },
      {
        ticker: "ZETA",
        price: 2716.78,
        assetClass: "Credit",
      },
    ];

    // act
    const sortedArray = assetClassSorter(mockArrayFinData);

    // assert
    expect(sortedArray).toEqual(expectedArray);
  });
});
