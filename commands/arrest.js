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
class arrest {
    constructor() {
        this._command = "arrest";
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
            let channellogs = msgObject.guild.channels.find(r => r.name === "logs");
            let arrestembedmsg = new Discord.RichEmbed()
                .setColor(0xff0d00)
                .setAuthor('User has been arrested!')
                .addField('Prisoner name', arrestedUser, true)
                .addField('Admin', msgObject.author.username, true)
                .setDescription(`Arrest reason: ${reasonarrested}`)
                .addField('Joined at', msgObject.member.joinedAt, true)
                .setFooter(`${arrestedUser} Prisoner Informations`);
            let arrestembedmsgpm = new Discord.RichEmbed()
                .setColor(0xff0d00)
                .setAuthor('You have been arrested!')
                .addField('Prisoner name', arrestedUser, true)
                .addField('Admin', msgObject.author.username, true)
                .setDescription(`Arrest reason: ${reasonarrested}`)
                .addField('Joined at', msgObject.member.joinedAt, true)
                .setFooter(`${arrestedUser} Prisoner Informations`);
            msgObject.delete(60000);
            if (!msgObject.member.hasPermission("KICK_MEMBERS"))
                if (!msgObject.member.hasPermission("BAN_MEMBERS"))
                    if (!msgObject.member.hasPermission("ADMINISTRATOR")) {
                        msgObject.channel.send(`ERROR | Insufficient permission for ${msgObject.author.username} | Contact staff if it's still occurred.`)
                            .then(msg => {
                            msg.delete(60000);
                        });
                        return;
                    }
            if (!arrestedUser) {
                msgObject.channel.send('```Syntax: arrest [usertag] [reason]```');
                msgObject.channel.send(`ERROR | Couldn't find the users!`);
                return;
            }
            if (!reasonarrested) {
                msgObject.channel.send('```Syntax: arrest [usertag] [reason]```');
                msgObject.channel.send(`ERROR | Provide a reasons!`);
                return;
            }
            msgObject.mentions.members.first().addRole('587615169384022017');
            msgObject.mentions.members.first().removeRole('594440162981969921');
            msgObject.mentions.members.first().removeRole('584739867594850314');
            msgObject.channel.send(`Successfully arrest ${arrestedUser}`);
            arrestedUser.sendEmbed(arrestembedmsgpm);
            channellogs.send(arrestembedmsg);
        });
    }
}
exports.default = arrest;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXJyZXN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NvbW1hbmRzL2FycmVzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsc0NBQXNDO0FBR3RDLE1BQXFCLE1BQU07SUFBM0I7UUFFcUIsYUFBUSxHQUFHLFFBQVEsQ0FBQTtJQXNFeEMsQ0FBQztJQXBFRyxJQUFJO1FBQ0EsT0FBTyxTQUFTLENBQUM7SUFDckIsQ0FBQztJQUVELGFBQWEsQ0FBQyxPQUFlO1FBQ3pCLE9BQU8sT0FBTyxLQUFLLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDckMsQ0FBQztJQUVLLFVBQVUsQ0FBQyxJQUFjLEVBQUUsU0FBMEIsRUFBRSxNQUFzQjs7WUFFL0UsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFBO1lBRW5CLElBQUksWUFBWSxHQUFHLFNBQVMsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQ3BELElBQUksY0FBYyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUNuRCxJQUFJLFdBQVcsR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxLQUFLLE1BQU0sQ0FBd0IsQ0FBQTtZQUU5RixJQUFJLGNBQWMsR0FBRyxJQUFJLE9BQU8sQ0FBQyxTQUFTLEVBQUU7aUJBQzNDLFFBQVEsQ0FBQyxRQUFRLENBQUM7aUJBQ2xCLFNBQVMsQ0FBQyx5QkFBeUIsQ0FBQztpQkFDcEMsUUFBUSxDQUFDLGVBQWUsRUFBRSxZQUFZLEVBQUUsSUFBSSxDQUFDO2lCQUM3QyxRQUFRLENBQUMsT0FBTyxFQUFFLFNBQVMsQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQztpQkFDbEQsY0FBYyxDQUFDLGtCQUFrQixj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