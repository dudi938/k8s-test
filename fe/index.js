var express = require('express')
var path = require('path')
var http = require('./http')

var app = express()
app.use(express.static(path.join(__dirname, 'static')))
const port = 4000



app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'static/index.html'))
})

app.get('/getValue', (req, res) => {
    http.httpRequest('GET','incerment.my-ns.svc.cluster.local', 3000, '').
    //http.httpRequest('GET','www.google.com', 80, '').
    then((data) => {
        console.log(`Data = ${data}`)
        res.send(data)
    }).catch((error) => {
        console.log(error)
    })
})

app.listen(port, () => {
    console.log(`Listening on port: ${port}`)
})