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
