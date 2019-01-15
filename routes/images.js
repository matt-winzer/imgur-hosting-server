const express = require('express')
const router = express.Router()
const controller = require('../controllers/imagesController')
const multer = require('multer')
const upload = multer()
const fetch = require('node-fetch')
const FormData = require('form-data')
const fs = require('fs')

const imgurApi = 'https://api.imgur.com/3/image'

router.get('/', controller.imageTest)

router.post('/upload', upload.single('image'), (req, res, next) => {
  const file = req.file
  const body = req.body

  // console.log(file)

  let form = new FormData()
  form.append('image', file.buffer)
  form.append('title', req.body.title)
  form.append('description', 'An image uploaded through my proxy server')
  form.append('name', req.file.originalname)

  console.log(form)
  fetch()

  res.json({ msg: 'Trying!' })
})

module.exports = router