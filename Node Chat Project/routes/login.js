const express = require('express')

const router = express.Router()

// Adding login details
router.get('/login',(req,res,next)=> {
    res.send(`<form action="/prod" method="POST" 
    onsubmit="localStorage.setItem('username',document.getElementById('username').value)">
    <input id="username" type="text" name="title"><br>
    <button type="submit">Login</button></form>`)
})

//Capturing username in local storage
router.post('/prod', (req,res,next)=>{
   // localStorage.setItem('userBody',req.body)
    console.log(req.body)
   // console.log(localStorage)
    res.redirect('/')
})

module.exports = router