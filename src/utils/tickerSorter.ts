import { FinDataItem } from "../hooks/useFinData";

function compareTickers(a: FinDataItem, b: FinDataItem) {
  if (!a.ticker && !b.ticker) {
    return 0;
  }

  if (!a.ticker) {
    return 1;
  }

  if (!b.ticker) {
    return -1;
  }

  const x = a.ticker.toUpperCase(),
    y = b.ticker.toUpperCase();

  if (x === y) {
    return 0;
  }

  if (x > y) {
    return 1;
  }

  return -1;
}

export const tickerSorter = (array: FinDataItem[]) => {
  return array.sort(compareTickers);
};
