import { ParentSize } from "@visx/responsive";
import { useState } from "react";
import Graph from "./Graph";


export default function StockChart(){

  let [symbol, setSymbol] = useState('IBM')
  let options = [ 'ALL', 'AAPL', 'AMZN', 'IBM', 'JPM', 'MSFT', 'TSCO', 'TSLA']
  
  return (      
    <div>
      <h2 className="subtitle">Stock Graph Demo</h2>
      <div className="horizontal-wrapper">
        <p className="dollar">$</p>
        <p className="content">Using data from <a href="https://www.alphavantage.co/" className="inline-link">https://www.alphavantage.co/</a>, rendered using AirBnB's <a href="https://airbnb.io/visx/" className="inline-link">visx</a>.</p>
      </div>   
      <div className="content">
        <div className="horizontal-wrapper-centered">
          Stock ticker: 
            <select value={symbol} onChange={(e) => setSymbol(e.target.value)} className="stock-select">
              {options.map(option => <option value={option} key={option}>{option}</option>)}
            </select>
            <p className="arrow">⌄</p>
        </div>
        </div>
      <div>
        <ParentSize>{({ width }) => {return <Graph width={width} height={500} symbol={symbol}/>}}</ParentSize>,
      </div>      
    </div>
  )
}