const FormData = require('form-data')

function createImageForm(image, title, description) {
  const form = new FormData()
  form.append('image', image)
  form.append('title', title)
  form.append('description', description)
  return form
}

function createRefreshForm() {
  const form = new FormData()
  form.append('refresh_token', process.env.REFRESH_TOKEN)
  form.append('client_id', process.env.CLIENT_ID)
  form.append('client_secret', process.env.CLIENT_SECRET)
  form.append('grant_type', 'refresh_token')
  return form
}

module.exports = {
  createImageForm,
  createRefreshForm
}