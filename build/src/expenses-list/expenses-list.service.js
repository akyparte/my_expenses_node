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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExpensesListService = void 0;
var common_1 = require("@nestjs/common");
var typeorm_1 = require("@nestjs/typeorm");
var typeorm_2 = require("typeorm");
var expenses_entity_1 = require("../entities/expenses.entity");
var ExpensesListService = /** @class */ (function () {
    function ExpensesListService(expensesRepository) {
        this.expensesRepository = expensesRepository;
    }
    ExpensesListService.prototype.getList = function (filters, query, userid) {
        return __awaiter(this, void 0, void 0, function () {
            var whereCon, parsedFilters, prop, page_number, page_size, sort_by, sort_order, offset, sqlQuery, data, no_of_rows, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        whereCon = "where e.userid = '".concat(userid, "' ");
                        if (typeof filters.filters !== 'undefined' && filters.filters) {
                            parsedFilters = JSON.parse(filters.filters);
                            if (Object.keys(parsedFilters).length !== 0) {
                                for (prop in parsedFilters) {
                                    if (typeof parsedFilters[prop] !== 'undefined') {
                                        if (prop == 'subType' || prop == 'description') {
                                            whereCon += " AND e." + prop + " like '%" + parsedFilters[prop] + "%' ";
                                        }
                                        else if (prop == 'amount' || prop == 'type_id') {
                                            whereCon += " AND e." + prop + " = '" + parsedFilters[prop] + "' ";
                                        }
                                        else if (prop == 'startDate') {
                                            whereCon = "".concat(whereCon, " AND created_at BETWEEN '").concat(parsedFilters.startDate, "' AND '").concat(parsedFilters.endDate, "'");
                                        }
                                    }
                                }
                            }
                        }
                        page_number = 1;
                        page_size = 10;
                        sort_by = "id";
                        sort_order = " desc";
                        if (typeof query.page_number !== 'undefined' && query.page_number) {
                            page_number = query.page_number;
                        }
                        if (typeof query.page_size !== 'undefined' && query.page_size) {
                            page_size = query.page_size;
                        }
                        if (typeof query.sort_order !== 'undefined' && query.sort_order) {
                            sort_order = query.sort_order;
                        }
                        if (typeof query.sort_by !== 'undefined' && query.sort_by) {
                            sort_by = query.sort_by;
                        }
                        offset = (page_number - 1) * page_size;
                        sqlQuery = "SELECT SQL_CALC_FOUND_ROWS e.id,e.userid,e.subtype,e.description,e.amount,e.created_at,t.name as type FROM expenses as e "
                            + " LEFT JOIN type as t ON e.type_id = t.id "
                            + whereCon
                            + " order by " + "e." + sort_by + " " + sort_order + " limit " + offset + ", " + page_size + ";";
                        return [4 /*yield*/, this.expensesRepository.query(sqlQuery)];
                    case 1:
                        data = _a.sent();
                        return [4 /*yield*/, this.expensesRepository.query("SELECT FOUND_ROWS() as no_of_rows")];
                    case 2:
                        no_of_rows = _a.sent();
                        return [2 /*return*/, { "data": data, "total": no_of_rows[0]['no_of_rows'] }];
                    case 3:
                        error_1 = _a.sent();
                        console.log(error_1);
                        console.log('================query================');
                        console.log(query);
                        console.log('================filters================');
                        console.log(JSON.parse(filters));
                        throw new common_1.HttpException('error while pagination', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    ExpensesListService = __decorate([
        (0, common_1.Injectable)(),
        __param(0, (0, typeorm_1.InjectRepository)(expenses_entity_1.Expenses)),
        __metadata("design:paramtypes", [typeorm_2.Repository])
    ], ExpensesListService);
    return ExpensesListService;
}());
exports.ExpensesListService = ExpensesListService;
//# sourceMappingURL=expenses-list.service.js.map