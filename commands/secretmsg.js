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
class secretmsg {
    constructor() {
        this._command = "secretmsg";
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
            const anonymousMember = "__**HIDDEN**__";
            let mentionedmember = msgObject.mentions.users.first();
            let secretchat = args.slice(1).join(" ") || "";
            let secretlog = msgObject.guild.channels.find(r => r.name === "secret-msg-logs");
            let banmsgembed = new Discord.RichEmbed()
                .setColor(0xff0d00)
                .setTitle('Secret Msg Logs.')
                .addField('**Admin**', msgObject.author.username, true)
                .addField(`**Sended to**`, mentionedmember, true)
                .setDescription(`**Message: ${secretchat}**`);
            let banembedpm = new Discord.RichEmbed()
                .setColor(0xff0d00)
                .setTitle(`Secret Msg From: __**HIDDEN**__`)
                .setDescription(`**Message: ${secretchat}**`);
            msgObject.delete(0);
            if (!msgObject.member.hasPermission("MANAGE_MESSAGES")) {
                msgObject.channel.send(`ERROR | Just for staff, ${msgObject.author.username}! | Contact staff if it's still occurred.`)
                    .then(msg => {
                    msg.delete(60000);
                });
                return;
            }
            if (!mentionedmember) {
                msgObject.channel.send('```Syntax: secretmsg [usertag] [message]```');
                msgObject.channel.send("ERROR | Couldn't find the users!");
                msgObject.delete(3000);
                return;
            }
            if (!secretchat) {
                msgObject.channel.send('```Syntax: secretmsg [usertag] [message]```');
                msgObject.channel.send("ERROR | Enter the messages!");
                msgObject.delete(3000);
                return;
            }
            if (msgObject.content.startsWith(`${PREFIX}secretmsg`)) {
                msgObject.channel.send(`The messages has been sended.`)
                    .then(msg => {
                    msg.delete(1000);
                });
                msgObject.delete(1000);
            }
            mentionedmember.send(banembedpm);
            secretlog.send(banmsgembed);
            msgObject.delete(1000);
        });
    }
}
exports.default = secretmsg;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VjcmV0bXNnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NvbW1hbmRzL3NlY3JldG1zZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsc0NBQXNDO0FBS3RDLE1BQXFCLFNBQVM7SUFBOUI7UUFFcUIsYUFBUSxHQUFHLFdBQVcsQ0FBQTtJQXVFM0MsQ0FBQztJQXJFRyxJQUFJO1FBQ0EsT0FBTyx3QkFBd0IsQ0FBQztJQUNwQyxDQUFDO0lBRUQsYUFBYSxDQUFDLE9BQWU7UUFDekIsT0FBTyxPQUFPLEtBQUssSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUNyQyxDQUFDO0lBRUssVUFBVSxDQUFDLElBQWMsRUFBRSxTQUEwQixFQUFFLE1BQXNCOztZQUUvRSxNQUFNLE1BQU0sR0FBRyxJQUFJLENBQUE7WUFDbkIsTUFBTSxlQUFlLEdBQUcsZ0JBQWdCLENBQUE7WUFFeEMsSUFBSSxlQUFlLEdBQUcsU0FBUyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDdkQsSUFBSSxVQUFVLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDO1lBQy9DLElBQUksU0FBUyxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLEtBQUssaUJBQWlCLENBQXdCLENBQUE7WUFFdkcsSUFBSSxXQUFXLEdBQUcsSUFBSSxPQUFPLENBQUMsU0FBUyxFQUFFO2lCQUN4QyxRQUFRLENBQUMsUUFBUSxDQUFDO2lCQUNsQixRQUFRLENBQUMsa0JBQWtCLENBQUM7aUJBQzVCLFFBQVEsQ0FBQyxXQUFXLEVBQUUsU0FBUyxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDO2lCQUN0RCxRQUFRLENBQUMsZUFBZSxFQUFFLGVBQWUsRUFBRSxJQUFJLENBQUM7aUJBQ2hELGNBQWMsQ0FBQyxjQUFjLFVBQVUsSUFBSSxDQUFDLENBQUE7WUFFN0MsSUFBSSxVQUFVLEdBQUcsSUFBSSxPQUFPLENBQUMsU0FBUyxFQUFFO2lCQUN2QyxRQUFRLENBQUMsUUFBUSxDQUFDO2lCQUNsQixRQUFRLENBQUMsaUNBQWlDLENBQUM7aUJBQzNDLGNBQWMsQ0FBQyxjQUFjLFVBQVUsSUFBSSxDQUFDLENBQUE7WUFFN0MsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUVwQixJQUFHLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsaUJBQWlCLENBQUMsRUFDckQ7Z0JBQ0ksU0FBUyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsMkJBQTJCLFNBQVMsQ0FBQyxNQUFNLENBQUMsUUFBUSwyQ0FBMkMsQ0FBQztxQkFDdEgsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFO29CQUNQLEdBQXVCLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUMzQyxDQUFDLENBQUMsQ0FBQztnQkFDSCxPQUFPO2FBQ1Y7WUFFRCxJQUFHLENBQUMsZUFBZSxFQUNuQjtnQkFDSSxTQUFTLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyw2Q0FBNkMsQ0FBQyxDQUFBO2dCQUNyRSxTQUFTLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxrQ0FBa0MsQ0FBQyxDQUFBO2dCQUMxRCxTQUFTLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUN2QixPQUFPO2FBQ1Y7WUFFRCxJQUFHLENBQUMsVUFBVSxFQUNkO2dCQUNJLFNBQVMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLDZDQUE2QyxDQUFDLENBQUE7Z0JBQ3JFLFNBQVMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLDZCQUE2QixDQUFDLENBQUE7Z0JBQ3JELFNBQVMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ3ZCLE9BQU87YUFDVjtZQUVELElBQUcsU0FBUyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsR0FBRyxNQUFNLFdBQVcsQ0FBQyxFQUFFO2dCQUNuRCxTQUFTLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQywrQkFBK0IsQ0FBQztxQkFDdEQsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFO29CQUNQLEdBQXVCLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUMxQyxDQUFDLENBQUMsQ0FBQztnQkFDSCxTQUFTLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQ3RCO1lBRUQsZUFBZSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQTtZQUNoQyxTQUFTLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFBO1lBRTNCLFNBQVMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUE7UUFDOUIsQ0FBQztLQUFBO0NBQ0o7QUF6RUQsNEJBeUVDIn0=