'use strict'

// const getFormFields = require(`../../../lib/get-form-fields`)
const gameLogic = require('./gameLogic')
const store = require('../store')

const api = require('./api')
const ui = require('./ui')

const onAddToBoard = function (event) {
  event.preventDefault()
  console.log('add to board ran!')

  // INCORPORATE GAME LOGIC FUNCTIONS!
  // target divs in row array
  $.each($('.row').children(), (index, value) => {
    if (value === event.target) {
      if (!store.game.over) {
        gameLogic.addToBoard(index)
        api.updateGame()
        if (value.innerHTML === '') {
          value.innerHTML = store.player
          gameLogic.checkWinner()
          if (store.winner === '') {
            gameLogic.switchPlayer()
            $('#message')[0].innerHTML = `${store.player}'s Turn`
          } else if (store.winner === 'tie') {
            $('#message')[0].innerHTML = 'Tie game!'
          } else {
            $('#message')[0].innerHTML = `${store.player} wins!`
          }
        } else {
          $('#message')[0].innerHTML = `Player ${store.player}: The space is taken, please choose again`
        }
      }
    }
  })

  // const data = getFormFields(this)
  // api.signUp(data)
  //   .then(ui.signUpSuccess)
  //   .catch(ui.signUpFailure)
}

const onNewGame = function (event) {
  api.newGame()
    .then(ui.newGameSuccess)
    .catch(ui.newGameFailure)
}

const addHandlers = () => {
  $('#gameboard').on('click', onAddToBoard)
  $('#new-game').on('click', onNewGame)
}

module.exports = {
  addHandlers
}
