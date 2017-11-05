'use strict'

const store = require('./../store')
const customerEvents = require('../customer/events')
const appointmentEvents = require('../appointments/events')

const modal = document.getElementById('account')
const email = document.getElementById('email')
const password = document.getElementById('password')
const newEmail = document.getElementById('new-email')
const newPassword = document.getElementById('new-password')
const newConfirm = document.getElementById('new-confirm')
const passwordChangeOld = document.getElementById('old')
const passwordChangeNew = document.getElementById('new')
const searchSubmit = document.getElementById('find-submit')

const signUpSuccess = function () {
  $('.failure').text('')
  $('.success').text('You are now a member! ')
  $('div.registration-form').addClass('hide-content')
}

const signUpFailure = function () {
  $('.success').text('')
  $('.failure').text('Please try again. This user exists already or you need to re-enter each field correctly.')
}

const signInSuccess = function (data) {
  store.user = data.user
  customerEvents.setToLoggedIn()
  $('.failure').text('')
  $('.success').text('You are now signed in.')
  $('div.log-in-form').addClass('hide-content')
  $('div.registration-form').addClass('hide-content')
  $('div.pitch').addClass('hide-content')
  $('div.customer-name').removeClass('hide-content')
  $('div.your-account').removeClass('hide-content')
  $('div.appointments').removeClass('hide-content')
  $('div.recommend').removeClass('hide-content')
  $('div.account-heading').html('Your Account')
  searchSubmit.value = 'Save & Search'
  customerEvents.onGetCustomer()
  appointmentEvents.onGetAppointments()
}

const signInFailure = function () {
  $('.success').text('')
  $('.failure').text(`Please try again. That user doesn't exist or you need to re-enter each field correctly.`)
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
  customerEvents.setToLoggedOut()
  store.user = null
  store.customer = null
  store.appointments = null
  $('.failure').text('')
  $('.success').text('You have successfully signed out.')
  email.value = ''
  password.value = ''
  newEmail.value = ''
  newPassword.value = ''
  newConfirm.value = ''
  $('div.log-in-form').removeClass('hide-content')
  $('div.registration-form').removeClass('hide-content')
  $('div.pitch').removeClass('hide-content')
  $('div.customer-name').addClass('hide-content')
  $('div.your-account').addClass('hide-content')
  $('div.appointments').addClass('hide-content')
  $('div.recommend').addClass('hide-content')
  $('div.saved-info-section').addClass('hide-content')
  $('div.account-heading').html('Log in to Account')
  $('div.quick-search').addClass('hide-content')
  $('div.barbers-result').addClass('hide-content')
  $('div.barber-result').addClass('hide-content')
  $('div.credentials').removeClass('hide-content')
  searchSubmit.value = 'Search'
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
