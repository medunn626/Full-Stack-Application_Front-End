'use strict'

const store = require('./../store')
const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')
const barberId = document.getElementById('barber-id')
const userZip = document.getElementById('zip')
const userPrice = document.getElementById('price')
const showBarbersTemplate = require('../templates/barbers-listing.handlebars')
const barberName = document.getElementById('barber-name')
const barberShop = document.getElementById('barber-shop')
const barberPhone = document.getElementById('phone')
const barberPrice = document.getElementById('barber-price')
const barberZip = document.getElementById('barber-zip')
const barberRate = document.getElementById('barber-rating')

const onGetBarberId = function (event) {
  event.preventDefault()
  if (userZip.value !== '' && userPrice.value !== '') {
    api.getBarbers()
      .then(ui.onGetBarberIdSuccess)
      .then(onGetBarber)
      .catch(ui.onError)
  } else {
    $('.success').text('')
    $('.failure').text('Please provide a value for all fields.')
  }
}

const onGetBarber = function () {
  const showBarbersHtml = showBarbersTemplate({ barbers: store.barbers })
  if (barberId.value !== '') {
    api.getBarber(barberId.value)
      .then(ui.onGetBarberSuccess)
      .catch(ui.onError)
  } else {
    $('.find-form').html(showBarbersHtml)
    $('.failure').text('')
    $('.success').text(`We couldn't find you a match, but here are some other options.`)
  }
}

const onCreateBarber = function (event) {
  const data = getFormFields(this)
  console.log(data)
  event.preventDefault()
  if (barberName.value !== '' && barberShop.value !== '' && barberShop.value !== '' && barberPhone.value !== '' && barberPrice.value !== '' && barberZip.value !== '' && barberRate.value !== '') {
    api.createBarber(data)
      .then(ui.onCreateBarberSuccess)
      .catch(ui.onError)
  } else {
    $('.success').text('')
    $('.failure').text('Please provide a value for all fields.')
  }
}

const addHandlers = function () {
  $('#credentials').on('submit', onGetBarberId)
  $('#barber-info').on('submit', onCreateBarber)
}

module.exports = {
  addHandlers
}
