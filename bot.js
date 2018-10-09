const Discord = require("discord.js")
const client = new Discord.Client();

client.on('ready', () => {
    client.channels.find(c => c.id === '498285418480009216').join();
});


    client.on('ready', () => {
     client.user.setActivity("I Hope Go to US . ❤",{type: 'Listening'});

});

client.login(process.env.BOT_TOKEN);
 
