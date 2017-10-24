'use strict'

const store = require('./../store')
const showBarbersTemplate = require('../templates/barbers-listing.handlebars')
const showBarberTemplate = require('../templates/barber-listing.handlebars')
const barberId = document.getElementById('barber-id')
const userZip = document.getElementById('zip')
const userPrice = document.getElementById('price')
const userDay = document.getElementById('day')
const userTime = document.getElementById('time')
const userStyle = document.getElementById('style')

const onGetBarberIdSuccess = function (data) {
  console.log(data)
  store.barbers = data.barbers
  console.log(store.barbers.length)
  let i = 0
  while (i < store.barbers.length && barberId.value !== (store.barbers[i].id + '')) {
    if ((store.barbers[i].busiest_day !== userDay.value && store.barbers[i].busiest_time !== userTime.value) && (store.barbers[i].zip === userZip.value || store.barbers[i].max_price === userPrice.value || store.barbers[i].services === userStyle.value)) {
      barberId.value = (store.barbers[i].id + '')
    } else {
      i++
    }
  }
  console.log(barberId.value)
}

const onGetBarberSuccess = function (data) {
  console.log(data)
  const showBarberHtml = showBarberTemplate({ barber: data.barber })
  const showBarbersHtml = showBarbersTemplate({ barbers: store.barbers })
  $('.failure').text('')
  $('.success').text('We found you a barber.')
  document.getElementById('credentials').reset()
  $('.find-form').html(showBarberHtml)
  $('.see-more').on('click', function () {
    $('.find-form').html(showBarbersHtml)
    $('.failure').text('')
    $('.success').text('We found you some more options.')
  })
}

const onCreateBarberSuccess = function (data) {
  store.barber = data.barber
  console.log(data)
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
  onGetBarberSuccess,
  onCreateBarberSuccess,
  onError
}
