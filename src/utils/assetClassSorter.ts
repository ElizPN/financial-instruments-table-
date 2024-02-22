import { FinDataItem } from "../components/FinDataController";

function compareAssetClass(a: FinDataItem, b: FinDataItem) {
  const assetClasses = new Map([
    ["Equities", 1],
    ["Macro", 2],
    ["Credit", 3],
  ]);

  // if word is not in the Map (or null / undefined ) it should be in the bottom of the list
  if (a.assetClass !== undefined && b.assetClass !== undefined) {
    const x = assetClasses.get(a.assetClass) ?? Number.MAX_SAFE_INTEGER;
    const y = assetClasses.get(b.assetClass) ?? Number.MAX_SAFE_INTEGER;

    return x - y;
  }

  // Handle cases where either a or b has assetClass as undefined
  if (a.assetClass === undefined && b.assetClass !== undefined) {
    return 1; // a should come after b
  }

  if (a.assetClass !== undefined && b.assetClass === undefined) {
    return -1; // b should come after a
  }

  return 0; // Both a and b have assetClass as undefined
}

export const assetClassSorter = (array: FinDataItem[]) => {
  const sortedArray = array.sort(compareAssetClass);

  return sortedArray;
};
