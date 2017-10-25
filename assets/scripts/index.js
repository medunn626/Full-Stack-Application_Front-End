'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')
const authEvents = require('./auth/events')
const barberEvents = require('./barbers/events')
const customerEvents = require('./customer/events')
const appointmentEvents = require('./appointments/events')
const passwordChangeOld = document.getElementById('old')
const passwordChangeNew = document.getElementById('new')

$(() => {
  setAPIOrigin(location, config)
})

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

// Appointments modal variables and functions:
const appointmentModal = document.getElementById('appointment-modal')
const closeAppointmentModal = function () {
  appointmentModal.style.display = 'none'
}
$(() => {
  $('#close-appointments').on('click', closeAppointmentModal)
  $('.appointment-modal-failure').text('')
})

// Hide/show quick search button:
const hideQuickSearch = function () {
  $('div.quick-search').addClass('hide-content')
}
$(() => {
  $('#quick-search').on('click', hideQuickSearch)
})
$(() => {
  $('#credentials').on('submit', hideQuickSearch)
})

// Handlers:
$(() => {
  authEvents.addHandlers()
  barberEvents.addHandlers()
  customerEvents.addHandlers()
  appointmentEvents.addHandlers()
})
