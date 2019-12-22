const { RichEmbed } = require('discord.js');
const { get } = require('superagent');

function showCat (client, msg, args){
	try{
		return exports.getCat(msg.channel);
	} catch (err) {
		return msg.channel.send(err.stack, { code: 'ini' });
	}
}

exports.getCat = async (channel, extend = '') => {
	const { body: { file } } = await get('https://aws.random.cat/meow');
	const ctx = new RichEmbed();
	ctx.setTitle('🐈 Cat');
	ctx.setURL(file);
	ctx.setImage(file);
	return channel.send(extend, {embed: ctx});
}

this.conf = {
	aliases: ['🐈'],
	cooldown: 10
}

this.help = {
	name: 'cat',
	description: 'Show random ~~Neko~~ Cat 😸',
	usage: 'cat'
}

this.run = showCat;
