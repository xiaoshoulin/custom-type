"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PocInfo = exports.Contribution = void 0;
const codec_1 = require("@polkadot/types/codec");
const custom_types_161_1 = require("../custom.types.161");
class Contribution extends codec_1.UInt {
    constructor(registry, value) {
        super(registry, value, 128);
    }
}
exports.Contribution = Contribution;
class PocInfo extends codec_1.Struct {
    constructor(registry, value) {
        super(registry, {
            depositor: "AccountId",
            deposit: custom_types_161_1.RawAmount,
            operator: "AccountId",
            last_mined_seq: "u32"
        }, value);
    }
    get depositor() {
        return this.get('depositor');
    }
    get deposit() {
        return this.get('deposit');
    }
    get operator() {
        return this.get('operator');
    }
    get lastMinedSeq() {
        return this.get('last_mined_seq');
    }
}
exports.PocInfo = PocInfo;
//# sourceMappingURL=custom.type.163.js.map