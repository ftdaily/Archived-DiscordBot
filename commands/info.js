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
class info {
    constructor() {
        this._command = "info";
    }
    help() {
        return "Informations";
    }
    isThisCommand(command) {
        return command === this._command;
    }
    runCommand(args, msgObject, client) {
        return __awaiter(this, void 0, void 0, function* () {
            const PREFIX = "k!";
            let mentionedUser = msgObject.mentions.users.first();
            if (!mentionedUser) {
                msgObject.channel.send(`ERROR | Couldn\'t find the users | Contact staff if it's still occurred.`);
                return;
            }
            let info = new Discord.RichEmbed()
                .setTitle('Information')
                .setColor(0x73e3f0)
                .setImage(mentionedUser.avatarURL)
                .addField('Username', mentionedUser.username, true)
                .addField('Created on', mentionedUser.createdAt, true)
                .addField('Discriminator', mentionedUser.discriminator, true)
                .addField('Total members', msgObject.guild.memberCount, true)
                .addField('Current server', msgObject.guild.name)
                .setFooter('Support server: https://discord.gg/uaDP8Xc', client.user.avatarURL);
            if (msgObject.content.startsWith(`${PREFIX}info`)) {
                msgObject.channel.send(info);
            }
        });
    }
}
exports.default = info;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5mby5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tYW5kcy9pbmZvLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxzQ0FBc0M7QUFLdEMsTUFBcUIsSUFBSTtJQUF6QjtRQUVxQixhQUFRLEdBQUcsTUFBTSxDQUFBO0lBdUN0QyxDQUFDO0lBckNHLElBQUk7UUFDQSxPQUFPLGNBQWMsQ0FBQztJQUMxQixDQUFDO0lBRUQsYUFBYSxDQUFDLE9BQWU7UUFDekIsT0FBTyxPQUFPLEtBQUssSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUNyQyxDQUFDO0lBRUssVUFBVSxDQUFDLElBQWMsRUFBRSxTQUEwQixFQUFFLE1BQXNCOztZQUUvRSxNQUFNLE1BQU0sR0FBRyxJQUFJLENBQUE7WUFFbkIsSUFBSSxhQUFhLEdBQUcsU0FBUyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLENBQUM7WUFHckQsSUFBRyxDQUFDLGFBQWEsRUFDakI7Z0JBQ0ksU0FBUyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsMEVBQTBFLENBQUMsQ0FBQTtnQkFDbEcsT0FBTzthQUNWO1lBR0QsSUFBSSxJQUFJLEdBQUcsSUFBSSxPQUFPLENBQUMsU0FBUyxFQUFFO2lCQUN6QixRQUFRLENBQUMsYUFBYSxDQUFDO2lCQUN2QixRQUFRLENBQUMsUUFBUSxDQUFDO2lCQUNsQixRQUFRLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQztpQkFDakMsUUFBUSxDQUFDLFVBQVUsRUFBRSxhQUFhLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQztpQkFDbEQsUUFBUSxDQUFDLFlBQVksRUFBRSxhQUFhLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQztpQkFDckQsUUFBUSxDQUFDLGVBQWUsRUFBRSxhQUFhLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQztpQkFDNUQsUUFBUSxDQUFDLGVBQWUsRUFBRSxTQUFTLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUM7aUJBQzVELFFBQVEsQ0FBQyxnQkFBZ0IsRUFBRSxTQUFTLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQztpQkFDaEQsU0FBUyxDQUFDLDRDQUE0QyxFQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7WUFFeEYsSUFBRyxTQUFTLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxHQUFHLE1BQU0sTUFBTSxDQUFDLEVBQUU7Z0JBQzlDLFNBQVMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFBO2FBQzNCO1FBQ1QsQ0FBQztLQUFBO0NBQ0o7QUF6Q0QsdUJBeUNDIn0=