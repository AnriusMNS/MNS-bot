const client = require("./index.js").client
const guild = client.guilds.cache.get('993084866499465307')


async function createCmd(client, guildId) {
  const data = [
    {
      name: 'echo',
      description: 'echo your text',
      options: [
        {
          name: 'text',
          description: 'text you want to echo',
          required: true,
          type: 'STRING',
        }
      ]
    },
    {
      name: 'ping',
      description: 'reply with pong'
    },
    {
      name: 'social',
      description: 'MNS-s social media links'
    },
    {
      name: 'termin',
      description: 'Get definition of termin you want!',
      options: [{
        name: 'termin_name',
        description: 'Which termins definition you want?',
        required: true,
        type: 'STRING',
      }]
    },
    {
      name: 'react',
      description: 'reacts to a message',
      options: [
        {
          name: 'message_id',
          description: 'An id of message that i should react!',
          required: true,
          type: 'STRING',
        },
        {
          name: 'emoji',
          description: 'An emoji I should react!',
          required: true,
          type: 'STRING',
        }
      ]
    },
    {
      name: 'add-role',
      description: 'Add an reaction role!',
      options: [
        {
          name: 'message_id',
          description: 'An id of reaction-role message!',
          required: true,
          type: 'STRING',
        },
        {
          name: 'role_id',
          description: 'A role u want to give!',
          required: true,
          type: 'STRING',
        },
        {
          name: 'emoji',
          description: 'An emoji u want to react!',
          required: true,
          type: 'STRING',
        }
      ]
    },
    // {
    //   name: 'membercount',
    //   description: 'Shows how many members are at the server',
    //   options: [{
    //     name: 'optional',
    //     description: 'ragac',
    //     type: 'STRING',
    //     required: false,
    //     choices: [
    //       {
    //         name: 'bots',
    //         value: `bots {guild.members.cache.filter(member => member.user.bot).size}`
    //       },
    //       {
    //         name: 'members',
    //         value: `members {guild.members.cache.filter(member => !member.user.bot).size}`
    //       },
    //     ]
    //   }]
    // },
    {
      name: 'ban',
      description: 'Bans a member',
      options: [
        {
          name: 'target',
          description: 'User u want to ban!',
          required: true,
          type: "USER"
        },
        {
          name: 'reason',
          description: 'Reason for banning',
          type: "STRING",
          required: false
        }
      ]
    },
    {
      name: 'kick',
      description: 'Kicks a member',
      options: [
        {
          name: 'target',
          description: 'User u want to kick!',
          required: true,
          type: "USER"
        },
        {
          name: 'reason',
          description: 'Reason for banning',
          type: "STRING",
          required: false,
        }
      ]
    },
  ]
  await client.guilds.cache.get('993084866499465307')?.commands.set(data);
}

module.exports = { createCmd }