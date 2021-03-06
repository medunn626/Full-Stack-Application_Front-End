'use strict'

const store = require('./../store')
const showBarbersTemplate = require('../templates/barbers-listing.handlebars')
const showBarberTemplate = require('../templates/barber-listing.handlebars')
const showBarberTemplateLoggedOut = require('../templates/barber-listing-signed-out.handlebars')
const barberId = document.getElementById('barber-id')
const appointmentModal = document.getElementById('appointment-modal')

// Free form search
const userZip = document.getElementById('zip')
const userPrice = document.getElementById('price')
const userDay = document.getElementById('day')
const userTime = document.getElementById('time')
const userStyle = document.getElementById('style')

const onGetBarberIdSuccess = function (data) {
  store.barbers = data.barbers
  barberId.value = ''
  let i = 0
  while (i < store.barbers.length && barberId.value !== (store.barbers[i].id + '')) {
    if ((store.barbers[i].busiest_day !== userDay.value && store.barbers[i].busiest_time !== userTime.value) && (store.barbers[i].zip === userZip.value || store.barbers[i].max_price === userPrice.value || store.barbers[i].services === userStyle.value)) {
      barberId.value = (store.barbers[i].id + '')
    } else {
      i++
    }
  }
}

const onGetBarberIdQuickSuccess = function (data) {
  const savedZip = store.customer.zip
  const savedPrice = store.customer.max_price
  const savedDay = store.customer.best_day
  const savedTime = store.customer.best_time
  const savedStyle = store.customer.services
  store.barbers = data.barbers
  barberId.value = ''
  let i = 0
  while (i < store.barbers.length && barberId.value !== (store.barbers[i].id + '')) {
    if ((store.barbers[i].busiest_day !== savedDay && store.barbers[i].busiest_time !== savedTime) && (store.barbers[i].zip === savedZip || store.barbers[i].max_price === savedPrice || store.barbers[i].services === savedStyle)) {
      barberId.value = (store.barbers[i].id + '')
    } else {
      i++
    }
  }
}

const onGetBarberSuccess = function (data) {
  const showBarberHtmlLoggedOut = showBarberTemplateLoggedOut({ barber: data.barber })
  const showBarberHtml = showBarberTemplate({ barber: data.barber })
  const showBarbersHtml = showBarbersTemplate({ barbers: store.barbers })
  $('.failure').text('')
  $('.success').text('We found you a barber.')
  document.getElementById('credentials').reset()
  $('div.credentials').addClass('hide-content')
  if (store.user === undefined || store.user === null) {
    $('div.find-form').append(showBarberHtmlLoggedOut)
  } else {
    $('div.find-form').append(showBarberHtml)
  }
  $('.appointment').on('click', function () {
    appointmentModal.style.display = 'block'
  })
  $('.see-more').on('click', function () {
    $('div.barber-result').addClass('hide-content')
    $('.find-form').append(showBarbersHtml)
    $('.failure').text('')
    $('.success').text('We found you some more options.')
    $('.clear').on('click', function () {
      $('div.barbers-result').addClass('hide-content')
      $('div.credentials').removeClass('hide-content')
    })
  })
}

const onCreateBarberSuccess = function (data) {
  store.barber = data.barber
  $('.failure').text('')
  $('.success').text('Your barber has been successfully added.')
  document.getElementById('barber-info').reset()
}

const onError = function () {
  $('.success').text('')
  $('.failure').text('There was an issue with your request.')
}

module.exports = {
  onGetBarberIdSuccess,
  onGetBarberIdQuickSuccess,
  onGetBarberSuccess,
  onCreateBarberSuccess,
  onError
}
