const express = require('express')
const router = express.Router()
const multer = require('multer')
const upload = multer()
const controller = require('../controllers/imagesController')
const fetch = require('node-fetch')
const FormData = require('form-data')

// UTILITIES
const { postToImgur, refreshImgurToken } = require('../utils/imgur')
const { createImageForm, createRefreshForm } = require('../utils/form')

router.get('/', controller.imageTest)

router.post('/upload', upload.single('image'), (req, res, next) => {
  const image = req.file.buffer
  const title = req.body.title || ''
  const description = req.body.description || ''
  const form = createImageForm(image, title, description)

  postToImgur(form)
    .then(res => res.json())
    .then(response => {
      res.json(response)
    })
    .catch(next)
})

router.post('/upload/refresh', (req, res, next) => {
  const form = createRefreshForm()

  refreshImgurToken(form)
    .then(res => res.json())
    .then(response => {
      console.log(response)
      process.env.ACCESS_TOKEN = response.access_token
      console.log(process.env.ACCESS_TOKEN)
      res.json(response)
    })
})

module.exports = router

