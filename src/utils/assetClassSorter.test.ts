import { assetClassSorter } from "./assetClassSorter.ts";

describe("assetClassSorter", () => {
  test("should return sorted array Equities first, then Macro and Credit last", () => {
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

  test("should return empty array when get empty array", () => {
    // prepare
    const mockArrayFinData: [] = [];
    const expectedArray: [] = []

    // act
    const sortedArray = assetClassSorter(mockArrayFinData);

    // assert
    expect(sortedArray).toEqual(expectedArray);
  });

  test("should return sorted array if there is no assetClass property", () => {
    // prepare
    const mockArrayFinData = [
      {
        ticker: "DELTA",
        price: 3132.66,
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
      {
        ticker: "DELTA",
        price: 3132.66,
      },
    ];

    // act
    const sortedArray = assetClassSorter(mockArrayFinData);

    // assert
    expect(sortedArray).toEqual(expectedArray);
  });

  test("should return sorted array if assetClass: Unknown", () => {
    // prepare
    const mockArrayFinData = [
      {
        ticker: "DELTA",
        price: 3132.66,
        assetClass: "Unknown",
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
      {
        ticker: "DELTA",
        price: 3132.66,
        assetClass: "Unknown",
      },
    ];

    // act
    const sortedArray = assetClassSorter(mockArrayFinData);

    // assert
    expect(sortedArray).toEqual(expectedArray);
  });
});
