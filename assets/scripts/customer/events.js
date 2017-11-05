'use strict'

const store = require('./../store')
const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')
const customerName = document.getElementById('customer-name')
let loggedIn

const setToLoggedIn = function () {
  loggedIn = true
}

const setToLoggedOut = function () {
  loggedIn = false
}

const onCreateCustomer = function () {
  if (loggedIn === true && customerName.value !== '') {
    $('input[name="customer[user_id]"]').attr('value', store.user.id)
    const data = getFormFields(this)
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
