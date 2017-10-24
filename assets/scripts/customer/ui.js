'use strict'

const store = require('./../store')
// const showBarbersTemplate = require('../templates/barbers-listing.handlebars')
// const showBarberTemplate = require('../templates/barber-listing.handlebars')
// const barberId = document.getElementById('barber-id')
// const userZip = document.getElementById('zip')
// const userPrice = document.getElementById('price')
// const userDay = document.getElementById('day')
// const userTime = document.getElementById('time')
// const userStyle = document.getElementById('style')

const onCreateCustomerSuccess = function (data) {
  store.customer = data.customer
  console.log(data)
  $('.success').append(' Your settings have also been saved.')
}

const onError = function () {
  $('.success').text('')
  $('.failure').text('There was an issue with your request.')
}

module.exports = {
  onCreateCustomerSuccess,
  onError
}
