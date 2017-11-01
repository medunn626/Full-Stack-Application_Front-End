'use strict'

const store = require('./../store')
const showCustomerTemplate = require('../templates/customer-listing.handlebars')
const searchSubmit = document.getElementById('find-submit')

const onCreateCustomerSuccess = function (data) {
  store.customer = data.customer
  $('.success').append(' Your settings have also been saved.')
}

const onGetCustomerSuccess = function (data) {
  if (data !== null) {
    store.customer = data.customer
    const showCustomerHtml = showCustomerTemplate({ customer: data.customer })
    $('div.saved-info-section').removeClass('hide-content')
    $('div.saved-info-section').html(showCustomerHtml)
    $('div.quick-search').removeClass('hide-content')
    $('div.customer-name').addClass('hide-content')
    searchSubmit.value = 'Search'
  }
}

const onError = function () {
  $('.success').text('')
  $('appointments-modal-failure').text('There was an issue with your request.')
}

module.exports = {
  onCreateCustomerSuccess,
  onGetCustomerSuccess,
  onError
}
