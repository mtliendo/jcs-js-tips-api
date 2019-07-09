const express = require('express')
const { fetchJCsJSTipsTweets } = require('./fetchJCsJSTipsTweets')

const app = express()
const PORT = process.env.PORT || 8888

app.get('/jcs-js-tips', async (req, res) => {
  const tipsJSON = await fetchJCsJSTipsTweets()
  res.json(tipsJSON)
})

app.get('/js-lessons?', (req, res) => {
  res.json(req.query)
})

app.listen(PORT, () => {
  console.log('app started on port', PORT)
})
