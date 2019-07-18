"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class sweep {
    constructor() {
        this._command = "sweep";
    }
    help() {
        return "(Admin only) Delete messages";
    }
    isThisCommand(command) {
        return command === this._command;
    }
    runCommand(args, msgObject, client) {
        msgObject.delete();
        if (!msgObject.member.hasPermission("MANAGE_MESSAGES") || !msgObject.member.hasPermission("ADMINISTRATOR"))
                .then(msg => {
            });
    }
}
exports.default = sweep;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3dlZXAuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvY29tbWFuZHMvc3dlZXAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFHQSxNQUFxQixLQUFLO0lBQTFCO1FBRXFCLGFBQVEsR0FBRyxPQUFPLENBQUE7SUFrQnRDLENBQUMsQUFBRDtJQWhCRyxJQUFJO1FBQ0EsT0FBTyw4QkFBOEIsQ0FBQztJQUMxQyxDQUFDO0lBRUQsYUFBYSxDQUFDLE9BQWU7UUFDekIsT0FBTyxPQUFPLEtBQUssSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUNyQyxDQUFDO0lBRUQsVUFBVSxDQUFDLElBQWMsRUFBRSxTQUEwQixFQUFFLE1BQXNCO1FBRTFFLFNBQVMsQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUVuQixJQUFHLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLGVBQWUsQ0FBQztZQUNoRyxBQURpRyxLQUNoRyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFFeEIsQ0FBQyxDQUFBLENBQUE7SUFDTCxDQUFDO0NBQUE7QUFwQkQsd0JBb0JDIn0=