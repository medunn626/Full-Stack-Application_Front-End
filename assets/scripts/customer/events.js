'use strict'

const store = require('./../store')
const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')
const userId = document.getElementById('user-id')
const customerName = document.getElementById('customer-name')

const onGetUserId = function () {
  userId.value = (store.user.id + '')
}

const onCreateCustomer = function () {
  onGetUserId()
  const data = getFormFields(this)
  if (store.user !== null && customerName.value !== '') {
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
  onGetCustomer
}
