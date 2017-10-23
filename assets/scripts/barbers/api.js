'use strict'

const config = require('./../config')
const store = require('./../store')

const getBarbers = function () {
  return $.ajax({
    url: config.apiOrigin + '/barbers',
    method: 'GET'
  })
}

const getBarber = function (id) {
  return $.ajax({
    url: config.apiOrigin + '/barbers/' + id,
    method: 'GET'
  })
}

const createBarber = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/barbers',
    method: 'POST',
    data,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  getBarbers,
  getBarber,
  createBarber
}
