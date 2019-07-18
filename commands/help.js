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
class h {
    constructor() {
        this._command = "h";
    }
    help() {
        return "Command list";
    }
    isThisCommand(command) {
        return command === this._command;
    }
    runCommand(args, msgObject, client) {
        return __awaiter(this, void 0, void 0, function* () {
            const allcommand = 'The command is still in BETA [PREFIX: k!]';
            const infocmdall = 'Show informations';
            const logscmd = 'Grant access to the server logs';
            const notify = 'To get pinged from broadcast channel';
            const serverinfocmd = 'Show server informations';
            const pollcmd = 'Make a poll';
            const colorListCmd = 'List of color name';
            const helpstaffcmd = '(STAFF PERMISSION NEED) Staff command';
            const helpsupport = 'Show something if you need help!';
            const reportplayer = "(DON'T ABUSE) Report another player for their bad behavior";
            const color = "Show the available name coloring";
            let helpcommand = new Discord.RichEmbed()
                .setAuthor('Kitusne Bot Commands')
                .setColor('0x00f0a8')
                .addField('==========Command==========', allcommand)
                .addField('helpstaff', helpstaffcmd, true)
                .addField('colorlist', colorListCmd, true)
                .addField('info', infocmdall, true)
                .addField('serverinfo', serverinfocmd, true)
                .addField('logs', logscmd, true)
                .addField('notify', notify)
                .addField('poll [message]', pollcmd, true)
                .addField('helpsupport', helpsupport, true)
                .addField('colorlist', color, true)
                .addField('report [usertag] [reason]', reportplayer)
                .setThumbnail(msgObject.author.avatarURL)
                .setFooter('Support server: https://discord.gg/uaDP8Xc');
            msgObject.channel.send(helpcommand)
                .catch(console.error);
        });
    }
}
exports.default = h;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVscC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tYW5kcy9oZWxwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxzQ0FBc0M7QUFLdEMsTUFBcUIsQ0FBQztJQUF0QjtRQUVxQixhQUFRLEdBQUcsR0FBRyxDQUFBO0lBOENuQyxDQUFDO0lBNUNHLElBQUk7UUFDQSxPQUFPLGNBQWMsQ0FBQztJQUMxQixDQUFDO0lBRUQsYUFBYSxDQUFDLE9BQWU7UUFDekIsT0FBTyxPQUFPLEtBQUssSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUNyQyxDQUFDO0lBRUssVUFBVSxDQUFDLElBQWMsRUFBRSxTQUEwQixFQUFFLE1BQXNCOztZQUUvRSxNQUFNLFVBQVUsR0FBRywyQ0FBMkMsQ0FBQTtZQUM5RCxNQUFNLFVBQVUsR0FBRyxtQkFBbUIsQ0FBQTtZQUN0QyxNQUFNLE9BQU8sR0FBRyxpQ0FBaUMsQ0FBQTtZQUNqRCxNQUFNLE1BQU0sR0FBRyxzQ0FBc0MsQ0FBQTtZQUNyRCxNQUFNLGFBQWEsR0FBRywwQkFBMEIsQ0FBQTtZQUNoRCxNQUFNLE9BQU8sR0FBRyxhQUFhLENBQUE7WUFDN0IsTUFBTSxZQUFZLEdBQUcsb0JBQW9CLENBQUE7WUFDekMsTUFBTSxZQUFZLEdBQUcsdUNBQXVDLENBQUE7WUFDNUQsTUFBTSxXQUFXLEdBQUcsa0NBQWtDLENBQUE7WUFDdEQsTUFBTSxZQUFZLEdBQUcsNERBQTRELENBQUE7WUFDakYsTUFBTSxLQUFLLEdBQUcsa0NBQWtDLENBQUE7WUFHaEQsSUFBSSxXQUFXLEdBQUcsSUFBSSxPQUFPLENBQUMsU0FBUyxFQUFFO2lCQUNoQyxTQUFTLENBQUMsc0JBQXNCLENBQUM7aUJBQ2pDLFFBQVEsQ0FBQyxVQUFVLENBQUM7aUJBQ3BCLFFBQVEsQ0FBQyw2QkFBNkIsRUFBRSxVQUFVLENBQUM7aUJBQ25ELFFBQVEsQ0FBQyxXQUFXLEVBQUUsWUFBWSxFQUFFLElBQUksQ0FBQztpQkFDekMsUUFBUSxDQUFDLFdBQVcsRUFBRSxZQUFZLEVBQUUsSUFBSSxDQUFDO2lCQUN6QyxRQUFRLENBQUMsTUFBTSxFQUFFLFVBQVUsRUFBRSxJQUFJLENBQUM7aUJBQ2xDLFFBQVEsQ0FBQyxZQUFZLEVBQUUsYUFBYSxFQUFFLElBQUksQ0FBQztpQkFDM0MsUUFBUSxDQUFDLE1BQU0sRUFBRSxPQUFPLEVBQUUsSUFBSSxDQUFDO2lCQUMvQixRQUFRLENBQUMsUUFBUSxFQUFFLE1BQU0sQ0FBQztpQkFDMUIsUUFBUSxDQUFDLGdCQUFnQixFQUFFLE9BQU8sRUFBRSxJQUFJLENBQUM7aUJBQ3pDLFFBQVEsQ0FBQyxhQUFhLEVBQUUsV0FBVyxFQUFFLElBQUksQ0FBQztpQkFDMUMsUUFBUSxDQUFDLFdBQVcsRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDO2lCQUNsQyxRQUFRLENBQUMsMkJBQTJCLEVBQUUsWUFBWSxDQUFDO2lCQUNuRCxZQUFZLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUM7aUJBQ3hDLFNBQVMsQ0FBQyw0Q0FBNEMsQ0FBQyxDQUFBO1lBR2hFLFNBQVMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQztpQkFDMUIsS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNsQyxDQUFDO0tBQUE7Q0FDSjtBQWhERCxvQkFnREMifQ==