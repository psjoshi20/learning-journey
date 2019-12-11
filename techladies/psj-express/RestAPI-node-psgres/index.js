//building medium.com/alibaba_cloud--a-restful-api-with-express-postgresql-and-node-using-es6-1de2b3b06c64

const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  const name = req.query.name || 'World'
  res.send('Hello ' + name + '!')
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
