const discord = require("discord.js")
const { afk } = require('../../collection/afk.js')

module.exports.run = async (client, message, args, prefix) => {
  const gData = afk.get(message.author.id)
  if (gData) {
    afk.delete(message.author.id)
    message.reply({ content: 'თქვენ აღარ ხართ AFK' })
  }
}

module.exports.help = {
  name: "removeAfk",
  aliases: ["removeOffline", "removeIdle", "removeafk", "removeoffline", "removeidle"],
}