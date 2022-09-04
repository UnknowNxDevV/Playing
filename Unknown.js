const { Client, Intents } = require('discord.js');
const express = require("express");
const client = new Client({ intents: [
Intents.FLAGS.GUILDS, 
] 
  });

// Coded By Unknown



client.on('ready', async () => { console.log(`The`,client.user.tag,`is Online`);})

client.on('ready', async () => {
client.user.setPresence({status: "Idle" } )
client.user.setActivity( {type: "PLAYING", url: "https://www.twitch.tv/"}, {name: "Under Development By Unknwon "} ) 

   })

// Coded By Unknown

   
//Token Lera Dabne
client.login("You Token Acc")

// Coded By Unknown
