import { FinDataItem } from "../components/FinDataController";

function compareNumbers(a: FinDataItem, b: FinDataItem) {
  if (a.price === undefined && b.price === undefined) {
    return 0;
  }

  if (a.price === undefined) {
    return 1;
  }

  if (b.price === undefined) {
    return -1;
  }
  return b.price - a.price;
}

export const priceSorter = (array: FinDataItem[]) => {
  const sortedArray = array.sort(compareNumbers);

  return sortedArray;
};
