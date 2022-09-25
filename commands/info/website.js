const discord = require("discord.js")

module.exports.run = async (client, message, args, prefix) => {
  message.reply({
    embeds:
      [{
        color: 'PURPLE',
        description: 'https://moneynoskill.ga/',
        title: 'Money no skill',
        thumbnail: {
          url: 'https://cdn.discordapp.com/icons/993084866499465307/9a7e9c195e33122379788f485dc71ba5.png?size=1024'
        }
      }]
  })
}

module.exports.help = {
  name: "website",
  aliases: ["webpage", "ვებსაიტი", "საიტი", "site", "web"],
}