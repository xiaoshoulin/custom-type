"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnstakeChunk = exports.StakingInfo = exports.StakingRule = exports.WithdrawnChunk = exports.BonusDestination = exports.BonusSeq = void 0;
const codec_1 = require("@polkadot/types/codec");
const primitive_1 = require("@polkadot/types/primitive");
const custom_types_161_1 = require("../custom.types.161");
class BonusSeq extends primitive_1.u32 {
    constructor(registry, value) {
        super(registry, value);
    }
}
exports.BonusSeq = BonusSeq;
class BonusDestination extends codec_1.Enum {
    constructor(registry, value) {
        super(registry, {
            'Participant': "Null",
            'Other': "AccountId"
        }, value);
    }
}
exports.BonusDestination = BonusDestination;
class WithdrawnChunk extends codec_1.Struct {
    constructor(registry, value) {
        super(registry, {
            token_id: custom_types_161_1.TokenId,
            participant: "AccountId",
            value: custom_types_161_1.RawAmount,
        }, value);
    }
    get tokenId() {
        return this.get('token_id');
    }
    get participant() {
        return this.get('participant');
    }
    get value() {
        return this.get('value');
    }
}
exports.WithdrawnChunk = WithdrawnChunk;
class StakingRule extends codec_1.Struct {
    constructor(registry, value) {
        super(registry, {
            bonus_token_id: custom_types_161_1.TokenId,
            min_stake_amount: custom_types_161_1.RawAmount,
            withdrawn_delay: "u32",
        }, value);
    }
    get bonusTokenId() {
        return this.get('bonus_token_id');
    }
    get minStakeAmount() {
        return this.get('min_stake_amount');
    }
    get withdrawnDelay() {
        return this.get('withdrawn_delay');
    }
}
exports.StakingRule = StakingRule;
class StakingInfo extends codec_1.Struct {
    constructor(registry, value) {
        super(registry, {
            open_season_until: "u32",
            rule: StakingRule
        }, value);
    }
    get openSeasonUntil() {
        return this.get('open_season_until');
    }
    get rule() {
        return this.get('rule');
    }
}
exports.StakingInfo = StakingInfo;
class UnstakeChunk extends codec_1.Struct {
    constructor(registry, value) {
        super(registry, {
            token_id: custom_types_161_1.TokenId,
            participant: "AccountId",
            value: custom_types_161_1.RawAmount
        }, value);
    }
    get tokenId() {
        return this.get('token_id');
    }
    get participant() {
        return this.get('participant');
    }
    get value() {
        return this.get('value');
    }
}
exports.UnstakeChunk = UnstakeChunk;
//# sourceMappingURL=custom.type.163.js.map