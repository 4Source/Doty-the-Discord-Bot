/**
 * @typedef {object} Client 
 * @description See Original {@link https://discord.js.org/#/docs/discord.js/stable/class/Client DiscordJS}
 * @property {ClientApplication} [application] The application of this bot
 * @property {ChannelManager} channels All of the Channels that the client is currently handling, mapped by their ids - as long as sharding isn't being used, this will be every channel in every guild the bot is a member of. Note that DM channels will not be initially cached, and thus not be present in the Manager without their explicit fetching or use.
 * @property {BaseGuildEmojiManager} emojis All custom emojis that the client has access to, mapped by their ids
 * @property {GuildManager} guilds All of the guilds the client is currently handling, mapped by their ids - as long as sharding isn't being used, this will be every guild the bot is a member of
 * @property {ClientOptions} options The options the client was instantiated with
 * @property {Date} [readyAt] Time at which the client was last regarded as being in the READY state (each time the client disconnects and successfully reconnects, this will be overwritten)
 * @property {number} [readyTimestamp] Timestamp of the time the client was last READY at
 * @property {ShardClientUtil} [shard] Shard helpers for the client (only if the process was spawned from a ShardingManager)
 * @property {Sweepers} sweepers The sweeping functions and their intervals used to periodically sweep caches
 * @property {string} [token] Authorization token for the logged in bot. If present, this defaults to process.env.DISCORD_TOKEN when instantiating the client
 * @property {number} [uptime] How long it has been since the client last entered the READY state in milliseconds
 * @property {ClientUser} [user] User that the client is logged in as
 * @property {UserManager} users All of the User objects that have been cached at any point, mapped by their ids
 * @property {ClientVoiceManager} voice The voice manager of the client
 * @property {WebSocketManager} ws The WebSocket manager of the client
 * @property {function} destroy Logs out, terminates the connection to Discord, and destroys the client.
 * @property {function} fetchGuildPreview Obtains a guild preview from Discord, available for all guilds the bot is in and all Discoverable guilds.
 * @property {function} fetchGuildTemplate Obtains a template from Discord.
 * @property {function} fetchGuildWidget Obtains the widget data of a guild from Discord, available for guilds with the widget enabled.
 * @property {function} fetchInvite Obtains an invite from Discord.
 * @property {function} fetchPremiumStickerPacks Obtains the list of sticker packs available to Nitro subscribers from Discord.
 * @property {function} fetchSticker Obtains a sticker from Discord.
 * @property {function} fetchVoiceRegions Obtains the available voice regions from Discord.
 * @property {function} fetchWebhook Obtains a webhook from Discord.
 * @property {function} generateInvite Generates a link that can be used to invite the bot to a guild.
 * @property {function} isReady Returns whether the client has logged in, indicative of being able to access properties such as user and application.
 * @property {function} login Logs the client in, establishing a WebSocket connection to Discord.
 * @property {function} sweepMessages Sweeps all text-based channels' messages and removes the ones older than the max message lifetime. If the message has been edited, the time of the edit is used rather than the time of the original message.
 * @property {event} apiRequest Emitted before every API request. This event can emit several times for the same request, e.g. when hitting a rate limit.
 * @property {event} apiResponse Emitted after every API request has received a response. This event does not necessarily correlate to completion of the request, e.g. when hitting a rate limit.
 * @property {event} channelCreate Emitted whenever a guild channel is created.
 * @property {event} channelDelete Emitted whenever a channel is deleted.
 * @property {event} channelPinsUpdate Emitted whenever the pins of a channel are updated. Due to the nature of the WebSocket event, not much information can be provided easily here - you need to manually check the pins yourself.
 * @property {event} channelUpdate Emitted whenever a channel is updated - e.g. name change, topic change, channel type change.
 * @property {event} debug Emitted for general debugging information.
 * @property {event} emojiCreate Emitted whenever a custom emoji is created in a guild.
 * @property {event} emojiDelete Emitted whenever a custom emoji is deleted in a guild.
 * @property {event} emojiUpdate Emitted whenever a custom emoji is updated in a guild.
 * @property {event} error Emitted when the client encounters an error.
 * @property {event} guildBanAdd Emitted whenever a member is banned from a guild.
 * @property {event} guildBanRemove Emitted whenever a member is unbanned from a guild.
 * @property {event} guildCreate Emitted whenever the client joins a guild.
 * @property {event} guildDelete Emitted whenever a guild kicks the client or the guild is deleted/left.
 * @property {event} guildIntegrationsUpdate Emitted whenever a guild integration is updated
 * @property {event} guildMemberAdd Emitted whenever a user joins a guild.
 * @property {event} guildMemberAvailable Emitted whenever a member becomes available in a large guild.
 * @property {event} guildMemberRemove Emitted whenever a member leaves a guild, or is kicked.
 * @property {event} guildMembersChunk Emitted whenever a chunk of guild members is received (all members come from the same guild).
 * @property {event} guildMemberUpdate Emitted whenever a guild member changes - i.e. new role, removed role, nickname.
 * @property {event} guildScheduledEventCreate Emitted whenever a guild scheduled event is created.
 * @property {event} guildScheduledEventDelete Emitted whenever a guild scheduled event is deleted.
 * @property {event} guildScheduledEventUpdate Emitted whenever a guild scheduled event gets updated.
 * @property {event} guildScheduledEventUserAdd Emitted whenever a user subscribes to a guild scheduled event
 * @property {event} guildScheduledEventUserRemove Emitted whenever a user unsubscribes from a guild scheduled event
 * @property {event} guildUnavailable Emitted whenever a guild becomes unavailable, likely due to a server outage.
 * @property {event} guildUpdate Emitted whenever a guild is updated - e.g. name change.
 * @property {event} interactionCreate Emitted when an interaction is created.
 * @property {event} invalidated Emitted when the client's session becomes invalidated. You are expected to handle closing the process gracefully and preventing a boot loop if you are listening to this event.
 * @property {event} invalidRequestWarning Emitted periodically when the process sends invalid requests to let users avoid the 10k invalid requests in 10 minutes threshold that causes a ban
 * @property {event} inviteCreate Emitted when an invite is created.
 * @property {event} inviteDelete Emitted when an invite is deleted.
 * @property {event} messageCreate Emitted whenever a message is created.
 * @property {event} messageDelete Emitted whenever a message is deleted.
 * @property {event} messageDeleteBulk Emitted whenever messages are deleted in bulk.
 * @property {event} messageReactionAdd Emitted whenever a reaction is added to a cached message.
 * @property {event} messageReactionRemove Emitted whenever a reaction is removed from a cached message.
 * @property {event} messageReactionRemoveAll Emitted whenever all reactions are removed from a cached message.
 * @property {event} messageReactionRemoveEmoji Emitted when a bot removes an emoji reaction from a cached message.
 * @property {event} messageUpdate Emitted whenever a message is updated - e.g. embed or content change.
 * @property {event} presenceUpdate Emitted whenever a guild member's presence (e.g. status, activity) is changed.
 * @property {event} rateLimit Emitted when the client hits a rate limit while making a request
 * @property {event} ready Emitted when the client becomes ready to start working.
 * @property {event} roleCreate Emitted whenever a role is created.
 * @property {event} roleDelete Emitted whenever a guild role is deleted.
 * @property {event} roleUpdate Emitted whenever a guild role is updated.
 * @property {event} shardDisconnect Emitted when a shard's WebSocket disconnects and will no longer reconnect.
 * @property {event} shardError Emitted whenever a shard's WebSocket encounters a connection error.
 * @property {event} shardReady Emitted when a shard turns ready.
 * @property {event} shardReconnecting Emitted when a shard is attempting to reconnect or re-identify.
 * @property {event} shardResume Emitted when a shard resumes successfully.
 * @property {event} stageInstanceCreate Emitted whenever a stage instance is created.
 * @property {event} stageInstanceDelete Emitted whenever a stage instance is deleted.
 * @property {event} stageInstanceUpdate Emitted whenever a stage instance gets updated - e.g. change in topic or privacy level
 * @property {event} stickerCreate Emitted whenever a custom sticker is created in a guild.
 * @property {event} stickerDelete Emitted whenever a custom sticker is deleted in a guild.
 * @property {event} stickerUpdate Emitted whenever a custom sticker is updated in a guild.
 * @property {event} threadCreate Emitted whenever a thread is created or when the client user is added to a thread.
 * @property {event} threadDelete Emitted whenever a thread is deleted.
 * @property {event} threadListSync Emitted whenever the client user gains access to a text or news channel that contains threads
 * @property {event} threadMembersUpdate Emitted whenever members are added or removed from a thread. Requires GUILD_MEMBERS privileged intent
 * @property {event} threadMemberUpdate Emitted whenever the client user's thread member is updated.
 * @property {event} threadUpdate Emitted whenever a thread is updated - e.g. name change, archive state change, locked state change.
 * @property {event} typingStart Emitted whenever a user starts typing in a channel.
 * @property {event} userUpdate Emitted whenever a user's details (e.g. username) are changed. Triggered by the Discord gateway events USER_UPDATE, GUILD_MEMBER_UPDATE, and PRESENCE_UPDATE.
 * @property {event} voiceStateUpdate Emitted whenever a member changes voice state - e.g. joins/leaves a channel, mutes/unmutes.
 * @property {event} warn Emitted for general warnings.
 * @property {event} webhookUpdate Emitted whenever a channel has its webhooks changed.
 */

