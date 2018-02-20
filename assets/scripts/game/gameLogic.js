'use strict'
const store = require('../store')

// empty store.game.cells
// let store.game.cells = ['', '', '', '', '', '', '', '', '']
// let store.player = 'X'
// let store.winner = ''

// ADD TO BOARD
const addToBoard = (playerEntry) => {
  // loop through the board
  // if index, change value
  store.game.cells.forEach((piece, index) => {
    // if index equals place on visual board
    if ((index === playerEntry) && (piece === '')) {
      store.index = index
      store.game.cells.splice(index, 1, store.player)
      return true
    } else {
      return false
    }
  })
  console.log('addToBoard: ', store.game.cells)
  return store.game.cells
}

// SWITCH PLAYER
const switchPlayer = () => {
  console.log('player is: ', store.player)
  if (store.player === 'X') {
    store.player = 'O'
  } else if (store.player === 'O') {
    store.player = 'X'
  }
  // console.log('switchPlayer:', store.player)
  return store.player
}

// CHECK WINNER
const checkWinner = () => {
  const diag1 = (store.game.cells[0] === (store.player)) && (store.game.cells[4] === (store.player)) && (store.game.cells[8] === (store.player))
  const diag2 = (store.game.cells[2] === (store.player)) && (store.game.cells[4] === (store.player)) && (store.game.cells[6] === (store.player))
  const row1 = (store.game.cells[0] === (store.player)) && (store.game.cells[1] === (store.player)) && (store.game.cells[2] === (store.player))
  const row2 = (store.game.cells[3] === (store.player)) && (store.game.cells[4] === (store.player)) && (store.game.cells[5] === (store.player))
  const row3 = (store.game.cells[6] === (store.player)) && (store.game.cells[7] === (store.player)) && (store.game.cells[8] === (store.player))
  const col1 = (store.game.cells[0] === (store.player)) && (store.game.cells[3] === (store.player)) && (store.game.cells[6] === (store.player))
  const col2 = (store.game.cells[1] === (store.player)) && (store.game.cells[4] === (store.player)) && (store.game.cells[7] === (store.player))
  const col3 = (store.game.cells[2] === (store.player)) && (store.game.cells[5] === (store.player)) && (store.game.cells[8] === (store.player))

  switch (true) {
    case diag1:
    case row1:
    case col1:
      store.winner = store.game.cells[0]
      store.game.over = true
      console.log(`store.player ${store.winner} wins!`)
      break
    case diag2:
    case col3:
      store.winner = store.game.cells[2]
      store.game.over = true
      console.log(`store.player ${store.winner} wins!`)
      break
    case row2:
      store.winner = store.game.cells[3]
      store.game.over = true
      console.log(`store.player ${store.winner} wins!`)
      break
    case row3:
      store.winner = store.game.cells[6]
      store.game.over = true
      console.log(`store.player ${store.winner} wins!`)
      break
    case col2:
      store.winner = store.game.cells[1]
      store.game.over = true
      console.log(`store.player ${store.winner} wins!`)
      break
    default:
      let count = 0
      store.game.cells.forEach((piece) => {
        // if piece doesn't equal empty string
        if (piece === '') {
          count++
          // console.log('count: ', count)
        }
      })
      if (count === 0) {
        store.winner = 'tie'
        store.game.over = true
        console.log('Tie game')
      }
      break
  }
  // console.log('checkWinner: ', store.winner)
  return store.winner // "X", "O", "tie", ""
}

// RESET GAME
const newGame = () => {
  store.game.cells = ['', '', '', '', '', '', '', '', '']
  store.player = 'X'
  store.winner = ''
  console.log('board reset')
}

// addToBoard(8)
// checkWinner()
// if (store.winner === '') {
//   switchPlayer()
//   addToBoard(4)
//   checkWinner()
// }
// if (store.winner === '') {
//   switchPlayer()
//   addToBoard(5)
//   checkWinner()
// }
// if (store.winner === '') {
//   switchPlayer()
//   addToBoard(2)
//   checkWinner()
// }
// if (store.winner === '') {
//   switchPlayer()
//   addToBoard(0)
//   checkWinner()
// }
// if (store.winner === '') {
//   switchPlayer()
//   addToBoard(6)
//   checkWinner()
// }
// if (store.winner === '') {
//   switchPlayer()
//   addToBoard(1)
//   checkWinner()
// }
// if (store.winner === '') {
//   switchPlayer()
//   addToBoard(7)
//   checkWinner()
// }
// if (store.winner === '') {
//   switchPlayer()
//   addToBoard(3)
//   checkWinner()
// }
// if (store.winner === '') {
//   switchPlayer()
// } else {
//   newGame()
// }

module.exports = {
  addToBoard,
  switchPlayer,
  checkWinner,
  newGame
}
