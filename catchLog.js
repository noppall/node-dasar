const Logger = require('./logger')
const logger = new Logger()

logger.on('message', (data) => console.log('Called listener: ', data))
logger.emit('message', ("nopall"))
logger.log("this is message")