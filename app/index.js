var Twit = require('twit')
var Config = require('./config')
var Bot = new Twit(Config)
var Phrases = require('./phrases')

var stream = Bot.stream('statuses/filter', { track: '@GracefulBot' })

stream.on('tweet', e => {
  const user = e.user.screen_name
  const mentioned = e.entities.user_mentions[1]
    ? e.entities.user_mentions[1].screen_name
    : false
  var phrase = Phrases[Math.floor(Math.random() * Phrases.length)]

  if (mentioned && mentioned != 'GracefulBot') {
    Bot.post('statuses/update', {
      status: `@${user} ${phrase}, @${mentioned} !`,
      in_reply_to_status_id: e.id_str
    })
  } else if (!mentioned) {
    Bot.post('statuses/update', {
      status: `@${user} ${phrase}`,
      in_reply_to_status_id: e.id_str
    })
  }
})
