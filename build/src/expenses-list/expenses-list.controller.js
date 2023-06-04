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
exports.ExpensesListController = void 0;
var common_1 = require("@nestjs/common");
var expenses_list_service_1 = require("./expenses-list.service");
var verified_user_guard_1 = require("../guards/verified_user.guard");
var ExpensesListController = /** @class */ (function () {
    function ExpensesListController(expensesListService) {
        this.expensesListService = expensesListService;
    }
    ExpensesListController.prototype.getExpensesList = function (filters, query, req) {
        var userid = req.user.user_id;
        return this.expensesListService.getList(filters, query, userid);
    };
    __decorate([
        (0, common_1.UseGuards)(verified_user_guard_1.VerifyUserGuard),
        (0, common_1.Post)('get-list'),
        __param(0, (0, common_1.Body)()),
        __param(1, (0, common_1.Query)()),
        __param(2, (0, common_1.Req)()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object, Object]),
        __metadata("design:returntype", void 0)
    ], ExpensesListController.prototype, "getExpensesList", null);
    ExpensesListController = __decorate([
        (0, common_1.Controller)('expenses-list'),
        __metadata("design:paramtypes", [expenses_list_service_1.ExpensesListService])
    ], ExpensesListController);
    return ExpensesListController;
}());
exports.ExpensesListController = ExpensesListController;
//# sourceMappingURL=expenses-list.controller.js.map