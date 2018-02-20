'use strict'

const store = require('../store')

const signUpSuccess = function (data) {
  $('#message').text('Signed up successfully')
  $('#message').css('background-color', 'green')
  console.log(data)
}

const signUpFailure = function (error) {
  $('#message').text('Error on sign up')
  $('#message').css('background-color', 'red')
  console.error(error)
}

const signInSuccess = function (data) {
  $('#message').text('Signed in successfully')
  $('#message').css('background-color', 'green')
  console.log(data)
  store.user = data.user
  $('.container-fluid:nth-of-type(2)').css('display', 'block')
  $('form:nth-of-type(3)').css('display', 'block')
  $('form:nth-of-type(4)').css('display', 'block')
  $('.btn').css('display', 'inline-block')
  $('form:nth-of-type(1)').css('display', 'none')
  $('form:nth-of-type(2)').css('display', 'none')
}

const signInFailure = function (error) {
  $('#message').text('Error on sign in')
  $('#message').css('background-color', 'red')
  console.error(error)
}

const changePasswordSuccess = function () {
  $('#message').text('Changed password successfully')
  $('#message').css('background-color', 'green')
  console.log('Changed password successfully')
}

const changePasswordFailure = function (error) {
  $('#message').text('Error on change password')
  $('#message').css('background-color', 'red')
  console.error(error)
}

const signOutSuccess = function () {
  $('#message').text('Signed out successfully')
  $('#message').css('background-color', 'green')
  console.log('Signed out successfully')
  store.user = null
  $('form:nth-of-type(1)').css('display', 'block')
  $('form:nth-of-type(2)').css('display', 'block')
  $('form:nth-of-type(3)').css('display', 'none')
  $('form:nth-of-type(4)').css('display', 'none')
  $('.container-fluid:nth-of-type(2)').css('display', 'none')
  $('.btn').css('display', 'none')
}

const signOutFailure = function (error) {
  $('#message').text('Error on sign out')
  $('#message').css('background-color', 'red')
  console.error(error)
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
  changePasswordSuccess,
  changePasswordFailure
}
