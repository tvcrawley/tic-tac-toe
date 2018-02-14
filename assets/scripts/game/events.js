'use strict'

// const getFormFields = require(`../../../lib/get-form-fields`)
const gameLogic = require('./gameLogic')
const store = require('../store')

// const api = require('./api')
// const ui = require('./ui')

const onAddToBoard = function (event) {
  event.preventDefault()
  console.log('add to board ran!')

  // INCORPORATE GAME LOGIC FUNCTIONS!
  // target divs in row array
  $.each($('.row').children(), (index, value) => {
    if (value === event.target) {
      if (!store.game.over) {
        gameLogic.addToBoard(index)
        value.innerHTML = store.game.player
        gameLogic.checkWinner()
        if (store.game.winner === '') {
          gameLogic.switchPlayer()
        } else if (store.game.winner === 'tie') {
          $('#message')[0].innerHTML = 'Tie game!'
        } else {
          $('#message')[0].innerHTML = `${store.game.player} wins!`
        }
      }
    }
  })

  // const data = getFormFields(this)
  // api.signUp(data)
  //   .then(ui.signUpSuccess)
  //   .catch(ui.signUpFailure)
}

const addHandlers = () => {
  $('#gameboard').on('click', onAddToBoard)
  // $('#sign-in').on('submit', onSignIn)
  // $('#sign-out').on('submit', onSignOut)
  // $('#change-password').on('submit', onChangePassword)
}

module.exports = {
  addHandlers
}
