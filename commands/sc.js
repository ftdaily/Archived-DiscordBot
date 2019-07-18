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
class sc {
    constructor() {
        this._command = "sc";
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
            let staffchat = args.slice(0).join(" ") || "";
            let adminchat = msgObject.guild.channels.find(r => r.name === "staffchat");
            let staffchatembed = new Discord.RichEmbed()
                .setColor(0xff0d00)
                .setAuthor('Staff Chat')
                .setTitle(`**From: 『Staff』${msgObject.author.username}.**`)
                .setDescription(`**Message: ${staffchat}**`);
            msgObject.delete(0);
            if (!msgObject.member.roles.find(r => r.name === "『Staff』")) {
                msgObject.channel.send(`ERROR | Just for staff, ${msgObject.author.username}! | Contact staff if it's still occurred.`)
                    .then(msg => {
                    msg.delete(60000);
                });
                return;
            }
            if (!staffchat) {
                msgObject.channel.send('```Syntax: sc [message]```');
                msgObject.channel.send("ERROR | Enter the messages!");
                msgObject.delete(3000);
                return;
            }
            msgObject.delete(1000);
            if (msgObject.content.startsWith(`${PREFIX}sc`)) {
                adminchat.send(staffchatembed);
                msgObject.channel.send(`Sended to Staff Chat.`)
                    .then(msg => {
                    msg.delete(1000);
                });
                return;
            }
            msgObject.delete(1000);
        });
    }
}
exports.default = sc;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2MuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvY29tbWFuZHMvc2MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHNDQUFzQztBQUd0QyxNQUFxQixFQUFFO0lBQXZCO1FBRXFCLGFBQVEsR0FBRyxJQUFJLENBQUE7SUEyRHBDLENBQUM7SUF6REcsSUFBSTtRQUNBLE9BQU8sa0RBQWtELENBQUM7SUFDOUQsQ0FBQztJQUVELGFBQWEsQ0FBQyxPQUFlO1FBQ3pCLE9BQU8sT0FBTyxLQUFLLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDckMsQ0FBQztJQUVLLFVBQVUsQ0FBQyxJQUFjLEVBQUUsU0FBMEIsRUFBRSxNQUFzQjs7WUFFL0UsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFBO1lBRW5CLElBQUksU0FBUyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUc5QyxJQUFJLFNBQVMsR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxLQUFLLFdBQVcsQ0FBd0IsQ0FBQTtZQUVqRyxJQUFJLGNBQWMsR0FBRyxJQUFJLE9BQU8sQ0FBQyxTQUFTLEVBQUU7aUJBQzNDLFFBQVEsQ0FBQyxRQUFRLENBQUM7aUJBQ2xCLFNBQVMsQ0FBQyxZQUFZLENBQUM7aUJBQ3ZCLFFBQVEsQ0FBQyxrQkFBa0IsU0FBUyxDQUFDLE1BQU0sQ0FBQyxRQUFRLEtBQUssQ0FBQztpQkFDMUQsY0FBYyxDQUFDLGNBQWMsU0FBUyxJQUFJLENBQUMsQ0FBQTtZQUc1QyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBRXBCLElBQUcsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxLQUFLLFNBQVMsQ0FBQyxFQUMzRDtnQkFDSSxTQUFTLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQywyQkFBMkIsU0FBUyxDQUFDLE1BQU0sQ0FBQyxRQUFRLDJDQUEyQyxDQUFDO3FCQUN0SCxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUU7b0JBQ1AsR0FBdUIsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQzNDLENBQUMsQ0FBQyxDQUFDO2dCQUNILE9BQU87YUFDVjtZQUVELElBQUcsQ0FBQyxTQUFTLEVBQ2I7Z0JBQ0ksU0FBUyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsNEJBQTRCLENBQUMsQ0FBQTtnQkFDcEQsU0FBUyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsNkJBQTZCLENBQUMsQ0FBQTtnQkFDckQsU0FBUyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQTtnQkFDdEIsT0FBTzthQUNWO1lBRUQsU0FBUyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQTtZQUV0QixJQUFHLFNBQVMsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLEdBQUcsTUFBTSxJQUFJLENBQUMsRUFBRTtnQkFDNUMsU0FBUyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQTtnQkFFOUIsU0FBUyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsdUJBQXVCLENBQUM7cUJBQzlDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRTtvQkFDUCxHQUF1QixDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDMUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ0gsT0FBTzthQUNOO1lBQ0QsU0FBUyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUUvQixDQUFDO0tBQUE7Q0FDSjtBQTdERCxxQkE2REMifQ==