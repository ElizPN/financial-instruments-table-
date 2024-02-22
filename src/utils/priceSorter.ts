import { FinDataItem } from "../components/FinDataController";

function compareNumbers(a: FinDataItem, b: FinDataItem) {
  return b.price - a.price;
}

export const priceSorter = (array: FinDataItem[]) => {
  const sortedArray = array.sort(compareNumbers);

  return sortedArray;
};
