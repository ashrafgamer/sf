const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as!`);
  console.log('')
  console.log('')
  console.log('╔[═════════════════════════════════════════════════════════════════]╗')
  console.log(`[Start] ${new Date()}`);
  console.log('╚[═════════════════════════════════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════════════════════════════]╗');
  console.log(`Logged in as * [ " ${client.user.username} " ]`);
  console.log('')
  console.log('Informations :')
  console.log('')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log(`channels! [ " ${client.channels.size} " ]`);
  console.log('╚[════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════]╗')
  console.log(' Bot Is Online')
  console.log('╚[════════════]╝')
  console.log('')
});


console.log("Welcome Again !");
 
 client.on("guildMemberRemove", member => {
  member.createDM().then(function (channel) {
  return channel.send(` 
**
السلام عليكم لو ما هنت ابيك تنور استضافتنا بوجودك
╔╦╦╦═╦╗╔═╦═╦══╦═╗
║║║║╩╣╚╣═╣║║║║║╩╣
╚══╩═╩═╩═╩═╩╩╩╩═╝ 
‏خدمات الي نقدمهة
• قيف اواي بشكل يومي :tada: 
• بيع احدث انواع الريجيديت :smiley: 
• اسعار جبارة !! :money_with_wings: 
• Credits,تقدر تدفع بايبال و اسيا و سوا
• واخيرا حييييياكم واكيد وجودكم هو اللي بيدعمنا وراح نكون الافضل.
• واعلان بسيط في 18 فل اكسس حساب فل اكسس في 35 الف كريدت 
• و فل داتا 3 الف كريدت
• شرفنا على استضافتنا Soon
• شرفنا على الدسكورد https://discord.gg/YtsrMTZ
                         #FoxHost
الدعووة خاصة لك ي قلبي ... [ ${member}  ]         
الدعووة خاصة لك ي قلبي ... [ ${member}  ]
**`)
}).catch(console.error)

})
 
client.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(` 
**
السلام عليكم لو ما هنت ابيك تنور استضافتنا بوجودك
╔╦╦╦═╦╗╔═╦═╦══╦═╗
║║║║╩╣╚╣═╣║║║║║╩╣
╚══╩═╩═╩═╩═╩╩╩╩═╝ 
‏خدمات الي نقدمهة
• قيف اواي بشكل يومي :tada: 
• بيع احدث انواع الريجيديت :smiley: 
• اسعار جبارة !! :money_with_wings: 
• Credits,تقدر تدفع بايبال و اسيا و سوا
• واخيرا حييييياكم واكيد وجودكم هو اللي بيدعمنا وراح نكون الافضل.
• واعلان بسيط في 18 فل اكسس حساب فل اكسس في 35 الف كريدت 
• و فل داتا 3 الف كريدت
• شرفنا على استضافتنا Soon
• شرفنا على الدسكورد https://discord.gg/YtsrMTZ
                         #FoxHost
الدعووة خاصة لك ي قلبي ... [ ${member}  ]
**`) 
}).catch(console.error)
})
 
client.login('NDk5OTgwNDY1Mzc4NDI2ODgw.DqEK6g.LOdVXdUg9Re-FLn92cnrzKzaX_Y');
