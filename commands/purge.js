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
class purge {
    constructor() {
        this._command = "purge";
    }
    help() {
        return "This command does absolutely nothing! How fun :)";
    }
    isThisCommand(command) {
        return command === this._command;
    }
    runCommand(args, msgObject, client) {
        return __awaiter(this, void 0, void 0, function* () {
            const PREFIX = "k!";
            msgObject.delete();
            if (!msgObject.member.hasPermission("MANAGE_MESSAGES"))
                if (!msgObject.member.hasPermission("ADMINISTRATOR")) {
                    msgObject.channel.send(`ERROR | Insufficient permission for ${msgObject.author.username} | Contact staff if it's still occured.`)
                        .then(msg => {
                        msg.delete(5000);
                    });
                    return;
                }
            if (!args[0]) {
                msgObject.channel.send(`ERROR | ${msgObject.author.username} you need to specify the number of message!`)
                    .then(msg => {
                    msg.delete(5000);
                });
                return;
            }
            let numberOfMessagesToDelete = Number(args[0]);
            if (isNaN(numberOfMessagesToDelete)) {
                msgObject.channel.send(`That is not a valid number ${msgObject.author.username}!`)
                    .then(msg => {
                    msg.delete(5000);
                });
                return;
            }
            numberOfMessagesToDelete = Math.round(numberOfMessagesToDelete);
            msgObject.channel.bulkDelete(numberOfMessagesToDelete);
            if (msgObject.content.startsWith(`${PREFIX}purge`)) {
                msgObject.channel.send(`Successfully delete the messages`)
                    .then(msg => {
                    msg.delete(2000);
                });
                return;
            }
        });
    }
}
exports.default = purge;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHVyZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvY29tbWFuZHMvcHVyZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUdBLE1BQXFCLEtBQUs7SUFBMUI7UUFFcUIsYUFBUSxHQUFHLE9BQU8sQ0FBQTtJQTZEdkMsQ0FBQztJQTNERyxJQUFJO1FBQ0EsT0FBTyxrREFBa0QsQ0FBQztJQUM5RCxDQUFDO0lBRUQsYUFBYSxDQUFDLE9BQWU7UUFDekIsT0FBTyxPQUFPLEtBQUssSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUNyQyxDQUFDO0lBRUssVUFBVSxDQUFDLElBQWMsRUFBRSxTQUEwQixFQUFFLE1BQXNCOztZQUcvRSxNQUFNLE1BQU0sR0FBRyxJQUFJLENBQUE7WUFFcEIsU0FBUyxDQUFDLE1BQU0sRUFBRSxDQUFDO1lBRW5CLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxpQkFBaUIsQ0FBQztnQkFDdEQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLGVBQWUsQ0FBQyxFQUFFO29CQUNsRCxTQUFTLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyx1Q0FBdUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxRQUFRLHlDQUF5QyxDQUFDO3lCQUMzSCxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUU7d0JBQ1AsR0FBdUIsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7b0JBQzFDLENBQUMsQ0FBQyxDQUFDO29CQUNQLE9BQU87aUJBQ1g7WUFFRCxJQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFDO2dCQUNSLFNBQVMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFdBQVcsU0FBUyxDQUFDLE1BQU0sQ0FBQyxRQUFRLDZDQUE2QyxDQUFDO3FCQUN4RyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUU7b0JBQ1AsR0FBdUIsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQzFDLENBQUMsQ0FBQyxDQUFDO2dCQUNOLE9BQU87YUFDUDtZQUVBLElBQUksd0JBQXdCLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBRS9DLElBQUcsS0FBSyxDQUFDLHdCQUF3QixDQUFDLEVBQ2xDO2dCQUNJLFNBQVMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLDhCQUE4QixTQUFTLENBQUMsTUFBTSxDQUFDLFFBQVEsR0FBRyxDQUFDO3FCQUNqRixJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUU7b0JBQ1AsR0FBdUIsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQzFDLENBQUMsQ0FBQyxDQUFDO2dCQUNILE9BQU87YUFDVjtZQUVELHdCQUF3QixHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsd0JBQXdCLENBQUMsQ0FBQTtZQUUvRCxTQUFTLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFBO1lBR3RELElBQUcsU0FBUyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsR0FBRyxNQUFNLE9BQU8sQ0FBQyxFQUNqRDtnQkFDSSxTQUFTLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxrQ0FBa0MsQ0FBQztxQkFDekQsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFO29CQUNQLEdBQXVCLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUMxQyxDQUFDLENBQUMsQ0FBQztnQkFDSCxPQUFPO2FBQ1Y7UUFHTCxDQUFDO0tBQUE7Q0FDSjtBQS9ERCx3QkErREMifQ==