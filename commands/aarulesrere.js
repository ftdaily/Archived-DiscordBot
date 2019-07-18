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
class aarulesrere {
    constructor() {
        this._command = "aarulesrere";
    }
    help() {
        return "This command does absolutely nothing! How fun :)";
    }
    isThisCommand(command) {
        return command === this._command;
    }
    runCommand(args, msgObject, client) {
        return __awaiter(this, void 0, void 0, function* () {
            msgObject.delete(0);
            let qwerty = new Discord.RichEmbed()
                .setImage('https://www.codeaffine.com/wp-content/uploads/2012/09/rule.png');
            msgObject.channel.sendEmbed(qwerty);
        });
    }
}
exports.default = aarulesrere;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWFydWxlc3JlcmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvY29tbWFuZHMvYWFydWxlc3JlcmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHNDQUFzQztBQUd0QyxNQUFxQixXQUFXO0lBQWhDO1FBRXFCLGFBQVEsR0FBRyxhQUFhLENBQUE7SUFtQjdDLENBQUM7SUFqQkcsSUFBSTtRQUNBLE9BQU8sa0RBQWtELENBQUM7SUFDOUQsQ0FBQztJQUVELGFBQWEsQ0FBQyxPQUFlO1FBQ3pCLE9BQU8sT0FBTyxLQUFLLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDckMsQ0FBQztJQUVLLFVBQVUsQ0FBQyxJQUFjLEVBQUUsU0FBMEIsRUFBRSxNQUFzQjs7WUFFL0UsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQTtZQUVuQixJQUFJLE1BQU0sR0FBRyxJQUFJLE9BQU8sQ0FBQyxTQUFTLEVBQUU7aUJBQ25DLFFBQVEsQ0FBQyxnRUFBZ0UsQ0FBQyxDQUFBO1lBRTNFLFNBQVMsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFBO1FBQ3ZDLENBQUM7S0FBQTtDQUNKO0FBckJELDhCQXFCQyJ9