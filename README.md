# DiscordWelcomerBot

This code is a Discord bot that sends a welcome message to new members who join a specific server. The welcome message includes information about the new member, such as:

# Their username
# The date and time they joined the server
# The date and time their account was created
# Their member number (i.e., how many members are currently in the server)
# The bot sends this message in a specific channel, which is identified by the WELCOME_CHANNEL_ID variable. The bot uses the guildMemberAdd event to detect when a new member joins the server and then sends the welcome message in the specified channel.
