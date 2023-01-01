const http = require('http')

const server = http.createServer((req,res)=>{
    console.log('Aaquib')
    res.write('<html>')
    res.write('<head><title>First Message</title></head>')
    res.write('<body>My Name is Aaquib Rais and I am 9.5 rated individual</body>')
    res.write('</html')
    res.end()
    
})

server.listen(4000)