const fetch = require('node-fetch')
const imgurApi = 'https://api.imgur.com/3/image'

module.exports = (form) => {
  return fetch(imgurApi, {
    method: 'POST',
    headers: {
      Authorization: 'Client-ID ' + process.env.CLIENT_ID,
      Authorization: 'Bearer ' + process.env.ACCESS_TOKEN
    },
    body: form
  })
}