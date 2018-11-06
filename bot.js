const Discord = require('discord.js'),
    bot = new Discord.Client({sisableEveryone: true})
    console.log("muuuuuuuuute,");
bot.on('guildMemberAdd', member => {
const mohamed= member.guild.channels.get("508619864487886858");
if(!mohamed) return;
if(mohamed) {
setTimeout(() => mohamed.send(`Wlcome To Server **Magic**`), 4000)        
}
});

client.login(process.env.BOT_TOKEN); 

