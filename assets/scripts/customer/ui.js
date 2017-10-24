'use strict'

const store = require('./../store')
const showCustomerTemplate = require('../templates/customer-listing.handlebars')
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

const onGetCustomerSuccess = function (data) {
  console.log(data.customer)
  const showCustomerHtml = showCustomerTemplate({ customer: data.customer })
  $('div.saved-info-section').removeClass('hide-content')
  $('div.saved-info-section').html(showCustomerHtml)
}

const onError = function () {
  $('.success').text('')
  $('.failure').text('There was an issue with your request.')
}

module.exports = {
  onCreateCustomerSuccess,
  onGetCustomerSuccess,
  onError
}