/**
 * @typedef {Object} Guild 
 * @description See Original {@link https://discord.js.org/#/docs/discord.js/stable/class/Guild DiscordJS}
 * @property {VoiceChannel} [afkChannel] AFK voice channel for this guild
 * @property {Snowflake} [afkChannelId] The id of the voice channel where AFK members are moved
 * @property {number} [afkTimeout] The time in seconds before a user is counted as "away from keyboard"
 * @property {Snowflake} [applicationId] The id of the application that created this guild (if applicable)
 * @property {number} [approximateMemberCount] The approximate amount of members the guild has
 * @property {number} [approximatePresenceCount] The approximate amount of presences the guild has
 * @property {boolean} available Whether the guild is available to access. If it is not available, it indicates a server outage
 * @property {string} [banner] The hash of the guild banner
 * @property {GuildBanManager} bans A manager of the bans belonging to this guild
 * @property {GuildChannelManager} channels A manager of the channels belonging to this guild
 * @property {Client} client The client that instantiated this
 * @property {GuildApplicationCommandManager} commands A manager of the application commands belonging to this guild
 * @property {Date} createdAt The time this guild was created at
 * @property {number} createdTimestamp The timestamp this guild was created at
 * @property {DefaultMessageNotificationLevel} defaultMessageNotifications The default message notification level of the guild
 * @property {string} [description] The description of the guild, if any
 * @property {string} [discoverySplash] The hash of the guild discovery splash image
 * @property {GuildEmojiManager} emojis A manager of the emojis belonging to this guild
 * @property {ExplicitContentFilterLevel} explicitContentFilter The explicit content filter level of the guild
 * @property {Array<Features>} features An array of features available to this guild
 * @property {string} [icon] The icon hash of this guild
 * @property {Snowflake} id The guild's id
 * @property {GuildInviteManager} invites A manager of the invites of this guild
 * @property {Date} joinedAt The time the client user joined the guild
 * @property {number} joinedTimestamp The timestamp the client user joined the guild at
 * @property {boolean} large Whether the guild is "large" (has more than large_threshold members, 50 by default)
 * @property {number} maximumBitrate The maximum bitrate available for this guild
 * @property {number} [maximumMembers] The maximum amount of members the guild can have
 * @property {number} [maximumPresences] The maximum amount of presences the guild can have
 * @property {GuildMember} [me] The client user as a GuildMember of this guild
 * @property {number} memberCount The full amount of members in this guild
 * @property {GuildMemberManager} members A manager of the members belonging to this guild
 * @property {MFALevel} mfaLevel The required MFA level for this guild
 * @property {string} name The name of this guild
 * @property {string} nameAcronym The acronym that shows up in place of a guild icon
 * @property {NSFWLevel} nsfwLevel The NSFW level of this guild
 * @property {Snowflake} ownerId The user id of this guild's owner
 * @property {boolean} partnered Whether this guild is partnered
 * @property {string} preferredLocale The preferred locale of the guild, defaults to en-US
 * @property {boolean} premiumProgressBarEnabled Whether this guild has its premium (boost) progress bar enabled
 * @property {number} [premiumSubscriptionCount] The total number of boosts for this server
 * @property {PremiumTier} premiumTier The premium tier of this guild
 * @property {PresenceManager} presences A manager of the presences belonging to this guild
 * @property {TextChannel} [publicUpdatesChannel] Public updates channel for this guild
 * @property {Snowflake} [publicUpdatesChannelId] The community updates channel's id for the guild
 * @property {RoleManager} roles A manager of the roles belonging to this guild
 * @property {TextChannel} [rulesChannel] Rules channel for this guild
 * @property {Snowflake} [rulesChannelId] The rules channel's id for the guild
 * @property {GuildScheduledEventManager} scheduledEvents A manager of the scheduled events of this guild
 * @property {WebSocketShard} shard The Shard this Guild belongs to.
 * @property {number} shardId The id of the shard this Guild belongs to.
 * @property {string} [splash] The hash of the guild invite splash image
 * @property {StageInstanceManager} stageInstances A manager of the stage instances of this guild
 * @property {GuildStickerManager} stickers A manager of the stickers belonging to this guild
 * @property {TextChannel} [systemChannel] System channel for this guild
 * @property {SystemChannelFlags} systemChannelFlags The value set for the guild's system channel flags
 * @property {Snowflake} [systemChannelId] The system channel's id
 * @property {string} [vanityURLCode] The vanity invite code of the guild, if any
 * @property {number} [vanityURLUses] The use count of the vanity URL code of the guild, if any
 * @property {VerificationLevel} verificationLevel The verification level of the guild
 * @property {boolean} verified Whether this guild is verified
 * @property {function} voiceAdapterCreator The voice state adapter for this guild that can be used with @discordjs/voice to play audio in voice and stage channels.
 * @property {VoiceStateManager} voiceStates A manager of the voice states of this guild
 * @property {TextChannel} [widgetChannel] Widget channel for this guild
 * @property {string} [widgetChannelId] The widget channel's id, if enabled
 * @property {boolean} [widgetEnabled] Whether widget images are enabled on this guild
 * @property {function} bannerURL The URL to this guild's banner.
 * @property {function} createTemplate Creates a template for the guild.
 * @property {function} delete Deletes the guild.
 * @property {function} discoverySplashURL The URL to this guild's discovery splash image.
 * @property {function} edit Updates the guild with new information - e.g. a new name.
 * @property {function} editWelcomeScreen Updates the guild's welcome screen
 * @property {function} equals Whether this guild equals another guild. It compares all properties, so for most operations it is advisable to just compare guild.id === guild2.id as it is much faster and is often what most users need.
 * @property {function} fetch Fetches this guild.
 * @property {function} fetchAuditLogs Fetches audit logs for this guild.
 * @property {function} fetchIntegrations Fetches a collection of integrations to this guild. Resolves with a collection mapping integrations by their ids.
 * @property {function} fetchOwner Fetches the owner of the guild. If the member object isn't needed, use Guild#ownerId instead.
 * @property {function} fetchPreview Obtains a guild preview for this guild from Discord.
 * @property {function} fetchTemplates Fetches a collection of templates from this guild. Resolves with a collection mapping templates by their codes.
 * @property {function} fetchVanityData Fetches the vanity URL invite object to this guild. Resolves with an object containing the vanity URL invite code and the use count
 * @property {function} fetchWebhooks Fetches all webhooks for the guild.
 * @property {function} fetchWelcomeScreen Fetches the welcome screen for this guild.
 * @property {function} fetchWidget Fetches the guild widget data, requires the widget to be enabled.
 * @property {function} fetchWidgetSettings Fetches the guild widget settings.
 * @property {function} iconURL The URL to this guild's icon.
 * @property {function} leave Leaves the guild.
 * @property {function} setAFKChannel Edits the AFK channel of the guild.
 * @property {function} setAFKTimeout Edits the AFK timeout of the guild.
 * @property {function} setBanner Sets a new guild banner.
 * @property {function} setDefaultMessageNotifications Edits the setting of the default message notifications of the guild.
 * @property {function} setDiscoverySplash Sets a new guild discovery splash image.
 * @property {function} setExplicitContentFilter Edits the level of the explicit content filter.
 * @property {function} setIcon Sets a new guild icon.
 * @property {function} setName Edits the name of the guild.
 * @property {function} setOwner Sets a new owner of the guild.
 * @property {function} setPreferredLocale Edits the preferred locale of the guild.
 * @property {function} setPremiumProgressBarEnabled Edits the enabled state of the guild's premium progress bar
 * @property {function} setPublicUpdatesChannel Edits the community updates channel of the guild.
 * @property {function} setRulesChannel Edits the rules channel of the guild.
 * @property {function} setSplash Sets a new guild invite splash image.
 * @property {function} setSystemChannel Edits the system channel of the guild.
 * @property {function} setSystemChannelFlags Edits the flags of the default message notifications of the guild.
 * @property {function} setVerificationLevel Edits the verification level of the guild.
 * @property {function} setWidgetSettings Edits the guild's widget settings.
 * @property {function} splashURL The URL to this guild's invite splash image.
 * @property {function} toString When concatenated with a string, this automatically returns the guild's name instead of the Guild object.
 */

