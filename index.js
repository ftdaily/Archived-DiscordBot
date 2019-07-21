"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const Discord = require("discord.js");
const ConfigFile = require("./config");
const client = new Discord.Client();
let commands = [];
loadCommands(`${__dirname}/commands`);
client.on("ready", () => {
    client.user.setActivity(`k!h | Bot on developent | Server: Weebs Union | https://discord.gg/uaDP8Xc`, { type: "PLAYING" });
    console.log("Welcome to developer mode, developer!");
});
client.on("guildMemberAdd", member => {
    let welcomemsgembed = new Discord.RichEmbed()
        .setAuthor(`User Joined`)
        .setColor(0x00fa15)
        .setDescription(`Hello, welcome ${member.displayName} to our server! I hope you enjoy your time in here!`)
        .setImage(member.user.displayAvatarURL)
        .setFooter(`Support: https://discord.gg/bcxQxPw`);
    let sendpmwelcome = new Discord.RichEmbed()
        .setAuthor(`Welcome ${member.displayName} to our server!`)
        .setColor(0xebfa1b)
        .setImage(member.guild.iconURL)
        .setDescription(`Hello ${member.displayName}.
Thanks for joining us!
Welcome to Weebs Union!
Read the rules to know the ToS of Discord and rules of this server!
            
Ping the discord staff in support if you need help or do k!helpsupport.
【 Keep your message is right topic 】
【 Staff are not responsible for NSFW channel since you applied the roles by self 】
【 Custom roles are in self-roles 】
【 You can also colorize your name in colors channel 】

【 Share this link 】
https://discord.io/weebsunion
 --------------------------------------
https://discord.gg/bcxQxPw
--------------------------------------`);
    let welcomeChannel = member.guild.channels.find(channel => channel.name === "📣welcome-leave📣");
    welcomeChannel.sendEmbed(welcomemsgembed);
    let memberRole = member.guild.roles.find(role => role.id == "587991372691406888");
    member.addRole(memberRole);
    member.sendEmbed(sendpmwelcome);
});
client.on("guildMemberRemove", memberleft => {
    let leftmsgembed = new Discord.RichEmbed()
        .setAuthor("User Left")
        .setColor(0xa80000)
        .setImage(memberleft.user.displayAvatarURL)
        .setDescription(`${memberleft.displayName} just left from our server. Wish to see you again :(`)
        .setFooter(`Support: https://discord.gg/bcxQxPw`);
    let welcomeChannel = memberleft.guild.channels.find(channel => channel.name === "📣welcome-leave📣");
    welcomeChannel.sendEmbed(leftmsgembed);
});
client.on("message", msg => {
    if (msg.author.bot) {
        return;
    }
    if (msg.channel.type == "dm") {
        return;
    }
    if (!msg.content.startsWith(ConfigFile.config.prefix)) {
        return;
    }
    handleCommand(msg);
});
function handleCommand(msg) {
    return __awaiter(this, void 0, void 0, function* () {
        let command = msg.content.split(" ")[0].replace(ConfigFile.config.prefix, "").toLowerCase();
        let args = msg.content.split(" ").slice(1);
        for (const commandClass of commands) {
            try {
                if (!commandClass.isThisCommand(command)) {
                    continue;
                }
                yield commandClass.runCommand(args, msg, client);
            }
            catch (exception) {
                console.log(exception);
            }
        }
    });
}
function loadCommands(commandsPath) {
    if (!ConfigFile.config || ConfigFile.config.commands.length === 0) {
        return;
    }
    for (const commandName of ConfigFile.config.commands) {
        const commandsClass = require(`${commandsPath}/${commandName}`).default;
        const command = new commandsClass();
        commands.push(command);
    }
}
client.login(ConfigFile.config.token);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHNDQUFzQztBQUN0Qyx1Q0FBdUM7QUFJdkMsTUFBTSxNQUFNLEdBQW1CLElBQUksT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBRXBELElBQUksUUFBUSxHQUFrQixFQUFFLENBQUM7QUFFakMsWUFBWSxDQUFDLEdBQUcsU0FBUyxXQUFXLENBQUMsQ0FBQTtBQUVyQyxNQUFNLENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBRSxHQUFHLEVBQUU7SUFFcEIsTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsNEVBQTRFLEVBQUUsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFDLENBQUMsQ0FBQztJQUUxSCxPQUFPLENBQUMsR0FBRyxDQUFDLHVDQUF1QyxDQUFDLENBQUM7QUFDekQsQ0FBQyxDQUFDLENBQUE7QUFFRixNQUFNLENBQUMsRUFBRSxDQUFDLGdCQUFnQixFQUFFLE1BQU0sQ0FBQyxFQUFFO0lBRWpDLElBQUksZUFBZSxHQUFHLElBQUksT0FBTyxDQUFDLFNBQVMsRUFBRTtTQUNwQyxTQUFTLENBQUMsYUFBYSxDQUFDO1NBQ3hCLFFBQVEsQ0FBQyxRQUFRLENBQUM7U0FDbEIsY0FBYyxDQUFDLGtCQUFrQixNQUFNLENBQUMsV0FBVyxxREFBcUQsQ0FBQztTQUN6RyxRQUFRLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztTQUN0QyxTQUFTLENBQUMscUNBQXFDLENBQUMsQ0FBQztJQUUxRCxJQUFJLGFBQWEsR0FBRyxJQUFJLE9BQU8sQ0FBQyxTQUFTLEVBQUU7U0FDbEMsU0FBUyxDQUFDLFdBQVcsTUFBTSxDQUFDLFdBQVcsaUJBQWlCLENBQUM7U0FDekQsUUFBUSxDQUFDLFFBQVEsQ0FBQztTQUNsQixRQUFRLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUM7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