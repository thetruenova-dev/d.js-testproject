const fs = require('node:fs');
const { Client, Collection, Intents } = require('discord.js');
const { token, clientId } = require('./config.json');

const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

