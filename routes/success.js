const path = require('path')
//const rootDir = require('../util/path')

const express = require('express')

const successController = require('../controller/successCont')

const router = express.Router()

router.get('/success', successController.getSuccess)

module.exports = router