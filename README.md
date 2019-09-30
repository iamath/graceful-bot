# Graceful Bot

An bot created to call you as beautiful in every mentioned tweet.

![Example photo](https://i.imgur.com/JBbHyH8.png)

## Dependencies

You will need to install Javascript's [twit](https://github.com/ttezel/twit) library

If you use yarn:

    yarn add twit

Or if you use npm:

    npm install twit

You will also need to create an app account on https://dev.twitter.com/apps

1. Sign in with your Twitter account
2. Create a new app account
3. Modify the settings for that app account to allow read & write
4. Generate a new OAuth token with those permissions

## Usage

### Configuring the bot

Before running the bot, you must first set it up so it can connect to the Twitter API. Create a `config.js` file inside `app` folder and fill in the following information:

``` js
module.exports = {
  consumer_key: '',
  consumer_secret: '',
  access_token: '',
  access_token_secret: ''
}
```

`consumer_key`, `consumer_secret`, `access_token`, `access_token_secret` are your API keys that you received from creating your app account.

### Running

After you configure the bot, just run `yarn start` command in you terminal (or `npm run start` if you're using npm)