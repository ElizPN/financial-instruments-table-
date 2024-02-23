import { FinDataItem } from "../components/FinDataController";

function compareNumbers(a: FinDataItem, b: FinDataItem) {
  if (b.price && a.price) {
    return b.price - a.price;
  }
  if (b.price === undefined && a.price !== undefined) {
    return -1;
  }
  if (b.price !== undefined && a.price === undefined) {
    return 1;
  }

  return 0;
}

export const priceSorter = (array: FinDataItem[]) => {
  const sortedArray = array.sort(compareNumbers);

  return sortedArray;
};
