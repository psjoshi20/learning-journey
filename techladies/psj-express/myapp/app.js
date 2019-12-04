const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  const name = req.query.name || 'elisha'
  res.send('Hello this is a basic Nodejs app ,' + name + '!')

})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
console.log('test message by me ****') 