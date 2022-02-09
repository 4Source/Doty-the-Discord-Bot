const fs = require('fs');
const { Client, Collection, Intents } = require('discord.js');
const db = require("./database/database");
const GuildConfig = require('./database/models/guildConfig');
const GuildAuditLog = require('./database/models/guildAuditLog');
const { init } = require('./websocket/websocket.module');

console.log("Starting...");

//Load Intents
/**
 * @type {number}
 */
let comb_intents = 0;
{
    const intdir = './src/events';
    fs.readdirSync(intdir)
        .filter(file => file.endsWith('.js'))
        .forEach(file => {
            const  intents = require(`.${intdir}/${file}`).intents;

            if(intents){
                comb_intents = comb_intents | intents;
            }
        }
    );
}

//Create Client Instance
const client = new Client({ intents: comb_intents});
client.slashCommands = new Collection();
client.commands = new Collection();
client.guildConfigs = new Map();

(async () => {
    // WebSocket Connection
    const webSocket = init('http://localhost:3001');

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

    let dbCount = 0;
    const entries = await GuildConfig.count();
    dbConfigs.forEach(config => {
        client.guildConfigs.set(config.guild_id, config.dataValues);
        // WebSocket Listening to GuildId 
        webSocket.onGuild(client, {guild_id: `${config.guild_id}`});
        dbCount++;
    });

    let consColor = (dbCount == entries) ? "\x1b[32m" : "\x1b[31m";
    await console.log(`GuildConfigs Loaded: ${consColor}(${dbCount}/${entries})\x1b[0m`);
    
    //Load SlashCommands
    let scomCount = 0;
    const scomdir = './src/commands/slashCommands';
    await fs.readdirSync(scomdir)
        .filter(file => file.endsWith('.js'))
        .forEach(file => {
            const command = require(`.${scomdir}/${file}`);
            if(command && command.data && command.data.name){
                //console.log(`Loaded SlashCommand: '${command.data.name}' from ${scomdir}/${file}`);
                client.slashCommands.set(command.data.name, command);
                scomCount++;
            }
        });
    await fs.readdir(scomdir, (err, files) => {
        let consColor = (scomCount == files.length) ? "\x1b[32m" : "\x1b[31m";
        console.log(`SlashCommands Loaded: ${consColor}(${scomCount}/${files.length})\x1b[0m`);
    });

    //Load Commands
    let comCount = 0;
    const comdir = './src/commands/prefixCommands';
    await fs.readdirSync(comdir)
        .filter(file => file.endsWith('.js'))
        .forEach(file => {
            const command = require(`.${comdir}/${file}`);
            if(command && command.name) {
                //console.log(`Loaded Command: '${command.name}' from ${comdir}/${file}`);
                client.commands.set(command.name, command);
                comCount++;
            }
        });
    await fs.readdir(comdir, (err, files) => {
        let consColor = (comCount == files.length) ? "\x1b[32m" : "\x1b[31m";
        console.log(`Prefix Commands Loaded: ${consColor}(${comCount}/${files.length})\x1b[0m`);
    });

    //Load Events
    let evCount = 0;
    const evdir = './src/events';
    await fs.readdirSync(evdir)
        .filter(file => file.endsWith('.js'))
        .forEach(file => {
            const  event = require(`.${evdir}/${file}`).event;

            if(event && event.name){
                //console.log(`Loaded Event: '${event.name}' from ${evdir}/${file}`);
                if (event.once) {
                    client.once(event.name, (...args) => event.execute(...args));
                } else {
                    client.on(event.name, (...args) => event.execute(...args));
                }
                evCount++;
            }
        });
    await fs.readdir(evdir, (err, files) => {
        let consColor = (evCount == files.length) ? "\x1b[32m" : "\x1b[31m";
        console.log(`Events Loaded: ${consColor}(${evCount}/${files.length})\x1b[0m`);
    });
   

    //Login with Discord Token
    client.login(process.env.BOT_TOKEN);
})();
