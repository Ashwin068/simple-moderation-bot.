const { RichEmbed } = require('discord.js');

exports.run = async (client, message, args) => {
  if (!message.member.hasPermission("MANAGE_MESSAGES")){ 
    let embed = new RichEmbed()
      .setColor("RANDOM")
      .setTitle("Maaf, Kamu Tidak Mempunyai Permissions Untuk Kick Members");
return message.channel.send(embed);
  }
  if (!message.guild.member(client.user).hasPermission("MANAGE_NICKNAMES")) return message.channel.send(`**${message.author.tag}** Maaf, Rendang Tidak Mempunyai Permissions \`KICK_MEMBERS\` Tolong Beri Permissions \`KICK_MEMBERS\` Terlebih Dahulu.`).then(msg=>msg.delete(5000))
  
  let toKick = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if(!toKick) return message.channel.sendMessage("> **__SORRY__** Wrong cmd use😉 plz use  `$ban` `mentionuser` `reason`");
  let reason = args.join(" ").slice(22);
  if (toKick.hasPermission("KICK_MEMBERS")) return message.channel.send("I can°t ban this user").then(msg => msg.delete(3000));
  
  if (toKick.highestRole.position < message.guild.member(client.user).highestRole.position) {
   message.guild.member(toKick).kick(reason);
   try {
    if (!reason) {
      toKick.send(`**${toKick.user.tag}** You were kick from**${message.guild.name}**`)
    } else {
      toKick.send(`**${toKick.user.tag}** You were kick from **${message.guild.name}**
Reason: "${reason}"`);
    }
    let embedB = new RichEmbed()
    .setColor('RANDOM')
    .setTitle('USER KICKED')
    .addField('username', toKick.user.username, true)
    .addField('ID', toKick.id, true)
    message.channel.send(embedB);
  } catch (e) {
    console.log(e.message)
  }
  } else {
   message.channel.send(`I Can°t Kick **${toKick.user.tag}**`)
  }
}
 
exports.conf = {
  aliases: ['kick'],
  cooldown: '5'
}

exports.help = {
  name: "kick",
  description: 'Kick Seseorang Dari Servermu [ADMIN ONLY]',
  usage: 'Kick [@mention someone]'
}
