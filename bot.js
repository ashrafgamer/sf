console.log(`Online`);
const Discord = require('discord.js');
const client = new Discord.Client();
var ServerID = "505995244672909323"; 
var ChannelID = "515405500339191809";


    console.log(`Online`);
    console.log(`Online`);
client.on('ready', async() => {
    setInterval(()=>{
    client.guilds.get(ServerID).channels.get(ChannelID).send('**Legends NetWork Large erore king , Legends NetWork Large erore king , Legends NetWork Large erore king , Legends NetWork Large erore king , Legends NetWork Large erore king , Legends NetWork Large erore king , Legends NetWork Large erore king , Legends NetWork Large erore king , Legends NetWork Large erore king , Legends NetWork Large erore king , Legends NetWork Large erore king , Legends NetWork Large erore king , Legends NetWork Large erore king , Legends NetWork Large erore king , Legends NetWork Large erore king , Legends NetWork Large erore king , Legends NetWork Large erore king , Legends NetWork Large erore king , Legends NetWork Large erore king , Legends NetWork Large erore king , Legends NetWork Large erore king , Legends NetWork Large erore king , Legends NetWork Large erore king , Legends NetWork Large erore king , Legends NetWork Large erore king , Legends NetWork Large erore king , Legends NetWork Large erore king , Legends NetWork Large erore king , Legends NetWork Large erore king , Legends NetWork Large erore king , Legends NetWork Large erore king , Legends NetWork Large erore king , Legends NetWork Large erore king , Legends NetWork Large erore king , Legends NetWork Large erore king , Legends NetWork Large erore king , Legends NetWork Large erore king , Legends NetWork Large erore king , Legends NetWork Large erore king , Legends NetWork Large erore king , Legends NetWork Large erore king , Legends NetWork Large erore king , Legends NetWork Large erore king ,Legends NetWork Large erore king , Legends NetWork Large erore king , Legends NetWork Large erore king , Legends NetWork Large erore king , Legends NetWork Large erore king , Legends NetWork Large erore king , Legends NetWork Large erore king , Legends NetWork Large erore king , Legends NetWork Large erore king , Legends NetWork Large erore king , Legends NetWork Large erore king , Legends NetWork Large erore king , Legends NetWork Large erore king , Legends NetWork Large , **')
    },205);
});

client.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "say") {
if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('?|**\`ADMINISTRATOR\`ليس لديك صلاحيات`**');
   message.channel.sendMessage(args.join("  "))
   message.delete()
  }
 });

client.login("NTA1OTk1MDA0ODYzMzE1OTY4.DrbsPA.k-U2zG1x3aDuJZ4H0EOx8UfyK8w");
