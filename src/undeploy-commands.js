const { REST, Routes } = require('discord.js');

// Construct and prepare an instance of the REST module
const rest = new REST().setToken(process.env.BOT_TOKEN);

console.log(`Started deleting all global application (/) commands.`);

// The put method is used to fully refresh all commands in the guild with the current set
rest.put(Routes.applicationCommands(process.env.CLIENT_ID), { body: [] })
    .then(() => console.log('Successfully deleted all global application commands.'))
    .catch(console.error);