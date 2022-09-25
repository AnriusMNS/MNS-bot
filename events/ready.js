const client = require("../index.js").client
const { createCmd } = require("../dataHandler")
const voiceDiscord = require('@discordjs/voice')
var colors = require('colors');

client.on('ready', async (member) => {
  const mns = (`
                   _____ _____ _____ 
                  |     |   | |   __|
                  | | | | | | |__   |
                  |_|_|_|_|___|_____|

                  
                    is online now!`);
  console.log(mns.green);

  const activities = [
    `moneynoskill`,
    `m?social`,
    `m?website`,
    `m?echo [text]`,
    `m?membercount`,
    `m?ping`,
    `m?termins [termin]`,
    `m?ban`,
    `I have slash commands too!`,
    `Join our Telegram! | link -> m?social`,
    `Follow us on Instagram | link -> m?social`,
    `Follow us on TikTok | link -> m?social`,
    `Rate our website! | moneynoskill.ga`,
    `https://moneynoskill.ga/`
  ]

  setInterval(() => {
    const status = activities[Math.floor(Math.random() * activities.length)]
    client.user.setActivity(`${status}`, { type: "WATCHING" });
  }, 5000)

  createCmd(client)

  const guild = client.guilds.cache.get('993084866499465307')
  client.channels.cache.get('1006100711039320085').setName(`Members - ${guild.memberCount}`)

  const vcChannel = '1014607787461967923';
  const vcGuild = client.guilds.cache.get('993084866499465307');

  const connection = voiceDiscord.joinVoiceChannel({
    channelId: vcChannel,
    guildId: vcGuild.id,
    adapterCreator: vcGuild.voiceAdapterCreator,
  });

  client.channels.cache.get('1003688765937680449').send({
    content: `<@671359057679876177> \`MNS ბოტი გადაიტვირთა!\``
  })
})