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
class supportoff {
    constructor() {
        this._command = "supportoff";
    }
    help() {
        return "Join logs!";
    }
    isThisCommand(command) {
        return command === this._command;
    }
    runCommand(args, msgObject, client) {
        return __awaiter(this, void 0, void 0, function* () {
            const PREFIX = "k!";
            if (!msgObject.member.roles.find(r => r.name === "『Staff』")) {
                msgObject.channel.send(`ERROR | Insufficient permission for ${msgObject.author.username} | Contact staff if it's still occurred.`)
                    .then(msg => {
                    msg.delete(60000);
                });
                return;
            }
            if (msgObject.content.startsWith(`${PREFIX}supportoff`)) {
                msgObject.member.removeRole('584738991262138369');
                msgObject.channel.send(`You will no longer get pinged from support channel, ${msgObject.author.username}.`);
            }
        });
    }
}
exports.default = supportoff;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VwcG9ydG9mZi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tYW5kcy9zdXBwb3J0b2ZmLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFHQSxNQUFxQixVQUFVO0lBQS9CO1FBRXFCLGFBQVEsR0FBRyxZQUFZLENBQUE7SUE4QjVDLENBQUM7SUE1QkcsSUFBSTtRQUNBLE9BQU8sWUFBWSxDQUFDO0lBQ3hCLENBQUM7SUFFRCxhQUFhLENBQUMsT0FBZTtRQUN6QixPQUFPLE9BQU8sS0FBSyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3JDLENBQUM7SUFFSyxVQUFVLENBQUMsSUFBYyxFQUFFLFNBQTBCLEVBQUUsTUFBc0I7O1lBRS9FLE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQTtZQUVuQixJQUFHLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksS0FBSyxTQUFTLENBQUMsRUFDM0Q7Z0JBQ0ksU0FBUyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsdUNBQXVDLFNBQVMsQ0FBQyxNQUFNLENBQUMsUUFBUSwwQ0FBMEMsQ0FBQztxQkFDakksSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFO29CQUNQLEdBQXVCLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUMzQyxDQUFDLENBQUMsQ0FBQztnQkFDSCxPQUFPO2FBQ1Y7WUFFRyxJQUFHLFNBQVMsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLEdBQUcsTUFBTSxZQUFZLENBQUMsRUFDdEQ7Z0JBQ0ksU0FBUyxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsb0JBQW9CLENBQUMsQ0FBQTtnQkFDakQsU0FBUyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsdURBQXVELFNBQVMsQ0FBQyxNQUFNLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQTthQUU5RztRQUNULENBQUM7S0FBQTtDQUNKO0FBaENELDZCQWdDQyJ9