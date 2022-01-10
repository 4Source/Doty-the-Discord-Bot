module.exports = {
	name: 'messageCreate',
	async execute(message) {
		//Ignor Bot Messages 
		if (message.author.bot) return;

        //Log
		console.log(`[messageCreate][${message.guildId}][${message.channelId}][${message.author.id}][${message.id}] Triggerd with: "${message.content}"`);

		//Get Guild Configs for Guild
		const config = message.client.guildConfigs.get(message.guildId);
		if(!config) {
			message.channel.send('No configs set.');
			console.log(`No configs set for ${message.guildId}`);
			return;
		} 

		//Check if Command with Prefix
		if(!message.content.startsWith(config.prefix)) return;

		//Split in Args
		const args = message.content.substring(config.prefix.length).split(/ +/);

		//Search in Commands Collection for Command
		const command = message.client.commands.find(cmd => cmd.name == args[0]);

		//Check ifnot Valid Command
		if(!command) return message.reply({ content: "That is not a valid command!", ephemeral: true });

		//Execute Command
		try {
            await command.execute(message, args, message.client);
            console.log(`[messageCreate][${message.guildId}][${message.channelId}][${message.author.id}][${message.id}] Successfully Executed Command!`);
        } catch (error) {
            console.error(`[messageCreate][${message.guildId}][${message.channelId}][${message.author.id}][${message.id}] ${error}`);
            await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
        }
	},
};
