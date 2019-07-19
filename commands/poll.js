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
class poll {
    constructor() {
        this._command = "poll";
    }
    help() {
        return "Creates the basic poll";
    }
    isThisCommand(command) {
        return command === this._command;
    }
    runCommand(args, msgObject, client) {
        return __awaiter(this, void 0, void 0, function* () {
            msgObject.delete(0);
            if (args.length < 1) {
                return;
            }
            let pollEmbed = new Discord.RichEmbed()
                .setTitle(`Let me hear your voice!`)
                .setDescription(args.join(" "))
                .setColor(0xc46fde);
            let pollMessage = yield msgObject.channel.send(pollEmbed);
            yield pollMessage.react("✅");
            yield pollMessage.react("❎");
            const filter = (reaction) => reaction.emoji.name === "✅" || reaction.emoji.name === "❎";
            const result = yield pollMessage.awaitReactions(filter, { time: 300000 });
            let resultembed = new Discord.RichEmbed()
                .setTitle(`Result`)
                .setColor(0xc46fde)
                .setDescription(`Result for the poll: ${args.join(" ")}`)
                .addField("✅:", `${result.get("✅").count - 1} Votes`)
                .addField("❎:", `${result.get("❎").count - 1} Votes`);
            msgObject.channel.send(resultembed);
            pollMessage.delete(0);
        });
    }
}
exports.default = poll;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9sbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tYW5kcy9wb2xsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxzQ0FBc0M7QUFHdEMsTUFBcUIsSUFBSTtJQUF6QjtRQUVxQixhQUFRLEdBQUcsTUFBTSxDQUFBO0lBd0N0QyxDQUFDO0lBdENHLElBQUk7UUFDQSxPQUFPLHdCQUF3QixDQUFDO0lBQ3BDLENBQUM7SUFFRCxhQUFhLENBQUMsT0FBZTtRQUN6QixPQUFPLE9BQU8sS0FBSyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3JDLENBQUM7SUFFSyxVQUFVLENBQUMsSUFBYyxFQUFFLFNBQTBCLEVBQUUsTUFBc0I7O1lBRS9FLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFFcEIsSUFBRyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtnQkFBRSxPQUFPO2FBQUU7WUFFL0IsSUFBSSxTQUFTLEdBQUcsSUFBSSxPQUFPLENBQUMsU0FBUyxFQUFFO2lCQUNsQyxRQUFRLENBQUMseUJBQXlCLENBQUM7aUJBQ25DLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2lCQUM5QixRQUFRLENBQUMsUUFBUSxDQUFDLENBQUE7WUFFdkIsSUFBSSxXQUFXLEdBQUcsTUFBTSxTQUFTLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUUxRCxNQUFPLFdBQStCLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ2xELE1BQU8sV0FBK0IsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7WUFFbEQsTUFBTSxNQUFNLEdBQUcsQ0FBQyxRQUFpQyxFQUFFLEVBQUUsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLElBQUksS0FBSyxHQUFHLElBQUksUUFBUSxDQUFDLEtBQUssQ0FBQyxJQUFJLEtBQUssR0FBRyxDQUFDO1lBRWpILE1BQU0sTUFBTSxHQUFHLE1BQU8sV0FBK0IsQ0FBQyxjQUFjLENBQUMsTUFBTSxFQUFFLEVBQUMsSUFBSSxFQUFFLE1BQU0sRUFBQyxDQUFDLENBQUE7WUFFNUYsSUFBSSxXQUFXLEdBQUcsSUFBSSxPQUFPLENBQUMsU0FBUyxFQUFFO2lCQUNwQyxRQUFRLENBQUMsUUFBUSxDQUFDO2lCQUNsQixRQUFRLENBQUMsUUFBUSxDQUFDO2lCQUNsQixjQUFjLENBQUMsd0JBQXdCLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQztpQkFDeEQsUUFBUSxDQUFDLElBQUksRUFBQyxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxHQUFDLENBQUMsUUFBUSxDQUFDO2lCQUNqRCxRQUFRLENBQUMsSUFBSSxFQUFDLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLLEdBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQTtZQUV0RCxTQUFTLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUNuQyxXQUErQixDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUMvQyxDQUFDO0tBQUE7Q0FDSjtBQTFDRCx1QkEwQ0MifQ==