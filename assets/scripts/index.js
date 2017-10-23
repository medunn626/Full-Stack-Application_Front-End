'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')
const authEvents = require('./auth/events')
const barberEvents = require('./barbers/events')
const passwordChangeOld = document.getElementById('old')
const passwordChangeNew = document.getElementById('new')

$(() => {
  setAPIOrigin(location, config)
})

// Menu icon rotation:
const rotate = function () {
  $('div.menu-icon-top').toggleClass('change-top')
  $('div.menu-icon-middle').toggleClass('change-middle')
  $('div.menu-icon-bottom').toggleClass('change-bottom')
}
$('.nav-links').on('click', rotate)

// Hide pitch about registering when clicking on the register link:
const hide = function () {
  $('div.pitch').toggleClass('hide-content')
}
$('.register').on('click', hide)

// Only allow numbers for certain textboxes:
const isNumberKey = function (evt) {
  const charCode = (evt.which) ? evt.which : event.keyCode
  if (charCode > 31 && (charCode < 48 || charCode > 57)) {
    return false
  } else {
    return true
  }
}
$('.zip').on('keypress', isNumberKey)
$('.price').on('keypress', isNumberKey)
$('.phone').on('keypress', isNumberKey)

// Change password modal variables and functions:
const modal = document.getElementById('account')
const openModal = function () {
  modal.style.display = 'block'
}
const closeModal = function () {
  modal.style.display = 'none'
  passwordChangeOld.value = ''
  passwordChangeNew.value = ''
  $('.modal-failure').text('')
}
$(() => {
  $('#account-modal').on('click', openModal)
})
$(() => {
  $('#close').on('click', closeModal)
})

// Handlers:

$(() => {
  authEvents.addHandlers()
  barberEvents.addHandlers()
})

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
