"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddExpensesModule = void 0;
var common_1 = require("@nestjs/common");
var add_expenses_service_1 = require("./add-expenses.service");
var add_expenses_controller_1 = require("./add-expenses.controller");
var typeorm_1 = require("@nestjs/typeorm");
var expenses_entity_1 = require("../entities/expenses.entity");
var jwt_utility_1 = require("../users/services/jwt-utility");
var type_entity_1 = require("../entities/type.entity");
var AddExpensesModule = /** @class */ (function () {
    function AddExpensesModule() {
    }
    AddExpensesModule = __decorate([
        (0, common_1.Module)({
            imports: [typeorm_1.TypeOrmModule.forFeature([expenses_entity_1.Expenses, type_entity_1.Type])],
            controllers: [add_expenses_controller_1.AddExpensesController],
            providers: [add_expenses_service_1.AddExpensesService, jwt_utility_1.JWTUtility]
        })
    ], AddExpensesModule);
    return AddExpensesModule;
}());
exports.AddExpensesModule = AddExpensesModule;
//# sourceMappingURL=add-expenses.module.js.map