const discord = require("discord.js")

module.exports.run = async (client, message, args, prefix) => {
  message.reply("pong!")
}

module.exports.help = {
  name: "ping",
  aliases: ["p"],
}