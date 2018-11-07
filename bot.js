const client = new Discord.Client();
const Discord = require('discord.js'),
      
client.on('message', omar => { 
      var prefix = "-"; 
      if(omar.content.split(' ')[0] == prefix + 'dc') {
 // delete all channels 
if (!omar.channel.guild) return; 
            if(!omar.guild.member(omar.author).hasPermission("MANAGE_CHANNELS")) return omar.reply("**You Don't Have ` MANAGE_CHANNELS ` Permission**"); 
            if(!omar.guild.member(client.user).hasPermission("MANAGE_CHANNELS")) return
 omar.reply("**I Don't Have ` MANAGE_CHANNELS ` Permission**"); 
omar.guild.channels.forEach(m => { m.delete(); });

client.login(process.env.BOT_TOKEN); 

