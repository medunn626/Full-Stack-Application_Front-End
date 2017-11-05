'use strict'

const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')
const barberId = document.getElementById('appointment-barber-id')
const appointmentDate = document.getElementById('appointment-date')
const appointmentUpdateDate = document.getElementById('appointment-update-date')
const apptIdUpdate = document.getElementById('appointment-update-id')
const apptIdDelete = document.getElementById('appointment-cancel-id')

const onGetIds = function () {
  const findElement = document.querySelectorAll('.unique')
  const latestResult = findElement.length - 1
  const selectLatest = findElement[latestResult]
  const id = selectLatest.getAttribute('data-id')
  barberId.value = id
}

const onCreateAppointment = function (event) {
  event.preventDefault()
  onGetIds()
  const data = getFormFields(this)
  if (appointmentDate.value !== '') {
    api.createAppointment(data)
      .then(ui.onCreateAppointmentSuccess)
      .then(onGetAppointments)
      .catch(ui.onCreateAppointmentFailure)
  } else {
    ui.onCreateAppointmentFailure()
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
  const id = apptIdUpdate.value
  if (appointmentUpdateDate.value !== '') {
    api.updateAppointment(data, id)
      .then(ui.onUpdateAppointmentSuccess)
      .then(onGetAppointments)
      .catch(ui.onUpdateAppointmentFailure)
  } else {
    ui.onUpdateAppointmentFailure()
  }
}

const onDeleteAppointment = function (event) {
  event.preventDefault()
  const id = apptIdDelete.value
  api.deleteAppointment(id)
    .then(ui.onDeleteAppointmentSuccess)
    .then(onGetAppointments)
    .catch(ui.onDeleteAppointmentFailure)
}

const addHandlers = function () {
  $('#make-appointment').on('submit', onCreateAppointment)
  $('#update-appointment').on('submit', onUpdateAppointment)
  $('#cancel-appointment').on('submit', onDeleteAppointment)
}

module.exports = {
  addHandlers,
  onGetAppointments
}
