const axios = require('axios')
const format = require('date-fns/format')
const cheerio = require('cheerio')
const convertToDate = require('./utils/convert-to-date')

//if no args given, start search on the 1st of June up until today.
const fetchJCsJSTipsTweets = async (
  startDate = '2019-06-01',
) => {
  // https://twitter.com/search-advanced
  // hashtags = 'JCsJSTips'
  // From these accounts = 'jchiatt'
  // 👇🏾👆🏾
  //const JCS_JS_TIPS_ENDPOINT = `https://twitter.com/search?f=tweets&vertical=default&q=%23JCsJSTips%20from%3Ajchiatt%20since%3A${startDate}%20until%3A${endDate}&src=typd`
  const JCS_JS_TIPS_ENDPOINT = `https://twitter.com/search?l=&q=%23JCsJSTips%2C%20OR%20%23JavaScript%20from%3Ajchiatt%20since%3A${startDate}&src=typd`
  const { data: html } = await axios.get(JCS_JS_TIPS_ENDPOINT)

  // Parse the DOM to get the deets.
  const $ = cheerio.load(html)
  const data = $('.content', '#timeline').map((index, tweetBlock) => {
    const displayDate = $('.tweet-timestamp', tweetBlock).attr('title')
    const tweetText = $('div .TweetTextSize', tweetBlock).text()
    const fuzzyTimestamp = format(displayDate.split('-')[1].trim(), 'X')
    const challengeImg = $(
      '.AdaptiveMedia-photoContainer.js-adaptive-photo',
      tweetBlock
    )
      .find('img')
      .attr('src')

    return (
      challengeImg && {
        tweetText,
        displayDate,
        fuzzyTimestamp, // because I got lazy and didn't want to spend the time to parse the full string.
        challengeImg
      }
    )
  })

  return data.toArray().sort(function (cur, past) {
    return  convertToDate(past) - convertToDate(cur); //sort by date
  }) // had to call toArray on data, otherwise cheerio objects get returned

}


module.exports.fetchJCsJSTipsTweets = fetchJCsJSTipsTweets
