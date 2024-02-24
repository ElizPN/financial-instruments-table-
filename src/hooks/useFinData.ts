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
  const [isActivePrice, setIsActivePrice] = useState(false);
  const [isActiveAssetClass, setIsActiveAssetClass] = useState(false);
  const [isActiveTicker, setIsActiveTicker] = useState(false);

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
    setIsActivePrice(true);
    setIsActiveAssetClass(false);
    setIsActiveTicker(false);
  };

  const handleOnclickAssetClass = () => {
    const sortedFinData = assetClassSorter(finData);
    setFinData([...sortedFinData]);
    setIsActiveAssetClass(true);
    setIsActivePrice(false);
    setIsActiveTicker(false);
  };

  const handleOnclickTickerSorter = () => {
    const sortedFinData = tickerSorter(finData);
    setFinData([...sortedFinData]);
    setIsActiveTicker(true);
    setIsActivePrice(false);
    setIsActiveAssetClass(false);
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
    isActivePrice,
    isActiveAssetClass,
    isActiveTicker,
    finDataItemColored,
    handleOnclickPrice,
    handleOnclickAssetClass,
    handleOnclickTickerSorter,
  };
};
