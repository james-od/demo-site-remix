import { ParentSize } from "@visx/responsive"
import { useState } from "react"
import Graph from "~/components/StockChart/Graph"

export default function StockPanel() {

  let [symbol, setSymbol] = useState('IBM')
  let options = [ 'ALL', 'AAPL', 'AMZN', 'IBM', 'JPM', 'MSFT', 'TSCO', 'TSLA']

  return(
    <>
      <h6 className="subtitle">Stock Graph Demo</h6>
      <p className="dollar">Using demo data from <a href="https://www.alphavantage.co/">https://www.alphavantage.co/</a>.</p>
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
        <ParentSize>{({ width, height }) => {return <Graph width={width} height={500} symbol={symbol}/>}}</ParentSize>,
      </div>
    </>
  )
}
