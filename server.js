const http = require('http')
const path = require('path')
const fs = require('fs')

const server = http.createServer((req,res) => {
    // if (req.url === '/'){
    //     fs.readFile(path.join(__dirname, 'public', 'home.html'), (err, content) => {
    //         if (err) throw err
    //         res.writeHead(200, {'Content-Type' : 'text/html'})  //write for header
    //         res.end(content)
    //     })
    // }

    // if (req.url === '/about'){
    //     fs.readFile(path.join(__dirname, 'public', 'about.html'), (err, content) => {
    //         if (err) throw err
    //         res.writeHead(200, {'Content-Type' : 'text/html'})  //write for header
    //         res.end(content)
    //     })
    // }

    if (req.url === '/api/users'){
        const user = [
            {users : 'nopall', age : 17},
            {users : 'sarasvati', age : 12}
        ]
        res.writeHead(200, {'Content-Type' : 'text/html'})
        res.end(JSON.stringify(user))
    }

    //build file path
    let filePath = path.join(__dirname, 'public', req.url === '/' ? 'home.html' : `${req.url}.html`)
    console.log(filePath)
    // res.end()

    //extention of file
    let extname = path.extname(filePath)

    //init content type
    let contentType = 'text/html'

    //check ext and set content type
    switch(extname){
        case '.js':
            contentType = 'text/javascript'
            break
        case '.css':
            contentType = 'text/css'
            break
        case '.json':
            contentType = 'application/json'
            break
        case '.png':
            contentType = 'image/png'
            break
        case '.jpg':
            contentType = 'image/jpg'
            break
    }

    // read file
    fs.readFile(filePath, (err, content) => {
        if (err) {
            if (err.code == 'ENDENT'){
                //page not found
                fs.readFile(path.join(__dirname, 'public', '404.html'), (err, content) => {
                    res.writeHead(200, {'Content-Type' : 'text/html'})
                    res.end(content, 'utf-8')
                })
            } else {
                // some server error
                res.writeHead(500)
                res.end(`Server error: ${err.code}`)
            }
        } else {
            //succes 
            res.writeHead(200, {'Content-Type' : contentType})
            res.end(content, 'utf-8')
        } 
    })
})

const PORT = process.env.PORT || 5000
server.listen(PORT, () => console.log(`server is running on port ${PORT}`))