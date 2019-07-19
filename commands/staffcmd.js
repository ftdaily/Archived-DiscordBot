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
class staffcmd {
    constructor() {
        this._command = "staffcmd";
    }
    help() {
        return "Command list";
    }
    isThisCommand(command) {
        return command === this._command;
    }
    runCommand(args, msgObject, client) {
        return __awaiter(this, void 0, void 0, function* () {
            const PREFIX = "k!";
            const adminembed = 'Command still in beta mode';
            const bancmdhelp = '(STAFF ONLY) Ban user from the server';
            const kickcmdhelp = '(STAFF ONLY)  Kick user from the server';
            const clearhelp = '(STAFF ONLY) Clear the messages';
            const releasecmd = '(STAFF ONLY) Release the prisoners';
            const arrestcmd = '(STAFF ONLY) Arrest users';
            const supportcmd = '(STAFF ONLY) Enable or desable support mode (Pinged on support channel)';
            const muteunmutecmd = '(STAFF ONLY) Mute or unmute users';
            const sccmd = '(STAFF ONLY) Staff chat';
            const spmcmd = '(STAFF ONLY) Staff private message by bots';
            const secretmsgCmd = '(STAFF ONLY) Private message to another person anonymously';
            let admincmdembed = new Discord.RichEmbed()
                .setAuthor('Staff Command')
                .setColor('0x00f0a8')
                .addField('========Command========', adminembed)
                .addField('sc [message]', sccmd)
                .addField('spm [mentionuser] [messages]', spmcmd)
                .addField('secretmsg [mentionuser] [messages]', secretmsgCmd)
                .addField('arrest [mentionuser] [reason]', arrestcmd)
                .addField('release [mentionuser] [reason]', releasecmd)
                .addField('supporton/supportoff', supportcmd)
                .addField('kick [user] [reason]', kickcmdhelp)
                .addField('ban [user] [reason]', bancmdhelp)
                .addField('mute/unmute [user] [reason]', muteunmutecmd)
                .addField('sweep [number]', clearhelp)
                .setFooter('Support server: https://discord.gg/uaDP8Xc');
            if (!msgObject.member.roles.find(r => r.name === "『Staff』")) {
                msgObject.channel.send(`ERROR | Insufficient permission for ${msgObject.author.username} | Contact staff if it's still occurred.`);
                return;
            }
            msgObject.channel.sendEmbed(admincmdembed);
            msgObject.delete(60000);
        });
    }
}
exports.default = staffcmd;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhZmZjbWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvY29tbWFuZHMvc3RhZmZjbWQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHNDQUFzQztBQUl0QyxNQUFxQixRQUFRO0lBQTdCO1FBRXFCLGFBQVEsR0FBRyxVQUFVLENBQUE7SUFtRDFDLENBQUM7SUFqREcsSUFBSTtRQUNBLE9BQU8sY0FBYyxDQUFDO0lBQzFCLENBQUM7SUFFRCxhQUFhLENBQUMsT0FBZTtRQUN6QixPQUFPLE9BQU8sS0FBSyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3JDLENBQUM7SUFFSyxVQUFVLENBQUMsSUFBYyxFQUFFLFNBQTBCLEVBQUUsTUFBc0I7O1lBRS9FLE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQTtZQUVuQixNQUFNLFVBQVUsR0FBRyw0QkFBNEIsQ0FBQTtZQUMvQyxNQUFNLFVBQVUsR0FBRyx1Q0FBdUMsQ0FBQTtZQUMxRCxNQUFNLFdBQVcsR0FBRyx5Q0FBeUMsQ0FBQTtZQUM3RCxNQUFNLFNBQVMsR0FBRyxpQ0FBaUMsQ0FBQTtZQUNuRCxNQUFNLFVBQVUsR0FBRyxvQ0FBb0MsQ0FBQTtZQUN2RCxNQUFNLFNBQVMsR0FBRywyQkFBMkIsQ0FBQTtZQUM3QyxNQUFNLFVBQVUsR0FBRyx5RUFBeUUsQ0FBQTtZQUM1RixNQUFNLGFBQWEsR0FBRyxtQ0FBbUMsQ0FBQTtZQUN6RCxNQUFNLEtBQUssR0FBRyx5QkFBeUIsQ0FBQTtZQUN2QyxNQUFNLE1BQU0sR0FBRyw0Q0FBNEMsQ0FBQTtZQUMzRCxNQUFNLFlBQVksR0FBRyw0REFBNEQsQ0FBQTtZQUVqRixJQUFJLGFBQWEsR0FBRyxJQUFJLE9BQU8sQ0FBQyxTQUFTLEVBQUU7aUJBQ2xDLFNBQVMsQ0FBQyxlQUFlLENBQUM7aUJBQzFCLFFBQVEsQ0FBQyxVQUFVLENBQUM7aUJBQ3BCLFFBQVEsQ0FBQyx5QkFBeUIsRUFBRSxVQUFVLENBQUM7aUJBQy9DLFFBQVEsQ0FBQyxjQUFjLEVBQUUsS0FBSyxDQUFDO2lCQUMvQixRQUFRLENBQUMsOEJBQThCLEVBQUUsTUFBTSxDQUFDO2lCQUNoRCxRQUFRLENBQUMsb0NBQW9DLEVBQUUsWUFBWSxDQUFDO2lCQUM1RCxRQUFRLENBQUMsK0JBQStCLEVBQUUsU0FBUyxDQUFDO2lCQUNwRCxRQUFRLENBQUMsZ0NBQWdDLEVBQUUsVUFBVSxDQUFDO2lCQUN0RCxRQUFRLENBQUMsc0JBQXNCLEVBQUUsVUFBVSxDQUFDO2lCQUM1QyxRQUFRLENBQUMsc0JBQXNCLEVBQUUsV0FBVyxDQUFDO2lCQUM3QyxRQUFRLENBQUMscUJBQXFCLEVBQUUsVUFBVSxDQUFDO2lCQUMzQyxRQUFRLENBQUMsNkJBQTZCLEVBQUUsYUFBYSxDQUFDO2lCQUN0RCxRQUFRLENBQUMsZ0JBQWdCLEVBQUUsU0FBUyxDQUFDO2lCQUNyQyxTQUFTLENBQUMsNENBQTRDLENBQUMsQ0FBQTtZQUV4RCxJQUFHLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksS0FBSyxTQUFTLENBQUMsRUFDbkU7Z0JBQ0ksU0FBUyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsdUNBQXVDLFNBQVMsQ0FBQyxNQUFNLENBQUMsUUFBUSwwQ0FBMEMsQ0FBQyxDQUFBO2dCQUNsSSxPQUFPO2FBQ1Y7WUFFRyxTQUFTLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUMsQ0FBQTtZQUMxQyxTQUFTLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2hDLENBQUM7S0FBQTtDQUNKO0FBckRELDJCQXFEQyJ9