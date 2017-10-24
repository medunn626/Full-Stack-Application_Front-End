'use strict'

const store = require('./../store')
const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')
const userId = document.getElementById('user-id')
const customerName = document.getElementById('customer-name')
// const barberId = document.getElementById('barber-id')
// const userZip = document.getElementById('zip')
// const userPrice = document.getElementById('price')
// const showBarbersTemplate = require('../templates/barbers-listing.handlebars')
// const barberName = document.getElementById('barber-name')
// const barberShop = document.getElementById('barber-shop')
// const barberPhone = document.getElementById('phone')
// const barberPrice = document.getElementById('barber-price')
// const barberZip = document.getElementById('barber-zip')
// const barberRate = document.getElementById('barber-rating')

const onGetUserId = function () {
  userId.value = (store.user.id + '')
  console.log(userId.value)
}

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

const onUpdateCustomer = function (event) {
  const data = event.target
  const customer = data.customer
  event.preventDefault()
  api.updateCustomer(customer)
    .then(ui.onUpdateCustomer)
    .catch(ui.onError)
}

const addHandlers = function () {
  if (ui.customerExist === false) {
    $('#credentials').on('submit', onCreateCustomer)
  } else {
    $('#credentials').on('submit', onUpdateCustomer)
  }
}

module.exports = {
  addHandlers,
  onGetCustomer
}
