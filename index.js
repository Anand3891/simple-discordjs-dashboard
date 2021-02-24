
const Discord = require("discord.js");
const mongoose = require("mongoose");
const config = require("./config");
const Dashboard = require("./dashboard/dashboard");

// We instiate the client and connect to database.
const client = new Discord.Client();
mongoose.connect(config.mongodbUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
client.config = config;

// We listen for client's ready event.
client.on("ready", () => {
  console.log(`Bot is ready. (${client.guilds.cache.size} Guilds - ${client.channels.cache.size} Channels - ${client.users.cache.size} Users)`);
  Dashboard(client);
});

// We listen for message events.
client.on("message", async (message) => {
});

// Listening for error & warn events.
client.on("error", console.error);
client.on("warn", console.warn);

// We login into the bot.
client.login(config.token);