const fs = require('fs');
const { Client, Collection, Intents } = require('discord.js');
const { token } = require("../data/token.json");

console.log("Starting...");
//Create Client Instance
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
client.slashCommands = new Collection();
client.commands = new Collection();

const predir ='./src';

//Load SlashCommands
scomCount = 0;
const scomdir = '/slashCommands';
fs.readdirSync(predir + scomdir)
    .filter(file => file.endsWith('.js'))
    .forEach(file => {
        const command = require(`.${scomdir}/${file}`);
        if(command.data.name){
            console.log(`Loaded SlashCommand: '${command.data.name}' from ${predir + scomdir}/${file}`);
            client.slashCommands.set(command.data.name, command);
            scomCount++;
        }
    });
fs.readdir(predir + scomdir, (err, files) => {
    console.log(`SlashCommands Loaded: (${scomCount}/${files.length})`);
});

//Load Commands
comCount = 0;
const comdir = '/commands';
fs.readdirSync(predir + comdir)
    .filter(file => file.endsWith('.js'))
    .forEach(file => {
        const command = require(`.${comdir}/${file}`);
        if(command.name) {
            console.log(`Loaded Command: '${command.name}' from ${predir + comdir}/${file}`);
            client.commands.set(command.name, command);
            comCount++;
        }
    });
fs.readdir(predir + comdir, (err, files) => {
    console.log(`Commands Loaded: (${comCount}/${files.length})`);
});

//Load Events
evCount = 0;
const evdir = '/events';
fs.readdirSync(predir + evdir)
    .filter(file => file.endsWith('.js'))
    .forEach(file => {
        const event = require(`.${evdir}/${file}`);
        if(event.name){
            console.log(`Loaded Event: '${event.name}' from ${predir + evdir}/${file}`);
            if (event.once) {
                client.once(event.name, (...args) => event.execute(...args));
            } else {
                client.on(event.name, (...args) => event.execute(...args));
            }
            evCount++;
        }
    });
fs.readdir(predir + evdir, (err, files) => {
    console.log(`Events Loaded: (${evCount}/${files.length})`);
});

//Login with Discord Token
client.login(token);
