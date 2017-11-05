'use strict'

const store = require('./../store')
const showAppointmentsTemplate = require('../templates/appointments-listing.handlebars')
const appointmentModal = document.getElementById('appointment-modal')
const appointmentUpdateModal = document.getElementById('appointment-update-modal')
const appointmentCancelModal = document.getElementById('appointment-cancel-modal')

const onCreateAppointmentSuccess = function (data) {
  store.appointment = data.appointment
  $('.success').text('Your appointment has been scheduled. Please call your barber to confirm.')
  appointmentModal.style.display = 'none'
}

const onCreateAppointmentFailure = function () {
  $('#create-appointment-modal-failure').text('Could not schedule appointment. Please ensure your date and time are accurate.')
}

const onGetAppointmentsSuccess = function (data) {
  if (data !== null) {
    store.appointments = data.appointments
    const showAppointmentsHtml = showAppointmentsTemplate({ appointments: data.appointments })
    $('div.show-appointments').html(showAppointmentsHtml)
    $('.update').on('click', function (event) {
      event.preventDefault()
      $('div.update').removeClass('hide-content')
      appointmentUpdateModal.style.display = 'block'
    })
    $('.cancel').on('click', function (event) {
      event.preventDefault()
      $('div.cancel').removeClass('hide-content')
      appointmentCancelModal.style.display = 'block'
    })
  }
}

const onUpdateAppointmentSuccess = function () {
  $('.failure').text('')
  $('.success').text('Your appointment has been sucessfully updated.')
  appointmentUpdateModal.style.display = 'none'
}

const onUpdateAppointmentFailure = function () {
  $('#update-appointment-modal-failure').text('Sorry, please try again.')
}

const onDeleteAppointmentSuccess = function () {
  $('.failure').text('')
  $('.success').text('Your appointment has been sucessfully cancelled.')
  appointmentCancelModal.style.display = 'none'
}

const onDeleteAppointmentFailure = function () {
  $('#cancel-appointment-modal-failure').text('Sorry, please try again.')
}

const onError = function () {
  $('.success').text('')
  $('.failure').text('There was an issue with your request.')
}

module.exports = {
  onCreateAppointmentSuccess,
  onCreateAppointmentFailure,
  onGetAppointmentsSuccess,
  onUpdateAppointmentSuccess,
  onUpdateAppointmentFailure,
  onDeleteAppointmentSuccess,
  onDeleteAppointmentFailure,
  onError
}
