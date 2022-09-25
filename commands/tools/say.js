const discord = require("discord.js")

module.exports.run = async (client, message, args, prefix, argsF) => {
  const { channel } = message;
  const content = argsF.join(" ");

  const errorEmbed = new discord.MessageEmbed();
  errorEmbed.setTitle('გამოყენება:')
  errorEmbed.setDescription('m?say *შენი ტექსტი*\nm?say {"embeds":[{"title":"someTitle","description":"someDescription","thumbnail":"thumbnailUrl *it can be any image url*" and etc.}]')

  if (content[0] == "{") {
    const options = JSON.parse(content);
    //.catch(err=> message.reply({ephemeral: true, content: "```" + `${err}` + "```"}))
    channel.send(options)
      .catch(err => channel.send({ embeds: [errorEmbed] }));
  } else
    await message.delete(), channel.send(content);

  if (message.isCommand) message.reply({ ephemeral: true, content: "done!" });
}

module.exports.help = {
  name: "say",
  aliases: ["echo"],
}