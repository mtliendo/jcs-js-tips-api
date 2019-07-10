const express = require('express')
const { fetchJCsJSTipsTweets } = require('./fetchJCsJSTipsTweets')

const app = express()
const PORT = process.env.PORT || 8888

app.get('/jcs-js-tips', async (req, res) => {
  const tipsJSON = await fetchJCsJSTipsTweets()
  res.json(tipsJSON)
})

app.get('/js-lessons', async (req, res) => {
  if (req.query.tags) {
    let tags = req.query.tags.split(',')
    let tipsJSON = await fetchJCsJSTipsTweets()
    tipsJSON = tipsJSON.filter((tip) => {
      if (tags.some((tag) => tip.tweetText.toLowerCase().includes(tag.toLowerCase()))) {
        return tip
      }  
    })
    
    return res.json(tipsJSON) 
  }
  
  res.json("no such content")
})

app.listen(PORT, () => {
  console.log('app started on port', PORT)
})
