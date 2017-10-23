'use strict'

const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')
const barberId = document.getElementById('barber-id')

const onGetBarberId = function (event) {
  event.preventDefault()
  api.getBarbers()
    .then(ui.onGetBarberIdSuccess)
    .then(onGetBarber)
    .catch(ui.onError)
}

const onGetBarber = function () {
  api.getBarber(barberId.value)
    .then(ui.onGetBarberSuccess)
    .catch(ui.onError)
}

const onCreateBarber = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  api.getBarber(data)
    .then(ui.onCreateBarberSuccess)
    .catch(ui.onError)
}

const addHandlers = function () {
  $('#credentials').on('submit', onGetBarberId)
  $('#barber-info').on('submit', onCreateBarber)
}

module.exports = {
  addHandlers
}
