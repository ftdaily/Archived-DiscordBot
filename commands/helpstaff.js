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
class helpstaff {
    constructor() {
        this._command = "helpstaff";
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
exports.default = helpstaff;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVscHN0YWZmLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NvbW1hbmRzL2hlbHBzdGFmZi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsc0NBQXNDO0FBSXRDLE1BQXFCLFNBQVM7SUFBOUI7UUFFcUIsYUFBUSxHQUFHLFdBQVcsQ0FBQTtJQW1EM0MsQ0FBQztJQWpERyxJQUFJO1FBQ0EsT0FBTyxjQUFjLENBQUM7SUFDMUIsQ0FBQztJQUVELGFBQWEsQ0FBQyxPQUFlO1FBQ3pCLE9BQU8sT0FBTyxLQUFLLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDckMsQ0FBQztJQUVLLFVBQVUsQ0FBQyxJQUFjLEVBQUUsU0FBMEIsRUFBRSxNQUFzQjs7WUFFL0UsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFBO1lBRW5CLE1BQU0sVUFBVSxHQUFHLDRCQUE0QixDQUFBO1lBQy9DLE1BQU0sVUFBVSxHQUFHLHVDQUF1QyxDQUFBO1lBQzFELE1BQU0sV0FBVyxHQUFHLHlDQUF5QyxDQUFBO1lBQzdELE1BQU0sU0FBUyxHQUFHLGlDQUFpQyxDQUFBO1lBQ25ELE1BQU0sVUFBVSxHQUFHLG9DQUFvQyxDQUFBO1lBQ3ZELE1BQU0sU0FBUyxHQUFHLDJCQUEyQixDQUFBO1lBQzdDLE1BQU0sVUFBVSxHQUFHLHlFQUF5RSxDQUFBO1lBQzVGLE1BQU0sYUFBYSxHQUFHLG1DQUFtQyxDQUFBO1lBQ3pELE1BQU0sS0FBSyxHQUFHLHlCQUF5QixDQUFBO1lBQ3ZDLE1BQU0sTUFBTSxHQUFHLDRDQUE0QyxDQUFBO1lBQzNELE1BQU0sWUFBWSxHQUFHLDREQUE0RCxDQUFBO1lBRWpGLElBQUksYUFBYSxHQUFHLElBQUksT0FBTyxDQUFDLFNBQVMsRUFBRTtpQkFDbEMsU0FBUyxDQUFDLGVBQWUsQ0FBQztpQkFDMUIsUUFBUSxDQUFDLFVBQVUsQ0FBQztpQkFDcEIsUUFBUSxDQUFDLHlCQUF5QixFQUFFLFVBQVUsQ0FBQztpQkFDL0MsUUFBUSxDQUFDLGNBQWMsRUFBRSxLQUFLLENBQUM7aUJBQy9CLFFBQVEsQ0FBQyw4QkFBOEIsRUFBRSxNQUFNLENBQUM7aUJBQ2hELFFBQVEsQ0FBQyxvQ0FBb0MsRUFBRSxZQUFZLENBQUM7aUJBQzVELFFBQVEsQ0FBQywrQkFBK0IsRUFBRSxTQUFTLENBQUM7aUJBQ3BELFFBQVEsQ0FBQyxnQ0FBZ0MsRUFBRSxVQUFVLENBQUM7aUJBQ3RELFFBQVEsQ0FBQyxzQkFBc0IsRUFBRSxVQUFVLENBQUM7aUJBQzVDLFFBQVEsQ0FBQyxzQkFBc0IsRUFBRSxXQUFXLENBQUM7aUJBQzdDLFFBQVEsQ0FBQyxxQkFBcUIsRUFBRSxVQUFVLENBQUM7aUJBQzNDLFFBQVEsQ0FBQyw2QkFBNkIsRUFBRSxhQUFhLENBQUM7aUJBQ3RELFFBQVEsQ0FBQyxnQkFBZ0IsRUFBRSxTQUFTLENBQUM7aUJBQ3JDLFNBQVMsQ0FBQyw0Q0FBNEMsQ0FBQyxDQUFBO1lBRXhELElBQUcsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxLQUFLLFNBQVMsQ0FBQyxFQUNuRTtnQkFDSSxTQUFTLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyx1Q0FBdUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxRQUFRLDBDQUEwQyxDQUFDLENBQUE7Z0JBQ2xJLE9BQU87YUFDVjtZQUVHLFNBQVMsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxDQUFBO1lBQzFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDaEMsQ0FBQztLQUFBO0NBQ0o7QUFyREQsNEJBcURDIn0=