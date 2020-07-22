import { Enum, Struct } from "@polkadot/types/codec";
import { Registry, AnyNumber } from "@polkadot/types/types";
import { u32 } from "@polkadot/types/primitive";
import { AccountId, Balance } from '@polkadot/types/interfaces';
import { TokenId, RawAmount } from "../custom.types.161";


export class BonusSeq extends u32 {
    constructor(registry: Registry, value?: AnyNumber) {
        super(registry, value);
    }
}

export class WithdrawnChunk extends Struct {
    constructor(registry: Registry, value?: any) {
        super(registry, {
            token_id: TokenId,
            participant: "AccountId",
            value: RawAmount,
        }, value);
    }

    public get tokenId(): TokenId {
        return this.get('token_id') as TokenId;
    }

    public get participant(): AccountId{
        return this.get('participant') as AccountId;
    }

    public get value(): RawAmount {
        return this.get('value') as RawAmount;
    }
}

export class StakingRule extends Struct {
    constructor(registry: Registry, value?: any) {
        super(registry, {
            bonus_token_id: TokenId,
            min_stake_amount: RawAmount,
            withdrawn_delay: "u32",
        }, value);
    }

    public get bonusTokenId(): TokenId {
        return this.get('bonus_token_id') as TokenId;
    }

    public get minStakeAmount(): RawAmount {
        return this.get('min_stake_amount') as RawAmount;
    }

    public get withdrawnDelay(): u32 {
        return this.get('withdrawn_delay') as u32;
    }
}

export class StakingInfo extends Struct {
    constructor(registry: Registry, value?: any) {
        super(registry, {
            open_season_until: "u32",
            rule: StakingRule
        }, value);
    }

    public get openSeasonUntil(): u32 {
        return this.get('open_season_until') as u32;
    }

    public get rule(): StakingRule {
        return this.get('rule') as StakingRule;
    }
}

export class BonusDestination extends Enum {
    constructor(registry: Registry, value: any) {
        super(registry, {
            Participant: 'Null',
            Other: 'AccountId'
        }, value);
    }

    public get isParticipant(): boolean {
        return this.value.isEmpty;
    }

    public get isOther(): boolean {
        return !this.value.isEmpty;
    }

    public get asOther(): AccountId {
        return this.value as AccountId;
    }
}

export class StakingLedger extends Struct {
    constructor(registry: Registry, value?: any) {
        super(registry, {
            deposit: 'Balance',
            payee: BonusDestination,
            active: 'Compact<u128>',
            withdrawing: 'Compact<u128>',
        }, value);
    }

    public get deposit(): Balance {
        return this.get('deposit') as Balance;
    }

    public get payee(): BonusDestination {
        return this.get('payee') as BonusDestination;
    }

    public get active(): RawAmount {
        return this.get('active') as RawAmount;
    }

    public get withdrawing(): RawAmount {
        return this.get('withdrawing') as RawAmount;
    }
}