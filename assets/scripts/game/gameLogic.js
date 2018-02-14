'use strict'
const store = require('../store')

// empty store.game.gameboard
// let store.game.gameboard = ['', '', '', '', '', '', '', '', '']
// let store.game.player = 'X'
// let store.game.winner = ''

// ADD TO BOARD
const addToBoard = (playerEntry) => {
  // loop through the board
  // if index, change value
  store.game.gameboard.forEach((piece, index) => {
    // if index equals place on visual board
    if ((index === playerEntry) && (piece === '')) {
      store.game.gameboard.splice(index, 1, store.game.player)
      return true
    } else {
      return false
    }
  })
  console.log(store.game.gameboard)
  return store.game.gameboard
}

// SWITCH PLAYER
const switchPlayer = () => {
  if (store.game.player === 'X') {
    store.game.player = 'O'
  } else if (store.game.player === 'O') {
    store.game.player = 'X'
  }
  console.log('switchPlayer:', store.game.player)
  return store.game.player
}

// CHECK WINNER
const checkWinner = () => {
  const diag1 = (store.game.gameboard[0] === (store.game.player)) && (store.game.gameboard[4] === (store.game.player)) && (store.game.gameboard[8] === (store.game.player))
  const diag2 = (store.game.gameboard[2] === (store.game.player)) && (store.game.gameboard[4] === (store.game.player)) && (store.game.gameboard[6] === (store.game.player))
  const row1 = (store.game.gameboard[0] === (store.game.player)) && (store.game.gameboard[1] === (store.game.player)) && (store.game.gameboard[2] === (store.game.player))
  const row2 = (store.game.gameboard[3] === (store.game.player)) && (store.game.gameboard[4] === (store.game.player)) && (store.game.gameboard[5] === (store.game.player))
  const row3 = (store.game.gameboard[6] === (store.game.player)) && (store.game.gameboard[7] === (store.game.player)) && (store.game.gameboard[8] === (store.game.player))
  const col1 = (store.game.gameboard[0] === (store.game.player)) && (store.game.gameboard[3] === (store.game.player)) && (store.game.gameboard[6] === (store.game.player))
  const col2 = (store.game.gameboard[1] === (store.game.player)) && (store.game.gameboard[4] === (store.game.player)) && (store.game.gameboard[7] === (store.game.player))
  const col3 = (store.game.gameboard[2] === (store.game.player)) && (store.game.gameboard[5] === (store.game.player)) && (store.game.gameboard[8] === (store.game.player))

  switch (true) {
    case diag1:
    case row1:
    case col1:
      store.game.winner = store.game.gameboard[0]
      console.log(`store.game.player ${store.game.winner} wins!`)
      break
    case diag2:
    case col3:
      store.game.winner = store.game.gameboard[2]
      console.log(`store.game.player ${store.game.winner} wins!`)
      break
    case row2:
      store.game.winner = store.game.gameboard[3]
      console.log(`store.game.player ${store.game.winner} wins!`)
      break
    case row3:
      store.game.winner = store.game.gameboard[6]
      console.log(`store.game.player ${store.game.winner} wins!`)
      break
    case col2:
      store.game.winner = store.game.gameboard[1]
      console.log(`store.game.player ${store.game.winner} wins!`)
      break
    default:
      let count = 0
      store.game.gameboard.forEach((piece) => {
        // if piece doesn't equal empty string
        if (piece === '') {
          count++
          console.log('count: ', count)
        }
      })
      if (count === 0) {
        store.game.winner = 'tie'
        console.log('Tie game')
      }
      break
  }
  return store.game.winner // "X", "O", "tie", ""
}

// RESET GAME
const newGame = () => {
  store.game.gameboard = ['', '', '', '', '', '', '', '', '']
  store.game.player = 'X'
  store.game.winner = ''
  console.log('board reset')
}

// addToBoard(8)
// checkWinner()
// if (store.game.winner === '') {
//   switchPlayer()
//   addToBoard(4)
//   checkWinner()
// }
// if (store.game.winner === '') {
//   switchPlayer()
//   addToBoard(5)
//   checkWinner()
// }
// if (store.game.winner === '') {
//   switchPlayer()
//   addToBoard(2)
//   checkWinner()
// }
// if (store.game.winner === '') {
//   switchPlayer()
//   addToBoard(0)
//   checkWinner()
// }
// if (store.game.winner === '') {
//   switchPlayer()
//   addToBoard(6)
//   checkWinner()
// }
// if (store.game.winner === '') {
//   switchPlayer()
//   addToBoard(1)
//   checkWinner()
// }
// if (store.game.winner === '') {
//   switchPlayer()
//   addToBoard(7)
//   checkWinner()
// }
// if (store.game.winner === '') {
//   switchPlayer()
//   addToBoard(3)
//   checkWinner()
// }
// if (store.game.winner === '') {
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
