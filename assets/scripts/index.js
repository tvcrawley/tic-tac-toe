'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')

$(() => {
  setAPIOrigin(location, config)
})

$(() => {
  // empty gameboard
  const gameboard = ['', '', '', '', '', '', '', '', '']
  const entry = 'X'
  const entryPoint = 3
  // ADD TO BOARD
  // loop through the board
  // if index, change value
  gameboard.forEach((piece, index) => {
    // if index equals place on visual board
    if (index === entryPoint) {
      if (entry === 'X') {
        return gameboard.splice(index, 1, 'X')
      } else if (entry === 'O') {
        return gameboard.splice(index, 1, 'O')
      }
    }
    return gameboard
  })
  console.log('gameboard: ', gameboard)

// next move/switch player

// check winner
})
// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
