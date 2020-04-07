var express = require('express')
var ping = express()
var port = 3001

ping.get('/ping', (req, res) => res.send('Pong'))

ping.listen(port, () => console.log(`Got the Pong at http://localhost:${port}`))