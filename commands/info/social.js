const discord = require("discord.js");

module.exports.run = async (client, message, args, prefix) => {
  if (args[0]) return;
  const embed = new discord.MessageEmbed()
    .setTitle("MNS on social media")
    .setDescription(`<:telegram:994914668776783872> https://t.me/moneynoskill \n<:TikTok:995403191397126265> https://www.tiktok.com/@moneyno_skill \n<:IG:995403238620803102> https://instagram.com/money_no_skill`)
    .setThumbnail("https://media.discordapp.net/attachments/1002116907069091920/1002515486304645161/mns.png")
    .setColor("PURPLE")
  message.reply({ embeds: [embed] })

}

module.exports.help = {
  name: "social",
  aliases: ["soc"]
}