const Discord = require("discord.js")
const client = new Discord.Client();

client.on('ready', () => {
    client.channels.find(c => c.id === '500450967356047371').join();
});


    client.on('ready', () => {
     client.user.setActivity("With a Heart SweetHeart .",{type: 'Listening'});

});


client.login(process.env.BOT_TOKEN);

