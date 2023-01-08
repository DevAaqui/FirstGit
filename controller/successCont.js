const path = require('path')

const rootDir = require('../util/path')

exports.getSuccess = (req,res,next)=>{

   // res.send(`Success!`)
    
    res.sendFile(path.join(rootDir,'views','success.html'))
}