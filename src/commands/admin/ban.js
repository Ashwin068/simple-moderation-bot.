const { RichEmbed } = require('discord.js');

exports.run = async (client, message, args) => {
  if (!message.member.hasPermission("BAN_MEMBERS")){ 
    let embed = new RichEmbed()
      .setColor("RANDOM")
      .setDescription("Fuck :middle_finger: You Do Not Have permission To Use This cmd! :stuck_out_tongue_winking_eye:");
return message.channel.send(embed);
  }
  if (!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.channel.send(`> **${message.author.tag}** That user is a mod/admin,I can°t do that`).then(msg=>msg.delete(5000))
  
  let toBan = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if(!toBan) return message.channel.sendMessage("> **__SORRY__** Wrong cmd use😉 plz use `$ban` `mentionuser` `reason`");
  let reason = args.join(" ").slice(22);
  if (toBan.hasPermission("BAN_MEMBERS")) return message.channel.send("I can°t ban this user").then(msg => msg.delete(5000));
  
  if (toBan.highestRole.position < message.guild.member(client.user).highestRole.position) {
   message.guild.member(toBan).ban(reason);
   try {
    if (!reason) {
      toBan.send(`**${toBan.user.tag}** You were banned from **${message.guild.name}**`)
    } else {
      toBan.send(`**${toBan.user.tag}** You were banned from **${message.guild.name}**
Reason: "${reason}"`);
    }
    let embedB = new RichEmbed()
    .setColor('RANDOM')
    .setTitle('USER IS BANNED')
    .addField('username', toBan.user.username, true)
    .addField('ID', toBan.id, true)
    message.channel.send(embedB);
  } catch (e) {
    console.log(e.message)
  }
  } else {
   message.channel.send(`i can't ban **${toBan.user.tag}**`)
  }
}
 
exports.conf = {
  aliases: ['banthx'],
  cooldown: '5'
}

exports.help = {
  name: "ban",
  description: 'Ban Seseorang Dari Servermu [PERMISSION BAN MEMBERS ONLY]',
  usage: 'ban [@mention someone]'
}
