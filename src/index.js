const fs = require('fs');
const { Client, Collection, Intents } = require('discord.js');
const db = require("../util/database");
const GuildConfig = require('../database/models/guildConfig');

console.log("Starting...");
//Create Client Instance
const client = new Client({ intents: [
    Intents.FLAGS.GUILDS, 
    Intents.FLAGS.GUILD_MESSAGES,
    Intents.FLAGS.GUILD_MEMBERS
]});
client.slashCommands = new Collection();
client.commands = new Collection();
client.guildConfigs = new Map();

const predir ='./src';




(async () => {
    //Test Database Connection
    try {
        await db.authenticate();
        console.log('Connection to Database has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
    //Sync Database Development
    await db.sync({ alter: true })
    .then((result) => {
        console.log("Syncronized Database!")
    })
    .catch((err) => {
        console.log(err);
    });

    //Load Guild Configs to Memory
    const dbConfigs = await GuildConfig.findAll();
    dbConfigs.every(config => config instanceof GuildConfig);

    dbCount = 0;
    const entries = await GuildConfig.count();
    dbConfigs.forEach(config => {
        client.guildConfigs.set(config.guild_id, config.dataValues);
        dbCount++;
    });
    

    //Load SlashCommands
    scomCount = 0;
    const scomdir = '/slashCommands';
    await fs.readdirSync(predir + scomdir)
        .filter(file => file.endsWith('.js'))
        .forEach(file => {
            const command = require(`.${scomdir}/${file}`);
            if(command.data.name){
                console.log(`Loaded SlashCommand: '${command.data.name}' from ${predir + scomdir}/${file}`);
                client.slashCommands.set(command.data.name, command);
                scomCount++;
            }
        });
    await fs.readdir(predir + scomdir, (err, files) => {
        console.log(`SlashCommands Loaded: (${scomCount}/${files.length})`);
    });

    //Load Commands
    comCount = 0;
    const comdir = '/commands';
    await fs.readdirSync(predir + comdir)
        .filter(file => file.endsWith('.js'))
        .forEach(file => {
            const command = require(`.${comdir}/${file}`);
            if(command.name) {
                console.log(`Loaded Command: '${command.name}' from ${predir + comdir}/${file}`);
                client.commands.set(command.name, command);
                comCount++;
            }
        });
    await fs.readdir(predir + comdir, (err, files) => {
        console.log(`Commands Loaded: (${comCount}/${files.length})`);
    });

    //Load Events
    evCount = 0;
    const evdir = '/events';
    await fs.readdirSync(predir + evdir)
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
    await fs.readdir(predir + evdir, (err, files) => {
        console.log(`Events Loaded: (${evCount}/${files.length})`);
    });

    //Log how many GuildConfigs Loaded
    await console.log(`GuildConfigs Loaded: (${dbCount}/${entries})`);

    //Login with Discord Token
    client.login(process.env.BOT_TOKEN);
})();
