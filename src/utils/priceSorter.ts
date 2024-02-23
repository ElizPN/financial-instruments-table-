import { FinDataItem } from "../hooks/useFinData";

function compareNumbers(a: FinDataItem, b: FinDataItem) {
  if (!a.price && !b.price) {
    return 0;
  }

  if (!a.price) {
    return 1;
  }

  if (!b.price) {
    return -1;
  }
  return b.price - a.price;
}

export const priceSorter = (array: FinDataItem[]) => {
  const sortedArray = array.sort(compareNumbers);

  return sortedArray;
};
