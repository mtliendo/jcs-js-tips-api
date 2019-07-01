const express = require('express')
const { fetchJCsJSTipsTweets } = require('./fetchJCsJSTipsTweets')

const app = express()
const PORT = process.env.PORT || 8888

app.get('/jcs-js-tips', async (req, res) => {
  const tipsJSON = await fetchJCsJSTipsTweets()
  console.log(tipsJSON)
  res.json(tipsJSON)
})

app.listen(PORT, () => {
  console.log('app started on port', PORT)
})
