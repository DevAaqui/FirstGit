const fs = require('fs')

const requestHandler = (req,res)=>{
//console.log(req.url, req.method, req.headers)
const url = req.url
const method = req.method
if(url==='/')
{
    fs.readFile('message.txt',{encoding: "utf-8"},(err,data)=>{
        if(err){
            console.log(err)
        }
        console.log(data)
        res.write('<html>')
        res.write('<head><title>First Message</title></head>')
        res.write(`<body>${data}</body>`)
        res.write('<body><form action="/message" method="POST"><input type="text" name="msg"><button type="submit">Send</button</form></body>')
        res.write('</html')
        return res.end()

    })

}
if(url === '/message' && method ==='POST')
{
    const body = []
    req.on('data', (chunk)=>{
       console.log(chunk)
       body.push(chunk)
    })
    return req.on('end', ()=>{
       const parsedBody = Buffer.concat(body).toString()
       //console.log(parsedBody)
       const message = parsedBody.split('=')[1]
       fs.writeFile('message.txt', message, (err)=>{
         res.statusCode = 302
         res.setHeader('Location','/')
         return res.end()
       })
       
    }) 

}

// res.setHeader('Content-Type','text/html')
// res.write('<html>')
// res.write('<head><title>First Program</title></head>')
// res.write('<body>My Name is Aaquib Rais and I am 9.5 rated individual</body>')
// res.write('</html')
// res.end()

}

module.exports = requestHandler