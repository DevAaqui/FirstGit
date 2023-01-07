const path =  require('path')
const rootDir = require('../util/path')

const express = require('express')

const router = express.Router();

router.get('/contact-us', (req, res, next)=>{

    res.sendFile(path.join(rootDir,'views','contact-us.html'))
})

router.post('/contact-us', (req,res,next)=>{
    console.log(req.body)
    res.redirect('/success')
})

module.exports = router