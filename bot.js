const Discord = require("discord.js")
const client = new Discord.Client();

client.on('ready', () => {
    client.channels.find(c => c.id === '496333620580057098').join();
});

client.on('ready', () => {
    client.channels.find(c => c.id === '491674187870502944').join();
});

    client.on('ready', () => {
     client.user.setActivity("- وآحـد مقهورر من [رينآد] .ء",{type: 'Listening'});

});

client.login(process.env.BOT_TOKEN);
 
