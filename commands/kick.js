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
class kick {
    constructor() {
        this._command = "kick";
    }
    help() {
        return "Kick the mentioned user";
    }
    isThisCommand(command) {
        return command === this._command;
    }
    runCommand(args, msgObject, client) {
        return __awaiter(this, void 0, void 0, function* () {
            const PREFIX = "k!";
            let mentionedUser = msgObject.mentions.users.first();
            let suppliedReason = args.slice(1).join(" ") || "";
            let kickLog = `${msgObject.author.username}: ${suppliedReason}`;
            let channellogs = msgObject.guild.channels.find(r => r.name === "logs");
            let kickMsgEmbed = new Discord.RichEmbed()
                .setColor(0xff0d00)
                .setAuthor('User has been kicked!')
                .addField('Banned user', mentionedUser, true)
                .addField('Admin', msgObject.author.username, true)
                .setDescription(`You just kicked user for: ${suppliedReason}`)
                .addField('Joined at', msgObject.member.joinedAt, true)
                .setFooter(`${mentionedUser} Kick Informations`);
            let kickMsgEmbedPM = new Discord.RichEmbed()
                .setColor(0xff0d00)
                .setAuthor('You have been kicked from the server!')
                .addField('Kicked user', mentionedUser, true)
                .addField('Admin', msgObject.author.username, true)
                .setDescription(`Kick reason: ${suppliedReason}`)
                .addField('Joined at', msgObject.member.joinedAt, true)
                .setFooter(`${mentionedUser} Kick Informations`);
            msgObject.delete(60000);
            if (!msgObject.member.hasPermission("KICK_MEMBERS"))
                if (!msgObject.member.hasPermission("ADMINISTRATOR")) {
                    msgObject.channel.send(`ERROR | Insufficient permission for ${msgObject.author.username} | Contact staff if it's still occurred.`)
                        .then(msg => {
                        msg.delete(60000);
                    });
                    return;
                }
            if (!mentionedUser) {
                msgObject.channel.send('```Syntax: kick [usertag] [reason]```');
                msgObject.channel.send("ERROR | Couldn't find the users!");
                return;
            }
            if (!suppliedReason) {
                msgObject.channel.send('```Syntax: kick [usertag] [reason]```');
                msgObject.channel.send("ERROR | Provide a reasons!");
                return;
            }
            if (msgObject.content.startsWith(`${PREFIX}kick`)) {
                msgObject.channel.send(`Successfully kick ${mentionedUser}`);
                mentionedUser.send(kickMsgEmbedPM);
                channellogs.send(kickMsgEmbed);
            }
            msgObject.guild.member(mentionedUser).kick(kickLog)
                .then(console.log)
                .catch(console.error);
        });
    }
}
exports.default = kick;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia2ljay5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tYW5kcy9raWNrLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxzQ0FBc0M7QUFJdEMsTUFBcUIsSUFBSTtJQUF6QjtRQUVxQixhQUFRLEdBQUcsTUFBTSxDQUFBO0lBMEV0QyxDQUFDO0lBeEVHLElBQUk7UUFDQSxPQUFPLHlCQUF5QixDQUFDO0lBQ3JDLENBQUM7SUFFRCxhQUFhLENBQUMsT0FBZTtRQUN6QixPQUFPLE9BQU8sS0FBSyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3JDLENBQUM7SUFFSyxVQUFVLENBQUMsSUFBYyxFQUFFLFNBQTBCLEVBQUUsTUFBc0I7O1lBRS9FLE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQTtZQUVuQixJQUFJLGFBQWEsR0FBRyxTQUFTLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUNyRCxJQUFJLGNBQWMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDbkQsSUFBSSxPQUFPLEdBQUcsR0FBRyxTQUFTLENBQUMsTUFBTSxDQUFDLFFBQVEsS0FBSyxjQUFjLEVBQUUsQ0FBQztZQUNoRSxJQUFJLFdBQVcsR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxLQUFLLE1BQU0sQ0FBd0IsQ0FBQTtZQUU5RixJQUFJLFlBQVksR0FBRyxJQUFJLE9BQU8sQ0FBQyxTQUFTLEVBQUU7aUJBQ3pDLFFBQVEsQ0FBQyxRQUFRLENBQUM7aUJBQ2xCLFNBQVMsQ0FBQyx1QkFBdUIsQ0FBQztpQkFDbEMsUUFBUSxDQUFDLGFBQWEsRUFBRSxhQUFhLEVBQUUsSUFBSSxDQUFDO2lCQUM1QyxRQUFRLENBQUMsT0FBTyxFQUFFLFNBQVMsQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQztpQkFDbEQsY0FBYyxDQUFDLDZCQUE2QixjQUFjLEVBQUUsQ0FBQztpQkFDN0QsUUFBUSxDQUFDLFdBQVcsRUFBRSxTQUFTLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUM7aUJBQ3RELFNBQVMsQ0FBQyxHQUFHLGFBQWEsb0JBQW9CLENBQUMsQ0FBQTtZQUVoRCxJQUFJLGNBQWMsR0FBRyxJQUFJLE9BQU8sQ0FBQyxTQUFTLEVBQUU7aUJBQzNDLFFBQVEsQ0FBQyxRQUFRLENBQUM7aUJBQ2xCLFNBQVMsQ0FBQyx1Q0FBdUMsQ0FBQztpQkFDbEQsUUFBUSxDQUFDLGFBQWEsRUFBRSxhQUFhLEVBQUUsSUFBSSxDQUFDO2lCQUM1QyxRQUFRLENBQUMsT0FBTyxFQUFFLFNBQVMsQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQztpQkFDbEQsY0FBYyxDQUFDLGdCQUFnQixjQUFjLEVBQUUsQ0FBQztpQkFDaEQsUUFBUSxDQUFDLFdBQVcsRUFBRSxTQUFTLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUM7aUJBQ3RELFNBQVMsQ0FBQyxHQUFHLGFBQWEsb0JBQW9CLENBQUMsQ0FBQTtZQUVoRCxTQUFTLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBRXhCLElBQUcsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxjQUFjLENBQUM7Z0JBQ2xELElBQUcsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxlQUFlLENBQUMsRUFDbkQ7b0JBQ0ksU0FBUyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsdUNBQXVDLFNBQVMsQ0FBQyxNQUFNLENBQUMsUUFBUSwwQ0FBMEMsQ0FBQzt5QkFDakksSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFO3dCQUNQLEdBQXVCLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO29CQUMzQyxDQUFDLENBQUMsQ0FBQztvQkFDSCxPQUFPO2lCQUNWO1lBRUQsSUFBRyxDQUFDLGFBQWEsRUFDakI7Z0JBQ0ksU0FBUyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsdUNBQXVDLENBQUMsQ0FBQTtnQkFDL0QsU0FBUyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsa0NBQWtDLENBQUMsQ0FBQTtnQkFDMUQsT0FBTzthQUNWO1lBR0QsSUFBRyxDQUFDLGNBQWMsRUFDbEI7Z0JBQ0ksU0FBUyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsdUNBQXVDLENBQUMsQ0FBQTtnQkFDL0QsU0FBUyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsNEJBQTRCLENBQUMsQ0FBQTtnQkFDcEQsT0FBTzthQUNWO1lBRUQsSUFBRyxTQUFTLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxHQUFHLE1BQU0sTUFBTSxDQUFDLEVBQUU7Z0JBQzlDLFNBQVMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLHFCQUFxQixhQUFhLEVBQUUsQ0FBQyxDQUFBO2dCQUM1RCxhQUFhLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFBO2dCQUNsQyxXQUFXLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFBO2FBQzdCO1lBRUwsU0FBUyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQztpQkFDbEQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUM7aUJBQ2pCLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUE7UUFDekIsQ0FBQztLQUFBO0NBQ0o7QUE1RUQsdUJBNEVDIn0=