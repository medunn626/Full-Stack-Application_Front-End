'use strict'

const store = require('./../store')
const api = require('./api')
const showAppointmentsTemplate = require('../templates/appointments-listing.handlebars')
const appointmentModal = document.getElementById('appointment-modal')

const onCreateAppointmentSuccess = function (data) {
  store.appointment = data.appointment
  console.log(data)
  console.log(store.user)
  $('.success').text('Your appointment has been scheduled.')
  appointmentModal.style.display = 'none'
}

const onCreateAppointmentFailure = function () {
  $('.appointment-modal-failure').text('Could not schedule appointment. Please ensure your date and time are accurate.')
}

const onGetAppointmentsSuccess = function (data) {
  if (data !== null) {
    console.log(data.appointments)
    store.appointments = data.appointments
    const showAppointmentsHtml = showAppointmentsTemplate({ appointments: data.appointments })
    $('div.show-appointments').html(showAppointmentsHtml)
    $('.cancel').on('click', function (event) {
      event.preventDefault()
      const getId = document.getElementById('appt-id')
      const id = getId.getAttribute('data-id')
      api.deleteAppointment(id)
        .then(onDeleteAppointmentSuccess)
        .catch(onError)
      $(this).parent().parent().hide()
    })
  }
}

const onDeleteAppointmentSuccess = function () {
  $('.failure').text('')
  $('.success').text('Your appointment has been sucessfully cancelled.')
}

const onError = function () {
  $('.success').text('')
  $('.failure').text('There was an issue with your request.')
}

module.exports = {
  onCreateAppointmentSuccess,
  onCreateAppointmentFailure,
  onGetAppointmentsSuccess,
  onDeleteAppointmentSuccess,
  onError
}
