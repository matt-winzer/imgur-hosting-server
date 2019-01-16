const FormData = require('form-data')

module.exports = (image, title, description) => {
  const form = new FormData()
  form.append('image', image)
  form.append('title', title)
  form.append('description', description)
  return form
}