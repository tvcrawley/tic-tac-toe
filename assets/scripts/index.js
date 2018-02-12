'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')

$(() => {
  setAPIOrigin(location, config)
})

$(() => {
  // empty gameboard
  let gameboard = ['', '', '', '', '', '', '', '', '']
  let player = 'X'
  let winner = ''

  // ADD TO BOARD
  const addToBoard = (playerEntry) => {
    // loop through the board
    // if index, change value
    gameboard.forEach((piece, index) => {
      // if index equals place on visual board
      if ((index === playerEntry) && (piece === '')) {
        gameboard.splice(index, 1, player)
        return true
      } else {
        return false
      }
    })
    console.log(gameboard)
  }

  // SWITCH PLAYER
  const switchPlayer = () => {
    if (player === 'X') {
      player = 'O'
    } else if (player === 'O') {
      player = 'X'
    }
    console.log('switchPlayer:', player)
  }

  // CHECK WINNER
  const checkWinner = () => {
    const diag1 = (gameboard[0] === (player)) && (gameboard[4] === (player)) && (gameboard[8] === (player))
    const diag2 = (gameboard[2] === (player)) && (gameboard[4] === (player)) && (gameboard[6] === (player))
    const row1 = (gameboard[0] === (player)) && (gameboard[1] === (player)) && (gameboard[2] === (player))
    const row2 = (gameboard[3] === (player)) && (gameboard[4] === (player)) && (gameboard[5] === (player))
    const row3 = (gameboard[6] === (player)) && (gameboard[7] === (player)) && (gameboard[8] === (player))
    const col1 = (gameboard[0] === (player)) && (gameboard[3] === (player)) && (gameboard[6] === (player))
    const col2 = (gameboard[1] === (player)) && (gameboard[4] === (player)) && (gameboard[7] === (player))
    const col3 = (gameboard[2] === (player)) && (gameboard[5] === (player)) && (gameboard[8] === (player))

    switch (true) {
      case diag1:
      case row1:
      case col1:
        winner = gameboard[0]
        console.log(`player ${winner} wins!`)
        break
      case diag2:
      case col3:
        winner = gameboard[2]
        console.log(`player ${winner} wins!`)
        break
      case row2:
        winner = gameboard[3]
        console.log(`player ${winner} wins!`)
        break
      case row3:
        winner = gameboard[6]
        console.log(`player ${winner} wins!`)
        break
      case col2:
        winner = gameboard[1]
        console.log(`player ${winner} wins!`)
        break
      default:
        let count = 0
        gameboard.forEach((piece) => {
          // if piece doesn't equal empty string
          if (piece === '') {
            count++
            console.log('count: ', count)
          }
        })
        if (count === 0) {
          winner = 'tie'
          console.log('Tie game')
        }
        break
    }
    // return winner // "X", "O", "tie", ""
  }

  // RESET GAME
  const resetGame = () => {
    gameboard = ['', '', '', '', '', '', '', '', '']
    player = 'X'
    winner = ''
    console.log('board reset')
  }

  // addToBoard(8)
  // checkWinner()
  // if (winner === '') {
  //   switchPlayer()
  //   addToBoard(4)
  //   checkWinner()
  // }
  // if (winner === '') {
  //   switchPlayer()
  //   addToBoard(5)
  //   checkWinner()
  // }
  // if (winner === '') {
  //   switchPlayer()
  //   addToBoard(2)
  //   checkWinner()
  // }
  // if (winner === '') {
  //   switchPlayer()
  //   addToBoard(0)
  //   checkWinner()
  // }
  // if (winner === '') {
  //   switchPlayer()
  //   addToBoard(6)
  //   checkWinner()
  // }
  // if (winner === '') {
  //   switchPlayer()
  //   addToBoard(1)
  //   checkWinner()
  // }
  // if (winner === '') {
  //   switchPlayer()
  //   addToBoard(7)
  //   checkWinner()
  // }
  // if (winner === '') {
  //   switchPlayer()
  //   addToBoard(3)
  //   checkWinner()
  // }
  // if (winner === '') {
  //   switchPlayer()
  // } else {
  //   resetGame()
  // }
})
// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
