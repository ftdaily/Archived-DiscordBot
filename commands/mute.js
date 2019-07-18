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
class mute {
    constructor() {
        this._command = "mute";
    }
    help() {
        return "This command does absolutely nothing! How fun :)";
    }
    isThisCommand(command) {
        return command === this._command;
    }
    runCommand(args, msgObject, client) {
        return __awaiter(this, void 0, void 0, function* () {
            const PREFIX = "k!";
            let mutedRole = msgObject.guild.roles.find(r => r.name === "Weebs Network Mute");
            let muteduser = msgObject.mentions.users.first();
            let mutereason = args.slice(1).join(" ") || "";
            let channellogs = msgObject.guild.channels.find(r => r.name === "logs");
            let mutemsglogs = new Discord.RichEmbed()
                .setColor(0xff0d00)
                .setAuthor('User has been muted!')
                .addField('Muted user', muteduser, true)
                .addField('Admin', msgObject.author.username, true)
                .setDescription(`Mute reason: ${mutereason}`)
                .addField('Joined at', msgObject.member.joinedAt, true)
                .setFooter(`${muteduser} Informations`);
            let muteembedpm = new Discord.RichEmbed()
                .setColor(0xff0d00)
                .setAuthor('You have been muted!')
                .addField('Muted user', muteduser, true)
                .addField('Admin', msgObject.author.username, true)
                .setDescription(`Mute reason: ${mutereason}`)
                .addField('Joined at', msgObject.member.joinedAt, true)
                .setFooter(`${muteduser} Informations`);
            if (!msgObject.member.hasPermission("MUTE_MEMBERS"))
                if (!msgObject.member.hasPermission("ADMINISTRATOR")) {
                    msgObject.channel.send(`ERROR | Insufficient permission for ${msgObject.author.username} | Contact staff if it's still occurred.`);
                    return;
                }
            if (!muteduser) {
                msgObject.channel.send('```Syntax: mute [usertag] [reason]```');
                msgObject.channel.send("ERROR | Couldn't find the users!");
                return;
            }
            if (!mutereason) {
                msgObject.channel.send('```Syntax: mute [usertag] [reason]```');
                msgObject.channel.send("ERROR | Provide a reasons!");
                return;
            }
            if (msgObject.content.startsWith(`${PREFIX}mute`)) {
                msgObject.mentions.members.first().addRole(mutedRole);
                msgObject.mentions.members.first().removeRole('584739867594850314');
                muteduser.send(muteembedpm);
                msgObject.channel.send(`Successfully muted ${muteduser}`);
                channellogs.send(mutemsglogs);
            }
        });
    }
}
exports.default = mute;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXV0ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tYW5kcy9tdXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxzQ0FBc0M7QUFJdEMsTUFBcUIsSUFBSTtJQUF6QjtRQUVxQixhQUFRLEdBQUcsTUFBTSxDQUFBO0lBbUV0QyxDQUFDO0lBakVHLElBQUk7UUFDQSxPQUFPLGtEQUFrRCxDQUFDO0lBQzlELENBQUM7SUFFRCxhQUFhLENBQUMsT0FBZTtRQUN6QixPQUFPLE9BQU8sS0FBSyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3JDLENBQUM7SUFFSyxVQUFVLENBQUMsSUFBYyxFQUFFLFNBQTBCLEVBQUUsTUFBc0I7O1lBRS9FLE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQTtZQUVuQixJQUFJLFNBQVMsR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxLQUFLLG9CQUFvQixDQUFDLENBQUE7WUFDaEYsSUFBSSxTQUFTLEdBQUcsU0FBUyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDakQsSUFBSSxVQUFVLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDO1lBQy9DLElBQUksV0FBVyxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLEtBQUssTUFBTSxDQUF3QixDQUFBO1lBRTlGLElBQUksV0FBVyxHQUFHLElBQUksT0FBTyxDQUFDLFNBQVMsRUFBRTtpQkFDeEMsUUFBUSxDQUFDLFFBQVEsQ0FBQztpQkFDbEIsU0FBUyxDQUFDLHNCQUFzQixDQUFDO2lCQUNqQyxRQUFRLENBQUMsWUFBWSxF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