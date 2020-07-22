"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BasicToken = void 0;
const codec_1 = require("@polkadot/types/codec");
const primitive_1 = require("@polkadot/types/primitive");
const custom_types_161_1 = require("../custom.types.161");
var custom_types_162_1 = require("./custom.types.162");
Object.defineProperty(exports, "HashAlgorithm", { enumerable: true, get: function () { return custom_types_162_1.HashAlgorithm; } });
class BasicToken extends codec_1.Struct {
    constructor(registry, value) {
        super(registry, {
            id: custom_types_161_1.TokenId,
            symbol: "Text",
            name: "Text",
            total_supply: custom_types_161_1.RawAmount,
            decimals: "u8",
            owner: "AccountId",
            pending_owner: "Option<AccountId>",
            mintable: primitive_1.bool,
            transferable: primitive_1.bool,
            burnable: primitive_1.bool
        }, value);
    }
    get id() {
        return this.get('id');
    }
    get symbol() {
        return this.get('symbol');
    }
    get name() {
        return this.get('name');
    }
    get totalSupply() {
        return this.get('total_supply');
    }
    get decimals() {
        return this.get('decimals');
    }
    get owner() {
        return this.get('owner');
    }
    get pendingOwner() {
        return this.get('pending_owner');
    }
    get mintable() {
        return this.get('mintable');
    }
    get transferable() {
        return this.get('transferable');
    }
    get burnable() {
        return this.get('burnable');
    }
}
exports.BasicToken = BasicToken;
//# sourceMappingURL=custom.types.163.js.map