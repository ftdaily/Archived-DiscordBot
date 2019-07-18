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
class avatar {
    constructor() {
        this._command = "avatar";
    }
    help() {
        return "Ban the mentioned user";
    }
    isThisCommand(command) {
        return command === this._command;
    }
    runCommand(args, msgObject, client) {
        return __awaiter(this, void 0, void 0, function* () {
            let banembedpm = new Discord.RichEmbed()
                .setTitle('Generating Avatar!')
                .setImage(msgObject.author.avatarURL)
                .setColor(0x03fc62);
            msgObject.delete(60000);
            msgObject.channel.send(banembedpm);
        });
    }
}
exports.default = avatar;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXZhdGFyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NvbW1hbmRzL2F2YXRhci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsc0NBQXNDO0FBSXRDLE1BQXFCLE1BQU07SUFBM0I7UUFFcUIsYUFBUSxHQUFHLFFBQVEsQ0FBQTtJQXFCeEMsQ0FBQztJQW5CRyxJQUFJO1FBQ0EsT0FBTyx3QkFBd0IsQ0FBQztJQUNwQyxDQUFDO0lBRUQsYUFBYSxDQUFDLE9BQWU7UUFDekIsT0FBTyxPQUFPLEtBQUssSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUNyQyxDQUFDO0lBRUssVUFBVSxDQUFDLElBQWMsRUFBRSxTQUEwQixFQUFFLE1BQXNCOztZQUUvRSxJQUFJLFVBQVUsR0FBRyxJQUFJLE9BQU8sQ0FBQyxTQUFTLEVBQUU7aUJBQ3ZDLFFBQVEsQ0FBQyxvQkFBb0IsQ0FBQztpQkFDOUIsUUFBUSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDO2lCQUNwQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUE7WUFFbkIsU0FBUyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUVwQixTQUFTLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQTtRQUMxQyxDQUFDO0tBQUE7Q0FDSjtBQXZCRCx5QkF1QkMifQ==