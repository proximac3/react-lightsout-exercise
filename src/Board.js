import React, { useState } from "react";
import Cell from "./Cell";
import "./Board.css";
import { createBoard,generateRandomNumber } from "./Helpers.js"
/** Game board of Lights out.
 *
 * Properties:
 *
 * - nrows: number of rows of board
 * - ncols: number of cols of board
 * - chanceLightStartsOn: float, chance any cell is lit at start of game
 *
 * State:
 *
 * - board: array-of-arrays of true/false
 *
 *    For this board:
 *       .  .  .
 *       O  O  .     (where . is off, and O is on)
 *       .  .  .
 *
 *    This would be: [[f, f, f], [t, t, f], [f, f, f]]
 *
 *  This should render an HTML table of individual <Cell /> components.
 *
 *  This doesn't handle any clicks --- clicks are on individual cells
 *
 **/

function Board({ nrows=3, ncols=3, chanceLightStartsOn }) {
  const [board, setBoard] = useState(createBoard(nrows,ncols));
  
  
  function flipCellsAround(coord) {
    setBoard(oldBoard => {
      // const { y, x } = coord.split("-").map(Number);
      const { y, x } = coord
      
      const flipCell = (y, x, boardCopy) => {
        // if this coord is actually on board, flip it
        if (x >= 0 && x < ncols && y >= 0 && y < nrows) {
          boardCopy[y][x] = !boardCopy[y][x];
        }
      };
      const boardCopy = oldBoard.map(row => [...row]);
      
      flipCell(y, x, boardCopy);
      flipCell(y, x - 1, boardCopy);
      flipCell(y, x + 1, boardCopy);
      flipCell(y - 1, x, boardCopy);
      flipCell(y + 1, x, boardCopy);
      
      return boardCopy;
    });
  }
  
  // if the game is won, just show a winning msg & render nothing else
  
  // TODO
  
    function hasWon() {
      // TODO: check the board in state to determine whether the player has won.
      const boardCopy = [...board]
      for (let i = 0; i < boardCopy.length; i++) {
        for (let j = 0; j < boardCopy[i].length; j++) {
          if (boardCopy[i][j] === false) {
            return false
          }
        }
      }

      return true
    }

  return (
    <>
      <h1>Lights Out Board Game </h1>

      {hasWon() ? <h1> GAME OVER </h1> :
        <table className="Board-table">
          <tbody>
            {board.map((row,rowIndex) =>
            (
              <tr key={generateRandomNumber()}>
                {row.map((col,colIndex) =>
                (<Cell flipCellsAroundMe={flipCellsAround} isLit={col}
                  key={generateRandomNumber()} position={{y:rowIndex, x:colIndex} } />))}
              </tr> 
            ))}
          </tbody>
        </table>
      }
    </>
  )
}

export default Board;
