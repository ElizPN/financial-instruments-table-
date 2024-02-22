import { finData } from "../configurations/fin-data.ts";
import { priceSorter } from "../utils/priceSorter.ts";

export interface FinDataItem {
  ticker: string;
  price: number;
  assetClass: string;
}
export function FinDataController() {
  const handleOnclickPrice = () => {
    return priceSorter(finData);
  };

  return (
    <div>
      <h1>Fin data</h1>
      <ul>
        {finData.map((item: FinDataItem) => {
          return (
            <li key={item.ticker}>
              {" "}
              Ticker: {item.ticker}, Price: {item.price}, Asset Class:{" "}
              {item.assetClass}
            </li>
          );
        })}
      </ul>

      <button onClick={handleOnclickPrice}>sort by price</button>
    </div>
  );
}
