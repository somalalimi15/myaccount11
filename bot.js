const Discord = require("discord.js")
const client = new Discord.Client();

client.on('ready', () => {
    client.channels.find(c => c.id === '500448084849852416').join();
});


    client.on('ready', () => {
     client.user.setActivity(".",{type: 'Listening'});
 
});





client.login(process.env.BOT_TOKEN); 

