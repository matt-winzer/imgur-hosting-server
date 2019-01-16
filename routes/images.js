const express = require('express')
const router = express.Router()
const multer = require('multer')
const upload = multer()
const controller = require('../controllers/imagesController')

// UTILITIES
const postToImgur = require('../utils/imgur')
const createForm = require('../utils/form')

router.get('/', controller.imageTest)

router.post('/upload', upload.single('image'), (req, res, next) => {
  const image = req.file.buffer
  const title = req.body.title || ''
  const description = req.body.description || ''
  const form = createForm(image, title, description)

  postToImgur(form)
    .then(res => res.json())
    .then(response => {
      res.json(response)
    })
    .catch(next)
})

module.exports = router