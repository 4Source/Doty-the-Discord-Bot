const short = require('shortid');
const { prefix } = require("../../data/config.json");

module.exports = {
	name: 'messageCreate',
	async execute(message) {
		//Ignor Bot Messages
		if (message.author.bot) return;

        //Create Id for Logging
        const id = short();
        //Log
		console.log(`[messageCreate][#${message.channel.name}][${message.author.tag}][${id}] Triggerd with: "${message.content}"`);

		//Check if Command with Prefix
		if(!message.content.startsWith(prefix)) return;

		//Split in Args
		const args = message.content.substring(prefix.length).split(/ +/);

		//Search in Commands Collection for Command
		const command = message.client.commands.find(cmd => cmd.name == args[0]);

		//Check ifnot Valid Command
		if(!command) return message.reply({ content: "That is not a valid command!", ephemeral: true });

		//Execute Command
		try {
            await command.execute(message, args, message.client);
            console.log(`[messageCreate][#${message.channel.name}][${message.author.tag}][${id}] Successfully Executed Command!`);
        } catch (error) {
            console.error(`[messageCreate][#${message.channel.name}][${message.author.tag}][${id}] ${error}`);
            await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
        }
	},
};
