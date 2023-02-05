const path = require('path')

const userAuthentication = require('../middleware/auth')

const express = require('express')

const forgotController = require('../controller/forgotCont')

const router = express.Router()

router.post('/password/forgotpassword',userAuthentication.authenticate, forgotController.forgotpassword )

module.exports = router
