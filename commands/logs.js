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
class logs {
    constructor() {
        this._command = "logs";
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
            msgObject.member.addRole('589090709865496596');
            if (msgObject.content.startsWith(`${PREFIX}logs`)) {
                msgObject.channel.send(`You are now be able to see server logs, ${msgObject.author.username}.`);
            }
        });
    }
}
exports.default = logs;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9ncy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tYW5kcy9sb2dzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFHQSxNQUFxQixJQUFJO0lBQXpCO1FBRXFCLGFBQVEsR0FBRyxNQUFNLENBQUE7SUFxQnRDLENBQUM7SUFuQkcsSUFBSTtRQUNBLE9BQU8sWUFBWSxDQUFDO0lBQ3hCLENBQUM7SUFFRCxhQUFhLENBQUMsT0FBZTtRQUN6QixPQUFPLE9BQU8sS0FBSyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3JDLENBQUM7SUFFSyxVQUFVLENBQUMsSUFBYyxFQUFFLFNBQTBCLEVBQUUsTUFBc0I7O1lBRS9FLE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQTtZQUduQixTQUFTLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxvQkFBb0IsQ0FBQyxDQUFBO1lBRTlDLElBQUcsU0FBUyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsR0FBRyxNQUFNLE1BQU0sQ0FBQyxFQUFFO2dCQUM5QyxTQUFTLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQywyQ0FBMkMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFBO2FBQzlGO1FBQ1QsQ0FBQztLQUFBO0NBQ0o7QUF2QkQsdUJBdUJDIn0=