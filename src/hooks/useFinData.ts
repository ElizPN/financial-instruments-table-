import { useEffect, useState } from "react";
import { assetClassSorter } from "../utils/assetClassSorter.ts";
import { priceSorter } from "../utils/priceSorter.ts";
import { tickerSorter } from "../utils/tickerSorter.ts";
import { getFinDataService } from "../services/finDataService.ts";

export interface FinDataItem {
  ticker?: string;
  price?: number;
  assetClass?: string;
}
export interface FinDataItemColored extends FinDataItem {
  priceColor: string;
  rowColor: string;
}

const service = getFinDataService();

export function getPriceColor(price?: number) {
  return price && price > 0 ? "#00008B" : "red";
}

export function getRowColor(assetClass?: string) {
  switch (assetClass) {
    case "Macro":
      return "white";
    case "Equities":
      return "#89CFF0";
    case "Credit":
      return "green";
    default:
      return "#D3D3D3";
  }
}

export const useFinData = () => {
  const [finData, setFinData] = useState<FinDataItem[]>([]);

  useEffect(() => {
    // create async function because useEffect can not receive async function as param
    (async () => {
      const newFinData = await service.getData();
      setFinData([...newFinData]);
    })();
  }, []);

  const handleOnclickPrice = () => {
    const sortedFinData = priceSorter(finData);
    setFinData([...sortedFinData]);
  };

  const handleOnclickAssetClass = () => {
    const sortedFinData = assetClassSorter(finData);
    setFinData([...sortedFinData]);
  };

  const handleOnclickTickerSorter = () => {
    const sortedFinData = tickerSorter(finData);
    setFinData([...sortedFinData]);
  };

  const finDataItemColored: FinDataItemColored[] = finData.map((item) => {
    const priceColor = getPriceColor(item.price);
    const rowColor = getRowColor(item.assetClass);

    const coloredItem: FinDataItemColored = {
      ...item,
      priceColor,
      rowColor,
    };

    return coloredItem;
  });

  return {
    finDataItemColored,
    handleOnclickPrice,
    handleOnclickAssetClass,
    handleOnclickTickerSorter,
  };
};
