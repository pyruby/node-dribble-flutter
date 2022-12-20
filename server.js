const express = require('express')
const server = express()
const PORT = 8080


server.use(express.static(__dirname + '/public/dribble'))


server.listen(PORT, () => {
    console.log('listning on 8080')
})           