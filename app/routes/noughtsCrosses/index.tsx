import { useState } from "react"
import Cell from "./components/Cell"

export default function noughtsCrosses(){
  let [board, setboard] = useState([['','',''],['','',''],['','','']])
  let [turn, setTurn] = useState('X')
  let [winner, setWinner] = useState(false)

  const nextTurn = () => {
    setTurn(turn === 'X' ? 'O' : 'X')
  }

  const checkForWin = (currentBoard) => {
    // rows
    for(let row of currentBoard){
      if(row[0] !== '' && row[0] === row[1] && row[1] === row[2]) return true
    }
    // columns
    for(let i=0; i<3; i++){
      if(currentBoard[0][i] !== '' && currentBoard[0][i] === currentBoard[1][i] && currentBoard[1][i] === currentBoard[2][i]) return true
    }

    // diagonals
    if(currentBoard[0][0] !== '' && currentBoard[0][0] === currentBoard[1][1] && currentBoard[1][1] === currentBoard[2][2]) return true
    if(currentBoard[0][2] !== '' && currentBoard[0][2] === currentBoard[1][1] && currentBoard[1][1] === currentBoard[2][0]) return true

    return false
  }

  const cellClick = (i,j) => {
    if(board[i][j] === '' && !winner){
      const newBoard = board.map((row, rowIndex) => row.map((cell, colIndex) => (rowIndex === i && colIndex === j) ? turn : cell))
      setboard(newBoard)
      let isWinner = checkForWin(newBoard)
      setWinner(isWinner)
      if(!isWinner){
        nextTurn()
      }
    }
  }

  const reset = () => {
    setboard([['','',''],['','',''],['','','']])
    setTurn('X')
    setWinner(false)
  }

  return(
    <>
      <p style={{color: "white"}}>Player is {turn}</p>
      {winner ? <><p style={{color: "white"}}>{turn} wins</p><button onClick={() => reset()}>Play again</button></> : null}
      <table style={{height:"300px", width:"300px", marginTop:"40px"}}>
        {board.map((row, rowIndex) => <tr>{row.map((cell, colIndex) => <td><Cell value={cell} i={rowIndex} j={colIndex} onClick={() => cellClick(rowIndex,colIndex)}/></td>)}</tr>)}
      </table>
    </>
  )
}