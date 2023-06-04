"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddExpensesController = void 0;
var common_1 = require("@nestjs/common");
var verified_user_guard_1 = require("../guards/verified_user.guard");
var add_expenses_service_1 = require("./add-expenses.service");
var AddExpensesController = /** @class */ (function () {
    function AddExpensesController(addExpensesService) {
        this.addExpensesService = addExpensesService;
    }
    AddExpensesController.prototype.addExpenses = function (expensesList, req) {
        var result = req.user;
        return this.addExpensesService.addExpenses(result.user_id, expensesList);
    };
    AddExpensesController.prototype.getTast = function (req) {
        console.log(req.user);
        return this.addExpensesService.getTypeList(req.user.user_id);
    };
    __decorate([
        (0, common_1.UseGuards)(verified_user_guard_1.VerifyUserGuard),
        (0, common_1.Post)('add-expenses'),
        __param(0, (0, common_1.Body)()),
        __param(1, (0, common_1.Req)()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", void 0)
    ], AddExpensesController.prototype, "addExpenses", null);
    __decorate([
        (0, common_1.UseGuards)(verified_user_guard_1.VerifyUserGuard),
        (0, common_1.Get)('get-type-list'),
        __param(0, (0, common_1.Req)()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], AddExpensesController.prototype, "getTast", null);
    AddExpensesController = __decorate([
        (0, common_1.Controller)('expenses'),
        __metadata("design:paramtypes", [add_expenses_service_1.AddExpensesService])
    ], AddExpensesController);
    return AddExpensesController;
}());
exports.AddExpensesController = AddExpensesController;
//# sourceMappingURL=add-expenses.controller.js.map