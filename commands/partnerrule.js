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
class partner {
    constructor() {
        this._command = "partner";
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
            const PREFIX = "k!";
            let partnermanager = msgObject.guild.roles.find(r => r.name === "🤝Partner Manager");
            if (msgObject.content.startsWith(`${PREFIX}partner rule`)) {
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
                    .setFooter(`Server: Weebs Union | Contact ${partnermanager} if you want to partner with us!`);
                msgObject.channel.send(Rule);
            }
        });
    }
}
exports.default = partner;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFydG5lcnJ1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvY29tbWFuZHMvcGFydG5lcnJ1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHNDQUFzQztBQUt0QyxNQUFxQixPQUFPO0lBQTVCO1FBRXFCLGFBQVEsR0FBRyxTQUFTLENBQUE7SUF3Q3pDLENBQUM7SUF0Q0csSUFBSTtRQUNBLE9BQU8sa0RBQWtELENBQUM7SUFDOUQsQ0FBQztJQUVELGFBQWEsQ0FBQyxPQUFlO1FBQ3pCLE9BQU8sT0FBTyxLQUFLLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDckMsQ0FBQztJQUVLLFVBQVUsQ0FBQyxJQUFjLEVBQUUsU0FBMEIsRUFBRSxNQUFzQjs7WUFFL0UsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUVwQixNQUFNLE1BQU0sR0FBRyxJQUFJLENBQUE7WUFFbkIsSUFBSSxjQUFjLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksS0FBSyxtQkFBbUIsQ0FBQyxDQUFBO1lBRXBGLElBQUcsU0FBUyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsR0FBRyxNQUFNLGNBQWMsQ0FBQyxFQUN4RDtnQkFFQSxJQUFJLElBQUksR0FBRyxJQUFJLE9BQU8sQ0FBQyxTQUFTLEVBQUU7cUJBQ2pDLFFBQVEsQ0FBQyx3REFBd0QsQ0FBQztxQkFDbEUsUUFBUSxDQUFDLFFBQVEsQ0FBQztxQkFDbEIsU0FBUyxDQUFDLHVCQUF1QixDQUFDO3FCQUNsQyxjQUFjLENBQUM7Ozs7Ozs7O3FGQVE2RCxDQUFDO3FCQUM3RSxTQUFTLENBQUMsaUNBQWlDLGNBQWMsa0NBQWtDLENBQUMsQ0FBQTtnQkFFN0YsU0FBUyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUE7YUFDM0I7UUFFTCxDQUFDO0tBQUE7Q0FDSjtBQTFDRCwwQkEwQ0MifQ==