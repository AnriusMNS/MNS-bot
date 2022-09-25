const { Collection, Client, Discord, MessageEmbed, Intents } = require('discord.js');
const discord = require('discord.js')
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MEMBERS, Intents.FLAGS.GUILD_INVITES, Intents.FLAGS.GUILD_MESSAGE_REACTIONS, Intents.FLAGS.GUILD_VOICE_STATES, Intents.FLAGS.GUILD_BANS] });
const config = require('./config.json');
const fs = require('fs');
var colors = require('colors');

client.commands = new Collection();
client.aliases = new Collection();
client.events = new Collection();
client.slashCmds = new Collection();
module.exports.client = client

require("dotenv").config()

// Commands Handler
fs.readdirSync('./commands/').forEach(dir => {
  fs.readdir(`./commands/${dir}`, (err, files) => {
    if (err) throw err;
    var jsFiles = files.filter(f => f.split(".").pop() === "js");
    if (jsFiles.length <= 0) {
      console.log("Can't find any commands!".magenta);
      return;
    }


    jsFiles.forEach(file => {
      var fileGet = require(`./commands/${dir}/${file}`);
      console.log(`[COMMAND HANDLER] - File ${file} was loaded`.yellow)
      try {
        client.commands.set(fileGet.help.name, fileGet);

        fileGet.help.aliases.forEach(alias => {
          client.aliases.set(alias, fileGet.help.name);
        })

      } catch (err) {
        return console.log(err.red);
      }
    });
  });
});


// Events Handler
fs.readdirSync('./events/').forEach(dir => {
  var jsFiles = fs.readdirSync('./events/').filter(f => f.split(".").pop() === "js");
  if (jsFiles.lenght <= 0) return console.log("[EVENT HANDLER] - Can't find any events!".magenta);

  jsFiles.forEach(file => {
    var eventGet = require(`./events/${file}`);
    // console.log(`[EVENT HANDLER] - File ${file} was loaded`.yellow)

    try {
      client.events.set(eventGet.name, eventGet)
    } catch (error) {
      return console.log(error.red)
    }
  })
});

client.login(process.env.TOKEN)