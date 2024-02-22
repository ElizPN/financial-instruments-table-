import { FinDataItem } from "../components/FinDataController";

function compareAssetClass(a: FinDataItem, b: FinDataItem) {
  const assetClasses = new Map([
    ["Equities", 1],
    ["Macro", 2],
    ["Credit", 3],
  ]);

  let x = assetClasses.get(a.assetClass) ?? Number.MAX_SAFE_INTEGER;
  let y = assetClasses.get(b.assetClass) ?? Number.MAX_SAFE_INTEGER;

  return x - y;
}

export const assetClassSorter = (array: FinDataItem[]) => {
  const sortedArray = array.sort(compareAssetClass);

  return sortedArray;
};
