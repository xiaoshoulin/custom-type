import {  Struct, UInt } from "@polkadot/types/codec";
import { Registry, AnyNumber } from "@polkadot/types/types";
import { u32 } from "@polkadot/types/primitive";
import { AccountId } from '@polkadot/types/interfaces';
import { RawAmount } from "../custom.types.161";

export class Contribution extends UInt {
    constructor(registry: Registry, value?: AnyNumber) {
        super(registry, value, 128);
    }
}

export class MinedSeq extends u32 {
    constructor(registry: Registry, value?: AnyNumber) {
        super(registry, value);
    }
}

export class PocInfo extends Struct {
    constructor(registry: Registry, value?: any) {
        super(registry, {
            depositor: "AccountId",
            deposit: RawAmount,
            operator: "AccountId",
            last_mined_seq: "u32"
        }, value);
    }

    public get depositor(): AccountId {
        return this.get('depositor') as AccountId;
    }

    public get deposit(): RawAmount {
        return this.get('deposit') as RawAmount;
    }

    public get operator(): AccountId {
        return this.get('operator') as AccountId;
    }

    public get lastMinedSeq(): MinedSeq {
        return this.get('last_mined_seq') as MinedSeq;
    }
}