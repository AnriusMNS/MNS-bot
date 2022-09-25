const client = require("../index.js").client;
const discord = require('discord.js');

client.on("guildMemberAdd", async (member, message) => {

  let chx = '1003609387115491399';

  if (chx === null) return;

  const text = `${member.user}, მოგესალმებით **Money no skill**-ზე <a:8859pepemoney:993123545146204181>

<a:matrix:996010434136121394> წაიკითხეთ წესები: <#993084867237642251>
<a:giveaway:999960043015376966> შეამოწმეთ გათამაშებები: <#1003619776414879814> 
<a:9450_vibing_carl:993123167361056818> აიღეთ როლები: <#1003613073782865970> 

კარგი დროის გატარებას გისურვებ ჩვენს სერვეზე! <a:danceHard:993122820626317404> 
იმედია ბევრს შეისწავლი და რაც მთავარია ბევრ პროფიტებს დადებ! <:7938pepemillionaire:997806850084966422> `

  client.channels.cache.get(chx).send({ content: text }).then(msg => {
    setTimeout(() => msg.delete(), 30000)
  })
    .catch()

  client.channels.cache.get('1006100711039320085').setName(`Members - ${member.guild.memberCount}`)
})