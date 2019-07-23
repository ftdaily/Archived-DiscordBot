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
class embedwhile {
    constructor() {
        this._command = "embedwhile";
    }
    help() {
        return "Just for a while";
    }
    isThisCommand(command) {
        return command === this._command;
    }
    runCommand(args, msgObject, client) {
        return __awaiter(this, void 0, void 0, function* () {
            let ADMINISTRATORROLE = msgObject.guild.roles.find(r => r.name === "✪ Administrator");
            let OWNERROLE = msgObject.guild.roles.find(r => r.name === "🛡 Helper");
            let WARDERROLE = msgObject.guild.roles.find(r => r.name === "✪ Owner ");
            let KITMAILMENTIONS = msgObject.guild.members.find(m => m.displayName === "NekoMail");
            let SUPPORTCHANNEL = msgObject.guild.channels.find(c => c.name === "🚨support🚨");
            let VERIFIEDCHANNEL = msgObject.guild.channels.find(c => c.name === "✅verification✅");
            const rulespam = "This includes commands, emotes, text, images and videos.";
            const langrule = "Any other languages must go in the non-english-chat.";
            const easyNameRule = "Names will be changed at staff discretion.";
            const ModModModMod = "Nothing is perfect, that includes our rules list. Any exploits or loopholes will not be tolerated. Use your common sense and do not complain when the staff team is keeping the server a calm and safe place.";
            const nothingRolsd = "Use your common sense.";
            const bypassutomod = "Don't bypass it!";
            const autoModRule = "It's heavier punishment than from staff.";
            const ImpersonationRule = "This includes impersonation of other users, staff and any bot.";
            const ghostpingrule = "Ghost Pings = Mentioning a user then deleting your message. Random Mentions = Mentioning a user who has not been active in the server or channel. This includes pinging staff in support channels.";
            const respectrule = "There is zero tolerance for drama, racism, hate speech or hatred towards any user. We are open arms to everyone here.";
            const adsrule = "This includes other bots, discord servers, social media, and content channels. Any reports go to KitMail";
            msgObject.delete(0);
            if (!msgObject.member.hasPermission("ADMINISTRATOR")) {
                msgObject.channel.send(`ERROR | Insufficient permission for ${msgObject.author.username} | Contact staff if it's still occurred.`);
                return;
            }
            let rulesss = new Discord.RichEmbed()
                .setImage('https://i2.wp.com/wp.laravel-news.com/wp-content/uploads/2017/07/roles-permissions.png?resize=2200%2C1125')
                .setColor(0xf0b00e)
                .setDescription(` 
Staff are not responsible for what it's posted on this server and are also not responsible for who accesses the channel containing NSFW images or conversations and NSFW roles, because you are applied the roles by yourself.
━━━━━━━━━━━━━━━━━━━━━
Discord's ToS and Community Guidelines.
https://discordapp.com/terms
https://discordapp.com/guidelines
━━━━━━━━━━━━━━━━━━━━━
Any DM ADs or User Reports must be sent to 
${KITMAILMENTIONS}.
            
Any Staff Complaints must be sent to ${KITMAILMENTIONS} or report it on ${SUPPORTCHANNEL}.
They will be handled by ${ADMINISTRATORROLE} or ${OWNERROLE}.
            
__**​Ignoring the rules does not exclude you from them.**__
━━━━━━━━━━━━━━━━━━━━━
​__**You are expected to have read and understood all rules listed below.**__`)
                .addField('**• No Spamming.**', rulespam)
                .setThumbnail(msgObject.guild.iconURL)
                .addField('**• No unsolicited Advertising or Promotion within the server or DMs.**', adsrule)
                .addField('**• Respect is a requirement.**', respectrule)
                .addField('**• English is the main language in this server.**', langrule)
                .addField('**• Ghost Pings or Cold/Random Mentions are not allowed.**', ghostpingrule)
                .addField('**• Any Impersonation will result in a kick**', ImpersonationRule)
                .addField('**• Use Common Sense.**', nothingRolsd)
                .addField('**• Triggering Automod three times will result in an hour mute or banned.**', autoModRule)
                .addField('**• Bypassing Automod will result in a mute or ban after being warned.**', bypassutomod)
                .addField('**• Usernames must be easily readable, mentionable, not hoisted and appropriate.**', easyNameRule)
                .addField('**Moderators may moderate at their own discretion.**', ModModModMod);
            msgObject.channel.send(rulesss)
                .catch(console.error);
        });
    }
}
exports.default = embedwhile;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW1iZWR3aGlsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tYW5kcy9lbWJlZHdoaWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxzQ0FBc0M7QUFHdEMsTUFBcUIsVUFBVTtJQUEvQjtRQUVxQixhQUFRLEdBQUcsWUFBWSxDQUFBO0lBMkU1QyxDQUFDO0lBekVHLElBQUk7UUFDQSxPQUFPLGtCQUFrQixDQUFDO0lBQzlCLENBQUM7SUFFRCxhQUFhLENBQUMsT0FBZTtRQUN6QixPQUFPLE9BQU8sS0FBSyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3JDLENBQUM7SUFFSyxVQUFVLENBQUMsSUFBYyxFQUFFLFNBQTBCLEVBQUUsTUFBc0I7O1lBRS9FLElBQUksaUJBQWlCLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksS0FBSyxpQkFBaUIsQ0FBQyxDQUFBO1lBQ3RGLElBQUksU0FBUyxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLEtBQUssV0FBVyxDQUFDLENBQUE7WUFDeEUsSUFBSSxVQUFVLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksS0FBSyxVQUFVLENBQUMsQ0FBQTtZQUN4RSxJQUFJLGVBQWUsR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsV0FBVyxLQUFLLFVBQVUsQ0FBQyxDQUFBO1lBQ3JGLElBQUksY0FBYyxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLEtBQUssYUFBYSxDQUFDLENBQUE7WUFDakYsSUFBSSxlQUFlLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksS0FBSyxnQkFBZ0IsQ0FBQyxDQUFBO1lBRXJGLE1BQU0sUUFBUSxHQUFHLDBEQUEwRCxDQUFBO1lBQzNFLE1BQU0sUUFBUSxHQUFHLHNEQUFzRCxDQUFBO1lBQ3ZFLE1BQU0sWUFBWSxHQUFHLDRDQUE0QyxDQUFBO1lBQ2pFLE1BQU0sWUFBWSxHQUFHLCtNQUErTSxDQUFBO1lBQ3BPLE1BQU0sWUFBWSxHQUFHLHdCQUF3QixDQUFBO1lBQzdDLE1BQU0sWUFBWSxHQUFHLGtCQUFrQixDQUFBO1lBQ3ZDLE1BQU0sV0FBVyxHQUFHLDBDQUEwQyxDQUFBO1lBQzlELE1BQU0saUJBQWlCLEdBQUcsZ0VBQWdFLENBQUE7WUFDMUYsTUFBTSxhQUFhLEdBQUcsb01BQW9NLENBQUE7WUFDMU4sTUFBTSxXQUFXLEdBQUcsdUhBQXVILENBQUE7WUFDM0ksTUFBTSxPQUFPLEdBQUcsMEdBQTBHLENBQUE7WUFFMUgsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQTtZQUVuQixJQUFHLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsZUFBZSxDQUFDLEVBQ25EO2dCQUNJLFNBQVMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLHVDQUF1QyxTQUFTLENBQUMsTUFBTSxDQUFDLFFBQVEsMENBQTBDLENBQUMsQ0FBQTtnQkFDbEksT0FBTzthQUNWO1lBRUQsSUFBSSxPQUFPLEdBQUcsSUFBSSxPQUFPLENBQUMsU0FBUyxFQUFFO2lCQUVoQyxRQUFRLENBQUMsMkdBQTJHLENBQUM7aUJBQ3JILFFBQVEsQ0FBQyxRQUFRLENBQUM7aUJBQ2xCLGNBQWMsQ0FBQzs7Ozs7Ozs7RUFRMUIsZUFBZTs7dUNBRXNCLGVBQWUsb0JBQW9CLGNBQWM7MEJBQzlELGlCQUFpQixPQUFPLFNBQVM7Ozs7OEVBSW1CLENBQUM7aUJBQ2xFLFFBQVEsQ0FBQyxvQkFBb0IsRUFBRSxRQUFRLENBQUM7aUJBQ3hDLFlBQVksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQztpQkFDckMsUUFBUSxDQUFDLHlFQUF5RSxFQUFFLE9BQU8sQ0FBQztpQkFDNUYsUUFBUSxDQUFDLGlDQUFpQyxFQUFFLFdBQVcsQ0FBQztpQkFDeEQsUUFBUSxDQUFDLG9EQUFvRCxFQUFFLFFBQVEsQ0FBQztpQkFDeEUsUUFBUSxDQUFDLDREQUE0RCxFQUFFLGFBQWEsQ0FBQztpQkFDckYsUUFBUSxDQUFDLCtDQUErQyxFQUFFLGlCQUFpQixDQUFDO2lCQUM1RSxRQUFRLENBQUMseUJBQXlCLEVBQUUsWUFBWSxDQUFDO2lCQUNqRCxRQUFRLENBQUMsNkVBQTZFLEVBQUUsV0FBVyxDQUFDO2lCQUNwRyxRQUFRLENBQUMsMEVBQTBFLEVBQUUsWUFBWSxDQUFDO2lCQUNsRyxRQUFRLENBQUMsb0ZBQW9GLEVBQUUsWUFBWSxDQUFDO2lCQUM1RyxRQUFRLENBQUMsc0RBQXNELEVBQUUsWUFBWSxDQUFDLENBQUE7WUFFbkYsU0FBUyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO2lCQUM5QixLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzFCLENBQUM7S0FBQTtDQUNKO0FBN0VELDZCQTZFQyJ9