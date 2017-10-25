'use strict'

const store = require('./../store')
const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')
const userId = document.getElementById('user-id')
const customerName = document.getElementById('customer-name')
// const customerId = document.getElementById('customer-id')

const onGetUserId = function () {
  userId.value = (store.user.id + '')
  console.log(userId.value)
}

// const onGetCustomerId = function () {
//   customerId.value = (store.customer.id + '')
//   console.log(customerId.value)
// }

const onCreateCustomer = function () {
  onGetUserId()
  const data = getFormFields(this)
  console.log(data)
  console.log(store.user)
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

// const onUpdateCustomer = function (event) {
//   onGetUserId()
//   onGetCustomerId()
//   const data = getFormFields(this)
//   const id = customerId.value
//   event.preventDefault()
//   api.updateCustomer(data, id)
//     .then(ui.onUpdateCustomer)
//     .then(onGetCustomer)
//     .catch(ui.onError)
// }

const addHandlers = function () {
  // if (ui.customerExist === false) {
  $('#credentials').on('submit', onCreateCustomer)
  // } else {
  //   $('#credentials').on('submit', onUpdateCustomer)
  // }
}

module.exports = {
  addHandlers,
  onGetCustomer
}
