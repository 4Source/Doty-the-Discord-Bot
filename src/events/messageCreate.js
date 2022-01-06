const short = require('shortid');

module.exports = {
	name: 'messageCreate',
	async execute(message) {
        const id = short();
		console.log(`[messageCreate][#${message.channel.name}][${message.author.tag}][${id}] Triggerd with: "${message.content}"`);
	},
};
