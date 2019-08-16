const Discord=require("discord.js"),
	BigEval = require("bigeval");
	client = new Discord.Client();
client.on("ready", () => {
  console.log("CalcBot Online!");
});
const cl = x=>new BigEval().exec(x);
client.on("message", message => {
  if (message.author.bot) return;
  message.channel.send(`\`\`\`${cl(message.content)}\`\`\``);
});
client.login(process.env.BOT_TOKEN);