/**
 * @typedef {Object} GuildBan 
 * @description See Original {@link https://discord.js.org/#/docs/discord.js/stable/class/GuildBan DiscordJS}
 * @property {Client} client The client that instantiated this
 * @property {Guild} guild The guild in which the ban is
 * @property {boolean} partial Whether this GuildBan is partial. If the reason is not provided the value is null
 * @property {string} [reason] The reason for the ban
 * @property {User} user The user this ban applies to
 * @property {function} fetch Fetches this GuildBan.
 */

/**
 * @typedef {object} GuildMember
 * @description See Original {@link https://discord.js.org/#/docs/discord.js/stable/class/GuildMember DiscordJS}
 * @property {string} [avatar] The guild member's avatar hash
 * @property {string} bannable Whether this member is bannable by the client user
 * @property {Client} client The client that instantiated this
 * @property {Date} [communicationDisabledUntil] The time this member's timeout will be removed
 * @property {number} [communicationDisabledUntilTimestamp] The timestamp this member's timeout will be removed
 * @property {number} displayColor The displayed color of this member in base 10
 * @property {string} displayHexColor The displayed color of this member in hexadecimal
 * @property {string} [displayName] The nickname of this member, or their username if they don't have one
 * @property {Guild} guild The guild that this member is part of
 * @property {Snowflake} id The member's id
 * @property {Date} [joinedAt] The time this member joined the guild
 * @property {number} [joinedTimestamp] The timestamp the member joined the guild at
 * @property {boolean} kickable Whether this member is kickable by the client user
 * @property {boolean} manageable Whether the client user is above this user in the hierarchy, according to role position and guild ownership. This is a prerequisite for many moderative actions.
 * @property {boolean} moderatable Whether this member is moderatable by the client user
 * @property {string} [nickname] The nickname of this member, if they have one
 * @property {boolean} partial Whether this GuildMember is a partial
 * @property {boolean} pending Whether this member has yet to pass the guild's membership gate
 * @property {Permissions} permissions The overall set of permissions for this member, taking only roles and owner status into account
 * @property {Date} [premiumSince] The last time this member started boosting the guild
 * @property {number} [premiumSinceTimestamp] The last timestamp this member started boosting the guild
 * @property {Presence} [presence] The presence of this guild member
 * @property {GuildMemberRoleManager} roles A manager for the roles belonging to this member
 * @property {User} [user] The user that this guild member instance represents
 * @property {VoiceState} voice The voice state of this member
 * @property {function} avatarURL A link to the member's guild avatar.
 * @property {function} ban Bans this guild member.
 * @property {function} createDM Creates a DM channel between the client and this member.
 * @property {function} deleteDM Deletes any DMs with this member.
 * @property {function} disableCommunicationUntil Times this guild member out.
 * @property {function} displayAvatarURL A link to the member's guild avatar if they have one. Otherwise, a link to their User#displayAvatarURL will be returned.
 * @property {function} edit Edits this member.
 * @property {function} equals Whether this guild member equals another guild member. It compares all properties, so for most comparison it is advisable to just compare member.id === member2.id as it is significantly faster and is often what most users need.
 * @property {function} fetch Fetches this GuildMember.
 * @property {function} isCommunicationDisabled Whether this member is currently timed out
 * @property {function} kick Kicks this member from the guild.
 * @property {function} permissionsIn Returns channel.permissionsFor(guildMember). Returns permissions for a member in a guild channel, taking into account roles and permission overwrites.
 * @property {function} send Sends a message to this channel.
 * @property {function} setNickname Sets the nickname for this member.
 * @property {function} timeout Times this guild member out.
 * @property {function} toString When concatenated with a string, this automatically returns the user's mention instead of the GuildMember object.
 */

