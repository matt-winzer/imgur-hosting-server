const express = require('express')
const router = express.Router()
const { serverTest } = require('../controllers/indexController')

router.get('/', serverTest)

module.exports = router