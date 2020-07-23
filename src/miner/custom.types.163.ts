import { Struct } from "@polkadot/types/codec";
import { Registry } from "@polkadot/types/types";
import { u32 } from "@polkadot/types/primitive";
import { RawAmount } from "../custom.types.161";

export class MineInfo extends Struct {
    constructor(registry: Registry, value?: any) {
        super(registry, {
            times: "u32",
            yielded: RawAmount,
            quantity: RawAmount,
            next_halve_time: "u32",
            rule: ClassicRule
        }, value);
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
        return this.get('next_halve_time') as u32;
    }

    public get rule(): ClassicRule {
        return this.get('rule') as ClassicRule;
    }
}

export class ClassicRule extends Struct {
    constructor(registry: Registry, value?: any) {
        super(registry, {
            first_mine_at: "u32",
            frequency: "u32",
            gross_reserves: RawAmount,
            halve_period: "u32",
            initial_quantity: RawAmount,
            initial_halve_period: "u32",
        }, value);
    }

    public get firstMineAt(): u32 {
        return this.get('first_mine_at') as u32;
    }

    public get frequency(): u32 {
        return this.get('frequency') as u32;
    }

    public get grossReserves(): RawAmount {
        return this.get('gross_reserves') as RawAmount;
    }

    public get halvePeriod(): u32 {
        return this.get('halve_period') as u32;
    }

    public get initialQuantity(): RawAmount {
        return this.get('initial_quantity') as RawAmount;
    }

    public get initialHalvePeriod(): u32 {
        return this.get('initial_halve_period') as u32;
    }
}