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
class botinfo {
    constructor() {
        this._command = "botinfo";
    }
    help() {
        return "This command does absolutely nothing! How fun :)";
    }
    isThisCommand(command) {
        return command === this._command;
    }
    runCommand(args, msgObject, client) {
        return __awaiter(this, void 0, void 0, function* () {
            let Version = "1.2.0 BETA";
            let AuthorBot = "The Tree Is Talking#0623";
            let botstatus = "🔵 Online";
            let botinfo = new Discord.RichEmbed()
                .setAuthor('Weebs Network')
                .setDescription('Bot is on BETA mode')
                .addField('Version', Version, true)
                .addField('Author', AuthorBot, true)
                .addField('Bot status', botstatus, true)
                .addField('Current server', msgObject.guild.name, true)
                .addField('Owner', msgObject.guild.owner, true)
                .setImage(client.user.avatarURL);
            msgObject.channel.sendEmbed(botinfo);
        });
    }
}
exports.default = botinfo;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm90aW5mby5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tYW5kcy9ib3RpbmZvLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxzQ0FBc0M7QUFJdEMsTUFBcUIsT0FBTztJQUE1QjtRQUVxQixhQUFRLEdBQUcsU0FBUyxDQUFBO0lBNkJ6QyxDQUFDO0lBM0JHLElBQUk7UUFDQSxPQUFPLGtEQUFrRCxDQUFDO0lBQzlELENBQUM7SUFFRCxhQUFhLENBQUMsT0FBZTtRQUN6QixPQUFPLE9BQU8sS0FBSyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3JDLENBQUM7SUFFSyxVQUFVLENBQUMsSUFBYyxFQUFFLFNBQTBCLEVBQUUsTUFBc0I7O1lBRS9FLElBQUksT0FBTyxHQUFHLFlBQVksQ0FBQTtZQUMxQixJQUFJLFNBQVMsR0FBRywwQkFBMEIsQ0FBQTtZQUMxQyxJQUFJLFNBQVMsR0FBRyxXQUFXLENBQUE7WUFFM0IsSUFBSSxPQUFPLEdBQUcsSUFBSSxPQUFPLENBQUMsU0FBUyxFQUFFO2lCQUNwQyxTQUFTLENBQUMsZUFBZSxDQUFDO2lCQUMxQixjQUFjLENBQUMscUJBQXFCLENBQUM7aUJBQ3JDLFFBQVEsQ0FBQyxTQUFTLEVBQUUsT0FBTyxFQUFFLElBQUksQ0FBQztpQkFDbEMsUUFBUSxDQUFDLFFBQVEsRUFBRSxTQUFTLEVBQUUsSUFBSSxDQUFDO2lCQUNuQyxRQUFRLENBQUMsWUFBWSxFQUFFLFNBQVMsRUFBRSxJQUFJLENBQUM7aUJBQ3ZDLFFBQVEsQ0FBQyxnQkFBZ0IsRUFBRSxTQUFTLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUM7aUJBQ3RELFFBQVEsQ0FBQyxPQUFPLEVBQUUsU0FBUyxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDO2lCQUM5QyxRQUFRLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQTtZQUdoQyxTQUFTLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQTtRQUN4QyxDQUFDO0tBQUE7Q0FDSjtBQS9CRCwwQkErQkMifQ==