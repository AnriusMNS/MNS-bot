const discord = require("discord.js")
const voiceDiscord = require("@discordjs/voice")
var colors = require('colors');

module.exports.run = async (client, message, args, prefix) => {
  try {
    const vcChannel = '1014607787461967923';
    const vcGuild = '993084866499465307'

    const connection = voiceDiscord.joinVoiceChannel({
      channelId: vcChannel,
      guildId: vcGuild,
      adapterCreator: message.channel.guild.voiceAdapterCreator,
    });
    message.reply("joined!")
  } catch (err) {
    console.log(err.red)
  }
}

module.exports.help = {
  name: "join",
  aliases: ["j"],
}