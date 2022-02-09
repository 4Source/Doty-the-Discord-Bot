/**
 * @typedef {Object} Interaction
 * @property {Snowflake} applicationId
 * @property {*} [channel] TextBasedChannels
 * @property {Snowflake} [channelId]
 * @property {Client} client
 * @property {Date} createdAt
 * @property {number} createdTimestamp
 * @property {*} [guild] Guild
 * @property {Snowflake} [guildId]
 * @property {string} [guildLocale]
 * @property {Snowflake} id
 * @property {string} locale
 * @property {*} [member] (GuildMember|APIGuildMember)
 * @property {*} [memberPermissions] Readonly<Permissions>
 * @property {string} token
 * @property {*} type InteractionType
 * @property {*} user User
 * @property {number} version
 */

/**
 * @typedef {Object} Message
 * @property {*} [activity] MessageActivity
 * @property {Snowflake} [applicationId]
 * @property {*} attachments Collection<Snowflake, MessageAttachment>
 * @property {*} [author] User
 * @property {*} channel (TextChannel|DMChannel|NewsChannel|ThreadChannel)
 * @property {Snowflake} channelId
 * @property {string} [cleanContent]
 * @property {Client} client
 * @property {*} components Array<MessageActionRow>
 * @property {string} [content]
 * @property {Date} createdAt
 * @property {number} createdTimestamp
 * @property {boolean} crosspostable
 * @property {boolean} deletable
 * @property {boolean} editable
 * @property {Date} [editedAt]
 * @property {number} [editedTimestamp]
 * @property {*} embeds Array<MessageEmbed>
 * @property {*} flags Readonly<MessageFlags>
 * @property {*} [groupActivityApplication] ClientApplication
 * @property {Guild} [guild] 
 * @property {Snowflake} [guildId]
 * @property {boolean} hasThread
 * @property {Snowflake} id
 * @property {*} [interaction] MessageInteraction
 * @property {*} [member] GuildMember
 * @property {*} mentions MessageMentions
 * @property {string} [nonce]
 * @property {boolean} partial
 * @property {boolean} pinnable
 * @property {boolean} [pinned]
 * @property {*} reactions ReactionManager
 * @property {*} [reference] MessageReference
 * @property {*} stickers Collection <Snowflake, Sticker>
 * @property {boolean} [system]
 * @property {*} [thread] ThreadChannel
 * @property {boolean} [tts]
 * @property {*} [type] MessageType
 * @property {string} url
 * @property {Snowflake} [webhookId]
 */

/**
 * @typedef {string} Snowflake
 */

/**
 * @typedef {Object} Client
 * @property {*} [application] ClientApplication
 * @property {*} channels ChannelManager
 * @property {*} emojis BaseGuildEmojiManager
 * @property {*} guilds GuildManager
 * @property {*} options ClientOptions
 * @property {Date} [readyAt]
 * @property {number} [readyTimestamp]
 * @property {*} [shard] ShardClientUtil
 * @property {*} sweepers Sweepers
 * @property {string} [token]
 * @property {number} [uptime]
 * @property {*} [user] ClientUser
 * @property {*} users UserManager
 * @property {*} voice ClientVoiceManager
 * @property {*} ws WebSocketManager
 */

/**
 * @typedef {Object} Guild
 * @property {*} [afkChannel] VoiceChannel
 * @property {Snowflake} [afkChannelId]
 * @property {number} [afkTimeout]
 * @property {Snowflake} [applicationId]
 * @property {number} [approximateMemberCount]
 * @property {number} [approximatePresenceCount]
 * @property {boolean} available
 * @property {string} [banner]
 * @property {*} bans GuildBanManager
 * @property {*} channels GuildChannelManager
 * @property {Client} client
 * @property {*} commands GuildApplicationCommandManager
 * @property {Date} createdAt
 * @property {number} createdTimestamp
 * @property {*} defaultMessageNotifications DefaultMessageNotificationLevel
 * @property {string} [description]
 * @property {string} [discoverySplash]
 * @property {*} emojis GuildEmojiManager
 * @property {*} explicitContentFilter ExplicitContentFilterLevel
 * @property {*} features Array<Features>
 * @property {string} [icon]
 * @property {Snowflake} id
 * @property {*} invites GuildInviteManager
 * @property {Date} joinedAt
 * @property {number} joinedTimestamp
 * @property {boolean} large
 * @property {number} maximumBitrate
 * @property {number} [maximumMembers]
 * @property {number} [maximumPresences]
 * @property {*} [me] GuildMember
 * @property {number} memberCount
 * @property {*} members GuildMemberManager
 * @property {*} mfaLevel MFALevel
 * @property {string} name
 * @property {string} nameAcronym
 * @property {*} nsfwLevel NSFWLevel
 * @property {Snowflake} ownerId
 * @property {boolean} partnered
 * @property {string} preferredLocale
 * @property {boolean} premiumProgressBarEnabled
 * @property {number} [premiumSubscriptionCount]
 * @property {*} premiumTier PremiumTier
 * @property {*} presences PresenceManager
 * @property {*} [publicUpdatesChannel] TextChannel
 * @property {Snowflake} [publicUpdatesChannelId]
 * @property {*} roles RoleManager
 * @property {*} [rulesChannel] TextChannel
 * @property {Snowflake} [rulesChannelId]
 * @property {*} scheduledEvents GuildScheduledEventManager
 * @property {*} shard WebSocketShard
 * @property {number} shardId
 * @property {string} [splash]
 * @property {*} stageInstances StageInstanceManager
 * @property {*} stickers GuildStickerManager
 * @property {*} [systemChannel] TextChannel
 * @property {*} systemChannelFlags Readonly<SystemChannelFlags>
 * @property {Snowflake} [systemChannelId]
 * @property {string} [vanityURLCode]
 * @property {number} [vanityURLUses]
 * @property {*} verificationLevel VerificationLevel
 * @property {boolean} verified
 * @property {function} voiceAdapterCreator
 * @property {*} voiceStates VoiceStateManager
 * @property {*} [widgetChannel] TextChannel
 * @property {string} [widgetChannelId]
 * @property {boolean} [widgetEnabled]
 * 
 */

 module.exports.unused = {};