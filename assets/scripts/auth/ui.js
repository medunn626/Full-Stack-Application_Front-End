'use strict'

const store = require('./../store')

const modal = document.getElementById('account')
const email = document.getElementById('email')
const password = document.getElementById('password')
const newEmail = document.getElementById('new-email')
const newPassword = document.getElementById('new-password')
const newConfirm = document.getElementById('new-confirm')
const passwordChangeOld = document.getElementById('old')
const passwordChangeNew = document.getElementById('new')

const signUpSuccess = function (data) {
  console.log(data)
  $('.failure').text('')
  $('.success').text('You are now a member! Please sign in.')
  $('div.registration-form').addClass('hide-content')
}

const signUpFailure = function () {
  $('.success').text('')
  $('.failure').text('Please try again. This user exists already or you need to re-enter each field correctly.')
}

const signInSuccess = function (data) {
  store.user = data.user
  $('.failure').text('')
  $('.success').text('You are now signed in.')
  $('div.topnav').removeClass('hide-content')
  $('div.topnav').addClass('col-xs-2')
  $('div.appointments').removeClass('hide-content')
  $('div.recommend').removeClass('hide-content')
  $('div.log-in').addClass('hide-content')
  $('div.find').removeClass('col-lg-6')
  $('div.find').removeClass('col-md-6')
  $('div.find').addClass('col-lg-4')
  $('div.find').addClass('col-md-4')
  $('div.logo').addClass('col-xs-10')
}

const signInFailure = function () {
  $('.success').text('')
  $('.failure').text('Could not find user with that email and password.')
}

const changePasswordSuccess = function () {
  modal.style.display = 'none'
  $('.failure').text('')
  $('.success').text('You successfully changed your password.')
  passwordChangeOld.value = ''
  passwordChangeNew.value = ''
  $('.modal-failure').text('')
}

const changePasswordFailure = function () {
  $('.modal-failure').text('Sorry, please try again.')
}

const signOutSuccess = function () {
  store.user = null
  $('.failure').text('')
  $('.success').text('You have successfully signed out.')
  email.value = ''
  password.value = ''
  newEmail.value = ''
  newPassword.value = ''
  newConfirm.value = ''
  $('div.topnav').addClass('hide-content')
  $('div.topnav').removeClass('col-xs-2')
  $('div.appointments').addClass('hide-content')
  $('div.recommend').addClass('hide-content')
  $('div.log-in').removeClass('hide-content')
  $('div.find').addClass('col-lg-6')
  $('div.find').addClass('col-md-6')
  $('div.find').removeClass('col-lg-4')
  $('div.find').removeClass('col-md-4')
  $('div.logo').removeClass('col-xs-10')
}

const signOutFailure = function () {
  $('.success').text('')
  $('.failure').text('Sorry, please try again.')
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
