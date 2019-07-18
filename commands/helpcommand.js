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
class helpcommand {
    constructor() {
        this._command = "helpcommand";
    }
    help() {
        return "F";
    }
    isThisCommand(command) {
        return command === this._command;
    }
    runCommand(args, msgObject, client) {
        return __awaiter(this, void 0, void 0, function* () {
            let banExplain = "It's banning members you silly";
            let availableCommands = new Discord.RichEmbed()
                .setTitle('This is title')
                .setAuthor('Author line')
                .setColor(0xf5d742)
                .setThumbnail("")
                .setFooter('This is footer')
                .setDescription('This is description')
                .addField('ban (with true at the end', banExplain, true)
                .addField('ban (without true at the end', banExplain)
                .setImage("");
            msgObject.channel.sendEmbed(availableCommands);
        });
    }
}
exports.default = helpcommand;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVscGNvbW1hbmQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvY29tbWFuZHMvaGVscGNvbW1hbmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHNDQUFzQztBQUd0QyxNQUFxQixXQUFXO0lBQWhDO1FBRXFCLGFBQVEsR0FBRyxhQUFhLENBQUE7SUEyQjdDLENBQUM7SUF6QkcsSUFBSTtRQUNBLE9BQU8sR0FBRyxDQUFDO0lBQ2YsQ0FBQztJQUVELGFBQWEsQ0FBQyxPQUFlO1FBQ3pCLE9BQU8sT0FBTyxLQUFLLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDckMsQ0FBQztJQUVLLFVBQVUsQ0FBQyxJQUFjLEVBQUUsU0FBMEIsRUFBRSxNQUFzQjs7WUFFL0UsSUFBSSxVQUFVLEdBQUcsZ0NBQWdDLENBQUE7WUFFakQsSUFBSSxpQkFBaUIsR0FBRyxJQUFJLE9BQU8sQ0FBQyxTQUFTLEVBQUU7aUJBQzlDLFFBQVEsQ0FBQyxlQUFlLENBQUM7aUJBQ3pCLFNBQVMsQ0FBQyxhQUFhLENBQUM7aUJBQ3hCLFFBQVEsQ0FBQyxRQUFRLENBQUM7aUJBQ2xCLFlBQVksQ0FBQyxFQUFFLENBQUM7aUJBQ2hCLFNBQVMsQ0FBQyxnQkFBZ0IsQ0FBQztpQkFDM0IsY0FBYyxDQUFDLHFCQUFxQixDQUFDO2lCQUNyQyxRQUFRLENBQUMsMkJBQTJCLEVBQUUsVUFBVSxFQUFFLElBQUksQ0FBQztpQkFDdkQsUUFBUSxDQUFDLDhCQUE4QixFQUFFLFVBQVUsQ0FBQztpQkFDcEQsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFBO1lBRWIsU0FBUyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsaUJBQWlCLENBQUMsQ0FBQTtRQUNsRCxDQUFDO0tBQUE7Q0FDSjtBQTdCRCw4QkE2QkMifQ==