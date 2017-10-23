'use strict'

const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')
const newPassword = document.getElementById('new-password')
const newConfirm = document.getElementById('new-confirm')

const onSignUp = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  if (newPassword.value === newConfirm.value) {
    api.signUp(data)
      .then(ui.signUpSuccess)
      .catch(ui.signUpFailure)
  } else {
    ui.signUpFailure()
  }
}

const onSignIn = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

const onChangePassword = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}

const onSignOut = function (event) {
  event.preventDefault()
  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}

const addHandlers = function () {
  $('#sign-up').on('submit', onSignUp)
  $('#log-in').on('submit', onSignIn)
  $('#change-password').on('submit', onChangePassword)
  $('#log-out').on('click', onSignOut)
}

module.exports = {
  addHandlers
}
