import { Struct } from "@polkadot/types/codec";
import { Registry } from "@polkadot/types/types";
import { RawAmount } from "./custom.types.161";

export { RawAmount, TokenId, RuntimeDbWeight } from './custom.types.162';

export class AccountBalance extends Struct {
    constructor(registry: Registry, value?: any) {
        super(registry, {
            free: RawAmount,
            reserved: RawAmount
        }, value); 
    }

    public get free(): RawAmount {
        return this.get('free') as RawAmount;
    }

    public get reserved(): RawAmount {
        return this.get('reserved') as RawAmount;
    }
}