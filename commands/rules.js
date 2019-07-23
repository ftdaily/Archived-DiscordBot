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
            const moderole = "Keep server moderate";
            const supportrole = "Help other people with any problems";
            const communityrole = "Cool peoples";
            const BCNotifyrole = `Pinged for Broadcast | \`k!notify\` in ${COMMANDSBOTCHANNEL}`;
            const logsrole = `Grants access to logs channels | \`k!logs in\` ${COMMANDSBOTCHANNEL}`;
            const headadmin = 'Help owner at managing everything';
            const warrantoffice = 'Keep the staff moderate';
            const partnermanager = 'Managing the server partner';
            const rolemanagement = "Roles information";
            msgObject.delete(0);
            let rolemanager = new Discord.RichEmbed()
                .setColor(0xf0b00e)
                .addField(`✪ Owner`, ownerrole)
                .addField("✪ Head Administrator", headadmin)
                .addField("✪ Administrator", adminrole)
                .addField("✪ Developer", developerorle)
                .addField("🛡 Chief Warrant Officer", warrantoffice)
                .addField("🛡 Warrant Officer", moderole)
                .addField("🛡 Helper", supportrole)
                .addField("🤝Partner Manager", partnermanager)
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicnVsZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvY29tbWFuZHMvcnVsZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHNDQUFzQztBQUd0QyxNQUFxQixLQUFLO0lBQTFCO1FBRXFCLGFBQVEsR0FBRyxPQUFPLENBQUE7SUFpRHZDLENBQUM7SUEvQ0csSUFBSTtRQUNBLE9BQU8sa0JBQWtCLENBQUM7SUFDOUIsQ0FBQztJQUVELGFBQWEsQ0FBQyxPQUFlO1FBQ3pCLE9BQU8sT0FBTyxLQUFLLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDckMsQ0FBQztJQUVLLFVBQVUsQ0FBQyxJQUFjLEVBQUUsU0FBMEIsRUFBRSxNQUFzQjs7WUFFL0UsSUFBSSxrQkFBa0IsR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxLQUFLLFVBQVUsQ0FBQyxDQUFBO1lBRWxGLE1BQU0sU0FBUyxHQUFHLGdCQUFnQixDQUFBO1lBQ2xDLE1BQU0sU0FBUyxHQUFHLHdCQUF3QixDQUFBO1lBQzFDLE1BQU0sYUFBYSxHQUFHLGtCQUFrQixDQUFBO1lBQ3hDLE1BQU0sUUFBUSxHQUFHLHNCQUFzQixDQUFBO1lBQ3ZDLE1BQU0sV0FBVyxHQUFHLHFDQUFxQyxDQUFBO1lBQ3pELE1BQU0sYUFBYSxHQUFHLGNBQWMsQ0FBQTtZQUNwQyxNQUFNLFlBQVksR0FBRywwQ0FBMEMsa0JBQWtCLEVBQUUsQ0FBQTtZQUNuRixNQUFNLFFBQVEsR0FBRyxrREFBa0Qsa0JBQWtCLEVBQUUsQ0FBQTtZQUN2RixNQUFNLFNBQVMsR0FBRyxtQ0FBbUMsQ0FBQTtZQUNyRCxNQUFNLGFBQWEsR0FBRyx5QkFBeUIsQ0FBQTtZQUMvQyxNQUFNLGNBQWMsR0FBRyw2QkFBNkIsQ0FBQTtZQUVwRCxNQUFNLGNBQWMsR0FBRyxtQkFBbUIsQ0FBQTtZQUUxQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFBO1lBRW5CLElBQUksV0FBVyxHQUFHLElBQUksT0FBTyxDQUFDLFNBQVMsRUFBRTtpQkFFcEMsUUFBUSxDQUFDLFFBQVEsQ0FBQztpQkFDbEIsUUFBUSxDQUFDLFNBQVMsRUFBRSxTQUFTLENBQUM7aUJBQzlCLFFBQVEsQ0FBQyxzQkFBc0IsRUFBRSxTQUFTLENBQUM7aUJBQzNDLFFBQVEsQ0FBQyxpQkFBaUIsRUFBRSxTQUFTLENBQUM7aUJBQ3RDLFFBQVEsQ0FBQyxhQUFhLEVBQUUsYUFBYSxDQUFDO2lCQUN0QyxRQUFRLENBQUMsMEJBQTBCLEVBQUUsYUFBYSxDQUFDO2lCQUNuRCxRQUFRLENBQUMsb0JBQW9CLEVBQUUsUUFBUSxDQUFDO2lCQUN4QyxRQUFRLENBQUMsV0FBVyxFQUFFLFdBQVcsQ0FBQztpQkFDbEMsUUFBUSxDQUFDLG1CQUFtQixFQUFFLGNBQWMsQ0FBQztpQkFDN0MsUUFBUSxDQUFDLFFBQVEsRUFBRSxhQUFhLENBQUM7aUJBQ2pDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsUUFBUSxDQUFDO2lCQUMxQixRQUFRLENBQUMsV0FBVyxFQUFFLFlBQVksQ0FBQztpQkFDbkMsU0FBUyxDQUFDLDRDQUE0QyxDQUFDLENBQUE7WUFFNUQsU0FBUyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDO2lCQUNsQyxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzFCLENBQUM7S0FBQTtDQUNKO0FBbkRELHdCQW1EQyJ9