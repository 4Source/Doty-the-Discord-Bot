module.exports = {
	name: 'ready',
	once: true,
	execute(client) {
		console.log(`Doty is Up!\nLogged in as ${client.user.tag}`);
	},
};