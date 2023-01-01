const http = require('http')

const server = http.createServer((req,res)=>{
    //console.log(req.url, req.method, req.headers)
    const url = req.url
    if(url==='/home')
    {
    res.write('<html>')
    res.write('<head><title>First Program</title></head>')
    res.write('<body><h1>Welcome Home</h1></body>')
    res.write('</html')
    return res.end()
    }
    else  if(url==='/about')
    {
    res.write('<html>')
    res.write('<head><title>First Program</title></head>')
    res.write('<body><h1>Welcome to About Us Page</h1></body>')
    res.write('</html')
    return res.end()
    }
    else  if(url==='/node')
    {
    res.write('<html>')
    res.write('<head><title>First Program</title></head>')
    res.write('<body><h1>Welcome to my Node JS Project</h1></body>')
    res.write('</html')
    return res.end()
    }
    res.setHeader('Content-Type','text/html')
    res.write('<html>')
    res.write('<head><title>First Program</title></head>')
    res.write('<body>My Name is Aaquib Rais and I am 9.5 rated individual</body>')
    res.write('</html')
    res.end()
    
})

server.listen(4000)