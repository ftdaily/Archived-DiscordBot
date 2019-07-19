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
class reportuser {
    constructor() {
        this._command = "reportuser";
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
            let channellogs = msgObject.guild.channels.find(r => r.name === "reports");
            let arrestembedmsg = new Discord.RichEmbed()
                .setColor(0xff0d00)
                .setTitle(`New report from **${msgObject.author.username}**`)
                .addField('Reported User', arrestedUser, true)
                .setDescription(`Reason: ${reasonarrested}`)
                .addField('Reason', reasonarrested, true)
                .setFooter(`Please handle this case, staff members!`);
            let arrestembedmsgpm = new Discord.RichEmbed()
                .setColor(0xff0d00)
                .setAuthor('Successfully reported user')
                .addField('Reported User', arrestedUser, true)
                .addField('Reporter', msgObject.author.username, true)
                .setDescription(`Reason: ${reasonarrested}`)
                .setFooter(`FAKE REPORT WILL BE REMOVED AND SENDER WILL BE KICKED!`);
            msgObject.delete(60000);
            if (!arrestedUser) {
                msgObject.channel.send("```Syntax: report [usertag] [reason]```");
                msgObject.channel.send("ERROR | Couldn't find the users!");
                return;
            }
            if (!reasonarrested) {
                msgObject.channel.send("```Syntax: report [usertag] [reason]```");
                msgObject.channel.send("ERROR | Provide a reasons!");
                return;
            }
            msgObject.channel.send(arrestembedmsgpm);
            channellogs.send(arrestembedmsg);
        });
    }
}
exports.default = reportuser;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVwb3J0dXNlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tYW5kcy9yZXBvcnR1c2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxzQ0FBc0M7QUFHdEMsTUFBcUIsVUFBVTtJQUEvQjtRQUVxQixhQUFRLEdBQUcsWUFBWSxDQUFBO0lBcUQ1QyxDQUFDO0lBbkRHLElBQUk7UUFDQSxPQUFPLFNBQVMsQ0FBQztJQUNyQixDQUFDO0lBRUQsYUFBYSxDQUFDLE9BQWU7UUFDekIsT0FBTyxPQUFPLEtBQUssSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUNyQyxDQUFDO0lBRUssVUFBVSxDQUFDLElBQWMsRUFBRSxTQUEwQixFQUFFLE1BQXNCOztZQUUvRSxNQUFNLE1BQU0sR0FBRyxJQUFJLENBQUE7WUFFbkIsSUFBSSxZQUFZLEdBQUcsU0FBUyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDcEQsSUFBSSxjQUFjLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDO1lBQ25ELElBQUksV0FBVyxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLEtBQUssU0FBUyxDQUF3QixDQUFBO1lBRWpHLElBQUksY0FBYyxHQUFHLElBQUksT0FBTyxDQUFDLFNBQVMsRUFBRTtpQkFDM0MsUUFBUSxDQUFDLFFBQVEsQ0FBQztpQkFDbEIsUUFBUSxDQUFDLHFCQUFxQixTQUFTLENBQUMsTUFBTSxDQUFDLFFBQVEsSUFBSSxDQUFDO2lCQUM1RCxRQUFRLENBQUMsZUFBZSxFQUFDLFlBQVksRUFBRSxJQUFJLENBQUM7aUJBQzVDLGNBQWMsQ0FBQyxXQUFXLGNBQWMsRUFBRSxDQUFDO2lCQUMzQyxRQUFRLENBQUMsUUFBUSxFQUFFLGNBQWMsRUFBRSxJQUFJLENBQUM7aUJBQ3hDLFNBQVMsQ0FBQyx5Q0FBeUMsQ0FBQyxDQUFBO1lBRXJELElBQUksZ0JBQWdCLEdBQUcsSUFBSSxPQUFPLENBQUMsU0FBUyxFQUFFO2lCQUM3QyxRQUFRLENBQUMsUUFBUSxDQUFDO2lCQUNsQixTQUFTLENBQUMsNEJBQTRCLENBQUM7aUJBQ3ZDLFFBQVEsQ0FBQyxlQUFlLEVBQUUsWUFBWSxFQUFFLElBQUksQ0FBQztpQkFDN0MsUUFBUSxDQUFDLFVBQVUsRUFBRSxTQUFTLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUM7aUJBQ3JELGNBQWMsQ0FBQyxXQUFXLGNBQWMsRUFBRSxDQUFDO2lCQUMzQyxTQUFTLENBQUMsd0RBQXdELENBQUMsQ0FBQTtZQUVwRSxTQUFTLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBRXhCLElBQUcsQ0FBQyxZQUFZLEVBQ2hCO2dCQUNJLFNBQVMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLHlDQUF5QyxDQUFDLENBQUE7Z0JBQ2pFLFNBQVMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLGtDQUFrQyxDQUFDLENBQUE7Z0JBQzFELE9BQU87YUFDVjtZQUVELElBQUcsQ0FBQyxjQUFjLEVBQ2xCO2dCQUNJLFNBQVMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLHlDQUF5QyxDQUFDLENBQUE7Z0JBQ2pFLFNBQVMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLDRCQUE0QixDQUFDLENBQUE7Z0JBQ3BELE9BQU87YUFDVjtZQUVHLFNBQVMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUE7WUFDeEMsV0FBVyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQTtRQUN4QyxDQUFDO0tBQUE7Q0FDSjtBQXZERCw2QkF1REMifQ==