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
class partnerrule {
    constructor() {
        this._command = "partnerrule";
    }
    help() {
        return "This command does absolutely nothing! How fun :)";
    }
    isThisCommand(command) {
        return command === this._command;
    }
    runCommand(args, msgObject, client) {
        return __awaiter(this, void 0, void 0, function* () {
            msgObject.delete(3);
            let Rule = new Discord.RichEmbed()
                .setTitle('**Ignoring the rules does not exclude you from them.**')
                .setColor(0xabfa43)
                .setAuthor('Server partner rules!')
                .setDescription(`**Follow the discord ToS and guidelines!
https://discordapp.com/terms
https://discordapp.com/guidelines        

Rule 1: Minimum of real member (not bot) is 10.
Rule 2: If you have server with member less than 25 real members, mention everyone.
Rule 3: NSFW: label any channel containing adult content as NSFW.
Rule 4: Put owner invite link and server description in your server.
Rule 4: If you partnered up with owner, it means you agreed with our server rules.**`)
                .setFooter("Server: Weebs Union");
            msgObject.channel.send(Rule);
        });
    }
}
exports.default = partnerrule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFydG5lcnJ1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvY29tbWFuZHMvcGFydG5lcnJ1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHNDQUFzQztBQUt0QyxNQUFxQixXQUFXO0lBQWhDO1FBRXFCLGFBQVEsR0FBRyxhQUFhLENBQUE7SUFnQzdDLENBQUM7SUE5QkcsSUFBSTtRQUNBLE9BQU8sa0RBQWtELENBQUM7SUFDOUQsQ0FBQztJQUVELGFBQWEsQ0FBQyxPQUFlO1FBQ3pCLE9BQU8sT0FBTyxLQUFLLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDckMsQ0FBQztJQUVLLFVBQVUsQ0FBQyxJQUFjLEVBQUUsU0FBMEIsRUFBRSxNQUFzQjs7WUFFL0UsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUVwQixJQUFJLElBQUksR0FBRyxJQUFJLE9BQU8sQ0FBQyxTQUFTLEVBQUU7aUJBQ2pDLFFBQVEsQ0FBQyx3REFBd0QsQ0FBQztpQkFDbEUsUUFBUSxDQUFDLFFBQVEsQ0FBQztpQkFDbEIsU0FBUyxDQUFDLHVCQUF1QixDQUFDO2lCQUNsQyxjQUFjLENBQUM7Ozs7Ozs7O3FGQVE2RCxDQUFDO2lCQUM3RSxTQUFTLENBQUMscUJBQXFCLENBQUMsQ0FBQTtZQUVqQyxTQUFTLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQTtRQUVoQyxDQUFDO0tBQUE7Q0FDSjtBQWxDRCw4QkFrQ0MifQ==