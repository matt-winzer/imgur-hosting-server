const express = require('express')
const router = express.Router()
const controller = require('../controllers/imagesController')
const multer = require('multer')
const upload = multer()
const fetch = require('node-fetch')

router.get('/', controller.imageTest)

router.post('/upload', upload.single('image'), (req, res, next) => {
  const file = req.file
  const body = req.body
  console.log('file', file)
  console.log('body', body)
  res.json({ msg: 'Trying!' })
})

module.exports = router