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
class serverinfo {
    constructor() {
        this._command = "serverinfo";
    }
    help() {
        return "This command does absolutely nothing! How fun :)";
    }
    isThisCommand(command) {
        return command === this._command;
    }
    runCommand(args, msgObject, client) {
        return __awaiter(this, void 0, void 0, function* () {
            const PREFIX = "k!";
            let serverinfo = new Discord.RichEmbed()
                .addField('Owner', msgObject.guild.owner, true)
                .addField('Server created', msgObject.guild.createdAt, true)
                .addField('Members', msgObject.guild.memberCount, true)
                .addField('Verification level', msgObject.guild.verificationLevel, true)
                .addField('Region', msgObject.guild.region);
            if (msgObject.content.startsWith(`${PREFIX}serverinfo`)) {
                msgObject.channel.send(serverinfo);
            }
        });
    }
}
exports.default = serverinfo;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmVyaW5mby5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tYW5kcy9zZXJ2ZXJpbmZvLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxzQ0FBc0M7QUFHdEMsTUFBcUIsVUFBVTtJQUEvQjtRQUVxQixhQUFRLEdBQUcsWUFBWSxDQUFBO0lBNEI1QyxDQUFDO0lBMUJHLElBQUk7UUFDQSxPQUFPLGtEQUFrRCxDQUFDO0lBQzlELENBQUM7SUFFRCxhQUFhLENBQUMsT0FBZTtRQUN6QixPQUFPLE9BQU8sS0FBSyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3JDLENBQUM7SUFFSyxVQUFVLENBQUMsSUFBYyxFQUFFLFNBQTBCLEVBQUUsTUFBc0I7O1lBRS9FLE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQTtZQUVuQixJQUFJLFVBQVUsR0FBRyxJQUFJLE9BQU8sQ0FBQyxTQUFTLEVBQUU7aUJBQ3ZDLFFBQVEsQ0FBQyxPQUFPLEVBQUUsU0FBUyxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDO2lCQUM5QyxRQUFRLENBQUMsZ0JBQWdCLEVBQUUsU0FBUyxDQUFDLEtBQUssQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDO2lCQUMzRCxRQUFRLENBQUMsU0FBUyxFQUFFLFNBQVMsQ0FBQyxLQUFLLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQztpQkFDdEQsUUFBUSxDQUFDLG9CQUFvQixFQUFFLFNBQVMsQ0FBQyxLQUFLLENBQUMsaUJBQWlCLEVBQUUsSUFBSSxDQUFDO2lCQUN2RSxRQUFRLENBQUMsUUFBUSxFQUFFLFNBQVMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUE7WUFHM0MsSUFBRyxTQUFTLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxHQUFHLE1BQU0sWUFBWSxDQUFDLEVBQUU7Z0JBQ3BELFNBQVMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFBO2FBQ2pDO1FBR1QsQ0FBQztLQUFBO0NBQ0o7QUE5QkQsNkJBOEJDIn0=