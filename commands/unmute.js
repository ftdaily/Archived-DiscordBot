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
class unmute {
    constructor() {
        this._command = "unmute";
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
            let unmuteduser = msgObject.mentions.users.first();
            let unmutereason = args.slice(1).join(" ") || "";
            let channellogs = msgObject.guild.channels.find(r => r.name === "logs");
            let unmutemsglogs = new Discord.RichEmbed()
                .setColor(0xff0d00)
                .setAuthor('User has been unmuted!')
                .addField('Unmuted user', unmuteduser, true)
                .addField('Admin', msgObject.author.username, true)
                .setDescription(`Mute reason: ${unmutereason}`)
                .addField('Joined at', msgObject.member.joinedAt, true)
                .setFooter(`${unmuteduser} Informations`);
            let unmuteembedpm = new Discord.RichEmbed()
                .setColor(0xff0d00)
                .setAuthor('You are now unmuted!')
                .addField('Unuted user', unmuteduser, true)
                .addField('Admin', msgObject.author.username, true)
                .setDescription(`Mute reason: ${unmutereason}`)
                .addField('Joined at', msgObject.member.joinedAt, true)
                .setFooter(`${unmuteduser} Informations`);
            if (!msgObject.member.hasPermission("MUTE_MEMBERS"))
                if (!msgObject.member.hasPermission("ADMINISTRATOR")) {
                    msgObject.channel.send(`ERROR | Insufficient permission for ${msgObject.author.username} | Contact staff if it's still occurred.`);
                    return;
                }
            if (!unmuteduser) {
                msgObject.channel.send('```Syntax: unmute [usertag] [reason]```');
            }
            if (!unmutereason) {
                msgObject.channel.send('```Syntax: unmute [usertag] [reason]```');
            }
            if (msgObject.content.startsWith(`${PREFIX}unmute`)) {
                msgObject.mentions.members.first().addRole('584739867594850314');
                msgObject.mentions.members.first().removeRole('598250337568161793');
                unmuteduser.send(unmuteembedpm);
                msgObject.channel.send(`Successfully unmute ${unmuteduser}`);
                channellogs.send(unmutemsglogs);
            }
        });
    }
}
exports.default = unmute;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidW5tdXRlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NvbW1hbmRzL3VubXV0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsc0NBQXNDO0FBSXRDLE1BQXFCLE1BQU07SUFBM0I7UUFFcUIsYUFBUSxHQUFHLFFBQVEsQ0FBQTtJQThEeEMsQ0FBQztJQTVERyxJQUFJO1FBQ0EsT0FBTyxrREFBa0QsQ0FBQztJQUM5RCxDQUFDO0lBRUQsYUFBYSxDQUFDLE9BQWU7UUFDekIsT0FBTyxPQUFPLEtBQUssSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUNyQyxDQUFDO0lBRUssVUFBVSxDQUFDLElBQWMsRUFBRSxTQUEwQixFQUFFLE1BQXNCOztZQUUvRSxNQUFNLE1BQU0sR0FBRyxJQUFJLENBQUE7WUFFbkIsSUFBSSxXQUFXLEdBQUcsU0FBUyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDbkQsSUFBSSxZQUFZLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDO1lBQ2pELElBQUksV0FBVyxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLEtBQUssTUFBTSxDQUF3QixDQUFBO1lBRTlGLElBQUksYUFBYSxHQUFHLElBQUksT0FBTyxDQUFDLFNBQVMsRUFBRTtpQkFDMUMsUUFBUSxDQUFDLFFBQVEsQ0FBQztpQkFDbEIsU0FBUyxDQUFDLHdCQUF3QixDQUFDO2lCQUNuQyxRQUFRLENBQUMsY0FBYyxFQUFFLFdBQVcsRUFBRSxJQUFJLENBQUM7aUJBQzNDLFFBQVEsQ0FBQyxPQUFPLEVBQUUsU0FBUyxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDO2lCQUNsRCxjQUFjLENBQUMsZ0JBQWdCLFlBQVksRUFBRSxDQUFDO2lCQUM5QyxRQUFRLENBQUMsV0FBVyxFQUFFLFNBQVMsQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQztpQkFDdEQsU0FBUyxDQUFDLEdBQUcsV0FBVyxlQUFlLENBQUMsQ0FBQTtZQUV6QyxJQUFJLGFBQWEsR0FBRyxJQUFJLE9BQU8sQ0FBQyxTQUFTLEVBQUU7aUJBQzFDLFFBQVEsQ0FBQyxRQUFRLENBQUM7aUJBQ2xCLFNBQVMsQ0FBQyxzQkFBc0IsQ0FBQztpQkFDakMsUUFBUSxDQUFDLGFBQWEsRUFBRSxXQUFXLEVBQUUsSUFBSSxDQUFDO2lCQUMxQyxRQUFRLENBQUMsT0FBTyxFQUFFLFNBQVMsQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQztpQkFDbEQsY0FBYyxDQUFDLGdCQUFnQixZQUFZLEVBQUUsQ0FBQztpQkFDOUMsUUFBUSxDQUFDLFdBQVcsRUFBRSxTQUFTLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUM7aUJBQ3RELFNBQVMsQ0FBQyxHQUFHLFdBQVcsZUFBZSxDQUFDLENBQUE7WUFFekMsSUFBRyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLGNBQWMsQ0FBQztnQkFDbEQsSUFBRyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLGVBQWUsQ0FBQyxFQUVuRDtvQkFDSSxTQUFTLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyx1Q0FBdUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxRQUFRLDBDQUEwQyxDQUFDLENBQUE7b0JBQ2xJLE9BQU87aUJBQ1Y7WUFFRCxJQUFHLENBQUMsV0FBVyxFQUNmO2dCQUNJLFNBQVMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLHlDQUF5QyxDQUFDLENBQUE7YUFDcEU7WUFFRCxJQUFHLENBQUMsWUFBWSxFQUNoQjtnQkFDSSxTQUFTLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyx5Q0FBeUMsQ0FBQyxDQUFBO2FBQ3BFO1lBRUQsSUFBRyxTQUFTLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxHQUFHLE1BQU0sUUFBUSxDQUFDLEVBQUU7Z0JBQ2hELFNBQVMsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxDQUFDLE9BQU8sQ0FBQyxvQkFBb0IsQ0FBQyxDQUFBO2dCQUNoRSxTQUFTLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxVQUFVLENBQUMsb0JBQW9CLENBQUMsQ0FBQTtnQkFDbkUsV0FBVyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQTtnQkFDL0IsU0FBUyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsdUJBQXVCLFdBQVcsRUFBRSxDQUFDLENBQUE7Z0JBQzVELFdBQVcsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUE7YUFDOUI7UUFDVCxDQUFDO0tBQUE7Q0FDSjtBQWhFRCx5QkFnRUMifQ==