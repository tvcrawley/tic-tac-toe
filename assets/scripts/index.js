'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')

$(() => {
  setAPIOrigin(location, config)
})

$(() => {
  // empty gameboard
  const gameboard = ['', '', '', '', '', '', '', '', '']
  let player = 'X'
  // ADD TO BOARD
  const addToBoard = (playerEntry, token) => {
    // loop through the board
    // if index, change value
    gameboard.forEach((piece, index) => {
      // if index equals place on visual board
      if (index === playerEntry) {
        gameboard.splice(index, 1, token)
      }
      return gameboard
    })
    console.log(gameboard)
  }

  addToBoard(8, 'X')
  addToBoard(4, 'O')
  addToBoard(1, 'X')
  addToBoard(5, 'O')

  // SWITCH PLAYER
  // CHECK WINNER
})
// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
