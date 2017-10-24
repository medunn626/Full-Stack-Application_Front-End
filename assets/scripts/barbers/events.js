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

const onGetBarberIdQuick = function (event) {
  event.preventDefault()
  api.getBarbers()
    .then(ui.onGetBarberIdQuickSuccess)
    .then(onGetBarber)
    .catch(ui.onError)
}

const onGetBarber = function () {
  const showBarbersHtml = showBarbersTemplate({ barbers: store.barbers })
  if (barberId.value !== '') {
    api.getBarber(barberId.value)
      .then(ui.onGetBarberSuccess)
      .catch(ui.onError)
  } else {
    $('.failure').text('')
    $('.success').text(`We couldn't find you a match, but here are some other options.`)
    document.getElementById('credentials').reset()
    $('div.credentials').addClass('hide-content')
    $('.find-form').append(showBarbersHtml)
    $('.clear').on('click', function () {
      $('div.barbers-result').addClass('hide-content')
      $('div.credentials').removeClass('hide-content')
    })
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
  $('#quick-search').on('click', onGetBarberIdQuick)
  $('#barber-info').on('submit', onCreateBarber)
}

module.exports = {
  addHandlers
}
