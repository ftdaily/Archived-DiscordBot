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
class rules {
    constructor() {
        this._command = "rules";
    }
    help() {
        return "Just for a while";
    }
    isThisCommand(command) {
        return command === this._command;
    }
    runCommand(args, msgObject, client) {
        return __awaiter(this, void 0, void 0, function* () {
            let COMMANDSBOTCHANNEL = msgObject.guild.channels.find(c => c.name === "commands");
            const ownerrole = "Server Manager";
            const adminrole = "Help server management";
            const developerorle = "Developer teams!";
            const moderole = "Official moderation team";
            const supportrole = "Official support team";
            const communityrole = "Cool peoples";
            const BCNotifyrole = `Pinged for Broadcast | \`k!notify\` in ${COMMANDSBOTCHANNEL}`;
            const logsrole = `Grants access to logs channels | \`k!logs in\` ${COMMANDSBOTCHANNEL}`;
            const rolemanagement = "Roles information";
            msgObject.delete(0);
            let rolemanager = new Discord.RichEmbed()
                .setColor(0xf0b00e)
                .addField(`✪ Owner`, ownerrole)
                .addField("✪ Administrator", adminrole)
                .addField("✪ Developer", developerorle)
                .addField("🛡 Warden", moderole)
                .addField("🛡 Warder", supportrole)
                .addField("Member", communityrole)
                .addField("Logs", logsrole)
                .addField("BC Notify", BCNotifyrole)
                .setFooter('Support server: https://discord.gg/uaDP8Xc');
            msgObject.channel.send(rolemanager)
                .catch(console.error);
        });
    }
}
exports.default = rules;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicnVsZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvY29tbWFuZHMvcnVsZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHNDQUFzQztBQUd0QyxNQUFxQixLQUFLO0lBQTFCO1FBRXFCLGFBQVEsR0FBRyxPQUFPLENBQUE7SUEyQ3ZDLENBQUM7SUF6Q0csSUFBSTtRQUNBLE9BQU8sa0JBQWtCLENBQUM7SUFDOUIsQ0FBQztJQUVELGFBQWEsQ0FBQyxPQUFlO1FBQ3pCLE9BQU8sT0FBTyxLQUFLLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDckMsQ0FBQztJQUVLLFVBQVUsQ0FBQyxJQUFjLEVBQUUsU0FBMEIsRUFBRSxNQUFzQjs7WUFFL0UsSUFBSSxrQkFBa0IsR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxLQUFLLFVBQVUsQ0FBQyxDQUFBO1lBRWxGLE1BQU0sU0FBUyxHQUFHLGdCQUFnQixDQUFBO1lBQ2xDLE1BQU0sU0FBUyxHQUFHLHdCQUF3QixDQUFBO1lBQzFDLE1BQU0sYUFBYSxHQUFHLGtCQUFrQixDQUFBO1lBQ3hDLE1BQU0sUUFBUSxHQUFHLDBCQUEwQixDQUFBO1lBQzNDLE1BQU0sV0FBVyxHQUFHLHVCQUF1QixDQUFBO1lBQzNDLE1BQU0sYUFBYSxHQUFHLGNBQWMsQ0FBQTtZQUNwQyxNQUFNLFlBQVksR0FBRywwQ0FBMEMsa0JBQWtCLEVBQUUsQ0FBQTtZQUNuRixNQUFNLFFBQVEsR0FBRyxrREFBa0Qsa0JBQWtCLEVBQUUsQ0FBQTtZQUV2RixNQUFNLGNBQWMsR0FBRyxtQkFBbUIsQ0FBQTtZQUUxQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFBO1lBRW5CLElBQUksV0FBVyxHQUFHLElBQUksT0FBTyxDQUFDLFNBQVMsRUFBRTtpQkFFcEMsUUFBUSxDQUFDLFFBQVEsQ0FBQztpQkFDbEIsUUFBUSxDQUFDLFNBQVMsRUFBRSxTQUFTLENBQUM7aUJBQzlCLFFBQVEsQ0FBQyxpQkFBaUIsRUFBRSxTQUFTLENBQUM7aUJBQ3RDLFFBQVEsQ0FBQyxhQUFhLEVBQUUsYUFBYSxDQUFDO2lCQUN0QyxRQUFRLENBQUMsV0FBVyxFQUFFLFFBQVEsQ0FBQztpQkFDL0IsUUFBUSxDQUFDLFdBQVcsRUFBRSxXQUFXLENBQUM7aUJBQ2xDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsYUFBYSxDQUFDO2lCQUNqQyxRQUFRLENBQUMsTUFBTSxFQUFFLFFBQVEsQ0FBQztpQkFDMUIsUUFBUSxDQUFDLFdBQVcsRUFBRSxZQUFZLENBQUM7aUJBQ25DLFNBQVMsQ0FBQyw0Q0FBNEMsQ0FBQyxDQUFBO1lBRTVELFNBQVMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQztpQkFDbEMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMxQixDQUFDO0tBQUE7Q0FDSjtBQTdDRCx3QkE2Q0MifQ==