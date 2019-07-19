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
class support {
    constructor() {
        this._command = "support";
    }
    help() {
        return "This command does absolutely nothing! How fun :)";
    }
    isThisCommand(command) {
        return command === this._command;
    }
    runCommand(args, msgObject, client) {
        return __awaiter(this, void 0, void 0, function* () {
            let mailmodbot = msgObject.guild.members.find(m => m.displayName === "NekoMail");
            let embedNeedSupport = new Discord.RichEmbed()
                .setTitle("**It's seems you need a help, heres you need to do!**")
                .setThumbnail(msgObject.guild.iconURL)
                .setDescription(`**========================
To report player
k!report [usertag] [reason]
========================
Create a ticket support
-ticket open [topic]
========================
Send mail to moderator
PM ${mailmodbot} 
========================**`)
                .setImage('https://nationaleczema.org/wp-content/uploads/2013/08/get-support.jpg');
            if (msgObject.content.startsWith("i need support")) {
                msgObject.channel.send(embedNeedSupport);
            }
            msgObject.channel.send(embedNeedSupport);
        });
    }
}
exports.default = support;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VwcG9ydC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tYW5kcy9zdXBwb3J0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxzQ0FBc0M7QUFHdEMsTUFBcUIsT0FBTztJQUE1QjtRQUVxQixhQUFRLEdBQUcsU0FBUyxDQUFBO0lBa0N6QyxDQUFDO0lBaENHLElBQUk7UUFDQSxPQUFPLGtEQUFrRCxDQUFDO0lBQzlELENBQUM7SUFFRCxhQUFhLENBQUMsT0FBZTtRQUN6QixPQUFPLE9BQU8sS0FBSyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3JDLENBQUM7SUFFSyxVQUFVLENBQUMsSUFBYyxFQUFFLFNBQTBCLEVBQUUsTUFBc0I7O1lBRS9FLElBQUksVUFBVSxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxXQUFXLEtBQUssVUFBVSxDQUFDLENBQUE7WUFDaEYsSUFBSSxnQkFBZ0IsR0FBRyxJQUFJLE9BQU8sQ0FBQyxTQUFTLEVBQUU7aUJBQzdDLFFBQVEsQ0FBQyx1REFBdUQsQ0FBQztpQkFDakUsWUFBWSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDO2lCQUNyQyxjQUFjLENBQUM7Ozs7Ozs7O0tBUW5CLFVBQVU7MkJBQ1ksQ0FBQztpQkFDbkIsUUFBUSxDQUFDLHVFQUF1RSxDQUFDLENBQUE7WUFFbEYsSUFBRyxTQUFTLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxnQkFBZ0IsQ0FBQyxFQUNqRDtnQkFDSSxTQUFTLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFBO2FBQzNDO1lBQ0QsU0FBUyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQTtRQUM1QyxDQUFDO0tBQUE7Q0FDSjtBQXBDRCwwQkFvQ0MifQ==