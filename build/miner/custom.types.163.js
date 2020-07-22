"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClassicRule = exports.MineInfo = exports.MinedSeq = void 0;
const codec_1 = require("@polkadot/types/codec");
const primitive_1 = require("@polkadot/types/primitive");
const custom_types_161_1 = require("../custom.types.161");
class MinedSeq extends primitive_1.u32 {
    constructor(registry, value) {
        super(registry, value);
    }
}
exports.MinedSeq = MinedSeq;
class MineInfo extends codec_1.Struct {
    constructor(registry, value) {
        super(registry, {
            times: "u32",
            yielded: custom_types_161_1.RawAmount,
            quantity: custom_types_161_1.RawAmount,
            next_halve_time: "u32",
            rule: ClassicRule
        }, value);
    }
    get times() {
        return this.get('times');
    }
    get yielded() {
        return this.get('yielded');
    }
    get quantity() {
        return this.get('quantity');
    }
    get nextHalveTime() {
        return this.get('next_halve_time');
    }
    get rule() {
        return this.get('rule');
    }
}
exports.MineInfo = MineInfo;
class ClassicRule extends codec_1.Struct {
    constructor(registry, value) {
        super(registry, {
            first_mine_at: "u32",
            frequency: "u32",
            gross_reserves: custom_types_161_1.RawAmount,
            halve_period: "u32",
            initial_quantity: custom_types_161_1.RawAmount,
            initial_halve_period: "u32",
        }, value);
    }
    get firstMineAt() {
        return this.get('first_mine_at');
    }
    get frequency() {
        return this.get('frequency');
    }
    get grossReserves() {
        return this.get('gross_reserves');
    }
    get halvePeriod() {
        return this.get('halve_period');
    }
    get initialQuantity() {
        return this.get('initial_quantity');
    }
    get initialHalvePeriod() {
        return this.get('initial_halve_period');
    }
}
exports.ClassicRule = ClassicRule;
//# sourceMappingURL=custom.types.163.js.map