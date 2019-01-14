const express = require('express')
const router = express.Router()
const controller = require('../controllers/imagesController')

router.get('/', controller.imageTest)

module.exports = router