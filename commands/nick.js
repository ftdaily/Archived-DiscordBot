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
class nick {
    constructor() {
        this._command = "nick";
    }
    help() {
        return "This command does absolutely nothing! How fun :)";
    }
    isThisCommand(command) {
        return command === this._command;
    }
    runCommand(args, msgObject, client) {
        return __awaiter(this, void 0, void 0, function* () {
            let newName = args.slice(1).join(" ") || "";
            let channellogs = msgObject.guild.channels.find(r => r.name === "logs");
            let NickEmbed = new Discord.RichEmbed()
                .setColor(0xff0d00)
                .setTitle('Name changed')
                .setDescription(`
**BEFORE CHANGED: ${msgObject.author.username}

AFTER CHANGE: ${newName}**`);
            msgObject.member.setNickname(newName);
            msgObject.author.sendEmbed(NickEmbed);
            channellogs.sendEmbed(NickEmbed);
        });
    }
}
exports.default = nick;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmljay5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tYW5kcy9uaWNrLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxzQ0FBc0M7QUFHdEMsTUFBcUIsSUFBSTtJQUF6QjtRQUVxQixhQUFRLEdBQUcsTUFBTSxDQUFBO0lBMkJ0QyxDQUFDO0lBekJHLElBQUk7UUFDQSxPQUFPLGtEQUFrRCxDQUFDO0lBQzlELENBQUM7SUFFRCxhQUFhLENBQUMsT0FBZTtRQUN6QixPQUFPLE9BQU8sS0FBSyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3JDLENBQUM7SUFFSyxVQUFVLENBQUMsSUFBYyxFQUFFLFNBQTBCLEVBQUUsTUFBc0I7O1lBRS9FLElBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUM1QyxJQUFJLFdBQVcsR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxLQUFLLE1BQU0sQ0FBd0IsQ0FBQTtZQUU5RixJQUFJLFNBQVMsR0FBRyxJQUFJLE9BQU8sQ0FBQyxTQUFTLEVBQUU7aUJBQ3RDLFFBQVEsQ0FBQyxRQUFRLENBQUM7aUJBQ2xCLFFBQVEsQ0FBQyxjQUFjLENBQUM7aUJBQ3hCLGNBQWMsQ0FBQztvQkFDSixTQUFTLENBQUMsTUFBTSxDQUFDLFFBQVE7O2dCQUU3QixPQUFPLElBQUksQ0FBQyxDQUFBO1lBRXBCLFNBQVMsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFBO1lBQ3JDLFNBQVMsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxDQUFBO1lBQ3JDLFdBQVcsQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLENBQUE7UUFDcEMsQ0FBQztLQUFBO0NBQ0o7QUE3QkQsdUJBNkJDIn0=