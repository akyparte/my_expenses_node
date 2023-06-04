"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JWTUtility = void 0;
var common_1 = require("@nestjs/common");
var jwt = require("jsonwebtoken");
var config = process.env;
var JWTUtility = /** @class */ (function () {
    function JWTUtility() {
    }
    JWTUtility.prototype.verifyToken = function (token) {
        return jwt.verify(token, config.TOKEN_KEY);
    };
    JWTUtility.prototype.createToken = function (userid) {
        var token = jwt.sign({ user_id: userid }, process.env.TOKEN_KEY);
        return token;
    };
    JWTUtility = __decorate([
        (0, common_1.Injectable)()
    ], JWTUtility);
    return JWTUtility;
}());
exports.JWTUtility = JWTUtility;
//# sourceMappingURL=jwt-utility.js.map