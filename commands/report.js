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
class report {
    constructor() {
        this._command = "report";
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
                .setDescription(`**Reporter: ${msgObject.author.username}
Reported user: ${arrestedUser}
Reason: ${reasonarrested}**`)
                .setFooter(`Please handle this case, staff members!`);
            let arrestembedmsgpm = new Discord.RichEmbed()
                .setColor(0xff0d00)
                .setAuthor('Successfully reported user')
                .setDescription(`**Reporter: ${msgObject.author.username}
Reported user: ${arrestedUser}
Reason: ${reasonarrested}**`)
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
exports.default = report;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVwb3J0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NvbW1hbmRzL3JlcG9ydC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsc0NBQXNDO0FBR3RDLE1BQXFCLE1BQU07SUFBM0I7UUFFcUIsYUFBUSxHQUFHLFFBQVEsQ0FBQTtJQXFEeEMsQ0FBQztJQW5ERyxJQUFJO1FBQ0EsT0FBTyxTQUFTLENBQUM7SUFDckIsQ0FBQztJQUVELGFBQWEsQ0FBQyxPQUFlO1FBQ3pCLE9BQU8sT0FBTyxLQUFLLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDckMsQ0FBQztJQUVLLFVBQVUsQ0FBQyxJQUFjLEVBQUUsU0FBMEIsRUFBRSxNQUFzQjs7WUFFL0UsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFBO1lBRW5CLElBQUksWUFBWSxHQUFHLFNBQVMsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQ3BELElBQUksY0FBYyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUNuRCxJQUFJLFdBQVcsR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxLQUFLLFNBQVMsQ0FBd0IsQ0FBQTtZQUVqRyxJQUFJLGNBQWMsR0FBRyxJQUFJLE9BQU8sQ0FBQyxTQUFTLEVBQUU7aUJBQzNDLFFBQVEsQ0FBQyxRQUFRLENBQUM7aUJBQ2xCLFFBQVEsQ0FBQyxxQkFBcUIsU0FBUyxDQUFDLE1BQU0sQ0FBQyxRQUFRLElBQUksQ0FBQztpQkFDNUQsY0FBYyxDQUFDLGVBQWUsU0FBUyxDQUFDLE1BQU0sQ0FBQyxRQUFRO2lCQUMvQyxZQUFZO1VBQ25CLGNBQWMsSUFBSSxDQUFDO2lCQUNwQixTQUFTLENBQUMseUNBQXlDLENBQUMsQ0FBQTtZQUVyRCxJQUFJLGdCQUFnQixHQUFHLElBQUksT0FBTyxDQUFDLFNBQVMsRUFBRTtpQkFDN0MsUUFBUSxDQUFDLFFBQVEsQ0FBQztpQkFDbEIsU0FBUyxDQUFDLDRCQUE0QixDQUFDO2lCQUN2QyxjQUFjLENBQUMsZUFBZSxTQUFTLENBQUMsTUFBTSxDQUFDLFFBQVE7aUJBQy9DLFlBQVk7VUFDbkIsY0FBYyxJQUFJLENBQUM7aUJBQ3BCLFNBQVMsQ0FBQyx3REFBd0QsQ0FBQyxDQUFBO1lBRXBFLFNBQVMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7WUFFeEIsSUFBRyxDQUFDLFlBQVksRUFDaEI7Z0JBQ0ksU0FBUyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMseUNBQXlDLENBQUMsQ0FBQTtnQkFDakUsU0FBUyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsa0NBQWtDLENBQUMsQ0FBQTtnQkFDMUQsT0FBTzthQUNWO1lBRUQsSUFBRyxDQUFDLGNBQWMsRUFDbEI7Z0JBQ0ksU0FBUyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMseUNBQXlDLENBQUMsQ0FBQTtnQkFDakUsU0FBUyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsNEJBQTRCLENBQUMsQ0FBQTtnQkFDcEQsT0FBTzthQUNWO1lBRUcsU0FBUyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQTtZQUN4QyxXQUFXLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFBO1FBQ3hDLENBQUM7S0FBQTtDQUNKO0FBdkRELHlCQXVEQyJ9