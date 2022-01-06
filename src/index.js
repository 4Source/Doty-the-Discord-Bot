const fs = require('fs');
const { Client, Collection, Intents } = require('discord.js');
const { token } = require("../data/config.json");

console.log("Starting...");
//Create Client Instance
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
client.commands = new Collection();

//Load Commands
comCount = 0;
const comdir = './src/commands';
fs.readdirSync(comdir)
    .filter(file => file.endsWith('.js'))
    .forEach(file => {
        const command = require(`./commands/${file}`);
        if(command.data.name){
            console.log(`Loaded Command: '${command.data.name}' from ${comdir}/${file}`);
            client.commands.set(command.data.name, command);
            comCount++;
        }
});
fs.readdir(comdir, (err, files) => {
    console.log(`Commands Loaded: (${comCount}/${files.length})`);
  });



//Load Events
evCount = 0;
const evdir = './src/events';
fs.readdirSync(evdir)
    .filter(file => file.endsWith('.js'))
    .forEach(file => {
        const event = require(`./events/${file}`);
        if(event.name){
            console.log(`Loaded Event: '${event.name}' from ${evdir}/${file}`);
            if (event.once) {
                client.once(event.name, (...args) => event.execute(...args));
            } else {
                client.on(event.name, (...args) => event.execute(...args));
            }
            evCount++;
        }
});
fs.readdir(evdir, (err, files) => {
    console.log(`Events Loaded: (${evCount}/${files.length})`);
  });

//Discord Token
client.login(token);
