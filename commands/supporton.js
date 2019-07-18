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
class supporton {
    constructor() {
        this._command = "supporton";
    }
    help() {
        return "Join logs!";
    }
    isThisCommand(command) {
        return command === this._command;
    }
    runCommand(args, msgObject, client) {
        return __awaiter(this, void 0, void 0, function* () {
            let StaffRole = msgObject.member.roles.find(r => r.name === "『Staff』");
            let warderRole = msgObject.guild.roles.find(r => r.name === "🛡 Warder");
            if (!StaffRole) {
                msgObject.channel.send(`ERROR | Insufficient permission for ${msgObject.author.username} | Contact staff if it's still occurred.`)
                    .then(msg => {
                    msg.delete(60000);
                });
                return;
            }
            msgObject.member.addRole(warderRole);
            msgObject.channel.send(`You will get pinged from support channel, ${msgObject.author.username}.`);
        });
    }
}
exports.default = supporton;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VwcG9ydG9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NvbW1hbmRzL3N1cHBvcnRvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBR0EsTUFBcUIsU0FBUztJQUE5QjtRQUVxQixhQUFRLEdBQUcsV0FBVyxDQUFBO0lBMEIzQyxDQUFDO0lBeEJHLElBQUk7UUFDQSxPQUFPLFlBQVksQ0FBQztJQUN4QixDQUFDO0lBRUQsYUFBYSxDQUFDLE9BQWU7UUFDekIsT0FBTyxPQUFPLEtBQUssSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUNyQyxDQUFDO0lBRUssVUFBVSxDQUFDLElBQWMsRUFBRSxTQUEwQixFQUFFLE1BQXNCOztZQUUvRSxJQUFJLFNBQVMsR0FBRyxTQUFTLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxLQUFLLFNBQVMsQ0FBQyxDQUFBO1lBQ3ZFLElBQUksVUFBVSxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLEtBQUssV0FBVyxDQUFDLENBQUE7WUFFekUsSUFBRyxDQUFDLFNBQVMsRUFDYjtnQkFDSSxTQUFTLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyx1Q0FBdUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxRQUFRLDBDQUEwQyxDQUFDO3FCQUNqSSxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUU7b0JBQ1AsR0FBdUIsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQzNDLENBQUMsQ0FBQyxDQUFDO2dCQUNILE9BQU87YUFDVjtZQUNPLFNBQVMsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFBO1lBQ3BDLFNBQVMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLDZDQUE2QyxTQUFTLENBQUMsTUFBTSxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUE7UUFDN0csQ0FBQztLQUFBO0NBQ0o7QUE1QkQsNEJBNEJDIn0=