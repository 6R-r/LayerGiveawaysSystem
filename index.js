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
  let prefix = 'g!';

const ms = require('ms');
client.on('message', message => {
  if (!message.channel.guild) return;
  if (message.content.startsWith(prefix + 'start')) {
    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send('You are not allowed to start giveaways');
    let args = message.content.slice(prefix.length).trim().split(/ +/g);
        let channel = message.mentions.channels.first();

        if (!channel) return message.channel.send('Please provide a channel');

        let giveawayDuration = args[2];

        if (!giveawayDuration || isNaN(ms(giveawayDuration))) return message.channel.send('Pleae provide a valid duration');

        let giveawayWinners = args[3];

        if (isNaN(giveawayWinners) || (parseInt(giveawayWinners) <= 0)) return message.channel.send('Please provide a valid number of winners!');

        let giveawayPrize = args.slice(4).join(" ");

        if (!giveawayPrize) return message.channel.send('Ok then, I\'ll give away nothing');

        client.giveawaysManager.start(channel, {
            time: ms(giveawayDuration),
            prize: giveawayPrize,
            winnerCount: giveawayWinners,
            hostedBy: true ? message.author : null,

            messages: {
                giveaway: (false ? "@everyone\n\n" : "") + "🎉 GIVEAWAY 🎉",
                giveawayEned: (true ? "@everyone\n\n" : "") + "GIVEAWAY ENDED",
                timeRemaining: "Time remaining: **{duration}**",
                inviteToParticipate: "React with 🎉 to enter",
                winMessage: "Congrats {winners}, you won **{prize}**",
                embedFooter: "Giveaway time!",
                noWinner: "Couldn't determine a winner",
                hostedBy: "Hosted by {user}",
                winners: "winner(s)",
                endedAt: "Ends at",
                units: {
                    seconds: "seconds",
                    minutes: "minutes",
                    hours: "hours",
                    days: "days",
                    pluralS: false
                }
            }
        })

        message.channel.send(`🎉 Giveaway starting in ${channel} Hosted by <@${message.author.id}>.`);
    }
});





client.on('message', message => {
  if (!message.channel.guild) return;
  if (message.content.startsWith(prefix + 'end')) {
  let layerArgs = message.content.split(" ").slice(1).join(" ")
    if(!message.member.hasPermission('MANAGE_MESSAGES')){
        return message.channel.send(':x: You need to have the manage messages permissions to reroll giveaways.');
    }

    if(!layerArgs){
        return message.channel.send(':x: You have to specify a valid message ID!');
    }

    let giveaway = 
    client.giveawaysManager.giveaways.find((g) => g.prize === layerArgs) ||
    client.giveawaysManager.giveaways.find((g) => g.messageID === layerArgs);

    if(!giveaway){
        return message.channel.send('Unable to find a giveaway for **`'+ layerArgs + '`**.');
    }

    client.giveawaysManager.edit(giveaway.messageID, {
        setEndTimestamp: Date.now()
    })
    .then(() => {
        message.channel.send('Giveaway will end in less than **'+(client.giveawaysManager.options.updateCountdownEvery/1000)+' seconds...**');
    })
    .catch((e) => {
        if(e.startsWith(`Giveaway with message ID **${giveaway.messageID}** is already ended.`)){
            message.channel.send('This giveaway is already ended!');
        } else {
            console.error(e);
            message.channel.send('An error occured...');
        }
    });
  }
  });
//layer team .. حقوق لاير تيم
