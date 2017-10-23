'use strict'

const store = require('./../store')

const modal = document.getElementById('modal')
const email = document.getElementById('email')
const password = document.getElementById('password')
const newEmail = document.getElementById('new-email')
const newPassword = document.getElementById('new-password')
const newConfirm = document.getElementById('new-confirm')
const passwordChangeOld = document.getElementById('old')
const passwordChangeNew = document.getElementById('new')

const signUpSuccess = function (data) {
  console.log(data)
  $('.success').text('You are now a member! Please sign in.')
  $('.failure').text('')
  $('div.registration-form').addClass('hide-content')
}

const signUpFailure = function () {
  $('.failure').text('Please try again. This user exists already or you need to re-enter each field correctly.')
  $('.success').text('')
}

const signInSuccess = function (data) {
  store.user = data.user
  $('div.main-area').removeClass('hidden-content')
  $('div.display-game-id').removeClass('hidden-content')
  $('div.sign-up').addClass('hidden-content')
  $('div.sign-in').addClass('hidden-content')
}

const signInFailure = function () {
  $('.failure').text('Could not find user with that email and password.')
  $('.success').text('')
}

const changePasswordSuccess = function () {
  modal.style.display = 'none'
  $('.success').text('You successfully changed your password.')
  $('.failure').text('')
  passwordChangeOld.value = ''
  passwordChangeNew.value = ''
  $('.modal-failure').text('')
}

const changePasswordFailure = function () {
  $('.modal-failure').text('Sorry, please try again.')
}

const signOutSuccess = function () {
  store.user = null
  $('.success').text('You have successfully signed out.')
  $('.failure').text('')
  email.value = ''
  password.value = ''
  newEmail.value = ''
  newPassword.value = ''
  newConfirm.value = ''
  $('div.main-area').addClass('hidden-content')
  $('div.display-game-id').addClass('hidden-content')
  $('div.sign-up').removeClass('hidden-content')
  $('div.sign-in').removeClass('hidden-content')
}

const signOutFailure = function () {
  $('.failure').text('Sorry, please try again.')
  $('.success').text('')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure
}
