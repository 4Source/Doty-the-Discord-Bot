const fs = require('fs');
const { Client, Collection, Intents } = require('discord.js');
const { token } = require("../data/config.json");

//Create Client Instance
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });
client.commands = new Collection();

//Load Commands
const commandFiles = fs.readdirSync('./src/commands').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	// Set a new item in the Collection
	// With the key as the command name and the value as the exported module
	client.commands.set(command.data.name, command);
}

//Load Events
const eventFiles = fs.readdirSync('./src/events').filter(file => file.endsWith('.js'));
for (const file of eventFiles) {
	const event = require(`./events/${file}`);
	if (event.once) {
		client.once(event.name, (...args) => event.execute(...args));
	} else {
		client.on(event.name, (...args) => event.execute(...args));
	}
}

//Discord Token
client.login(token);
