const discord = require("discord.js")
const { afk } = require('../../collection/afk.js')

module.exports.run = async (client, message, args, prefix) => {
  const reason = args.join(' ') || 'მიზეზი არ არის მითითებული!'
  const user = message.member;
  afk.set(message.author.id, [Date.now(), reason])
  const afkEmbed = new discord.MessageEmbed()
    .setAuthor(`${message.author.tag}`, user.user.displayAvatarURL({ dynamic: true }))
    .setTitle('თქვენ ხართ AFK')
    .setDescription(`\nმიზეზი: ${reason}`)
    .setTimestamp()
    .setColor('PURPLE')
    .setThumbnail(message.guild.iconURL({ dynamic: true }))
    .setFooter('დაწერეთ m?removeAfk რომ მოგაშოროთ AFK', message.guild.iconURL({ dynamic: true }))
  message.reply({ embeds: [afkEmbed] })
}

module.exports.help = {
  name: "afk",
  aliases: ["offline", "idle"],
}