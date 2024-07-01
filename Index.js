require('dotenv').config();

const { Client, EmbedBuilder } = require('discord.js');

const client = new Client({
  intents: [
    'GUILDS',
    'GUILD_MEMBERS',
    'GUILD_MESSAGES'
  ]
});

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('guildMemberAdd', (member) => {
  const guild = member.guild;
  const welcomeChannel = guild.channels.cache.get('welcome-channel-id');
  if (!welcomeChannel) return;

  const memberCount = guild.memberCount;
  const embed = new EmbedBuilder()
    .setColor('#000000')
    .setTitle(`Welcome to the server, ${member.user.username}!`)
    .setDescription(`We're glad you're here.`)
    .setThumbnail(member.user.displayAvatarURL())
    .addFields(
      { name: 'Username:', value: member.user.username },
      { name: 'Joined:', value: member.joinedAt.toLocaleDateString(), inline: true },
      { name: 'Time Joined:', value: member.joinedAt.toLocaleTimeString(), inline: true },
      { name: 'Account Created:', value: member.user.createdAt.toLocaleDateString(), inline: true },
      { name: 'Member #:', value: memberCount.toString() }
    );

  welcomeChannel.send({ embeds: [embed] });
});

client.login(process.env.TOKEN);
