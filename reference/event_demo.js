const evenEmitter = require('events')

//Create class
class MyEmitter extends evenEmitter {}

//Init Object
const myEmitter = new MyEmitter()

//Event listener 
myEmitter.on("event", () => console.log("Perintah ini dijalankan"))

//Init Event
myEmitter.emit("event")