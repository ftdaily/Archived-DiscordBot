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
class poop {
    constructor() {
        this._command = "poop";
    }
    help() {
        return "This command does absolutely nothing! How fun :)";
    }
    isThisCommand(command) {
        return command === this._command;
    }
    runCommand(args, msgObject, client) {
        return __awaiter(this, void 0, void 0, function* () {
            let PoopEmbed = new Discord.RichEmbed()
                .setTitle(`__What are you doing ${msgObject.author.username}?d__`)
                .setDescription(`Nothing here you silly, ${msgObject.author.username}!`)
                .setColor(0x630a07)
                .setImage('https://images-na.ssl-images-amazon.com/images/I/51vPAW9t4WL._SX425_.jpg');
            msgObject.channel.send(PoopEmbed);
        });
    }
}
exports.default = poop;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9vcC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tYW5kcy9wb29wLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxzQ0FBc0M7QUFHdEMsTUFBcUIsSUFBSTtJQUF6QjtRQUVxQixhQUFRLEdBQUcsTUFBTSxDQUFBO0lBb0J0QyxDQUFDO0lBbEJHLElBQUk7UUFDQSxPQUFPLGtEQUFrRCxDQUFDO0lBQzlELENBQUM7SUFFRCxhQUFhLENBQUMsT0FBZTtRQUN6QixPQUFPLE9BQU8sS0FBSyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3JDLENBQUM7SUFFSyxVQUFVLENBQUMsSUFBYyxFQUFFLFNBQTBCLEVBQUUsTUFBc0I7O1lBRS9FLElBQUksU0FBUyxHQUFHLElBQUksT0FBTyxDQUFDLFNBQVMsRUFBRTtpQkFDdEMsUUFBUSxDQUFDLHdCQUF3QixTQUFTLENBQUMsTUFBTSxDQUFDLFFBQVEsTUFBTSxDQUFDO2lCQUNqRSxjQUFjLENBQUMsMkJBQTJCLFNBQVMsQ0FBQyxNQUFNLENBQUMsUUFBUSxHQUFHLENBQUM7aUJBQ3ZFLFFBQVEsQ0FBQyxRQUFRLENBQUM7aUJBQ2xCLFFBQVEsQ0FBQywwRUFBMEUsQ0FBQyxDQUFBO1lBRXJGLFNBQVMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFBO1FBQ3JDLENBQUM7S0FBQTtDQUNKO0FBdEJELHVCQXNCQyJ9