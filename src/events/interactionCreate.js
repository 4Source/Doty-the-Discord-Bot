const short = require('shortid');

module.exports = {
	name: 'interactionCreate',
	async execute(interaction) {
        const id = short();
		console.log(`[interactionCreate][#${interaction.channel.name}][${interaction.user.tag}][${id}] Triggerd!`);
        
        if (!interaction.isCommand()) return;

        const command = interaction.client.slashCommands.get(interaction.commandName);

        if (!command) return;

        try {
            await command.execute(interaction);
            console.log(`[interactionCreate][#${interaction.channel.name}][${interaction.user.tag}][${id}] Successfull!`);
        } catch (error) {
            console.error(`[interactionCreate][#${interaction.channel.name}][${interaction.user.tag}][${id}] ${error}`);
            await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
        }
	},
};