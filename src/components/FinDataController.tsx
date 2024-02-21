import {finData} from "../configurations/fin-data.ts";


export function FinDataController() {


    return <div>
        <h1>Fin data</h1>
        <ul>
      {finData.map((item: {ticker: string,price: number, assetClass: string })=>{
        return <li> Ticker: {item.ticker}, Price: {item.price}, Asset Class: {item.assetClass}</li>
      })}
      </ul>
    </div>
}