require('dotenv')
const { Client,Util, Collection,MessageEmbed,Structures } = require("discord.js");
const keepAlive = require('./server.js')
keepAlive()
async function errorEmbed(text,message){
      const newembed = new Discord.MessageEmbed()
      .setColor("#FF7676")
      .setDescription(`**❌ | ${text} **`)
       return message.channel.send(newembed);
    }
const Discord = require('discord.js');
const client = new Client({
    disableEveryone: true
})
const axios = require("axios")


//=============================================
const channel_id = "1022191210456158299"//your channel id 
//=============================================


client.on('message', async (message) => {
  if (!message.guild) return;
  if (message.author.bot) return;
  try {
  if (message.channel.id != channel_id) return
  let res = await axios.get(`
  http://api.brainshop.ai/get?bid=169418&key=s8eqPR5XBk3WuzCZ&uid=[uid]&msg=[${(message)}]`);//ai api
  message.reply(res.data.cnt);
  } catch {
   errorEmbed(`Bot error, please try again!`,message)
   }
})


client.login("MTAyMjQ4ODc5OTkxNTI5MDYyNA.Guxhs6.ZTBq4mBwMmOkFHFQwAx5jnnDu7R65dhfXpmP5E");//token
