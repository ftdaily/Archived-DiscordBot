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
class partnermsg {
    constructor() {
        this._command = "partnermsg";
    }
    help() {
        return "This command does absolutely nothing! How fun :)";
    }
    isThisCommand(command) {
        return command === this._command;
    }
    runCommand(args, msgObject, client) {
        return __awaiter(this, void 0, void 0, function* () {
            msgObject.delete(10);
            let PREFIX = "k!";
            let partnerEmbed = new Discord.RichEmbed()
                .setTitle('**Looks like we have new partner!**')
                .setDescription(`**Free Heaven
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
exports.default = partnermsg;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFydG5lcm1zZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tYW5kcy9wYXJ0bmVybXNnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxzQ0FBc0M7QUFHdEMsTUFBcUIsVUFBVTtJQUEvQjtRQUVxQixhQUFRLEdBQUcsWUFBWSxDQUFBO0lBcUN4QyxDQUFDO0lBbkNELElBQUk7UUFDQSxPQUFPLGtEQUFrRCxDQUFDO0lBQzlELENBQUM7SUFFRCxhQUFhLENBQUMsT0FBZTtRQUN6QixPQUFPLE9BQU8sS0FBSyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3JDLENBQUM7SUFFSyxVQUFVLENBQUMsSUFBYyxFQUFFLFNBQTBCLEVBQUUsTUFBc0I7O1lBRS9FLFNBQVMsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUM7WUFFckIsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFBO1lBRWpCLElBQUksWUFBWSxHQUFHLElBQUksT0FBTyxDQUFDLFNBQVMsRUFBRTtpQkFDekMsUUFBUSxDQUFDLHFDQUFxQyxDQUFDO2lCQUMvQyxjQUFjLENBQUM7Ozs7Ozs7Ozs7Ozs7b0JBYUosQ0FBQztpQkFDWixRQUFRLENBQUMsaUhBQWlILENBQUM7aUJBQzNILFNBQVMsQ0FBQywyRUFBMkUsQ0FBQyxDQUFBO1lBRXZGLFNBQVMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFBO1FBQ3BDLENBQUM7S0FBQTtDQUNKO0FBdkNMLDZCQXVDSyJ9