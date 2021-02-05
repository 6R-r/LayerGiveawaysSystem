  const { GiveawaysManager } = require('discord-giveaways');
  
  client.giveawaysManager = new GiveawaysManager(client, {
      updateCountdownEvery: 5000,
      default: {
          botsCanWin: false,
          exemptPermissions: ["MANAGE_MESSAGES", "ADMINISTRATOR"],
          embedColor: "#FF0000",
          reaction: "🎉"
      }
  });
  
const ms = require('ms');
let prefix = 'g!';
client.on('message', message => {
  if (!message.channel.guild) return;
  if (message.content.startsWith(prefix + 'giveaway')) {
    let args = message.content.slice(prefix.length).trim().split(/ +/g);
    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send('you dont have permissions');

    let channel = message.mentions.channels.first();

    if (!channel) return message.channel.send('Please type a valid channel');

    let giveawayDuration = args[2];

    if (!giveawayDuration || isNaN(ms(giveawayDuration))) return message.channel.send('Pleae type a valid duration');

    let giveawayWinners = args[3];

    if (isNaN(giveawayWinners) || (parseInt(giveawayWinners) <= 0)) return message.channel.send('Please type a valid number of winners');

    let giveawayPrize = message.content.split(" ").slice(4).join(" ");

    if (!giveawayPrize) return message.channel.send('Ok then, I\'ll give away nothing');

    client.giveawaysManager.start(channel, {
      time: ms(giveawayDuration),
      prize: giveawayPrize,
      winnerCount: giveawayWinners,
      hostedBy: true ? message.author : null,
      layerTeam: true,
      messages: {
        giveaway: (true ? "@everyone\n\n" : "") + "GIVEAWAY 🎉",
        giveawayEned: (true ? "@everyone\n\n" : "") + "GIVEAWAY ENDED",
        timeRemaining: "Time remaining: **{duration}**",
        inviteToParticipate: "React with 🎉 to enter",
        winMessage: "Congrats {winners}, you won **{prize}**",
        embedFooter: "Giveaway time!",
        noWinner: "Couldn't determine a winner",
        hostedBy: "Hosted by {user}",
        winners: "winner(s)",
        endedAt: "Ends at",
        units: {//LAYER TEAM COBY RIGHTS
          seconds: "seconds",
          minutes: "minutes",
          hours: "hours",
          days: "days",
          pluralS: false
        }
      }
    })

    message.channel.send(`🎉 **Giveaway** has been starting in ${channel}`);
  }
});
