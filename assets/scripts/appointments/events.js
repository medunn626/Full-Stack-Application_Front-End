'use strict'

const store = require('./../store')
const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')
const appointmentDate = document.getElementById('appointment-date')
const barberId = document.getElementById('appointment-barber-id')
const customerId = document.getElementById('appointment-customer-id')
const userId = document.getElementById('appointment-user-id')
const apptId = document.getElementById('appointment-update-id')

const onGetIds = function () {
  const getId = document.getElementById('barb-id')
  const id = getId.getAttribute('data-id')
  userId.value = store.user.id
  customerId.value = store.user.id
  barberId.value = id
}

const onCreateAppointment = function (event) {
  event.preventDefault()
  onGetIds()
  const data = getFormFields(this)
  if (store.user !== null || appointmentDate.value !== '') {
    api.createAppointment(data)
      .then(ui.onCreateAppointmentSuccess)
      .then(onGetAppointments)
      .catch(ui.onCreateAppointmentFailure)
  }
}

const onGetAppointments = function () {
  api.getAppointments()
    .then(ui.onGetAppointmentsSuccess)
    .catch(ui.onError)
}

const onUpdateAppointment = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  const id = apptId.value
  api.updateAppointment(data, id)
    .then(ui.onUpdateAppointmentSuccess)
    .catch(ui.onError)
}

const addHandlers = function () {
  $('#make-appointment').on('submit', onCreateAppointment)
  $('#update-appointment').on('submit', onUpdateAppointment)
}

module.exports = {
  addHandlers,
  onGetAppointments
}
