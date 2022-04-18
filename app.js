const express = require('express')
const app = express()
const PORT = 3000

// Register view engine
app.set('view engine', 'ejs')

// Render views
app.get('/', (req, res) => {
  res.render('/index')
})

app.listen(PORT, ()=> {
  console.log(`Listening on port ${PORT}...`)
})