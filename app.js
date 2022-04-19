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

  let youtubers = [
    {videoAuthor: 'Marques Brownlee', videoTitle: 'Talking Tech and AI with Google CEO Sundar Pichai!',
    videoStats: '3.4M views &#183; 6 months ago', videoTime: '14:20', totalSubs: '15.5M subscribers'},

    {videoAuthor: 'Markiplier', videoTitle: 'Try Not To Laugh Challenge #9',
    videoStats: '19M views &#183; 4 years ago', videoTime: '8:22', totalSubs: '32.6M subscribers'},

    {videoAuthor: 'SSSniperWolf', videoTitle: 'Crazy Tik Toks Taken Moments Before DISASTER',
    videoStats: '12M views &#183; 1 year ago', videoTime: '9:13', totalSubs: '31.4M subscribers'},

    {videoAuthor: 'Veritsium', videoTitle: 'The Simplest Math Problem No One Can Solve - Collatz Conjecture',
    videoStats: '18M views &#183; 4 months ago', videoTime: '22:09', totalSubs: '11.7M subscribers'},

    {videoAuthor: 'CS Dojo', videoTitle: 'Kadane\'s Algorithm to Maximum Sum Subarray Problem',
    videoStats: '519K views &#183; 5 years ago', videoTime: '11:17', totalSubs: '1.82M subscribers'},

    {videoAuthor: 'MrBeast', videoTitle: 'Anything You Can Fit In The Circle I’ll Pay For',
    videoStats: '141M views &#183; 1 years ago', videoTime: '19:59', totalSubs: '93.6M subscribers'},
    
  ]

  res.render('index', {
    title, home, explore, subscriptions, originals, youtubeMusic, library,
    youtubers
  })
})

app.listen(PORT, ()=> {
  console.log(`Listening on port ${PORT}...`)
})