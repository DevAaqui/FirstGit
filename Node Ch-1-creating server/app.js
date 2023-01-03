const express = require('express')
const bodyParser = require('body-parser')
//const { urlencoded } = require('body-parser')

const app = express()

app.use(bodyParser.urlencoded({extended: false}))

app.use('/add-product',(req,res,next)=> {
    
    res.send(`<form action="/product" method="POST"><input type="text" name="prod">
    <select name="size">
    <option>L</option>
    <option>XL</option>
    </select><button type="submit">Add</button></form>`)
})

app.use('/product',(req,res,next)=>{
    console.log(req.body)
    res.redirect('/')
})
app.use('/',(req,res,next)=>{
    
    res.send('<h1>Hello from Express JS</h1>')
})

app.listen(4000)