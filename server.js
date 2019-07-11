const express = require('express')
const { fetchJCsJSTipsTweets } = require('./fetchJCsJSTipsTweets')

const app = express()
const PORT = process.env.PORT || 8888

app.get('/jcsjs-lessons', async (req, res) => {
  let tipsJSON = await fetchJCsJSTipsTweets()
  if (req.query.tags) {
    const tags = req.query.tags.split(',')
    tipsJSON = tipsJSON.filter((tip) => {
      if (tags.some((tag) => tip.tweetText.toLowerCase().includes(tag.toLowerCase()))) {
        return tip
      }  
    })
    
    return res.json(tipsJSON) 
  }
  
  res.json(tipsJSON)
})

app.listen(PORT, () => {
  console.log('app started on port', PORT)
})
