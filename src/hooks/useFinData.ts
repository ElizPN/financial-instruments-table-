import { useEffect, useState } from "react";
import { finData as finDataFake } from "../configurations/fin-data.ts";
import { assetClassSorter } from "../utils/assetClassSorter.ts";
import { priceSorter } from "../utils/priceSorter.ts";
import { tickerSorter } from "../utils/tickerSorter.ts";
import { getFinDataService } from "../services/finDataService.ts";

export interface FinDataItem {
  ticker?: string;
  price?: number;
  assetClass?: string;
}
const service = getFinDataService();

export const useFinData = () => {
  const [finData, setFinData] = useState<FinDataItem[]>([]);

  useEffect(() => {
    const newFinData = service.getData();
    setFinData([...newFinData]);
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

  return {
    finData,
    handleOnclickPrice,
    handleOnclickAssetClass,
    handleOnclickTickerSorter,
  };
};
