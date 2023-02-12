import { useState } from "react";
import EgoBlaster from "~/components/EgoBlaster";
import Board from "~/components/MemoryGame/Board";
import StockChart from "~/components/StockChart/StockChart";


export default function Index(){
  
  return (      
    <div className="wrapper">
      <h1>James O'Donnell</h1>
      <a className="link" href="https://docs.google.com/document/d/1HDh_uXFCSLsbktGkYAeHrBtAmUV80v6fKCT_C1vDJUQ/edit?usp=sharing">{"<CV>"}</a>
      <a className="link" href="https://www.linkedin.com/in/james-od/">{"<LINKEDIN>"}</a>   
      <div className="big-white-line"></div>              
      <EgoBlaster/>
      <div className="small-white-line"></div>        
      <Board/>    
      <div className="small-white-line"></div>       
      <StockChart />
    </div>
  )
}