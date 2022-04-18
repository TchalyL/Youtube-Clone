const express = require('express')
const app = express()
const PORT = 3000

// Register view engine
app.set('view engine', 'ejs')

app.listen(PORT, ()=> {
  console.log(`Listening on port ${PORT}...`)
})