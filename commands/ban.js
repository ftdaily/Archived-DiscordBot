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
class ban {
    constructor() {
        this._command = "ban";
    }
    help() {
        return "Ban the mentioned user";
    }
    isThisCommand(command) {
        return command === this._command;
    }
    runCommand(args, msgObject, client) {
        return __awaiter(this, void 0, void 0, function* () {
            const PREFIX = "k!";
            let mentionedUser = msgObject.mentions.users.first();
            let suppliedReason = args.slice(1).join(" ") || "";
            let banLog = `${msgObject.author.username}: ${suppliedReason}`;
            let channellogs = msgObject.guild.channels.find(r => r.name === "logs");
            let banmsgembed = new Discord.RichEmbed()
                .setColor(0xff0d00)
                .setAuthor('User has been banned!')
                .addField('Banned user', mentionedUser, true)
                .addField('Admin', msgObject.author.username, true)
                .setDescription(`Banned reason: ${suppliedReason}`)
                .addField('Joined at', msgObject.member.joinedAt, true)
                .setFooter(`${mentionedUser} Ban Informations`);
            let banembedpm = new Discord.RichEmbed()
                .setColor(0xff0d00)
                .setAuthor('You have been banned from the server!')
                .addField('Banned user', mentionedUser, true)
                .addField('Admin', msgObject.author.username, true)
                .setDescription(`Banned reason: ${suppliedReason}`)
                .addField('Joined at', msgObject.member.joinedAt, true)
                .setFooter(`${mentionedUser} Ban Informations`);
            msgObject.delete(60000);
            if (!msgObject.member.hasPermission("BAN_MEMBERS"))
                if (!msgObject.member.hasPermission("ADMINISTRATOR")) {
                    msgObject.channel.send(`ERROR | Insufficient permission for ${msgObject.author.username} | Contact staff if it's still occurred.`)
                        .then(msg => {
                        msg.delete(60000);
                    });
                    return;
                }
            if (!mentionedUser) {
                msgObject.channel.send('```Syntax: ban [usertag] [reason]```');
                msgObject.channel.send("ERROR | Couldn't find the users!");
                return;
            }
            if (!suppliedReason) {
                msgObject.channel.send('```Syntax: ban [usertag] [reason]```');
                msgObject.channel.send(`ERROR | Provide a reasons!`);
                return;
            }
            if (msgObject.content.startsWith(`${PREFIX}ban`)) {
                msgObject.channel.send(`Successfully ban ${mentionedUser}`);
                mentionedUser.send(banembedpm);
                channellogs.send(banmsgembed);
            }
            msgObject.guild.member(mentionedUser).ban(banLog)
                .then(console.log)
                .catch(console.error);
        });
    }
}
exports.default = ban;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFuLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NvbW1hbmRzL2Jhbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsc0NBQXNDO0FBSXRDLE1BQXFCLEdBQUc7SUFBeEI7UUFFcUIsYUFBUSxHQUFHLEtBQUssQ0FBQTtJQTBFckMsQ0FBQztJQXhFRyxJQUFJO1FBQ0EsT0FBTyx3QkFBd0IsQ0FBQztJQUNwQyxDQUFDO0lBRUQsYUFBYSxDQUFDLE9BQWU7UUFDekIsT0FBTyxPQUFPLEtBQUssSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUNyQyxDQUFDO0lBRUssVUFBVSxDQUFDLElBQWMsRUFBRSxTQUEwQixFQUFFLE1BQXNCOztZQUUvRSxNQUFNLE1BQU0sR0FBRyxJQUFJLENBQUE7WUFFbkIsSUFBSSxhQUFhLEdBQUcsU0FBUyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDckQsSUFBSSxjQUFjLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDO1lBQ25ELElBQUksTUFBTSxHQUFHLEdBQUcsU0FBUyxDQUFDLE1BQU0sQ0FBQyxRQUFRLEtBQUssY0FBYyxFQUFFLENBQUM7WUFDL0QsSUFBSSxXQUFXLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksS0FBSyxNQUFNLENBQXdCLENBQUE7WUFFOUYsSUFBSSxXQUFXLEdBQUcsSUFBSSxPQUFPLENBQUMsU0FBUyxFQUFFO2lCQUN4QyxRQUFRLENBQUMsUUFBUSxDQUFDO2lCQUNsQixTQUFTLENBQUMsdUJBQXVCLENBQUM7aUJBQ2xDLFFBQVEsQ0FBQyxhQUFhLEVBQUUsYUFBYSxFQUFFLElBQUksQ0FBQztpQkFDNUMsUUFBUSxDQUFDLE9BQU8sRUFB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