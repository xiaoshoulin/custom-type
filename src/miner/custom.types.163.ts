import { Struct } from "@polkadot/types/codec";
import { AccountId, BlockNumber } from '@polkadot/types/interfaces';
import { Registry } from "@polkadot/types/types";
import { u32 } from "@polkadot/types/primitive";
import { RawAmount } from "../custom.types.161";

export class MineInfo extends Struct {
    constructor(registry: Registry, value?: any) {
        super(registry, {
            depositor: "AccountId",
            deposit: RawAmount,
            times: "u32",
            yielded: RawAmount,
            quantity: RawAmount,
            next_halve_time: "BlockNumber",
            rule: ClassicRule
        }, value);
    }

    public get depositor(): AccountId {
        return this.get('depositor') as AccountId;
    }

    public get deposit(): RawAmount {
        return this.get('deposit') as RawAmount;
    }


    public get times(): u32 {
        return this.get('times') as u32;
    }

    public get yielded(): RawAmount {
        return this.get('yielded') as RawAmount;
    }

    public get quantity(): RawAmount {
        return this.get('quantity') as RawAmount;
    }

    public get nextHalveTime(): RawAmount {
        return this.get('next_halve_time') as BlockNumber;
    }

    public get rule(): ClassicRule {
        return this.get('rule') as ClassicRule;
    }
}

export class ClassicRule extends Struct {
    constructor(registry: Registry, value?: any) {
        super(registry, {
            first_mine_at: "BlockNumber",
            frequency: "BlockNumber",
            gross_reserves: RawAmount,
            halve_period: "BlockNumber",
            initial_quantity: RawAmount,
            initial_halve_period: "BlockNumber",
        }, value);
    }

    public get firstMineAt(): BlockNumber {
        return this.get('first_mine_at') as BlockNumber;
    }

    public get frequency(): BlockNumber {
        return this.get('frequency') as BlockNumber;
    }

    public get grossReserves(): RawAmount {
        return this.get('gross_reserves') as RawAmount;
    }

    public get halvePeriod(): BlockNumber {
        return this.get('halve_period') as BlockNumber;
    }

    public get initialQuantity(): RawAmount {
        return this.get('initial_quantity') as RawAmount;
    }

    public get initialHalvePeriod(): BlockNumber {
        return this.get('initial_halve_period') as BlockNumber;
    }
}