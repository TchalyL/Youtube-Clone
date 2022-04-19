const express = require('express')
const app = express()
const PORT = 3000

// Register view engine
app.set('view engine', 'ejs')

// Directory containing static images and styles
app.use(express.static("public"))

// Render views
app.get('/', (req, res) => {
  // Title and Sidebar text
  let title = 'Youtube Clone', home = 'Home', explore = 'Explore', subscriptions = 'Subscriptions',
  originals = 'Originals', youtubeMusic = 'Youtube Music', library = 'Library'

  res.render('index', {
    title, home, explore, subscriptions, originals, youtubeMusic, library
  })
})

app.listen(PORT, ()=> {
  console.log(`Listening on port ${PORT}...`)
})