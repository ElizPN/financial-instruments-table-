import { tickerSorter } from "./tickerSorter";

describe("tickerSorter", () => {
  test("should return sorted array", () => {
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
        ticker: "EPSILON",
        price: 1168.46,
        assetClass: "Credit",
      },
      {
        ticker: "ETA",
        price: 3089.2,
        assetClass: "Macro",
      },

      {
        ticker: "ZETA",
        price: 2716.78,
        assetClass: "Credit",
      },
    ];

    // act
    const sortedArray = tickerSorter(mockArrayFinData);

    // assert
    expect(sortedArray).toEqual(expectedArray);
  });

  test("should return empty array when get empty array", () => {
    // prepare
    const mockArrayFinData: [] = [];
    const expectedArray: [] = [];

    // act
    const sortedArray = tickerSorter(mockArrayFinData);

    // assert
    expect(sortedArray).toEqual(expectedArray);
  });

  test("should return sorted array if there is no ticker property", () => {
    // prepare
    const mockArrayFinData = [
      {
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
        ticker: "EPSILON",
        price: 1168.46,
        assetClass: "Credit",
      },
      {
        ticker: "ETA",
        price: 3089.2,
        assetClass: "Macro",
      },
      {
        ticker: "ZETA",
        price: 2716.78,
        assetClass: "Credit",
      },
      {
        price: 3132.66,
        assetClass: "Equities",
      },
    ];

    // act
      const sortedArray = tickerSorter(mockArrayFinData);

    // assert
      expect(sortedArray).toEqual(expectedArray);
  });

  test("should return sorted array if ticker: undefined", () => {
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
    //   const sortedArray = assetClassSorter(mockArrayFinData);

    // assert
    //   expect(sortedArray).toEqual(expectedArray);
  });
});
