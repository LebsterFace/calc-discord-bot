const Discord = require("discord.js"),
	BigEval = require("bigeval");

const client = new Discord.Client(),
calc = new BigEval();

client.on("ready", () => {
	console.log("CalcBot Online!");
});

client.on("message", message => {
	if (message.author.bot || message.channel.type !== "dm") return;
	message.channel.send("```" + calc.exec(message.content) + "```");
});

client.login(require("./config.json").BOT_TOKEN);