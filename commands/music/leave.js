const discord = require("discord.js")
const voiceDiscord = require("@discordjs/voice")

module.exports.run = async (client, message, args, prefix) => {
  try {
    const vcChannel = '1014607787461967923';
    const vcGuild = '993084866499465307'

    const connection = voiceDiscord.joinVoiceChannel({
      channelId: vcChannel,
      guildId: vcGuild,
      adapterCreator: message.channel.guild.voiceAdapterCreator,
    });
    connection.destroy();
    message.reply("left!")
  } catch (err) {
    console.log(err.red)
  }
}

module.exports.help = {
  name: "leave",
  aliases: ["l"],
}