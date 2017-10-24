'use strict'

const store = require('./../store')
const showCustomerTemplate = require('../templates/customer-listing.handlebars')
const searchSubmit = document.getElementById('find-submit')
const findText = document.getElementById('find-panel-link')
let customerExist
// const barberId = document.getElementById('barber-id')
// const userZip = document.getElementById('zip')
// const userPrice = document.getElementById('price')
// const userDay = document.getElementById('day')
// const userTime = document.getElementById('time')
// const userStyle = document.getElementById('style')

const onCreateCustomerSuccess = function (data) {
  store.customer = data.customer
  console.log(data)
  console.log(store.user)
  $('.success').append(' Your settings have also been saved.')
}

const onGetCustomerSuccess = function (data) {
  if (data !== null) {
    console.log(data.customer)
    store.customer = data.customer
    const showCustomerHtml = showCustomerTemplate({ customer: data.customer })
    $('div.saved-info-section').removeClass('hide-content')
    $('div.saved-info-section').html(showCustomerHtml)
    $('div.quick-search').removeClass('hide-content')
    customerExist = true
    searchSubmit.value = 'Update & Search'
    findText.text = 'Update your preferences!'
  }
}

const onError = function () {
  $('.success').text('')
  $('.failure').text('There was an issue with your request.')
}

const onUpdateCustomerSuccess = function (data) {
  store.customer = data.customer
  console.log(data)
  console.log(store.user)
  $('.success').append(' Your settings have also been saved.')
}

module.exports = {
  onCreateCustomerSuccess,
  onGetCustomerSuccess,
  customerExist,
  onUpdateCustomerSuccess,
  onError
}
