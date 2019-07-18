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
class pink {
    constructor() {
        this._command = "pink";
    }
    help() {
        return "This command does absolutely nothing! How fun :)";
    }
    isThisCommand(command) {
        return command === this._command;
    }
    runCommand(args, msgObject, client) {
        return __awaiter(this, void 0, void 0, function* () {
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
        });
    }
}
exports.default = pink;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGluay5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tYW5kcy9waW5rLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFHQSxNQUFxQixJQUFJO0lBQXpCO1FBRXFCLGFBQVEsR0FBRyxNQUFNLENBQUE7SUFxQ3RDLENBQUM7SUFuQ0csSUFBSTtRQUNBLE9BQU8sa0RBQWtELENBQUM7SUFDOUQsQ0FBQztJQUVELGFBQWEsQ0FBQyxPQUFlO1FBQ3pCLE9BQU8sT0FBTyxLQUFLLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDckMsQ0FBQztJQUVLLFVBQVUsQ0FBQyxJQUFjLEVBQUUsU0FBMEIsRUFBRSxNQUFzQjs7WUFFdkYsSUFBSSxjQUFjLEdBQUcsb0JBQW9CLENBQUE7WUFDekMsSUFBSSxlQUFlLEdBQUcsb0JBQW9CLENBQUE7WUFDMUMsSUFBSSxTQUFTLEdBQUcsb0JBQW9CLENBQUE7WUFDcEMsSUFBSSxVQUFVLEdBQUcsb0JBQW9CLENBQUE7WUFDckMsSUFBSSxVQUFVLEdBQUcsb0JBQW9CLENBQUE7WUFDckMsSUFBSSxXQUFXLEdBQUcsb0JBQW9CLENBQUE7WUFDdEMsSUFBSSxTQUFTLEdBQUcsb0JBQW9CLENBQUE7WUFDcEMsSUFBSSxXQUFXLEdBQUcsb0JBQW9CLENBQUE7WUFDdEMsSUFBSSxXQUFXLEdBQUcsb0JBQW9CLENBQUE7WUFDdEMsSUFBSSxTQUFTLEdBQUcsb0JBQW9CLENBQUE7WUFDcEMsSUFBSSxRQUFRLEdBQUcsb0JBQW9CLENBQUE7WUFFM0IsU0FBUyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUE7WUFDbkMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsZUFBZSxDQUFDLENBQUE7WUFDNUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLENBQUE7WUFDdEMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLENBQUE7WUFDdkMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLENBQUE7WUFDdkMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLENBQUE7WUFDeEMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLENBQUE7WUFDdEMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLENBQUE7WUFDeEMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLENBQUE7WUFDeEMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsY0FBYyxDQUFDLENBQUE7WUFDM0MsU0FBUyxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUE7WUFDckMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsNEJBQTRCLENBQUMsQ0FBQTtRQUN4RCxDQUFDO0tBQUE7Q0FDSjtBQXZDRCx1QkF1Q0MifQ==