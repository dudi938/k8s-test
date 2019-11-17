var express = require('express')
var path = require('path')


var app = express()
app.use(express.static(path.join(__dirname, 'static')))
const port = 4000



app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'static/index.html'))
})

app.listen(port, () => {
    console.log(`Listening on port: ${port}`)
})