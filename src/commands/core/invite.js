const { RichEmbed: SharifEmbed } = require('discord.js');

exports.run = async (client, message, args) => {

let embed = new SharifEmbed()
      .setColor("RANDOM")
      .setTitle("our invite link below")
      .setDescription("[Click here and invite me](https://discordapp.com/oauth2/authorize?client_id=660215080687894560&scope=bot&permissions=8)")
      .addField('\u200B', `[Join Our official server](https://discord.gg/hu4myN9)`);
      .setFooter(`Requested By : ${message.author.username}`);
      
     message.channel.send(embed);
     
}

exports.conf = {
  aliases: ['invite'],
  cooldown: '5'

}

exports.help = {
  name: "invite",
  description: 'Untuk Menginvite Rendang Ke Server Mu',
  usage: 'invite'

}
