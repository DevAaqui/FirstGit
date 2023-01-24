const path = require('path')

const express = require('express')

const userController = require('../controller/userCont')

const router = express.Router()

router.post('/user/signup',userController.postUsers)


module.exports = router