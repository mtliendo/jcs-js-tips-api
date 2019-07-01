const express = require('express')
const { fetchJCsJSTipsTweets } = require('./fetchJCsJSTipsTweets')

const app = express()

app.get('/jcs-js-tips', async (req, res) => {
  const tipsJSON = await fetchJCsJSTipsTweets()
  console.log(tipsJSON)
  res.json(tipsJSON)
})

app.listen(8888, () => {
  console.log('app started')
})
