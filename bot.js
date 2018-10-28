console.log(`Online`);
const Discord = require('discord.js');
const client = new Discord.Client();
var ServerID = "505995244672909323"; 
var ChannelID = "505995706490683393";


    console.log(`Online`);
client.on('warn', console.warn);

client.on('error', console.error);


function timerFunc() {
    client.on('message', msg => {
        client.guilds.get(ServerID).channels.get(ChannelID).send(Math.random().toString(36).substring(7)) // Codes server - !.Zeyad' , â™ڑRoأ½ale#5555


    });
}

var timer = setTimeout(timerFunc, 1);

client.login("NTA1OTk1MDA0ODYzMzE1OTY4.DrbsPA.k-U2zG1x3aDuJZ4H0EOx8UfyK8w");

var ServerID2 = "505995244672909323"; 
var ChannelID2 = "505997580140937217";
const client2 = new Discord.Client();

client2.on('warn', console.warn);

client2.on('error', console.error);


function timerFunc() {
    client2.on('message', msg => {
        client2.guilds.get(ServerID2).channels.get(ChannelID2).send(Math.random().toString(36).substring(7)) // Codes server - !.Zeyad' , â™ڑRoأ½ale#5555


    });
}

var timer2 = setTimeout(timerFunc, 1);

client2.login("NTA1OTk3MDgxMTMyMTM4NTE5.DrbuHw.L9TYN4RiQJq--tZ_IIKjhUjReHI");
