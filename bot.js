const Discord = require("discord.js")
const client = new Discord.Client();

client.on('ready', () => {
    client.channels.find(c => c.id === '500441107235209248').join();
});


    client.on('ready', () => {
     client.user.setActivity("Genial 🍃.",{type: 'Listening'});
 
});


client.login(process.env.BOT_TOKEN); 

