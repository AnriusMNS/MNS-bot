module.exports.run = async (client, message, args, prefix) => {

  const user = message.mentions.members.first()
  const banReason = args.slice(1).join(" ")
  if (!user) return message.reply('ვის დავადო ბანი ;D');

  if (!message.member.permissions.has("BAN_MEMBERS")) return message.reply(`💥 შენ არ გაქვს მაგდენი უფლება`)

  if (!message.guild.me.permissions.has("BAN_MEMBERS")) return message.reply(`💥 მე არ მაქვს მაგისთვის შესაფერისი უფლებები`)

  if (user.id === '671359057679876177') {
    return message.reply('💥 **daddy** ანრის ბანს რაუფლებით ადებ შე *!@#$#@!#')
  }

  if (user.id === '809788368044556328') {
    return message.reply('💥 თავი მოიკალი **daddy** კოკობას ბანს ვერ დაადებ. შე !@#@!#!@')
  }

  if (user.id === message.author.id) return message.reply(`💥 შენთავს ბანს ადებ?`)

  if (user.roles.highest.position >= message.member.roles.highest.position || message.author.id !== message.guild.owner.id) {
    return message.reply(`💥 მათ შენზე მეტი უფლებები აქვთ...`)
  }


  const member = message.guild.members.cache.get(user.id)
  if (!member) return inter.reply({ content: '💥 ეგეთი მომხმარებელი სერვერზე არ მოიძებნება' })
  if (!banReason) banReason = '💥 მიზეზი არ მოუცემიათ'

  try {
    await message.guild.members.ban(member, { reason: banReason })
  } catch (e) {
    console.log(e)
    return message.reply({ content: '💥 მას მე ბანს ვერ დავადებ' })
  }

  message.reply({
    embeds: [{
      description: `  💥 დავადე ბანი **${user.tag}**-ს\n\n  😎მიზეზი: ${banReason}\n`,
      color: "RED",
      author: {
        name: `${user.tag}`,
        icon_url: `${member.displayAvatarURL({ dinamic: true })}`,
      },
      timestamp: new Date(),
      footer: {
        text: 'Money no skill',
        icon_url: 'https://cdn.discordapp.com/icons/993084866499465307/9a7e9c195e33122379788f485dc71ba5.png?size=1024',
      },
      thumbnail: {
        url: 'https://cdn.discordapp.com/icons/993084866499465307/9a7e9c195e33122379788f485dc71ba5.png?size=1024',
      },
    }]
  })
}

module.exports.help = {
  name: 'ban',
  aliases: [],
}