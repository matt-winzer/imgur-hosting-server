const fetch = require('node-fetch')
const imgurApi = 'https://api.imgur.com/3/image'

function postToImgur(form) {
  return fetch(imgurApi, {
    method: 'POST',
    headers: {
      Authorization: 'Client-ID ' + process.env.CLIENT_ID,
      Authorization: 'Bearer ' + process.env.ACCESS_TOKEN
    },
    body: form
  })
}

function refreshImgurToken(form) {
  return fetch('https://api.imgur.com/oauth2/token', {
    method: 'POST',
    body: form
  })
}

module.exports = {
  postToImgur,
  refreshImgurToken
}