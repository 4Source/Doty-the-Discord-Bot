const { DataTypes } = require('sequelize');
const db = require('../database');

/**
 * @readonly
 * @enum {string}
 * @property {string} NODE A note to an Member
 * @property {string} WARN A warning to an Member
 * @property {string} MUTE Member get Muted
 * @property {string} KICK Member get kicked from Guild
 * @property {string} TIMEOUT Member get a timeout
 * @property {string} BAN Member get banned from Guild
 */
const AUDIT_TYPES = Object.freeze({
    NODE: 'node',
    WARN: 'warn',
    MUTE: 'mute',
    KICK: 'kick',
    TIMEOUT: 'timeout',
    BAN: 'ban'
});
module.exports = AUDIT_TYPES;

/**
 * @typedef {Object} GuildAuditLog
 * @property {number} id The ID of this Log
 * @property {string} guild_id The ID of the Guild
 * @property {string} member_id The ID of the Member who was affected
 * @property {string} mod_id The ID of the Mod who did this
 * @property {string} reason The Reason
 * @property {Date} reported_on The Date when this was created
 * @property {AUDIT_TYPES} type
 * 
 */

 module.exports.GuildAuditLog = db.define("guild_audits", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    guild_id: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    member_id: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    mod_id: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    reason: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    reported_on: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    type: {
        type: DataTypes.ENUM,
        values: [ 'node', 'warn', 'mute', 'kick', 'timeout', 'ban' ],
        allowNull: false,
    },
}, {
    //Configuration Sequelize
    timestamps: false
});
