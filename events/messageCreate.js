const client = require("../index.js").client
const config = require('../config.json');
const { afk } = require('../collection/afk.js')
const moment = require('moment')

client.on("messageCreate", async (message, user, author) => {

  const chx = '1003688765937680449';

  if (message.author.id == '302050872383242240') {
    client.channels.cache.get(chx).send({ content: `2 საათში შეგახსენებთ რომ bump-ის cooldown გავიდა!` }).then(() => {
      setTimeout(
        () =>
          client.channels.cache
            .get(chx)
            .send({
              content: `<@&1025036977122332692> Bump მზადაა! გამოიყენეთ ბრძანება /bump!`,
            }),
        7200000
      );
    })
      .catch()
  }


  if (message.author.bot || message.channel.type === 'DM') return

  let prefix = config.prefix;
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1)
  let messageArrayFull = message.content.split(' ')
  let argsF = messageArrayFull.slice(1)

  // it will make the cmd work with him orginal name and his aliases
  let commands = client.commands.get(cmd.slice(prefix.length)) || client.commands.get(client.aliases.get(cmd.slice(prefix.length)));

  if (commands) {
    if (!message.content.startsWith(prefix)) return
    commands.run(client, message, args, prefix, argsF);
  }

  const afkMember = message.mentions.members.first();
  if (afkMember) {
    const data = afk.get(afkMember.id)

    if (data) {
      const [timestamp, reason] = data
      const timeAgo = moment(timestamp).fromNow()
      message.reply({ content: `${afkMember} არის AFK\nმიზეზი: ${reason} ${timeAgo}` })
    }
  }
  if (!message.content.startsWith('m?afk')) {
    const gData = afk.get(message.author.id)
    if (gData) {
      afk.delete(message.author.id)
      message.reply({ content: 'თქვენ აღარ ხართ AFK' })
    }
  }
})