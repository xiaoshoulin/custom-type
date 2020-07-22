"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.test = exports.BasicToken = exports.HashAlgorithm = void 0;
const codec_1 = require("@polkadot/types/codec");
const custom_types_161_1 = require("../custom.types.161");
class HashAlgorithm extends codec_1.Enum {
    constructor(registry, value) {
        super(registry, [
            'MD5',
            'SHA1',
            'SHA2_224',
            'SHA2_256',
            'SHA2_384',
            'SHA2_512',
            'SHA512_224',
            'SHA512_256',
            'SHA3_224',
            'SHA3_256',
            'SHA3_384',
            'SHA3_512',
            'BLAKE2b_256',
            'BLAKE2b_384',
            'BLAKE2b_512',
            'Keccak_256',
            'Keccak_512',
        ], value);
    }
}
exports.HashAlgorithm = HashAlgorithm;
class BasicToken extends codec_1.Struct {
    constructor(registry, value) {
        super(registry, {
            symbol: "Text",
            name: "Text",
            total_supply: custom_types_161_1.RawAmount,
            decimals: "u8",
            owner: "AccountId",
        }, value);
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
}
exports.BasicToken = BasicToken;
function test() {
    console.log("test success");
}
exports.test = test;
//# sourceMappingURL=custom.types.161.js.map