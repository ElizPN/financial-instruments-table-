import { FinDataItem } from "../hooks/useFinData";

function compareAssetClass(a: FinDataItem, b: FinDataItem) {
  const assetClasses = new Map([
    ["Equities", 1],
    ["Macro", 2],
    ["Credit", 3],
  ]);

  if (!a.assetClass && !b.assetClass) {
    return 0;
  }

  if (!a.assetClass) {
    return 1;
  }

  if (!b.assetClass) {
    return -1;
  }

  // if word is not in the Map (or null / undefined ) it should be in the bottom of the list
  const x = assetClasses.get(a.assetClass) ?? Number.MAX_SAFE_INTEGER;
  const y = assetClasses.get(b.assetClass) ?? Number.MAX_SAFE_INTEGER;

  return x - y;
}

export const assetClassSorter = (array: FinDataItem[]) => {
  return array.sort(compareAssetClass);
};
