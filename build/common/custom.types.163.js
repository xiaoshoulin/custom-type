"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountBalance = void 0;
const codec_1 = require("@polkadot/types/codec");
const custom_types_161_1 = require("./custom.types.161");
var custom_types_162_1 = require("./custom.types.162");
Object.defineProperty(exports, "RawAmount", { enumerable: true, get: function () { return custom_types_162_1.RawAmount; } });
Object.defineProperty(exports, "TokenId", { enumerable: true, get: function () { return custom_types_162_1.TokenId; } });
Object.defineProperty(exports, "RuntimeDbWeight", { enumerable: true, get: function () { return custom_types_162_1.RuntimeDbWeight; } });
class AccountBalance extends codec_1.Struct {
    constructor(registry, value) {
        super(registry, {
            free: custom_types_161_1.RawAmount,
            reserved: custom_types_161_1.RawAmount
        }, value);
    }
    get free() {
        return this.get('free');
    }
    get reserved() {
        return this.get('reserved');
    }
}
exports.AccountBalance = AccountBalance;
//# sourceMappingURL=custom.types.163.js.map