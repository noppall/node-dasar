const fs = require('fs')
const path = require('path')

//create folder
// fs.mkdir(path.join(__dirname, '/test'), {}, err => {
//     if (err) throw err;
//     console.log("folder created")
// })

//create file
// fs.writeFile(path.join(__dirname, '/test', 'hello.txt'), "hello world", err => {
//     if (err) throw err;
//     console.log("file created")
//     fs.appendFile(path.join(__dirname, '/test', 'hello.txt'), " I love nodejs", err => {
//         if (err) throw err;
//         console.log("file created")
//     })
// })

// fs.writeFile(path.join(__dirname, '/test', 'hello.txt'), " I love nodejs", err => {
//     if (err) throw err;
//     console.log("file created")
// })

fs.readFile(path.join(__dirname, '/test', 'hello.txt'), "utf8", (err, data)=> {
    if (err) throw err;
    console.log(data)
})