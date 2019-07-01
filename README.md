# 🔥JC's JS Tips API🔥

This API scrapes twitter to get the latest exercises from [JC's profile](https://twitter.com/jchiatt).

## Overview

The API is currently built on [express](https://expressjs.com/) and exposes a single `GET` endpoint: `/jcs-js-tips`.

The data is curated by using a combination of the following:

- [axios](https://github.com/axios/axios): To fetch the HTML from the page
- [cheerio](https://github.com/cheeriojs/cheerio): Traverse the retrieved HTML (similar to jQuery)
- [date-fns](https://date-fns.org/): Simple date parser/formatter

## Going Forward

Next items to consider:

- **endpoints**: I've had a [few thoughts](https://twitter.com/mtliendo/status/1142150146483990529) on this.
- **hosting**: Currently hosted on [Heroku](https://heroku.com)
- **data storage**: As the list grows, scraping from Twitter becomes expensive overhead. Ideally, we'd want to store this in a DB of sorts and retrive on request.
- **community impact**: The point of JC taking the time create these challenges, is to promote learning in the open. As such, I'd like this API to stick to that value and offer sensible solutions that find the right balance of robustness and ease-of-entry.

## Contributing

🚨PR's, issues, and suggestions are welcome to all skill levels!🚨

I was _really_ looking forward to pushing this to a final form. However, I'm finding myself too busy to take on the task as soon as I would like (exciting news on the horizon!), so I'm looking for the community to step in.

This is a great way to get involved in the community and to dive into open source 🤓

### Setting up the project

1. fork this repo and clone your copy to your computer
1. `cd` into the project's directory
1. run `npm install` to install the dependencies
1. run `npm start` to start the development server
1. navigate your browser to the endpoint: `/jcs-js-tips`
