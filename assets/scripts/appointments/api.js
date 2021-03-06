'use strict'

const config = require('./../config')
const store = require('./../store')

const createAppointment = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/appointments',
    method: 'POST',
    data,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const getAppointments = function () {
  return $.ajax({
    url: config.apiOrigin + '/appointments',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const updateAppointment = function (data, id) {
  return $.ajax({
    url: config.apiOrigin + '/appointments/' + id,
    method: 'PATCH',
    data,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const deleteAppointment = function (id) {
  return $.ajax({
    url: config.apiOrigin + '/appointments/' + id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  createAppointment,
  getAppointments,
  updateAppointment,
  deleteAppointment
}
