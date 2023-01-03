const express = require('express')

const router = express.Router()

router.get('/add-product',(req,res,next)=> {
    
    res.send(`<form action="/admin/add-product" method="POST"><input type="text" name="prod">
    <select name="size">
    <option>L</option>
    <option>XL</option>
    </select><button type="submit">Add</button></form>`)
})

router.post('/add-product',(req,res,next)=>{
    console.log(req.body)
    res.redirect('/')
})

module.exports = router