var express = require('express')
var path = require('path')


var app = express()

const port = 3000

var count = 0


app.get('/', (req, res) => {
    
    res.set("Access-Control-Allow-Origin", '*')
    res.set('Access-Control-Allow-Methods', 'GET,POST,OPTIONS,DELETE,PUT')

    res.send(`Count: ${count}`)
    count += 1
})

app.listen(port, () => {
    console.log(`Listening on port: ${port}`)
})