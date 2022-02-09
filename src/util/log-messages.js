module.exports = {
    /**
     * @param {string} guildID Guild ID whitch is Missing
     * @param {string} from Where send Message
     */
    noGuildConfigsFound: function (guildID, from) {
        console.log(`${from}: No guild Config with this ID [${guildID}] found!`)
    }
}