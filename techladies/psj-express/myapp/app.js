const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  const name = req.query.name || 'elisha'
  res.send('Hello ' + name + '!')
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))