module.exports = {
	name: 'ready',
	once: true,
	execute(client) {
		console.log(`Doty is Up! Logged in as ${client.user.tag}`);
	},
};