import { useEffect, useState } from "react";
import Cell from "./Cell";

export default function Board() {

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