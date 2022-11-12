module.exports.run = async (client, message, args, prefix, argsF) => {
    if (message.author.id !== "671359057679876177" && message.author.id !== "235148962103951360" && message.author.id !== "809788368044556328") return message.reply("შენ არ შეგიძლია გამოიყენო ეს ბრძანება");
    const user = message.mentions.users.first();

    if (!user) message.reply("ეგეთი მომხმარებელი არ მოიძებნება")
    
    try {
        user.send("თქვენი აპლიკაცია არის უარყოფილი!")
    } catch (err) {
        message.reply("მე მას პირადში ვერ მივწერ!")
    }
};

module.exports.help = {
  name: "reject",
  aliases: ["r"],
};