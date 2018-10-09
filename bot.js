const Discord = require("discord.js")
const client = new Discord.Client();

client.on('ready', () => {
    client.channels.find(c => c.id === '498488191750242314').join();
});


    client.on('ready', () => {
     client.user.setActivity("I Hope Go To US . ❤",{type: 'Listening'});

});


client.login(process.env.BOT_TOKEN);
 
                            