/**
 * @typedef {Object} Interaction 
 * @description See Original {@link https://discord.js.org/#/docs/discord.js/stable/class/Interaction DiscordJS}
 * @property {Snowflake} applicationId The application's id
 * @property {TextBasedChannels} [channel] The channel this interaction was sent in
 * @property {Snowflake} [channelId] The id of the channel this interaction was sent in
 * @property {Client} client The client that instantiated this
 * @property {Date} createdAt The time the interaction was created at
 * @property {number} createdTimestamp The timestamp the interaction was created at
 * @property {Guild} [guild] The guild this interaction was sent in
 * @property {Snowflake} [guildId] The id of the guild this interaction was sent in
 * @property {string} [guildLocale] The preferred locale from the guild this interaction was sent in
 * @property {Snowflake} id The interaction's id
 * @property {string} locale The locale of the user who invoked this interaction
 * @property {(GuildMember|APIGuildMember)} [member] If this interaction was sent in a guild, the member which sent it
 * @property {Permissions} [memberPermissions] The permissions of the member, if one exists, in the channel this interaction was executed in
 * @property {string} token The interaction's token
 * @property {InteractionType} type The interaction's type
 * @property {User} user The user which sent this interaction
 * @property {number} version The version
 * @property {function} inCachedGuild Indicates whether or not this interaction is both cached and received from a guild.
 * @property {function} inGuild Indicates whether this interaction is received from a guild.
 * @property {function} inRawGuild Indicates whether or not this interaction is received from an uncached guild.
 * @property {function} isApplicationCommand Indicates whether this interaction is a BaseCommandInteraction.
 * @property {function} isAutocomplete Indicates whether this interaction is an AutocompleteInteraction
 * @property {function} isButton Indicates whether this interaction is a ButtonInteraction.
 * @property {function} isCommand Indicates whether this interaction is a CommandInteraction.
 * @property {function} isContextMenu Indicates whether this interaction is a ContextMenuInteraction
 * @property {function} isMessageComponent Indicates whether this interaction is a MessageComponentInteraction.
 * @property {function} isMessageContextMenu Indicates whether this interaction is a MessageContextMenuInteraction
 * @property {function} isSelectMenu Indicates whether this interaction is a SelectMenuInteraction.
 * @property {function} isUserContextMenu Indicates whether this interaction is a UserContextMenuInteraction
 */

