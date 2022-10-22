const { getVoiceConnection } = require("@discordjs/voice");
const voiceDiscord = require("@discordjs/voice");

module.exports.run = async (client, message, args, prefix) => {
  const vcGuild = '993084866499465307';
  try {
    const connection = getVoiceConnection(vcGuild);
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