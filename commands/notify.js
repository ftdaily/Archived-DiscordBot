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
class notify {
    constructor() {
        this._command = "notify";
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
            msgObject.member.addRole('591107373502955529');
            if (msgObject.content.startsWith(`${PREFIX}notify`)) {
                msgObject.channel.send(`You will get pinged from broadcast channel, ${msgObject.author.username}.`);
            }
        });
    }
}
exports.default = notify;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm90aWZ5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NvbW1hbmRzL25vdGlmeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBR0EsTUFBcUIsTUFBTTtJQUEzQjtRQUVxQixhQUFRLEdBQUcsUUFBUSxDQUFBO0lBcUJ4QyxDQUFDO0lBbkJHLElBQUk7UUFDQSxPQUFPLFlBQVksQ0FBQztJQUN4QixDQUFDO0lBRUQsYUFBYSxDQUFDLE9BQWU7UUFDekIsT0FBTyxPQUFPLEtBQUssSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUNyQyxDQUFDO0lBRUssVUFBVSxDQUFDLElBQWMsRUFBRSxTQUEwQixFQUFFLE1BQXNCOztZQUUvRSxNQUFNLE1BQU0sR0FBRyxJQUFJLENBQUE7WUFHbkIsU0FBUyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsb0JBQW9CLENBQUMsQ0FBQTtZQUU5QyxJQUFHLFNBQVMsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLEdBQUcsTUFBTSxRQUFRLENBQUMsRUFBRTtnQkFDaEQsU0FBUyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsK0NBQStDLFNBQVMsQ0FBQyxNQUFNLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQTthQUNsRztRQUNULENBQUM7S0FBQTtDQUNKO0FBdkJELHlCQXVCQyJ9