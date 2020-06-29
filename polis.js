

Save New Duplicate & Edit Just Text 
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
const Discord = require('discord.js');
var request = require('request');

exports.run = (client, message, args) => {
    request('https://yusuf-api.glitch.me/api/fbi', function (error, response, body) {
    if (error) return console.log('Hata:', error);
    else if (!error) {
        var info = JSON.parse(body);
      const embedasd = new Discord.RichEmbed()
      .setColor('RANDOM')
      .setTitle(`FBİ!`)
      .setImage(info.fotograf)
      message.channel.send(embedasd);
    }
})};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["fbigif", "fbi-gif", "fbi"],
  permLevel: 0
};

exports.help = {
  name: "fbi-gif",
  description: "Rastgele fbi gifleri atar!",
  usage: "fbi-gif"
};
