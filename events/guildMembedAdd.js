const client = require("../index.js").client;
const discord = require('discord.js');

client.on("guildMemberAdd", async (member, message) => {

  const mns = client.guilds.cache.get("993084866499465307");

  const embed = new discord.MessageEmbed()
    .setAuthor(mns.name, mns.iconURL({ dynamic: true }))
    .setDescription(
      "<:ticky:995006139647398048>სალამი თქვენ გაწევრიანდით **Money no Skill** სერვერზე!\n\nთუ ხართ დამწყები და გსურთ ვაჭრობის უფასოდ სწავლა შემოგვიერთდით ტელეგრამზე - Link ⬇️\n<:telegram:994914668776783872>https://t.me/moneynoskill\n\nასევე გადახედე ჩვენს ფასიან პაკეტებსაც ⬇️\n<#1003615174705561691>\n<#1010841084848513094>\n\n`თუ ფიქრობთ რომ არასწორად დაგედოთ ბანი გთხოვთ დაგვიკავშირდეთ APP ში` \n:arrow_right: შეავსეთ: https://dyno.gg/form/5946f28d\n\nმადლობა ყურადღებისთვის!\n*MnS Administration* :heart_on_fire:"
    )
    .setThumbnail(mns.iconURL({ dynamic: true }))
    .setTimestamp()
    .setColor("PURPLE");
  
  member.send({embeds: [embed]})

  let chx = '1003609387115491399';

  if (chx === null) return;

  const text = `${member.user}, მოგესალმებით **Money no skill**-ზე <a:8859pepemoney:993123545146204181>

<a:matrix:996010434136121394> წაიკითხეთ წესები: <#993084867237642251>
<a:giveaway:999960043015376966> შეამოწმეთ გათამაშებები: <#1003619776414879814> 
<a:9450_vibing_carl:993123167361056818> აიღეთ როლები: <#1003613073782865970> 

\`თუ ფიქრობთ რომ არასწორად დაგედოთ ბანი გთხოვთ დაგვიკავშირდეთ APP ში\`
:arrow_right: შეავსეთ: https://dyno.gg/form/5946f28d

კარგი დროის გატარებას გისურვებ ჩვენს სერვეზე! <a:danceHard:993122820626317404> 
იმედია ბევრს შეისწავლი და რაც მთავარია ბევრ პროფიტებს დადებ! :heart_on_fire: `

  client.channels.cache.get(chx).send({ content: text }).then(msg => {
    setTimeout(() => msg.delete(), 30000)
  })
    .catch()

  client.channels.cache.get('1006100711039320085').setName(`Members - ${member.guild.memberCount}`)
})