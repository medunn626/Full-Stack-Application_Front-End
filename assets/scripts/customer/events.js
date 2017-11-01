'use strict'

const store = require('./../store')
const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')
// const userId = document.getElementById('user-id')
const customerName = document.getElementById('customer-name')
let loggedIn

const setToLoggedIn = function () {
  loggedIn = true
}

const setToLoggedOut = function () {
  loggedIn = false
}

// const onGetUserId = function () {
//   // userId.value = (store.user.id + '')
//   $('input[name="customer[user_id]"]').val(store.user.id)
// }

const onCreateCustomer = function () {
  // console.log('Stored User ID is' + store.user.id)
  // console.log('Is the user logged in?' + loggedIn)
  // console.log('Customer Name is' + customerName.value)
  // console.log('User ID is' + userId.value)
  if (loggedIn === true && customerName.value !== '') {
    $('input[name="customer[user_id]"]').attr('value', store.user.id)
    const data = getFormFields(this)
    console.log(data)
    api.createCustomer(data)
      .then(ui.onCreateCustomerSuccess)
      .then(onGetCustomer)
      .catch(ui.onError)
  }
}

const onGetCustomer = function () {
  api.getCustomer()
    .then(ui.onGetCustomerSuccess)
    .catch(ui.onError)
}

const addHandlers = function () {
  $('#credentials').on('submit', onCreateCustomer)
}

module.exports = {
  addHandlers,
  onGetCustomer,
  setToLoggedIn,
  setToLoggedOut
}
