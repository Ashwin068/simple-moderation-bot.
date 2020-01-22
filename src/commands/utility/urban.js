const urban = require('relevant-urban');
const Discord = require('discord.js');

exports.run = async (client, message, args, color) => {

	
	if(!args[0]) return message.channel.send(`**Please enter some text**`);
	
  let postMsg = await message.channel.send('**Please wait a minute...**');
  
	let res = await urban(args.join(' ')).catch(e => {
		
		return message.channel.send('**Sorry, the word was not found😔**');
	});

	const embed = new Discord.RichEmbed()
	    .setColor(color)
	    .setTitle(res.word)
	    .setURL(res.urbanURL)
	    .setDescription(`**Definisi:**\n*${res.definition}*\n\n**Contoh:**\n*${res.example}*`)
	    .addField('Penulis', res.author,true)
	    .addField('Rating', `**\`👍🏻 Upvotes: ${res.thumbsUp} | 👎🏻 Downvotes: ${res.thumbsDown}\`**`)
	    
	   if (res.tags.length > 0 && res.tags.join(', ').length < 1024) {
   		embed.addField('Tags', res.tags.join(', '), true) 
   		
   	};
  message.channel.send(embed).then(() => { postMsg.delete(); })
   	
   	
}

exports.conf = {
 aliases: ['relevant-urban'],
 cooldown: '5'
} 

exports.help = {
 name: 'urban', 
 description: 'Singkatan Internet untuk "harus pergi". Juga dapat berarti "baik untuk pergi" tergantung pada konteksnya', 
 usage: 'urban <Test/Message>' 
} 
