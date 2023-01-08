const path =  require('path')
//const rootDir = require('../util/path')

const express = require('express')

const contactUsController = require('../controller/contactCont')

const router = express.Router();

router.get('/contact-us', contactUsController.getContactUs)

router.post('/contact-us', contactUsController.postContactUs)

module.exports = router