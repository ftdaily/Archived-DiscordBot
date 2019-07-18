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
class helpsupport {
    constructor() {
        this._command = "helpsupport";
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
k!report [user] [reason]
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
exports.default = helpsupport;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVscHN1cHBvcnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvY29tbWFuZHMvaGVscHN1cHBvcnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHNDQUFzQztBQUd0QyxNQUFxQixXQUFXO0lBQWhDO1FBRXFCLGFBQVEsR0FBRyxhQUFhLENBQUE7SUFrQzdDLENBQUM7SUFoQ0csSUFBSTtRQUNBLE9BQU8sa0RBQWtELENBQUM7SUFDOUQsQ0FBQztJQUVELGFBQWEsQ0FBQyxPQUFlO1FBQ3pCLE9BQU8sT0FBTyxLQUFLLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDckMsQ0FBQztJQUVLLFVBQVUsQ0FBQyxJQUFjLEVBQUUsU0FBMEIsRUFBRSxNQUFzQjs7WUFFL0UsSUFBSSxVQUFVLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFdBQVcsS0FBSyxVQUFVLENBQUMsQ0FBQTtZQUNoRixJQUFJLGdCQUFnQixHQUFHLElBQUksT0FBTyxDQUFDLFNBQVMsRUFBRTtpQkFDN0MsUUFBUSxDQUFDLHVEQUF1RCxDQUFDO2lCQUNqRSxZQUFZLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUM7aUJBQ3JDLGNBQWMsQ0FBQzs7Ozs7Ozs7S0FRbkIsVUFBVTsyQkFDWSxDQUFDO2lCQUNuQixRQUFRLENBQUMsdUVBQXVFLENBQUMsQ0FBQTtZQUVsRixJQUFHLFNBQVMsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLGdCQUFnQixDQUFDLEVBQ2pEO2dCQUNJLFNBQVMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUE7YUFDM0M7WUFDRCxTQUFTLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFBO1FBQzVDLENBQUM7S0FBQTtDQUNKO0FBcENELDhCQW9DQyJ9