const express = require('express')
const app = express()
const PORT = 3000

// Register view engine
app.set('view engine', 'ejs')

// Render views
app.get('/', (req, res) => {
  let title = 'Youtube Clone'

  res.render('index', {
    title: title
  })
})

app.listen(PORT, ()=> {
  console.log(`Listening on port ${PORT}...`)
})