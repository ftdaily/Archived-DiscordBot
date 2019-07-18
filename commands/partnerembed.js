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
class partnerembed {
    constructor() {
        this._command = "partnerembed";
    }
    help() {
        return "This command does absolutely nothing! How fun :)";
    }
    isThisCommand(command) {
        return command === this._command;
    }
    runCommand(args, msgObject, client) {
        return __awaiter(this, void 0, void 0, function* () {
            let PREFIX = "k!";
            let partnerEmbed = new Discord.RichEmbed()
                .setAuthor('Looks like we have new partner!')
                .setTitle(`**Free Heaven
        :ok_hand: SFW SERVER:
        
        :ok_hand: 1000+ members
        
        :ok_hand: Games + bots
        
        :ok_hand: Free advertisement
        
        :ok_hand: Spam + Raid Protection
        
        https://discord.gg/CEu2BQH

        JOIN NOW!**`)
                .setImage('https://cdn.discordapp.com/attachments/389186649743163392/599664767489015830/PhotoEditor_20190713_211059807.jpg')
                .setFooter('Bot: Kitsune Bot | Author: The Tree Is Talking#0623 | Server: Weebs Union');
            msgObject.channel.send(partnerEmbed);
        });
    }
}
exports.default = partnerembed;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFydG5lcmVtYmVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NvbW1hbmRzL3BhcnRuZXJlbWJlZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsc0NBQXNDO0FBR3RDLE1BQXFCLFlBQVk7SUFBakM7UUFFcUIsYUFBUSxHQUFHLGNBQWMsQ0FBQTtJQW1DMUMsQ0FBQztJQWpDRCxJQUFJO1FBQ0EsT0FBTyxrREFBa0QsQ0FBQztJQUM5RCxDQUFDO0lBRUQsYUFBYSxDQUFDLE9BQWU7UUFDekIsT0FBTyxPQUFPLEtBQUssSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUNyQyxDQUFDO0lBRUssVUFBVSxDQUFDLElBQWMsRUFBRSxTQUEwQixFQUFFLE1BQXNCOztZQUUvRSxJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUE7WUFFakIsSUFBSSxZQUFZLEdBQUcsSUFBSSxPQUFPLENBQUMsU0FBUyxFQUFFO2lCQUN6QyxTQUFTLENBQUMsaUNBQWlDLENBQUM7aUJBQzVDLFFBQVEsQ0FBQzs7Ozs7Ozs7Ozs7OztvQkFhRSxDQUFDO2lCQUNaLFFBQVEsQ0FBQyxpSEFBaUgsQ0FBQztpQkFDM0gsU0FBUyxDQUFDLDJFQUEyRSxDQUFDLENBQUE7WUFFdkYsU0FBUyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUE7UUFDcEMsQ0FBQztLQUFBO0NBQ0o7QUFyQ0wsK0JBcUNLIn0=