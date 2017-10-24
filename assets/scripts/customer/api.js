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

const getCustomer = function () {
  return $.ajax({
    url: config.apiOrigin + '/customers',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const updateCustomer = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/customers' + store.customers.id,
    method: 'PATCH',
    data,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

// const update = function (data) {
//   return $.ajax({
//     url: config.apiOrigin + '/games/' + store.game.id,
//     method: 'PATCH',
//     headers: {
//       Authorization: 'Token token=' + store.user.token
//     },
//     data: {
//       'game': {
//         'cells': {
//           'index': this.id,
//           'value': store.game.cells[this.id]
//         },
//         'over': store.game.over
//       }
//     }
//   })
// }

module.exports = {
  createCustomer,
  getCustomer,
  updateCustomer
}
