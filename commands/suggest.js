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
class suggest {
    constructor() {
        this._command = "suggest";
    }
    help() {
        return "Creates the basic poll";
    }
    isThisCommand(command) {
        return command === this._command;
    }
    runCommand(args, msgObject, client) {
        return __awaiter(this, void 0, void 0, function* () {
            let PREFIX = "k!";
            let suggestchannel = msgObject.guild.channels.find(c => c.name === "💡suggestions💡");
            let suuggestions = args.slice(0).join(" ") || "";
            let suggestembed = new Discord.RichEmbed()
                .setTitle(`**New suggestions from ${msgObject.author.username}!**`)
                .setThumbnail(msgObject.author.avatarURL)
                .setDescription(suuggestions)
                .setFooter(msgObject.author.tag);
            msgObject.delete(60000);
            if (!suuggestions) {
                msgObject.channel.send('```Syntax: suggest [suggestions]```');
                msgObject.channel.send("ERROR | Enter the suggestions!");
                return;
            }
            suggestchannel.send(suggestembed);
            msgObject.channel.send(`Thanks for your suggestions, ${msgObject.author.username}-sama!
Your suggestion will be reviewed by staff members!`);
            msgObject.delete(5000);
        });
    }
}
exports.default = suggest;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VnZ2VzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tYW5kcy9zdWdnZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxzQ0FBc0M7QUFHdEMsTUFBcUIsT0FBTztJQUE1QjtRQUVxQixhQUFRLEdBQUcsU0FBUyxDQUFBO0lBb0NyQyxDQUFDO0lBbENELElBQUk7UUFDQSxPQUFPLHdCQUF3QixDQUFDO0lBQ3BDLENBQUM7SUFFRCxhQUFhLENBQUMsT0FBZTtRQUN6QixPQUFPLE9BQU8sS0FBSyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3JDLENBQUM7SUFFSyxVQUFVLENBQUMsSUFBYyxFQUFFLFNBQTBCLEVBQUUsTUFBc0I7O1lBRS9FLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQTtZQUNqQixJQUFJLGNBQWMsR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxLQUFLLGlCQUFpQixDQUF3QixDQUFBO1lBQzVHLElBQUksWUFBWSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUdqRCxJQUFJLFlBQVksR0FBRyxJQUFJLE9BQU8sQ0FBQyxTQUFTLEVBQUU7aUJBQ3pDLFFBQVEsQ0FBQywwQkFBMEIsU0FBUyxDQUFDLE1BQU0sQ0FBQyxRQUFRLEtBQUssQ0FBQztpQkFDbEUsWUFBWSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDO2lCQUN4QyxjQUFjLENBQUMsWUFBWSxDQUFDO2lCQUM1QixTQUFTLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQTtZQUVoQyxTQUFTLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBRXhCLElBQUcsQ0FBQyxZQUFZLEVBQ2hCO2dCQUNJLFNBQVMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLHFDQUFxQyxDQUFDLENBQUE7Z0JBQzdELFNBQVMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLGdDQUFnQyxDQUFDLENBQUE7Z0JBQ3hELE9BQU87YUFDVjtZQUNPLGNBQWMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUE7WUFDakMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsZ0NBQWdDLFNBQVMsQ0FBQyxNQUFNLENBQUMsUUFBUTttREFDN0MsQ0FBQyxDQUFBO1lBQ3BDLFNBQVMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDL0IsQ0FBQztLQUFBO0NBQ0o7QUF0Q0wsMEJBc0NLIn0=