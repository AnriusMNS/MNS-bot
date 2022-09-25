const discord = require("discord.js")
const file = require("../../termins.json")


module.exports.run = async (client, message, args, prefix, argsF) => {
  const termin = args[0].toUpperCase()

  if (!termin) return;

  const objKeys = Object.keys(file)
  const objValues = Object.values(file)

  const findTerminIndex = objKeys.findIndex(key => key === termin)

  if (objKeys.includes(termin)) {
    message.reply({ content: objValues[findTerminIndex] })
  } else {
    return message.reply('ეგეთი ტერმინი არ მოიძებნება :/')
  }
}

module.exports.help = {
  name: "termin",
  aliases: ["termins", "whatis", "what's"],
}