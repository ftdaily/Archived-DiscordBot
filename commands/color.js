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
class color {
    constructor() {
        this._command = "color";
    }
    help() {
        return "This command does absolutely nothing! How fun :)";
    }
    isThisCommand(command) {
        return command === this._command;
    }
    runCommand(args, msgObject, client) {
        return __awaiter(this, void 0, void 0, function* () {
            let availablecolors = new Discord.RichEmbed()
                .setAuthor("Colors")
                .setTitle("==================================")
                .setColor('0xe89309')
                .setDescription(`
Prefix: k!
Usage: k!color [colorlist]
==================================
- Chocolate
- Marine
- Aqua
- Green
- Abyss
- Purple
- Gold
- Yellow
- Orange
- Pink
- Red
`);
            let chocolatecolor = "598897732270161921";
            let aquamarinecolor = "598897732974804993";
            let aquacolor = "598893418797858817";
            let greencolor = "598893419099848727";
            let abysscolor = "598893452142575636";
            let purplecolor = "598893415404535819";
            let goldcolor = "598893452276662357";
            let yellowcolor = "598893428893417505";
            let orangecolor = "598893414196576256";
            let pinkcolor = "598893419099848707";
            let redcolor = "598893414876184576";
            let arraynone = " ";
            let listcolor = "list";
            let PREFIX = "k!";
            let arraychocolate = ["chocolate"];
            let arrayaquamarine = ["aquamarine"];
            let arrayaqua = ["aqua"];
            let arraygreen = ["green"];
            let arrayabyss = ["abyss"];
            let arraypurple = ["purple"];
            let arraygold = ["gold"];
            let arrayyellow = ["yellow"];
            let arrayorange = ["orange"];
            let arraypink = ["pink"];
            let arrayred = ["red"];
            if (msgObject.content.startsWith(`${PREFIX}color list`)) {
                msgObject.channel.send(`\`\`\`Syntax: color [colorname]\`\`\`
\`\`\`Color List\`\`\``);
                msgObject.channel.send(availablecolors);
                return;
            }
            if (msgObject.content.startsWith(`${PREFIX}color chocolate`)) {
                msgObject.member.addRole(chocolatecolor);
                msgObject.member.removeRole(aquamarinecolor);
                msgObject.member.removeRole(aquacolor);
                msgObject.member.removeRole(greencolor);
                msgObject.member.removeRole(abysscolor);
                msgObject.member.removeRole(purplecolor);
                msgObject.member.removeRole(goldcolor);
                msgObject.member.removeRole(yellowcolor);
                msgObject.member.removeRole(orangecolor);
                msgObject.member.removeRole(pinkcolor);
                msgObject.member.removeRole(redcolor);
                msgObject.channel.send('Your color is now **Chocolate**');
            }
            if (msgObject.content.startsWith(`${PREFIX}color marine`)) {
                msgObject.member.addRole(aquamarinecolor);
                msgObject.member.removeRole(chocolatecolor);
                msgObject.member.removeRole(aquacolor);
                msgObject.member.removeRole(greencolor);
                msgObject.member.removeRole(abysscolor);
                msgObject.member.removeRole(purplecolor);
                msgObject.member.removeRole(goldcolor);
                msgObject.member.removeRole(yellowcolor);
                msgObject.member.removeRole(orangecolor);
                msgObject.member.removeRole(pinkcolor);
                msgObject.member.removeRole(redcolor);
                msgObject.channel.send('Your color is now **Marine**');
            }
            if (msgObject.content.startsWith(`${PREFIX}color aqua`)) {
                msgObject.member.addRole(aquacolor);
                msgObject.member.removeRole(aquamarinecolor);
                msgObject.member.removeRole(chocolatecolor);
                msgObject.member.removeRole(greencolor);
                msgObject.member.removeRole(abysscolor);
                msgObject.member.removeRole(purplecolor);
                msgObject.member.removeRole(goldcolor);
                msgObject.member.removeRole(yellowcolor);
                msgObject.member.removeRole(orangecolor);
                msgObject.member.removeRole(pinkcolor);
                msgObject.member.removeRole(redcolor);
                msgObject.channel.send('Your color is now **Aqua**');
            }
            if (msgObject.content.startsWith(`${PREFIX}color green`)) {
                msgObject.member.addRole(greencolor);
                msgObject.member.removeRole(aquamarinecolor);
                msgObject.member.removeRole(aquacolor);
                msgObject.member.removeRole(chocolatecolor);
                msgObject.member.removeRole(abysscolor);
                msgObject.member.removeRole(purplecolor);
                msgObject.member.removeRole(goldcolor);
                msgObject.member.removeRole(yellowcolor);
                msgObject.member.removeRole(orangecolor);
                msgObject.member.removeRole(pinkcolor);
                msgObject.member.removeRole(redcolor);
                msgObject.channel.send('Your color is now **Green**');
            }
            if (msgObject.content.startsWith(`${PREFIX}color abyss`)) {
                msgObject.member.addRole(abysscolor);
                msgObject.member.removeRole(aquamarinecolor);
                msgObject.member.removeRole(aquacolor);
                msgObject.member.removeRole(greencolor);
                msgObject.member.removeRole(chocolatecolor);
                msgObject.member.removeRole(purplecolor);
                msgObject.member.removeRole(goldcolor);
                msgObject.member.removeRole(yellowcolor);
                msgObject.member.removeRole(orangecolor);
                msgObject.member.removeRole(pinkcolor);
                msgObject.member.removeRole(redcolor);
                msgObject.channel.send('Your color is now **Abyss**');
            }
            if (msgObject.content.startsWith(`${PREFIX}color purple`)) {
                msgObject.member.addRole(purplecolor);
                msgObject.member.removeRole(aquamarinecolor);
                msgObject.member.removeRole(aquacolor);
                msgObject.member.removeRole(greencolor);
                msgObject.member.removeRole(abysscolor);
                msgObject.member.removeRole(chocolatecolor);
                msgObject.member.removeRole(goldcolor);
                msgObject.member.removeRole(yellowcolor);
                msgObject.member.removeRole(orangecolor);
                msgObject.member.removeRole(pinkcolor);
                msgObject.member.removeRole(redcolor);
                msgObject.channel.send('Your color is now **Purple**');
            }
            if (msgObject.content.startsWith(`${PREFIX}color gold`)) {
                msgObject.member.addRole(goldcolor);
                msgObject.member.removeRole(aquamarinecolor);
                msgObject.member.removeRole(aquacolor);
                msgObject.member.removeRole(greencolor);
                msgObject.member.removeRole(abysscolor);
                msgObject.member.removeRole(purplecolor);
                msgObject.member.removeRole(chocolatecolor);
                msgObject.member.removeRole(yellowcolor);
                msgObject.member.removeRole(orangecolor);
                msgObject.member.removeRole(pinkcolor);
                msgObject.member.removeRole(redcolor);
                msgObject.channel.send('Your color is now **Gold**');
            }
            if (msgObject.content.startsWith(`${PREFIX}color yellow`)) {
                msgObject.member.addRole(yellowcolor);
                msgObject.member.removeRole(aquamarinecolor);
                msgObject.member.removeRole(aquacolor);
                msgObject.member.removeRole(greencolor);
                msgObject.member.removeRole(abysscolor);
                msgObject.member.removeRole(purplecolor);
                msgObject.member.removeRole(goldcolor);
                msgObject.member.removeRole(chocolatecolor);
                msgObject.member.removeRole(orangecolor);
                msgObject.member.removeRole(pinkcolor);
                msgObject.member.removeRole(redcolor);
                msgObject.channel.send('Your color is now **Yellow**');
            }
            if (msgObject.content.startsWith(`${PREFIX}color orange`)) {
                msgObject.member.addRole(orangecolor);
                msgObject.member.removeRole(aquamarinecolor);
                msgObject.member.removeRole(aquacolor);
                msgObject.member.removeRole(greencolor);
                msgObject.member.removeRole(abysscolor);
                msgObject.member.removeRole(purplecolor);
                msgObject.member.removeRole(goldcolor);
                msgObject.member.removeRole(yellowcolor);
                msgObject.member.removeRole(chocolatecolor);
                msgObject.member.removeRole(pinkcolor);
                msgObject.member.removeRole(redcolor);
                msgObject.channel.send('Your color is now **Orange**');
            }
            if (msgObject.content.startsWith(`${PREFIX}color pink`)) {
                msgObject.member.addRole(pinkcolor);
                msgObject.member.removeRole(aquamarinecolor);
                msgObject.member.removeRole(aquacolor);
                msgObject.member.removeRole(greencolor);
                msgObject.member.removeRole(abysscolor);
                msgObject.member.removeRole(purplecolor);
                msgObject.member.removeRole(goldcolor);
                msgObject.member.removeRole(yellowcolor);
                msgObject.member.removeRole(orangecolor);
                msgObject.member.removeRole(chocolatecolor);
                msgObject.member.removeRole(redcolor);
                msgObject.channel.send('Your color is now **Pink**');
            }
            if (msgObject.content.startsWith(`${PREFIX}color red`)) {
                msgObject.member.addRole(redcolor);
                msgObject.member.removeRole(aquamarinecolor);
                msgObject.member.removeRole(aquacolor);
                msgObject.member.removeRole(greencolor);
                msgObject.member.removeRole(abysscolor);
                msgObject.member.removeRole(purplecolor);
                msgObject.member.removeRole(goldcolor);
                msgObject.member.removeRole(yellowcolor);
                msgObject.member.removeRole(orangecolor);
                msgObject.member.removeRole(pinkcolor);
                msgObject.member.removeRole(chocolatecolor);
                msgObject.channel.send('Your color is now **Red**');
            }
        });
    }
}
exports.default = color;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sb3IuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvY29tbWFuZHMvY29sb3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHNDQUFzQztBQUd0QyxNQUFxQixLQUFLO0lBQTFCO1FBRXFCLGFBQVEsR0FBRyxPQUFPLENBQUE7SUE2T3ZDLENBQUM7SUEzT0csSUFBSTtRQUNBLE9BQU8sa0RBQWtELENBQUM7SUFDOUQsQ0FBQztJQUVELGFBQWEsQ0FBQyxPQUFlO1FBQ3pCLE9BQU8sT0FBTyxLQUFLLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDckMsQ0FBQztJQUVLLFVBQVUsQ0FBQyxJQUFjLEVBQUUsU0FBMEIsRUFBRSxNQUFzQjs7WUFFL0UsSUFBSSxlQUFlLEdBQUcsSUFBSSxPQUFPLENBQUMsU0FBUyxFQUFFO2lCQUM1QyxTQUFTLENBQUMsUUFBUSxDQUFDO2lCQUNuQixRQUFRLENBQUMsb0NBQW9DLENBQUM7aUJBQzlDLFFBQVEsQ0FBQyxVQUFVLENBQUM7aUJBQ2hCLGNBQWMsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7O0NBZTNCLENBQUMsQ0FBQTtZQUVNLElBQUksY0FBYyxHQUFHLG9CQUFvQixDQUFBO1lBQ3pDLElBQUksZUFBZSxHQUFHLG9CQUFvQixDQUFBO1lBQzFDLElBQUksU0FBUyxHQUFHLG9CQUFvQixDQUFBO1lBQ3BDLElBQUksVUFBVSxHQUFHLG9CQUFvQixDQUFBO1lBQ3JDLElBQUksVUFBVSxHQUFHLG9CQUFvQixDQUFBO1lBQ3JDLElBQUksV0FBVyxHQUFHLG9CQUFvQixDQUFBO1lBQ3RDLElBQUksU0FBUyxHQUFHLG9CQUFvQixDQUFBO1lBQ3BDLElBQUksV0FBVyxHQUFHLG9CQUFvQixDQUFBO1lBQ3RDLElBQUksV0FBVyxHQUFHLG9CQUFvQixDQUFBO1lBQ3RDLElBQUksU0FBUyxHQUFHLG9CQUFvQixDQUFBO1lBQ3BDLElBQUksUUFBUSxHQUFHLG9CQUFvQixDQUFBO1lBRW5DLElB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