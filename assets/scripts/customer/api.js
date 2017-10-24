'use strict'

const config = require('./../config')
const store = require('./../store')

const createCustomer = function (data) {
  console.log(data)
  return $.ajax({
    url: config.apiOrigin + '/customers',
    method: 'POST',
    data,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  createCustomer
}
