import { Struct } from "@polkadot/types/codec";
import { Registry } from "@polkadot/types/types";
import { Text, u8, bool } from "@polkadot/types/primitive";
import { AccountId } from '@polkadot/types/interfaces';
import { RawAmount, TokenId } from "../custom.types.161";

export { HashAlgorithm } from './custom.types.162';

export class BasicToken extends Struct {
    constructor(registry: Registry, value?: any) {
        super(registry, {
            id: TokenId,
            symbol: "Text",
            name: "Text",
            total_supply: RawAmount,
            decimals: "u8",
            owner: "AccountId",
            pending_owner: "Option<AccountId>",
            mintable: bool,
            transferable: bool,
            burnable: bool
        }, value);
    }

    public get id(): TokenId {
        return this.get('id') as TokenId;
    }

    public get symbol(): Text {
        return this.get('symbol') as Text;
    }

    public get name(): Text {
        return this.get('name') as Text;
    }

    public get totalSupply(): RawAmount {
        return this.get('total_supply') as RawAmount;
    }

    public get decimals(): u8 {
        return this.get('decimals') as u8;
    }

    public get owner(): AccountId {
        return this.get('owner') as AccountId;
    }

    public get pendingOwner(): AccountId | null {
        return this.get('pending_owner') as AccountId;
    }

    public get mintable(): bool {
        return this.get('mintable') as bool;
    }

    public get transferable(): bool {
        return this.get('transferable') as bool;
    }

    public get burnable(): bool {
        return this.get('burnable') as bool;
    }
}

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