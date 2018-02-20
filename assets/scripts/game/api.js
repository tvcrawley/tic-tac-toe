'use strict'

const config = require('../config')
const store = require('../store')

const newGame = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/games/',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const updateGame = function () {
  console.log(store)
  return $.ajax({
    url: config.apiOrigin + '/games/' + store.game.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {
      game: {
        cell: {
          index: store.index,
          value: store.player
        },
        over: store.game.over
      }
    }
  })
}

module.exports = {
  newGame,
  updateGame
}
