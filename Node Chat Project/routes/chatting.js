const express = require('express')
const fs = require('fs')

const router = express.Router()

router.get('/', (req,res,next)=>{
    fs.readFile('chat.txt',(err,data)=>{
        if(err){
            console.log(err)
            data='No Chat'
        }
        else{
            res.send(`${data}<form action="/" method="POST" 
            onsubmit="document.getElementById('username').value= localStorage.getItem('username')" >
            <input type="text" name="chat" id="chat">
            <input type="hidden" name="username" id="username">
            <button type="submit">Chat</button></form>`)
        }
        
    })
    
})

router.post('/', (req,res,next)=>{
    console.log(`${req.body.username}-${req.body.chat}`)
    fs.writeFile('chat.txt',`${req.body.username}-${req.body.chat}`,{flag: 'a'}, (err)=>
    err ? console.log(err): res.redirect('/')
    )
    
    
})

module.exports = router