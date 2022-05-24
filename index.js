const express = require('express')
const app = express()
const port = 4000

app.use(require('./routes/brands.route'))
app.use(require('./routes/products.route'))

app.get('/', (req, res) => {
  res.send('Sheeesh!')
})



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})












