const Discord = require('discord.js'),
    bot = new Discord.Client({sisableEveryone: true})
    console.log("SoM");
bot.on('guildMemberAdd', member => {
const msg= member.guild.channels.get("508619864487886858");
if(!msg) return;
if(msg) {
setTimeout(() => msg.send(`** - Welcome To Magic, **`), 4000)        
}
});

client.login(process.env.BOT_TOKEN); 

