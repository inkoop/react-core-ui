const express = require('express')
const app = express()
const port = 5000
const path = require('path')

app.get('*', (request, response) => {
  response.sendFile(path.join(__dirname + '/index.html'));
})

app.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err)
  }

  console.log(`server is listening on ${port}`)
})
