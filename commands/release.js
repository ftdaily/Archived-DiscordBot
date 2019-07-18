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
class release {
    constructor() {
        this._command = "release";
    }
    help() {
        return "addrole";
    }
    isThisCommand(command) {
        return command === this._command;
    }
    runCommand(args, msgObject, client) {
        return __awaiter(this, void 0, void 0, function* () {
            const PREFIX = "k!";
            let arrestedUser = msgObject.mentions.users.first();
            let reasonarrested = args.slice(1).join(" ") || "";
            let channellogs = msgObject.guild.channels.find(r => r.name === "logs");
            let arrestembedmsg = new Discord.RichEmbed()
                .setColor(0xff0d00)
                .setAuthor('User has been release!')
                .addField('User name', arrestedUser, true)
                .addField('Admin', msgObject.author.username, true)
                .setDescription(`Released reason: ${reasonarrested}`)
                .addField('Joined at', msgObject.member.joinedAt, true)
                .setFooter(`${arrestedUser} Prisoner Informations`);
            let arrestembedmsgpm = new Discord.RichEmbed()
                .setColor(0xff0d00)
                .setAuthor('You have been released!')
                .addField('User name', arrestedUser, true)
                .addField('Admin', msgObject.author.username, true)
                .setDescription(`Released reason: ${reasonarrested}`)
                .addField('Joined at', msgObject.member.joinedAt, true)
                .setFooter(`${arrestedUser} Prisoner Informations`);
            msgObject.delete(60000);
            if (!msgObject.member.hasPermission("KICK_MEMBERS"))
                if (!msgObject.member.hasPermission("ADMINISTRATOR")) {
                    msgObject.channel.send(`ERROR | Insufficient permission for ${msgObject.author.username} | Contact staff if it's still occurred.`)
                        .then(msg => {
                        msg.delete(60000);
                    });
                    return;
                }
            if (!arrestedUser) {
                msgObject.channel.send('```Syntax: release [usertag] [reason]```');
                msgObject.channel.send("ERROR | Couldn't find the users!");
                return;
            }
            if (!reasonarrested) {
                msgObject.channel.send('```Syntax: release [usertag] [reason]```');
                msgObject.channel.send("ERROR | Provide a reasons!");
                return;
            }
            if (msgObject.content.startsWith(`${PREFIX}release`)) {
                msgObject.mentions.members.first().addRole('584739867594850314');
                msgObject.mentions.members.first().removeRole('587615169384022017');
                msgObject.channel.send(`Successfully release ${arrestedUser}`);
                channellogs.sendEmbed(arrestembedmsg);
                arrestedUser.sendEmbed(arrestembedmsgpm);
            }
        });
    }
}
exports.default = release;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVsZWFzZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tYW5kcy9yZWxlYXNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxzQ0FBc0M7QUFHdEMsTUFBcUIsT0FBTztJQUE1QjtRQUVxQixhQUFRLEdBQUcsU0FBUyxDQUFBO0lBd0V6QyxDQUFDO0lBdEVHLElBQUk7UUFDQSxPQUFPLFNBQVMsQ0FBQztJQUNyQixDQUFDO0lBRUQsYUFBYSxDQUFDLE9BQWU7UUFDekIsT0FBTyxPQUFPLEtBQUssSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUNyQyxDQUFDO0lBRUssVUFBVSxDQUFDLElBQWMsRUFBRSxTQUEwQixFQUFFLE1BQXNCOztZQUUvRSxNQUFNLE1BQU0sR0FBRyxJQUFJLENBQUE7WUFFbkIsSUFBSSxZQUFZLEdBQUcsU0FBUyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDcEQsSUFBSSxjQUFjLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDO1lBQ25ELElBQUksV0FBVyxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLEtBQUssTUFBTSxDQUF3QixDQUFBO1lBRTlGLElBQUksY0FBYyxHQUFHLElBQUksT0FBTyxDQUFDLFNBQVMsRUFBRTtpQkFDM0MsUUFBUSxDQUFDLFFBQVEsQ0FBQztpQkFDbEIsU0FBUyxDQUFDLHdCQUF3QixDQUFDO2lCQUNuQyxRQUFRLENBQUMsV0FBVyxFQUFFLFlBQVksRUFBRSxJQUFJLENBQUM7aUJBQ3pDLFFBQVEsQ0FBQyxPQUFPLEVBQUUsU0FBUyxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDO2lCQUNsRCxjQUFjLENBQUMsb0JBQW9C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