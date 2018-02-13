'use strict'

const getFormFields = require(`../../../lib/get-form-fields`)
const gameLogic = require('./gameLogic')

const api = require('./api')
const ui = require('./ui')

const onAddToBoard = function (event) {
  event.preventDefault()
  console.log('add to board ran!')
  console.log('click: ', event.target)

  // INCORPORATE GAME LOGIC FUNCTIONS!
  // target divs in row array
  $.each($('.row').children(), (index, value) => {
    if (value === event.target) {
      gameLogic.addToBoard(index)
      // value.innerHTML = store.game.player
    }
    // console.log(value.innerHTML = 'yo')
  })

  // const data = getFormFields(this)
  // api.signUp(data)
  //   .then(ui.signUpSuccess)
  //   .catch(ui.signUpFailure)
}

const addHandlers = () => {
  $('.container-fluid').on('click', onAddToBoard)
  // $('#sign-in').on('submit', onSignIn)
  // $('#sign-out').on('submit', onSignOut)
  // $('#change-password').on('submit', onChangePassword)
}

module.exports = {
  addHandlers
}
