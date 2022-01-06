const short = require('shortid');
const { prefix } = require("../../data/config.json");

module.exports = {
	name: 'messageCreate',
	async execute(message) {
		if (message.author.bot) return;
        const id = short();
		console.log(`[messageCreate][#${message.channel.name}][${message.author.tag}][${id}] Triggerd with: "${message.content}"`);

		//Check if Command with Prefix
		if(!message.content.startsWith(prefix)) return;

		//Split in Args
		const args = message.content.substring(prefix.length).split(/ +/);

		const command = message.client.commands.find(cmd => cmd.name == args[0]);

		if(!command) return message.reply("That is not a valid command!");

		try {
            await command.execute(message, args, message.client);
            console.log(`[messageCreate][#${message.channel.name}][${message.author.tag}][${id}] Successfull!`);
        } catch (error) {
            console.error(`[messageCreate][#${message.channel.name}][${message.author.tag}][${id}] ${error}`);
            await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
        }
	},
};
