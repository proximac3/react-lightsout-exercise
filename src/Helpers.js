  // generate randon true or false values for board
  function randomTrueOrFalse() {
    const randomOutput = Math.floor(Math.random() * 2) 
    return true ? randomOutput === 1 : false
  }

 /** create a board nrows high/ncols wide, each cell randomly lit or unlit */
  function createBoard(nrows,ncols) {
    let initialBoard = [];
    for (let i = 0; i < nrows; i++) {
      initialBoard.push([])
      for (let j = 0; j < ncols; j++) {
        initialBoard[i].push(randomTrueOrFalse())
      }
    }
    return initialBoard;
  }


function generateRandomNumber() {
    return Math.random() * 1000000000000
  }

  export {createBoard, randomTrueOrFalse, generateRandomNumber}