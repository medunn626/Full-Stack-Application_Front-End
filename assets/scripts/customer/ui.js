'use strict'

const store = require('./../store')
const showCustomerTemplate = require('../templates/customer-listing.handlebars')
const searchSubmit = document.getElementById('find-submit')
// let customerExist

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
    $('div.customer-name').addClass('hide-content')
    // customerExist = true
    searchSubmit.value = 'Search'
  }
}

const onError = function () {
  $('.success').text('')
  $('.failure').text('There was an issue with your request.')
}

// const onUpdateCustomerSuccess = function (data) {
//   store.customer = data.customer
//   console.log(data)
//   console.log(store.user)
//   $('.success').append(' Your settings have also been saved.')
// }

module.exports = {
  onCreateCustomerSuccess,
  onGetCustomerSuccess,
  // customerExist,
  // onUpdateCustomerSuccess,
  onError
}
