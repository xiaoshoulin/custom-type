import { Enum, Struct, Compact } from "@polkadot/types/codec";
import { Registry, AnyNumber } from "@polkadot/types/types";
import { u32 } from "@polkadot/types/primitive";
import { AccountId, Balance, BlockNumber } from '@polkadot/types/interfaces';
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
            value: 'Compact<u128>',
        }, value);
    }

    public get tokenId(): TokenId {
        return this.get('token_id') as TokenId;
    }

    public get participant(): AccountId{
        return this.get('participant') as AccountId;
    }

    public get value(): RawAmount {
        return (this.get('value') as Compact<RawAmount>).unwrap();
    }
}

export class StakingRule extends Struct {
    constructor(registry: Registry, value?: any) {
        super(registry, {
            bonus_token_id: TokenId,
            min_stake_amount: RawAmount,
            withdrawn_delay: "BlockNumber",
        }, value);
    }

    public get bonusTokenId(): TokenId {
        return this.get('bonus_token_id') as TokenId;
    }

    public get minStakeAmount(): RawAmount {
        return this.get('min_stake_amount') as RawAmount;
    }

    public get withdrawnDelay(): BlockNumber {
        return this.get('withdrawn_delay') as BlockNumber;
    }
}

export class StakingInfo extends Struct {
    constructor(registry: Registry, value?: any) {
        super(registry, {
            open_season_until: "BlockNumber",
            richman: "AccountId",
            last_bonus_seq: BonusSeq,
            rule: StakingRule
        }, value);
    }

    public get openSeasonUntil(): BlockNumber {
        return this.get('open_season_until') as BlockNumber;
    }

    public get richman(): AccountId {
        return this.get('richman') as AccountId;
    }

    public get lastBonusSeq(): BonusSeq {
        return this.get('last_bonus_seq') as BonusSeq;
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
        return (this.get('active') as Compact<RawAmount>).unwrap();
    }

    public get withdrawing(): RawAmount {
        return (this.get('withdrawing') as Compact<RawAmount>).unwrap();
    }
}