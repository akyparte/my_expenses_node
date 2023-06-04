"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExpensesListModule = void 0;
var common_1 = require("@nestjs/common");
var expenses_list_service_1 = require("./expenses-list.service");
var expenses_list_controller_1 = require("./expenses-list.controller");
var typeorm_1 = require("@nestjs/typeorm");
var expenses_entity_1 = require("../entities/expenses.entity");
var jwt_utility_1 = require("../users/services/jwt-utility");
var ExpensesListModule = /** @class */ (function () {
    function ExpensesListModule() {
    }
    ExpensesListModule = __decorate([
        (0, common_1.Module)({
            imports: [typeorm_1.TypeOrmModule.forFeature([expenses_entity_1.Expenses])],
            controllers: [expenses_list_controller_1.ExpensesListController],
            providers: [expenses_list_service_1.ExpensesListService, jwt_utility_1.JWTUtility]
        })
    ], ExpensesListModule);
    return ExpensesListModule;
}());
exports.ExpensesListModule = ExpensesListModule;
//# sourceMappingURL=expenses-list.module.js.map