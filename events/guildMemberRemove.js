const client = require("../index.js").client;
const discord = require('discord.js');

client.on("guildMemberRemove", async (member, message) => {
  client.channels.cache.get('1006100711039320085').setName(`Members - ${member.guild.memberCount}`)
})