const express = require('express')
const fs = require('fs')

const app = express()

app.get('/', (request, response) => {
  response.status(200)
  response.send('hello')
  response.end()
})

app.get('/rest/cities', (request, response) => {
  fs.readFile('./data/city.json', function (err, data) {
    if (err) {
      res.send(err)
    }
    response.json(JSON.parse(data.toString()))
  })
})

app.listen(5000)
