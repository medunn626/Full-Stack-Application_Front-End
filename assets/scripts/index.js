'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')
const authEvents = require('./auth/events')

$(() => {
  setAPIOrigin(location, config)
})

// Menu icon rotation
const rotate = function () {
  $('div.menu-icon-top').toggleClass('change-top')
  $('div.menu-icon-middle').toggleClass('change-middle')
  $('div.menu-icon-bottom').toggleClass('change-bottom')
}
$('.nav-links').on('click', rotate)

$(() => {
  authEvents.addHandlers()
})

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
