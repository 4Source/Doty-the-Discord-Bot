const { DataTypes } = require('sequelize');
const db = require('../database');

const GuildAuditLog = db.define("guild_audits", {
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

module.exports = GuildAuditLog;