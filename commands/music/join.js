const discord = require("discord.js")
const voiceDiscord = require("@discordjs/voice")
var colors = require('colors');

module.exports.run = async (client, message, args, prefix) => {
  if(!args[0]) return message.reply({content: ":x: გთხოვთ შეიყვანოთ არხის ID"})
  const vcChannel = args[0];
  const vcGuild = "993084866499465307";
  try {
    const connection = voiceDiscord.joinVoiceChannel({
      channelId: vcChannel,
      guildId: vcGuild,
      adapterCreator: message.channel.guild.voiceAdapterCreator,
    });
    message.reply("joined!")
  } catch (err) {
    message.reply({content: ":x: თქვენი შეყვანილი ID არ არის Voice არხის ID!"})
    console.log(err.red)
  }
}

module.exports.help = {
  name: "join",
  aliases: ["j"],
}