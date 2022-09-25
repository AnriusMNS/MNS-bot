const discord = require("discord.js")

module.exports.run = async (client, message, args, prefix) => {
  message.reply({
    embeds: [{
      title: 'Members',
      description: `${message.member.guild.memberCount}`,
      color: "PURPLE",
      timestamp: new Date(),
    }]
  })
}

module.exports.help = {
  name: "membercount",
  aliases: [],
}