/**
 * @typedef {Object} Message 
 * @description See Original {@link https://discord.js.org/#/docs/discord.js/stable/class/Message DiscordJS}
 * @property {MessageActivity} [activity] Group activity
 * @property {Snowflake} [applicationId] The id of the application of the interaction that sent this message, if any
 * @property {Collection<Snowflake, MessageAttachment>} attachments A collection of attachments in the message - e.g. Pictures - mapped by their ids
 * @property {User} [author] The author of the message
 * @property {(TextChannel|DMChannel|NewsChannel|ThreadChannel)} channel The channel that the message was sent in
 * @property {Snowflake} channelId The id of the channel the message was sent in
 * @property {string} [cleanContent] The message contents with all mentions replaced by the equivalent text. If mentions cannot be resolved to a name, the relevant mention in the message content will not be converted.
 * @property {Client} client The client that instantiated this
 * @property {Array<MessageActionRow>} components A list of MessageActionRows in the message
 * @property {string} [content] The content of the message
 * @property {Date} createdAt The time the message was sent at
 * @property {number} createdTimestamp The timestamp the message was sent at
 * @property {boolean} crosspostable Whether the message is crosspostable by the client user
 * @property {boolean} deletable Whether the message is deletable by the client user
 * @property {boolean} editable Whether the message is editable by the client user
 * @property {Date} [editedAt] The time the message was last edited at (if applicable)
 * @property {number} [editedTimestamp] The timestamp the message was last edited at (if applicable)
 * @property {Array<MessageEmbed>} embeds A list of embeds in the message - e.g. YouTube Player
 * @property {MessageFlags} flags Flags that are applied to the message
 * @property {ClientApplication} [groupActivityApplication] Supplemental application information for group activities
 * @property {Guild} [guild] The guild the message was sent in (if in a guild channel)
 * @property {Snowflake} [guildId] The id of the guild the message was sent in, if any
 * @property {boolean} hasThread Whether this message has a thread associated with it
 * @property {Snowflake} id The message's id
 * @property {MessageInteraction} [interaction] Partial data of the interaction that this message is a reply to
 * @property {GuildMember} [member] Represents the author of the message as a guild member. Only available if the message comes from a guild where the author is still a member
 * @property {MessageMentions} mentions All valid mentions that the message contains
 * @property {string} [nonce] A random number or string used for checking message delivery
 * @property {boolean} partial Whether or not this message is a partial
 * @property {boolean} pinnable Whether the message is pinnable by the client user
 * @property {boolean} [pinned] Whether or not this message is pinned
 * @property {ReactionManager} reactions A manager of the reactions belonging to this message
 * @property {MessageReference} [reference] Message reference data
 * @property {Collection<Snowflake, Sticker>} stickers A collection of stickers in the message
 * @property {boolean} [system] Whether or not this message was sent by Discord, not actually a user (e.g. pin notifications)
 * @property {ThreadChannel} [thread] The thread started by this message
 * @property {boolean} [tts] Whether or not the message was Text-To-Speech
 * @property {MessageType} [type] The type of the message
 * @property {string} url The URL to jump to this message
 * @property {Snowflake} [webhookId] The id of the webhook that sent the message, if applicable
 * @property {function} awaitMessageComponent Collects a single component interaction that passes the filter. The Promise will reject if the time expires.
 * @property {function} awaitReactions Similar to createReactionCollector but in promise form. Resolves with a collection of reactions that pass the specified filter.
 * @property {function} createMessageComponentCollector Creates a message component interaction collector.
 * @property {function} createReactionCollector Creates a reaction collector.
 * @property {function} crosspost Publishes a message in an announcement channel to all channels following it.
 * @property {function} delete Deletes the message.
 * @property {function} edit Edits the content of the message.
 * @property {function} equals Used mainly internally. Whether two messages are identical in properties. If you want to compare messages without checking all the properties, use message.id === message2.id, which is much more efficient. This method allows you to see if there are differences in content, embeds, attachments, nonce and tts properties.
 * @property {function} fetch Fetch this message.
 * @property {function} fetchReference Fetches the Message this crosspost/reply/pin-add references, if available to the client
 * @property {function} fetchWebhook Fetches the webhook used to create this message.
 * @property {function} inGuild Whether this message is from a guild.
 * @property {function} pin Pins this message to the channel's pinned messages.
 * @property {function} react Adds a reaction to the message.
 * @property {function} removeAttachments Removes the attachments from this message.
 * @property {function} reply Send an inline reply to this message.
 * @property {function} resolveComponent Resolves a component by a custom id.
 * @property {function} startThread Create a new public thread from this message
 * @property {function} suppressEmbeds Suppresses or unsuppresses embeds on a message.
 * @property {function} toString When concatenated with a string, this automatically concatenates the message's content instead of the object.
 * @property {function} unpin Unpins this message from the channel's pinned messages.
 */

