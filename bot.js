const { Client, Intents } = require('discord.js');
const express = require("express");
const client = new Client({ intents: [
Intents.FLAGS.GUILDS, 
] 
  });




client.on('ready', async () => { console.log(`The`,client.user.tag,`is Online`);})

client.on('ready', async () => {
client.user.setPresence({status: "dnd" } )
client.user.setActivity( {type: "PLAYING", url: "https://www.twitch.tv/@#£"}, {name: "Bot Under Development"} ) 

   })
   
client.login("ODAyOTI3NTMzMDcwMzUyNDI1.YA2WiQ.Sv2lXtLDG_dVb9VQVOpfaKt2Two")
