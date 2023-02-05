import type { MetaFunction } from "@remix-run/cloudflare";
import styles from "~/styles/global.css";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

import { useEffect, useState } from "react";
import Cell from './Cell'

export function links() {
  return [{ rel: "stylesheet", href: styles }];
}

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "New Remix App",
  viewport: "width=device-width,initial-scale=1",
});

function Board() {

  let [board, setBoard] = useState([0,0,0,0]);
  let [memorySequence, setMemorySequence] = useState<number[][]>([]);  
  let [guessSequence, setGuessSequence] = useState<number[][]>([]);
  let [result, setResult] = useState("Waiting");
  let [level, setLevel] = useState<number>(3)

  function sleep(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  const play = async () => {
    setResult("Waiting")   
    setGuessSequence([])

    let sequences: Array<number[]> = []
    for(let i=0; i<level; i++){
      let tiles = [0,0,0,0,0,0]
      let index = Math.floor(Math.random() * 6)
      tiles[index] = 1
      sequences = [...sequences, tiles]
    }
    setMemorySequence(sequences)

    for(let i=0; i < level; i++){
      await sleep(300)
      setBoard(sequences[i])
      await sleep(300)
      setBoard([0,0,0,0,0,0])

    }
  }

  useEffect(() => {
    if(memorySequence.length && guessSequence.length && memorySequence.length === guessSequence.length){
      if(JSON.stringify(memorySequence) !== JSON.stringify(guessSequence)){
        setResult("Wrong!")
      }else{
        setResult("Well done!")   
      }
    }
  },[memorySequence, guessSequence])
  
  let options = [1,2,3,4,5] 

  return(
    <>
    <h6 className="subtitle">Memory Game</h6>
    <div className="horizontal-wrapper-centered">
      <button onClick={() => play()} className="play-button">Play</button>
      <div className="content">
        <div className="difficulty-selector">
          <div className="horizontal-wrapper-centered">
          Difficulty: 
            <select value={level} onChange={(e) => setLevel(parseInt(e.target.value))} className="custom-select">
              {options.map(option => <option value={option} key={option}>{option}</option>)}
            </select>
            <p className="arrow">⌄</p>
          </div>
        </div>
      </div>    
    </div>
    <table className="table-wrapper">
     <tbody>
        <tr>
          <Cell active={board[0]} onClick={() => setGuessSequence([...guessSequence, [1,0,0,0,0,0]])}/>
          <Cell active={board[1]} onClick={() => setGuessSequence([...guessSequence, [0,1,0,0,0,0]])}/>
          <Cell active={board[2]} onClick={() => setGuessSequence([...guessSequence, [0,0,1,0,0,0]])}/>
        </tr>
        <tr>
          <Cell active={board[3]} onClick={() => setGuessSequence([...guessSequence, [0,0,0,1,0,0]])}/>
          <Cell active={board[4]} onClick={() => setGuessSequence([...guessSequence, [0,0,0,0,1,0]])}/>
          <Cell active={board[5]} onClick={() => setGuessSequence([...guessSequence, [0,0,0,0,0,1]])}/>        
        </tr>
      </tbody>
    </table>
    <p className="content">{result}</p> 
    </>
  )
}

function EgoBlaster() {
  return (
    <div className="horizontal-wrapper">
    <p className="dollar">$</p>
    <p className="content">
      Hi, I’m James.
      <br/>
      I’m a frontend engineer, experienced in React and TypeScript.
      <br/>
      I’m currently a senior software engineer <a className="inline-link" href="https://www.skyscanner.net">@Skyscanner</a>, where I build customer facing features for mobile-web and desktop for 100 million+ monthly active users.
      <br/>
      I studied Computer Science at the University of Edinburgh, scoring an honours level average of 79%.
      <br/>
      I wrote my dissertation on <a className="inline-link"  href="https://drive.google.com/file/d/1XYm--klxWKo7lwK1XyiwPdH_s_tGbVXb/view?usp=sharing">Visualising Dynamic Network Measures</a>, using D3.js.
      <br/>
      I designed the landing page for <a className="inline-link"  href="https://www.glenstack.com">Glenstack.com</a>.</p>
  </div>
  )
}

export default function App() {

  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body className="wrapper">
        <Scripts />
        <Outlet />
        <ScrollRestoration />
        <LiveReload />
        <h1>James O'Donnell</h1>
        <a className="link" href="https://docs.google.com/document/d/1HDh_uXFCSLsbktGkYAeHrBtAmUV80v6fKCT_C1vDJUQ/edit?usp=sharing">{"<CV>"}</a>
        <a className="link" href="https://www.linkedin.com/in/james-od/">{"<LINKEDIN>"}</a>   
        <div className="big-white-line"></div>              
        <EgoBlaster/>
        <div className="small-white-line"></div>        
        <Board/>              
      </body>
    </html>
  );
}