/**
 * @typedef {string} Snowflake See Original {@link https://discord.js.org/#/docs/discord.js/stable/typedef/Snowflake DiscordJS}
 */

/**
 * @typedef {Object} User 
 * @description See Original {@link https://discord.js.org/#/docs/discord.js/stable/class/User DiscordJS}
 * @property {number} [accentColor] The base 10 accent color of the user's banner
 * @property {string} [avatar] The user avatar's hash
 * @property {string} [banner] The user banner's hash
 * @property {boolean} [bot] Whether or not the user is a bot
 * @property {Client} client The client that instantiated this
 * @property {Date} createdAt The time the user was created at
 * @property {number} createdTimestamp The timestamp the user was created at
 * @property {string} defaultAvatarURL A link to the user's default avatar
 * @property {string} [discriminator] A discriminator based on username for the user
 * @property {DMChannel} [dmChannel] The DM between the client's user and this user
 * @property {UserFlags} [flags] The flags for this user
 * @property {string} [hexAccentColor] The hexadecimal version of the user accent color, with a leading hash
 * @property {Snowflake} id The user's id
 * @property {boolean} partial Whether this User is a partial
 * @property {boolean} [system] Whether the user is an Official Discord System user (part of the urgent message system)
 * @property {string} [tag] The Discord Tag for this user
 * @property {string} [username] The username of the user
 * @property {function} avatarURL A link to the user's avatar.
 * @property {function} bannerURL A link to the user's banner.
 * @property {function} createDM Creates a DM channel between the client and the user.
 * @property {function} deleteDM Deletes a DM channel (if one exists) between the client and the user. Resolves with the channel if successful.
 * @property {function} displayAvatarURL A link to the user's avatar if they have one. Otherwise a link to their default avatar will be returned.
 * @property {function} equals Checks if the user is equal to another. It compares id, username, discriminator, avatar, banner, accent color, and bot flags. It is recommended to compare equality by using user.id === user2.id unless you want to compare all properties.
 * @property {function} fetch Fetches this user.
 * @property {function} fetchFlags Fetches this user's flags.
 * @property {function} send Sends a message to this channel.
 * @property {function} toString When concatenated with a string, this automatically returns the user's mention instead of the User object.
 */


 module.exports.unused = {};